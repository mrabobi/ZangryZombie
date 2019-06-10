<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");// include database and object files
include_once 'config.php';
include_once 'scoreapi.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$product = new Score($db);

$stmt = $product->read();
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // products array
    $products_arr=array();
    $products_arr["records"]=array();
 
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
       
        extract($row);
 
        $product_item=array(
            "username" => $username,
            "value" =>$value,
            
        );
 
        array_push($products_arr["records"], $product_item);
    }
 
 $scoreSort = array();
foreach ($products_arr['records'] as $key => $row)
{
    $scoreSort[$key] = $row['value'];
}
array_multisort($scoreSort, SORT_DESC, $products_arr['records']);
   
    http_response_code(200);
    echo json_encode($products_arr);
}
 
else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user no products found
    echo json_encode(
        array("message" => "No products found.")
    );
}
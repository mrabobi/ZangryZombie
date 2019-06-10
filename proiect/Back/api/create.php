<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once 'config.php';
// instantiate product object
include_once 'product.php';
 
$database = new Database();
$db = $database->getConnection();
 
$product = new Product($db);
 

 

if(
    !empty($_POST['firstname']) &&
    !empty($_POST['lastname']) &&
    !empty($_POST['username']) &&
    !empty($_POST['password'])
){
 
    
    $product->firstname = $_POST['firstname'];
    $product->lastname = $_POST['lastname'];
    $product->email = $_POST['username'];
    $product->password = $_POST['password'];
   

    // create the product
    if($product->create()){
 
        // set response code - 201 created
        http_response_code(201);
 
        // tell the user
        echo json_encode(array("message" => "Product was created."));
    }
 
    // if unable to create the product, tell the user
    else{
 
        // set response code - 503 service unavailable
        http_response_code(503);
 
        // tell the user
        echo json_encode(array("message" => "Unable to create product."));
    }
}
 
// tell the user data is incomplete
else{
 
    // set response code - 400 bad request
    http_response_code(400);
 
    // tell the user
    echo json_encode(array("message" => "Unable to create product. Data is incomplete."));
}
?>
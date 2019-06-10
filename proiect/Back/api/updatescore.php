<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once 'config.php';
include_once 'scoreapi.php';
 

$database = new Database();
$db = $database->getConnection();
 
$product = new Score($db);
 

$product->username = $_SESSION['username'];

echo " asta  este ". $_SESSION['username'];

$rez=true;

$product->username = $data->username;
$product->value = $data->value;
 
// update the product
if($product->update()){
 
    // set response code - 200 ok
    http_response_code(200);
 
    // tell the user
    echo json_encode(array("message" => "Product was updated."));
}
 
// if unable to update the product, tell the user
else{
     $rez=false;
    // set response code - 503 service unavailable
    http_response_code(503);
 
    // tell the user
    echo json_encode(array("message" => "Unable to update product."));
    
}
?>
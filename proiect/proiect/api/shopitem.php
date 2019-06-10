<?php
class Product{
 
    // database connection and table name
    private $conn;
    private $table_name = "items";
 
    // object properties
    public $name;
    public $description;
    public $price;
   
  
 
    public function __construct($db){
        $this->conn = $db;
    }



    // read products
function read(){
 
    // select all query
    $query = "SELECT
               name, description, price
            FROM
                " . $this->table_name . "
            ORDER BY
                name ASC";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}

function readOne(){
 
    // query to read single record
    $query = "SELECT
               name, description, price
            FROM
                " . $this->table_name . " 
            WHERE
                price = ?
            LIMIT
                0,1";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind id of product to be updated
    $stmt->bindParam(1, $this->price);
 
    // execute query
    $stmt->execute();
 
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    // set values to object properties
    $this->name = $row['name'];
    $this->description = $row['description'];
    $this->price = $row['price'];
    
    
}

function update(){
 
    // update query
    $query = "UPDATE
                " . $this->table_name . "
            SET
            price=:price
            WHERE
                price=?";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 

    $this->price=htmlspecialchars(strip_tags($this->price));
   
    // bind new values
    $stmt->bindParam(":price", $this->price);

    // execute the query
    if($stmt->execute()){
        return true;
    }
 
    return false;
}
}
?>
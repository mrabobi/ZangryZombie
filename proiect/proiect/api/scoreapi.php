<?php

class Score{

    private $conn;
    private $table_name = "highscores";

    public $username;
    public $value;

     
    public function __construct($db){
        $this->conn = $db;
    }


  
function read(){
 
    
    $query = "SELECT
              username, value
            FROM
                " . $this->table_name;
 
    
    $stmt = $this->conn->prepare($query);
 
 
    $stmt->execute();
 
    return $stmt;
}

function update(){
 
    // update query
    $query = "UPDATE
                " . $this->table_name . "
            SET
             value=:value
            WHERE
            username=:username ORDER BY value desc";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
   
    $this->value=htmlspecialchars(strip_tags($this->value));
   

    $stmt->bindParam(":value", $this->value);
    // execute the query
    if($stmt->execute()){
        return true;
    }
 
    return false;
}

function readOne(){
 
    // query to read single record
    $query = "SELECT
               username, value
            FROM
                " . $this->table_name . " 
            WHERE
                username = ?
            LIMIT
                0,1";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind id of product to be updated
    $stmt->bindParam(1, $this->username);
 
    // execute query
    $stmt->execute();
 
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    // set values to object properties
    $this->username = $row['username'];
    $this->value = $row['value'];
    
    
}
function create(){
 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
                username=:username, value=:value";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->username=htmlspecialchars(strip_tags($this->username));
    $this->value=htmlspecialchars(strip_tags($this->value));
   
   
 
    // bind values
    $stmt->bindParam(":username", $this->username);
    $stmt->bindParam(":value", $this->value);

    
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
}


?>
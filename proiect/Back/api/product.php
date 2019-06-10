<?php
class Product{
 
    
    private $conn;
    private $table_name = "users";
    public $userId;
    public $firstname;
    public $lastname;
    public $username;
    public $password;
  
 
    
    public function __construct($db){
        $this->conn = $db;
    }


  
function read(){
 
    
    $query = "SELECT
               firstname, lastname, username, password
            FROM
                " . $this->table_name . "
            ORDER BY
                firstname DESC";
 
    
    $stmt = $this->conn->prepare($query);
 
 
    $stmt->execute();
 
    return $stmt;
}


// used when filling up the update product form
function readOne(){
 
    // query to read single record
    $query = "SELECT
               firstname, lastname, username, password
            FROM
                " . $this->table_name . " 
            WHERE
                userId = ?
            LIMIT
                0,1";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind id of product to be updated
    $stmt->bindParam(1, $this->userId);
 
    // execute query
    $stmt->execute();
 
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    // set values to object properties
    $this->firstname = $row['firstname'];
    $this->lastname = $row['lastname'];
    $this->username = $row['username'];
    $this->password = $row['password'];
    
}

function create(){
 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "
            SET
                firstname=:firstname, lastname=:lastname, username=:username, password=:password";
 
 
    // sanitize
    $this->firstname=htmlspecialchars(strip_tags($this->firstname));
    $this->lastname=htmlspecialchars(strip_tags($this->lastname));
    $this->username=htmlspecialchars(strip_tags($this->username));
    $this->password=htmlspecialchars(strip_tags($this->password));
   
 
    // bind values
    $stmt->bindParam(":firstname", $this->firstname);
    $stmt->bindParam(":lastname", $this->lastname);
    $stmt->bindParam(":username", $this->username);
    $stmt->bindParam(":password", $this->password);
    
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}

// delete the product
function delete(){
 
    // delete query
    $query = "DELETE FROM " . $this->table_name . " WHERE firstname = ?";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->firstname=htmlspecialchars(strip_tags($this->firstname));
 
    // bind id of record to delete
    $stmt->bindParam(1, $this->firstname);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}

// update the product
function update(){
 
    // update query
    $query = "UPDATE
                " . $this->table_name . "
            SET
            firstname=:firstname, lastname=:lastname, email=:email, password=:password
            WHERE
                email=:email";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
   
    $this->firstname=htmlspecialchars(strip_tags($this->firstname));
    $this->lastname=htmlspecialchars(strip_tags($this->lastname));
    $this->email=htmlspecialchars(strip_tags($this->email));
    $this->password=htmlspecialchars(strip_tags($this->password));
   
 
    // bind new values
    $stmt->bindParam(":firstname", $this->firstname);
    $stmt->bindParam(":lastname", $this->lastname);
    $stmt->bindParam(":email", $this->email);
    $stmt->bindParam(":password", $this->password);
    // execute the query
    if($stmt->execute()){
        return true;
    }
 
    return false;
}

}
<?php
class Product{
 
    
    private $conn;
    private $table_name = "usercharacters";
    public $userId;
    public $username;
    public $health;
    public $damage;
    public $coins;
  
 
    
    public function __construct($db){
        $this->conn = $db;
    }
    function readOne(){
 
        // query to read single record
        $query = "SELECT
                   username, health, damage, coins
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
        $this->username = $row['username'];
        $this->health = $row['health'];
        $this->damage = $row['damage'];
        $this->coins = $row['coins'];
        
    }

    function update(){
 
        // update query
        $query = "UPDATE
                    " . $this->table_name . "
                SET
                coins=:coins where username='Bia'";
     
        // prepare query statement
        $stmt = $this->conn->prepare($query);
     
       
        $this->price=htmlspecialchars(strip_tags($this->coins));
       
       
     
        // bind new values
        $stmt->bindParam(":coins", $this->coins);
    
        // execute the query
        if($stmt->execute()){
            return true;
        }
     
        return false;
    }
}
?>    
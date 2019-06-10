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

    function update($valueCoins){
 

        $link = mysqli_connect('localhost', 'root', '', 'tw_rest');
        $stmt = mysqli_prepare($link, "UPDATE usercharacters SET coins = ? WHERE userId = ?");
        mysqli_stmt_bind_param($stmt, 'ii', $valueing, $usernameId);

$valueing = $valueCoins;
$usernameId = $_SESSION['userId'];

/* execute prepared statement */

    
        // execute the query
        if(mysqli_stmt_execute($stmt)){
            return $_SESSION['userId'];
        }
     
        return false;
    }
}
?>    
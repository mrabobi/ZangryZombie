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
     
        $stmt = $this->conn->prepare( $query );

        $stmt->bindParam(1, $this->userId);
     
        $stmt->execute();
     
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
     
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

        if(mysqli_stmt_execute($stmt)){
            return $_SESSION['userId'];
        }
     
        return false;
    }
}
?>    
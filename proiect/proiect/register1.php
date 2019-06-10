<?php
ob_start();
$rez=0;
$conn = new mysqli("127.0.0.1", "root", "", "tw_rest");
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    
    if(isset($_POST['register'])){

 if(  !empty($_POST['firstname']) &&
        !empty($_POST['lastname']) &&
        !empty($_POST['username']) &&
        !empty($_POST['password'])){
        
        $api_url='http://localhost/proiect/api/read.php';
        $json = file_get_contents($api_url);
        $array = json_decode($json, true);
                
        
         
        foreach($array['records'] as $user){
        $email= $user['username'];
        $pass=  $user['password'];
            if($email === $_POST['username']){
               $rez=1;
           }
       }

        if($rez==0){
        $sql = mysqli_query($conn, "INSERT INTO  users  (firstname, lastname, username, password) VALUES ( "."'".$_POST[firstname] ."','". $_POST[lastname] ."','". $_POST[username]."','". $_POST[password] ."')");

        $api_url='http://localhost/proiect/api/read.php';
        $json = file_get_contents($api_url);
        $array = json_decode($json, true);

        foreach($array['records'] as $user){
            $email= $user['username'];
            $pass=  $user['password'];
                if($email === $_POST[username] && $pass === $_POST[password]){
                    $userIdf=$user['userId'];
                }
            unset($user);
        }

        $health = 0;
        $damage = 0;
        $coins = 1000;

        $sql1 = mysqli_query($conn, "INSERT INTO  usercharacters  (userId, username, health, damage, coins) VALUES ( ". $userIdf . ",'". $_POST[username] ."',". $health.",". $damage . ",". $coins .")");

        $sql2 = mysqli_query($conn, "INSERT INTO  highscores  (username,value) VALUES ( '" . $_POST[username] ."',0)");


        if ($sql && $sql1 && $sql2){
                
            $_SESSION['active']=0;
            $_SESSION['logged_in']=true;
    
            header("location: contnou.php");
           
        }
    }
        else {
            header("location: inregistrare_esuate.php");
        }
    }
        
        }}
    
else {
        http_response_code(405);
}
?>
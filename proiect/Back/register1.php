<?php


$conn = new mysqli("127.0.0.1", "root", "remusanais", "tw_rest");
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    
    if(isset($_POST['register'])){

      if(  !empty($_POST['firstname']) &&
        !empty($_POST['lastname']) &&
        !empty($_POST['username']) &&
        !empty($_POST['password'])){
        
        $sql = mysqli_query($conn, "INSERT INTO  users  (firstname, lastname, username, password) VALUES ( "."'".$_POST[firstname] ."','". $_POST[lastname] ."','". $_POST[username]."','". $_POST[password] ."')");
     
        if ($sql){
                
            $_SESSION['active']=0;
            $_SESSION['logged_in']=true;
    
            header("location: contnou.php");
           
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
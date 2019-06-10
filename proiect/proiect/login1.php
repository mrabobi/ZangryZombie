<?php

    $rez=0;

    $api_url='http://localhost/proiect/api/read.php';
   
   
    $json = file_get_contents($api_url);
 
    $array = json_decode($json, true);
   

            if(isset($_GET['username'])){
                $_SESSION['username']=$_GET['username'];
                
        
         
        foreach($array['records'] as $user){
        $email= $user['username'];
        $pass=  $user['password'];
            if($email === $_GET['username'] && $pass === $_GET['password']){
               $_SESSION['userId'] = $user['userId'];
               $_SESSION['username'] = $email;
               $rez=1;
            
            }
          
             unset($user);
            }
        
            if($rez==1)
            {
                header( "location: index.html");
            }
           else {
            header( "location: emailinvalid.php");
           }
        
        }
    
  
else {
        http_response_code(405);
}
?>
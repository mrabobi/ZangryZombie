<?php 
session_start();
?> 

<html>
  <head>
      <link rel="stylesheet" href="style.css">             
  </head>
        <body background="images/img2.jpg">
        <img class="img1" src="images/zombie.gif" >
        <img class="img2" src="images/zombie.gif" >
        </body>
</html>

<?php

    $user = $_SESSION['userId'];

    // API FOR ONE USER SEARCHING BY ID
    $api_url='http://localhost/proiect/api/readOneCar.php?userId='.$user;
    $json = file_get_contents($api_url);
    $array = json_decode($json, true);

    if($array['coins'] >= 50000){ $update=$array['coins'] - 50000;
       $link = mysqli_connect('localhost', 'root', '', 'tw_rest');
        $stmt = mysqli_prepare($link, "UPDATE usercharacters SET health = health+1, coins = ? WHERE userId = ?");
        mysqli_stmt_bind_param($stmt, 'ii', $valueing, $usernameId);

        $valueing = $update;
        $usernameId = $_SESSION['userId'];

        if(mysqli_stmt_execute($stmt))
          echo "TRUE";
        else
          echo "FALSE";



    $urlUSer='http://localhost/proiect/api/readOneCar.php?userId='.$user;
    
    $j = file_get_contents($urlUSer);
 
    $userUpdate= json_decode($j, true);

       echo "<br><br><br><br><br><br> <a href = 'shop.php' class='start'> Produs achizitionat! </a><br><br><br>
       <br><font color='grey'> Ti-au mai ramas " .$userUpdate['coins']. "  zangrycoins! </font>";
    }
    else {
        echo "<a href = 'shop.php' class='start'> Nu ai bani suficienti! </a>
        <br><font color='grey'> Ai doar ". $array['coins']. "  zangrycoins </font>";
    }
    
   
?>
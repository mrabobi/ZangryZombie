

<html>
        <head>
                <link rel="stylesheet" href="style.css">
               
              </head>
              <body background="images/img2.jpg">
        <img class="img1" src="images/zombie.gif" >
        <img class="img2" src="images/zombie.gif" >
       

              </html>
<?php

    
    $user=2;
    $api_url='http://localhost/proiect/api/readOneCar.php?userId='.json_encode($user);
    
   
    $json = file_get_contents($api_url);
 
    $array = json_decode($json, true);
    $pr=2000;
    $url='http://localhost/proiect/api/readOneItem.php?price='. json_encode($pr);

    $ju = file_get_contents($url);
 
    $jarray = json_decode($ju, true);
   

    if($array['coins'] > $jarray['price']){ $update=$array['coins'] - $jarray['price'];
       $update_url='http://localhost/proiect/api/updateCar.php?coins='.json_encode($update);
       $ujson = file_get_contents($update_url);

    $up = json_decode($ujson, true);


    $urlUSer='http://localhost/proiect/api/readOneCar.php?userId='.json_encode($user);
    
    $j = file_get_contents($urlUSer);
 
    $userUpdate= json_decode($j, true);
       echo " <a href = 'shop.php' class='start'> Produs achizitionat! </a>
       <br><font color='grey'> Ti-au mai ramas " .$userUpdate['coins']. "  zangrycoins! </font>";
    }else {
        echo "<a href = 'shop.php' class='start'> Nu ai bani suficienti! </a>
        <br><font color='grey'> Ai doar ". $array['coins']. "  zangrycoins </font>";
    }
    
   
?>
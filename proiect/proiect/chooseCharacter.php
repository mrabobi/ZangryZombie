<?php
session_start();
?>

<!DOCTYPE html>

<html>
        <head>
                <link rel="stylesheet" href="style.css">
               
              </head>

<body  background="bg.jpg">

  <div align="left"><a href="index.html" class="start">BACK</a></div>
  <img class="center" src="images/bannertop.png" width="500" height= "auto">

    <br><br>
    <?php
//$userId=$_GET['userId'];
$userId=1;
$api_url='http://localhost/proiect/api/readOneCar.php?userId='.$userId;

$json = file_get_contents($api_url);

$array = json_decode($json, true);


 echo "
    <b>| <font color='green' size='6'> Health: " .$array['health'] . "</font> |</b> 
   <b><font color='red' size='6'> Damage: " .$array['damage'] . "</font> |
    <b><font color='yellow' size='6'> Coins: " .$array['coins'] . "</font> |</b>";
  

  
?>
       <table border="0" align = "center"><tr><td><font color='purple'>Choose your character:</font></td></tr></table>
<table border="0" align="center">
<tr><td><img class="img1" src="images/chooseKnight.gif" ></td>
<td><img class="img1" src="images/chooseNinja.gif" ></td></tr>
<tr><td><a href="Back/index1.html" class="start">Knight</a></td>
<td><a href="Back/index2.html" class="start">Ninja</a></td></tr>


  
<audio controls autoplay loop hidden>
  <source src="song.mp3" type="audio/mpeg">
</audio>

      
      
</body>

</html>

<?php 
session_start();
?>
<!DOCTYPE html>

<html>
        <head>
                <link rel="stylesheet" href="style.css">
               
              </head>

<body  background="images/img2.jpg">
		<div align="left"><a href="index.html" class="start">BACK</a></div>
        <img class="img1" src="images/zombie.gif" >
        <img class="img2" src="images/zombie.gif" >
		<img class="center" src="images/bannershop.png" width="500" height= "auto">
        

<?php

$id = $_SESSION['userId'];
$api_url='http://localhost/proiect/api/readitem.php';
$json = file_get_contents($api_url);
$array = json_decode($json, true);

echo "<table align= 'center' border='5'>
  <tr align='center'>
    <th><font color='darkolivegreen'>Item</font></th>
    <th><font color='darkolivegreen'>Description</font></th> 
    <th><font color='darkolivegreen'>Price</font></th>
  </tr>";


foreach ($array['records'] as $item)
{

 echo " <tr align='center'>
  <td><font color='grey'>" .$item['name'] . "</font></td>
  <td><font color='grey'>" .$item['description'] . "</font></td>
  <td><font color='grey'>" .$item['price'] ."</font></td>";
if($item['name'] == 'Extra Power') {
  echo '<td><a href="buyPower.php" class="start"> BUY </a></td>
</tr>';
}
elseif ($item['name'] == 'Extra Health'){
  echo '<td><a href="buyHealth.php" class="start"> BUY </a></td>
  </tr>';
}
}
    
     echo "</table>";
   
?>

<script>
document.getElementById("btn").addEventListener("click", function() {
  alert("Item purchased!");
});
</script>
   
  
<audio controls autoplay loop hidden>
  <source src="song.mp3" type="audio/mpeg">
</audio>

         
</body>

</html>
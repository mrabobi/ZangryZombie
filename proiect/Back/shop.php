<!DOCTYPE html>

<html>
        <head>
          <style>.btn :hover {
  background-color: rgb(99, 110, 100); 
  color: rgb(143, 36, 36);
  cursor:pointer;
}

.btn { background-color:#490A68;
color: white;
padding: 15px 32px;
text-align: center;
padding: 10px 30px;
font-size: 20px;
border-radius: 30px;
border: 2px solid rgb(3, 5, 3);
-webkit-transition-duration: 0.4s; 
transition-duration: 0.4s;
}</style>
                <link rel="stylesheet" href="style.css">
               
              </head>

<body  background="images/img2.jpg">

		<div align="left"><a href="index.php" class="start">BACK</a></div>
        <img class="img1" src="images/zombie.gif" >
        <img class="img2" src="images/zombie.gif" >
		<img class="center" src="images/bannershop.png" width="500" height= "auto">
        

<?php


$api_url='http://localhost/api/readitem.php';
   
   
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
if($item['name'] == 'Power Attack') {
  echo "<td><a href='buyPower.php' class='start'> BUY </a></td>
</tr>";
}
elseif ($item['name'] == 'Health Regeneration'){
  echo "<td><a href='buyHealth.php' class='start'> BUY </a></td>
  </tr>";
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

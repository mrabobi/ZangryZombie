<!DOCTYPE html>

<html>
        <head>
                <link rel="stylesheet" href="style.css">
               
              </head>

<body  background="images/img2.jpg">

		<div align="left"><a href="index.php" class="start">BACK</a></div>
        <img class="img1" src="images/zombie.gif" >
        <img class="img2" src="images/zombie.gif" >
		<img class="center" src="images/bannertop.png" width="500" height= "auto">
        
        <br>
<?php
$url='http://localhost/proiect/api/getscore.php';

$score_json = file_get_contents($url);

$score_array = json_decode($score_json, true);

echo "<table align= 'center' border='5'>
  <tr align='center'>
    <th><font color='darkolivegreen'>Loc</font></th>
    <th><font color='darkolivegreen'>Username</font></th> 
    <th><font color='darkolivegreen'>Scor</font></th>
  </tr>";
$i=1;
foreach ($score_array['records'] as $item)
{

 echo " <tr align='center'>
 <td><font color='grey'>" .$i."</font></td>
  <td><font color='grey'>" .$item['username'] . "</font></td>
  <td><font color='grey'>" .$item['value'] . "</font></td></tr>";
$i++;
}
	
echo "</table>";
	
?>    
  
<audio controls autoplay loop hidden>
  <source src="song.mp3" type="audio/mpeg">
</audio>

      
      
</body>

</html>

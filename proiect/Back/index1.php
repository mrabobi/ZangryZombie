<?php

session_start();

?>

<html>
<head><link rel="stylesheet" href="style.css"></head>
<body background="bg.jpg">
        <img class="img1" src="images/zombie.gif" >
        <img class="img2" src="images/zombie.gif" >
		<img class="center" src="images/banner.png" width="500" height= "auto">

<h1 style="color:DarkOliveGreen ;font-size:4vw ; font-style:italic;"> Bine ai revenit! </h1>

<form action="index1.php" method="GET">

<div class="field-wrap">
<label style="color:#503359" >
Username <span class="req">*</span>
</label>
<input type="username" requaired autocomplete="off" name="username">
</div>

<div class="field-wrap">
<label style="color:#503359">
Parola <span class="req">*</span>
</label>
<input type="password" requaired autocomplete="off" name="password">
</div>

<button type="submit" class= "button button-block" name="login" > Conecteaza-te </button>
</form>
<a href="register.php" class="start">Creaza un cont nou</a>

<?php
    require 'login1.php';
    
?>

</body>
</html>
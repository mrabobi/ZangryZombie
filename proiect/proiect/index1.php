<?php

session_start();

?>

<html>
<head><link rel="stylesheet" href="style.css"></head>
<body background="bg.jpg">
        <img class="img1" src="images/zombie.gif" >
        <img class="img2" src="images/zombie.gif" >
		<img class="center" src="images/banner.png" width="500" height= "auto">

<form action="index1.php" method="GET">

<br>
<br>

<div class="field-wrap">
<label style="color:#503359" >
Username <span class="req">*</span>
</label>
<input type="username" required autocomplete="off" name="username">
</div>

<div class="field-wrap">
<label style="color:#503359">
Parola <span class="req">*</span>
</label>
<input type="password" required autocomplete="off" name="password">
</div>

<button type="submit" class= "button button-block" name="login" > Conecteaza-te </button>
</form>
<a href="register.php" class="start">Creaza un cont nou</a>

<?php
    require 'login1.php';
    
?>

</body>
</html>
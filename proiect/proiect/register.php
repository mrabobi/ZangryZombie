<html>
<head><link rel="stylesheet" href="style.css"></head>

        <div align="left"><a href="index1.php" class="start">BACK</a></div>
        <img class="img1" src="images/zombie.gif" >
        <img class="img2" src="images/zombie.gif" >
		<img class="center" src="images/banner.png" width="500" height= "auto">

<body background="bg.jpg">
    <form action="register.php" method="POST" >

       
    <div class="field-wrap">
    <label  style="color:#503359">
    Nume <span class="req">*</span>
    </label  style="color:#503359">
    <input type="text" requaired autocomplete="off" name="firstname">
    </div>
    
    <div class="field-wrap">
    <label  style="color:#503359">
    Prenume <span class="req">*</span>
    </label>
    <input type="text" requaired autocomplete="off" name="lastname">
    </div>

    <div class="field-wrap">
    <label  style="color:#503359">
    Username <span class="req">*</span>
    </label>
    <input type="username" requaired autocomplete="off" name="username">
    </div>

    <div class="field-wrap">
    <label  style="color:#503359">
    Parola <span class="req">*</span>
    </label>
    <input type="password" requaired autocomplete="off" name="password">
    </div>
    <button type="submit" class= "button button-block" name="register" > Inregistreaza-te </button>
    </form>


<?php

require 'register1.php';

?>

</body>
</html>
<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$username = $_SESSION['username'];
$newScore = $_GET['score'];

// GET SCORE FOR ONE PERSON BY NAME
$url="http://localhost/proiect/api/readonescore.php?username=".$username;
$url1=file_get_contents($url);
$data = json_decode($url1,true);
$link = mysqli_connect('localhost', 'root', '', 'tw_rest');

$stmt = mysqli_prepare($link, "UPDATE usercharacters SET coins = coins + ? WHERE username = ?");
        mysqli_stmt_bind_param($stmt, 'is', $score1, $user1);

        $score1=$newScore;
        $user1=$username;

        if(mysqli_stmt_execute($stmt))
          echo "Updated!";
        else
          echo "Not updated!";

if($newScore > $data['value']){
        $stmt = mysqli_prepare($link, "UPDATE highscores SET value = ? WHERE username = ?");
        mysqli_stmt_bind_param($stmt, 'is', $score1, $user1);

        $score1=$newScore;
        $user1=$username;

        if(mysqli_stmt_execute($stmt))
          echo "Updated!";
        else
          echo "Not updated!";
}

?>
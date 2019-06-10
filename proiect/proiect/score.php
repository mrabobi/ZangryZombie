<?php 

$_SESSION['value']=500;

$score_url='http://localhost/proiect/api/getscore.php';

$s_json = file_get_contents($score_url);

$s_array = json_decode($s_json, true);


$api_url='http://localhost/proiect/api/readonescore.php';

   
$json = file_get_contents($api_url);

$array = json_decode($json, true);

foreach($s_array['records'] as $user){
if( $user['username']===$_SESSION['username']){

    if($array['records']['value']!=$value)
    {
        require 'api/updatescore.php';
    }


}else {

    require 'api/updatescore.php';
}
}


?>
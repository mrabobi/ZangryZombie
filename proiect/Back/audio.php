<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<link rel="stylesheet" href="style.css">
<script>
var audio, playbtn, sound;

function initAudioPlayer(){
	audio = new Audio();
	audio.src = "song.mp3";
	audio.loop = true;
    audio.play();
    sound="on";
	// Set object references
	playbtn = document.getElementById("playpausebtn");
    
	// Add Event Handling
	playbtn.addEventListener("click",playPause);
	// Functions
	function playPause(){
		if(audio.paused &&  sound=="off"){
		    audio.play();
            playbtn.style.color = "white";
            sound="on";
	    } else if(audio.play &&  sound=="on") {
		    audio.pause();
            playbtn.style.color = "red";
           sound="off";
        }
        
        return sound;
    }
    
}
window.addEventListener("load", initAudioPlayer);
</script>

</head>
<body>
<center><button id="playpausebtn" class='start' >Mute</button></center>

</body>
</html>
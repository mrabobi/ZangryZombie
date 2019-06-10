/*We import the external classes*/
import Game from "./game.js";
import Display from "./display.js";
/* We get the canvas and the context*/
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
/*We declare the window's width and height as constants*/
const gamewidth = 1600;
const gameheight = 900;
let game = new Game(gamewidth,gameheight,"Ninja");
game.start();
let display=new Display(game,ctx);

var oldTimeStamp;

function gameLoop(timeStamp) {

    if(game.over===true)
    {
    		ctx.drawImage(document.getElementById("GameOver"),0,0,gamewidth,gameheight);

        var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          console.log(game.score);
        }
      }
      xmlhttp.open("GET", "src/updatescore.php?score=" + game.score, true);
      xmlhttp.send();
    }

   else
 {  			
 	if(game.pause===false)
 {
   	
   	game.update();
   	display.display();
  
}

requestAnimationFrame(gameLoop);
}
}
    // The loop function has reached it's end
    // Keep requesting new frames

//setTimeout(gameLoop,2000000);
gameLoop(0);

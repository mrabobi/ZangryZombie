/*We import the external classes*/
import Knight from "./Knigth.js";
import InputHandler from "./input.js";
import Background from "./Backgroud.js";
import Zombie from "./Zombie.js";
let audio = new Audio("/music/PvZ");
/* We get the canvas and the context*/
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
/*We declare the window's width and height as constants*/
const gamewidth = 1600;
const gameheight = 900;
let k1 = new Knight(gamewidth, gameheight);
let i1 = new InputHandler(k1);
let b1 = new Background();
let z1 = new Zombie(gamewidth, gameheight);

/*The gameloop functions,it "draws" the game frame by frame*/
function gameLoop() {
  ctx.clearRect(0, 0, 1000, 900);
  b1.draw(ctx);
  k1.draw(ctx);
  z1.draw(ctx);
  requestAnimationFrame(gameLoop);
}

gameLoop();

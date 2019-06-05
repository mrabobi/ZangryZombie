import Knight from "/src/Knigth.js";
import InputHandler from "/src/input.js";
import Background from "/src/Backgroud.js";
import Zombie from "/src/Zombie.js";
let audio = new Audio("/music/PvZ");
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");
const gamewidth = 1600;
const gameheight = 900;
let k1 = new Knight(gamewidth, gameheight);
let i1 = new InputHandler(k1);
let b1 = new Background();
let z1 = new Zombie(gamewidth, gameheight);

k1.draw(ctx);
function gameLoop() {
  ctx.clearRect(0, 0, 1000, 900);
  b1.draw(ctx);
  k1.draw(ctx);
  z1.draw(ctx);
  requestAnimationFrame(gameLoop);
}

gameLoop();

/*A class used to draw the background*/
export default class Backgroud {
  constructor() {
    this.image = document.getElementById("BackGround");
  }
  /*For now,the draw method draws a single picture using multiple images imported from the
HTML document*/
  draw(ctx) {
    ctx.drawImage(this.image, 0, 0, 1600, 900);
    ctx.drawImage(document.getElementById("Tile1"), 0, 790, 100, 100);
    ctx.drawImage(document.getElementById("Tile2"), 100, 790, 100, 100);
    ctx.drawImage(document.getElementById("Tile2"), 100, 790, 100, 100);
    ctx.drawImage(document.getElementById("Tile2"), 200, 790, 100, 100);
    ctx.drawImage(document.getElementById("Tile2"), 300, 790, 100, 100);
    ctx.drawImage(document.getElementById("Tile2"), 400, 790, 100, 100);
    ctx.drawImage(document.getElementById("Tile2"), 500, 790, 100, 100);
    ctx.drawImage(document.getElementById("Tile2"), 600, 790, 100, 100);
    ctx.drawImage(document.getElementById("Tile2"), 600, 790, 100, 100);
    ctx.drawImage(document.getElementById("Skull"), 600, 790, 100, 100);

    ctx.drawImage(document.getElementById("Tile2"), 700, 790, 100, 100);
    ctx.drawImage(document.getElementById("Tile2"), 800, 790, 100, 100);
    ctx.drawImage(document.getElementById("Tile2"), 900, 790, 100, 100);
    ctx.drawImage(document.getElementById("Tile2"), 1000, 790, 100, 100);
    ctx.drawImage(document.getElementById("Tile2"), 1100, 790, 100, 100);
    ctx.drawImage(document.getElementById("Tile2"), 1200, 790, 100, 100);
    ctx.drawImage(document.getElementById("Tile2"), 1300, 790, 100, 100);
    ctx.drawImage(document.getElementById("Skull"), 1300, 790, 100, 100);

    ctx.drawImage(document.getElementById("Tile2"), 1400, 790, 100, 100);
    ctx.drawImage(document.getElementById("TombStone"), 1400, 690, 100, 100);
    ctx.drawImage(document.getElementById("TombStone"), 400, 690, 100, 100);
    ctx.drawImage(document.getElementById("Tree"), 800, 590, 200, 200);

    ctx.drawImage(document.getElementById("Tile3"), 1500, 790, 100, 100);
  }
}

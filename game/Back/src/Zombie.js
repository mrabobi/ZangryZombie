/* A class that will be used for managing the a Zombie NPC*/

export default class Zombie {
  constructor(gamewidth, gameheight) {
    /*The zombie's initial frame*/

    this.image = Image = document.getElementById("Zombie");
    this.width = 100;
    this.height = 100;
    /*Window width and height*/

    this.gamewidth = gamewidth;
    this.gameheight = gameheight;
    /*The zombie's initial position*/

    this.position = {
      x: gamewidth / 3 - this.width / 3,
      y: gameheight - this.height - 100
    };
    this.direction = 1;
    /*Frames that will be used for the walk right animation*/
    this.framesWalkRight = [
      document.getElementById("ZombieWalk1"),
      document.getElementById("ZombieWalk2"),
      document.getElementById("ZombieWalk3"),
      document.getElementById("ZombieWalk3"),
      document.getElementById("ZombieWalk5"),
      document.getElementById("ZombieWalk6"),
      document.getElementById("ZombieWalk7"),
      document.getElementById("ZombieWalk8"),
      document.getElementById("ZombieWalk9"),
      document.getElementById("ZombieWalk10")
    ];

    /*Frame counter*/
    this.frame = -1;
  }

  draw(ctx) {
    this.moveRight();
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  /*A function that implements the zombie's walk frame by frame*/

  moveRight() {
    this.frame++;
    if (this.frame > 9) this.frame = 0;

    this.image = this.framesWalkRight[this.frame];
    this.position.x += this.direction * 2;
    if (this.position.x > 1000) this.direction = -1;
    else if (this.position.x < 500) this.direction = 1;
  }
}

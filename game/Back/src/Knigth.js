/* A class that will be used for managing the player Character*/
export default class Knight {
  constructor(gamewidth, gameheight) {
    /*The character's initial frame*/

    this.image = Image = document.getElementById("Knight");
    /*Character model's width and height*/
    this.width = 100;
    this.height = 100;
    /*Window width and height*/
    this.gamewidth = gamewidth;
    this.gameheight = gameheight;
    /*The character's initial position*/
    this.position = {
      x: gamewidth / 2 - this.width / 2,
      y: gameheight - this.height - 100
    };
    /*Frames that will be used for the walk right animation*/
    this.framesWalkRight = [
      document.getElementById("KnightWalk1"),
      document.getElementById("KnightWalk2"),
      document.getElementById("KnightWalk3"),
      document.getElementById("KnightWalk3"),
      document.getElementById("KnightWalk5"),
      document.getElementById("KnightWalk6"),
      document.getElementById("KnightWalk7"),
      document.getElementById("KnightWalk8"),
      document.getElementById("KnightWalk9"),
      document.getElementById("KnightWalk10")
    ];

    /*Frames that will be used for the walk left animation*/
    this.framesWalkLeft = [
      document.getElementById("KnightWalkLeft1"),
      document.getElementById("KnightWalkLeft2"),
      document.getElementById("KnightWalkLeft3"),
      document.getElementById("KnightWalkLeft4"),
      document.getElementById("KnightWalkLeft5"),
      document.getElementById("KnightWalkLeft6"),
      document.getElementById("KnightWalkLeft7"),
      document.getElementById("KnightWalkLeft8"),
      document.getElementById("KnightWalkLeft9"),
      document.getElementById("KnightWalkLeft10")
    ];
    /*Frames that will be used for the attack right animation*/

    this.framesAttackRight = [
      document.getElementById("AtackRight1"),
      document.getElementById("AtackRight2"),
      document.getElementById("AtackRight3"),
      document.getElementById("AtackRight4"),
      document.getElementById("AtackRight5"),
      document.getElementById("AtackRight6"),
      document.getElementById("AtackRight7"),
      document.getElementById("AtackRight8"),
      document.getElementById("AtackRight9"),
      document.getElementById("AtackRight10")
    ];

    /*Frames that will be used for the attack left animation*/

    this.framesAttackLeft = [
      document.getElementById("AtackLeft1"),
      document.getElementById("AtackLeft2"),
      document.getElementById("AtackLeft3"),
      document.getElementById("AtackLeft4"),
      document.getElementById("AtackLeft5"),
      document.getElementById("AtackLeft6"),
      document.getElementById("AtackLeft7"),
      document.getElementById("AtackLeft8"),
      document.getElementById("AtackLeft9")
    ];
    /*Frames that will be used for the jump animation*/

    this.framesJump = [
      document.getElementById("Jump1"),
      document.getElementById("Jump2"),
      document.getElementById("Jump3"),
      document.getElementById("Jump4"),
      document.getElementById("Jump5"),
      document.getElementById("Jump6"),
      document.getElementById("Jump7"),
      document.getElementById("Jump8"),
      document.getElementById("Jump9"),
      document.getElementById("Jump10")
    ];
    /*Frame counter*/
    this.frame = -1;
    /*A variable that tells us if the character is idle or not*/
    this.idle = 1;
  }

  /*A function that draws the charcter*/
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  /*A function that implements the move left comand frame by frame*/
  moveLeft() {
    this.frame++;
    if (this.frame > 9) this.frame = 0;

    this.image = this.framesWalkLeft[this.frame];
    this.position.x -= 5;
    if (this.position.x < 0) this.position.x = 0;
  }

  /*A function that implements the move right comand frame by frame*/

  moveRight() {
    this.frame++;
    if (this.frame > 9) this.frame = 0;

    this.image = this.framesWalkRight[this.frame];
    this.position.x += 5;
    if (this.position.x + this.width > this.gamewidth)
      this.position.x = this.gamewidth - this.width;
  }

  /*A function that implements the attack right comand frame by frame*/

  atackRight() {
    this.frame++;
    if (this.frame > 9) this.frame = 0;

    this.image = this.framesAttackRight[this.frame];
  }

  /*A function that implements the attack left comand frame by frame*/

  atackLeft() {
    this.frame++;
    if (this.frame > 8) this.frame = 0;

    this.image = this.framesAttackLeft[this.frame];
  }
  /*A function that is called when a command is finished,sets the 
  default right(idle facing right) frame for the caracter*/
  stopRight() {
    this.idle = 0;
    this.frame = -1;
    this.position.y = 700;
    this.orientation = "r";

    this.image = document.getElementById("Knight");
  }

  /*A function that is called when a command is finished,sets the 
  default left(idle facing left) frame for the caracter*/
  stopLeft() {
    this.idle = 0;
    this.frame = -1;
    this.orientation = "l";
    this.image = document.getElementById("KnightIdleLeft");
  }

  /*A function that implements the jump  comand frame by frame*/

  Jump() {
    this.frame++;
    if (this.frame > 9) this.frame = 0;
    this.image = this.framesJump[this.frame];
    if (this.frame < 5) this.position.y -= 20;
    else this.position.y += 20;
  }
}

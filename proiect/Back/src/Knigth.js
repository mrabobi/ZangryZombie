/* A class that will be used for managing the player Character*/
export default class Knight {
  constructor(gamewidth, gameheight) {
    /*The character's initial frame*/

    this.image = document.getElementById("Knight");
    /*Character model's width and height*/
    this.width = 80;
    this.height = 80;
    /*Window width and height*/
    this.gamewidth = gamewidth;
    this.gameheight = gameheight;
    /*The character's initial position*/
    this.position = {
      x: 0,
      y: gameheight-this.height-100
    };
    this.impulse_x=0;
    this.impulse_y=0;
    this.initial_y=0;
    this.jumping=false;
    this.attacking=false;
    this.lives=3;
    this.initial_lives=3;
    this.jump_sound = new Audio('http://localhost/proiect/Back/sound/Jump_sound.mp3');

    /*Frames that will be used for the walk right animation*/
    this.framesWalkRight = [
      document.getElementById("KnightWalk1"),
      document.getElementById("KnightWalk1"),
      document.getElementById("KnightWalk2"),
      document.getElementById("KnightWalk2"),
      document.getElementById("KnightWalk3"),
      document.getElementById("KnightWalk3"),
      document.getElementById("KnightWalk4"),
      document.getElementById("KnightWalk4"),
      document.getElementById("KnightWalk5"),
      document.getElementById("KnightWalk5"),
      document.getElementById("KnightWalk6"),
      document.getElementById("KnightWalk6"),
      document.getElementById("KnightWalk7"),
      document.getElementById("KnightWalk7"),
      document.getElementById("KnightWalk8"),
      document.getElementById("KnightWalk8"),
      document.getElementById("KnightWalk9"),
      document.getElementById("KnightWalk9"),
      document.getElementById("KnightWalk10"),
      document.getElementById("KnightWalk10")
    ];

    /*Frames that will be used for the walk left animation*/
    this.framesWalkLeft = [
      document.getElementById("KnightWalkLeft1"),
      document.getElementById("KnightWalkLeft1"),
      document.getElementById("KnightWalkLeft2"),
      document.getElementById("KnightWalkLeft2"),
      document.getElementById("KnightWalkLeft3"),
      document.getElementById("KnightWalkLeft3"),
      document.getElementById("KnightWalkLeft4"),
      document.getElementById("KnightWalkLeft4"),
      document.getElementById("KnightWalkLeft5"),
      document.getElementById("KnightWalkLeft5"),
      document.getElementById("KnightWalkLeft6"),
      document.getElementById("KnightWalkLeft6"),
      document.getElementById("KnightWalkLeft7"),
      document.getElementById("KnightWalkLeft7"),
      document.getElementById("KnightWalkLeft8"),
      document.getElementById("KnightWalkLeft8"),
      document.getElementById("KnightWalkLeft9"),
      document.getElementById("KnightWalkLeft9"),
      document.getElementById("KnightWalkLeft10"),
      document.getElementById("KnightWalkLeft10")

    ];
    /*Frames that will be used for the attack right animation*/

    this.framesAttackRight = [
      document.getElementById("AtackRight1"),
      document.getElementById("AtackRight1"),
      document.getElementById("AtackRight2"),
      document.getElementById("AtackRight2"),
      document.getElementById("AtackRight3"),
      document.getElementById("AtackRight3"),
      document.getElementById("AtackRight4"),
      document.getElementById("AtackRight4"),
      document.getElementById("AtackRight5"),
      document.getElementById("AtackRight5"),
      document.getElementById("AtackRight6"),
      document.getElementById("AtackRight6"),
      document.getElementById("AtackRight7"),
      document.getElementById("AtackRight7"),
      document.getElementById("AtackRight8"),
      document.getElementById("AtackRight8"),
      document.getElementById("AtackRight9"),
      document.getElementById("AtackRight9"),
      document.getElementById("AtackRight10"),
      document.getElementById("AtackRight10")
    ];

    /*Frames that will be used for the attack left animation*/

    this.framesAttackLeft = [
      document.getElementById("AtackLeft1"),
      document.getElementById("AtackLeft1"),
      document.getElementById("AtackLeft2"),
      document.getElementById("AtackLeft2"),
      document.getElementById("AtackLeft3"),
      document.getElementById("AtackLeft3"),
      document.getElementById("AtackLeft4"),
      document.getElementById("AtackLeft4"),
      document.getElementById("AtackLeft5"),
      document.getElementById("AtackLeft5"),
      document.getElementById("AtackLeft6"),
      document.getElementById("AtackLeft6"),
      document.getElementById("AtackLeft7"),
      document.getElementById("AtackLeft7"),
      document.getElementById("AtackLeft8"),
      document.getElementById("AtackLeft8"),
      document.getElementById("AtackLeft9"),
      document.getElementById("AtackLeft9"),
      document.getElementById("AtackLeft9"),
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

  /*A function that implements the move left comand frame by frame*/
  moveLeft() {
    this.orientation = "l";
  
if(this.jumping==false)
{
       this.frame=(this.frame==this.framesWalkLeft.length-1)?0:this.frame+1;

    this.image = this.framesWalkLeft[this.frame];
  }
    this.impulse_x = -5;
  }

  /*A function that implements the move right comand frame by frame*/

  moveRight() {
    this.orientation = "r";
  
if(this.jumping==false)
  {            this.frame=(this.frame>=this.framesWalkRight.length-1)?0:this.frame+1;

    this.image = this.framesWalkRight[this.frame];
   } 
    this.impulse_x =5 ;
  }

  /*A function that implements the attack right comand frame by frame*/

  atackRight() {
     this.frame=(this.frame>=this.framesAttackRight.length-1)?0:this.frame+1;

    this.image = this.framesAttackRight[this.frame];
  }

  /*A function that implements the attack left comand frame by frame*/

  atackLeft() {
         this.frame=(this.frame>=this.framesAttackLeft.length-1)?0:this.frame+1;


    this.image = this.framesAttackLeft[this.frame];
  }
  /*A function that is called when a command is finished,sets the 
  default right(idle facing right) frame for the caracter*/
  stopRight() {
    this.idle = 0;
    this.frame = 0;
    this.orientation = "r";
    this.impulse_x =0;

   if(this.jumping==false)
   this.image = document.getElementById("Knight");
  }

  /*A function that is called when a command is fini
  hed,sets the 
  default left(idle facing left) frame for the caracter*/
  stopLeft() {
    this.idle = 0;
    this.frame = -1;
    this.orientation = "l";
    this.impulse_x =0;
    
    if(this.jumping==false)
    this.image = document.getElementById("KnightIdleLeft");
  }

  /*A function that implements the jump  comand frame by frame*/

  Jump() {
   if(this.jumping==false)
   {
    this.jumping=true;
    this.impulse_y=-25;
    this.image=this.framesJump[5];
     this.jump_sound.play();
  }
  }

  
}

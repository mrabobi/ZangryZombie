/* A class that will be used for managing the player Character*/
export default class Player {

  initial_lives = 0;
  lives = 0;

  constructor(gamewidth, gameheight,character) {
    /*The character's initial frame*/

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
    this.damage_to_be_done=0;
    this.character=character;
    
if(character==="Ninja")
    {
    this.lives=2;
    this.initial_lives=2;
    this.damage=100;
    this.crit_chance=60;
    this.miss_chance=0;
    this.attack_range=30;
    this.x_impulse=7;
    this.y_impulse=25;
this.image = document.getElementById("Ninja");
     this.framesWalkRight = [
      document.getElementById("NinjaWalk1"),
      document.getElementById("NinjaWalk1"),
      document.getElementById("NinjaWalk2"),
      document.getElementById("NinjaWalk2"),
      document.getElementById("NinjaWalk3"),
      document.getElementById("NinjaWalk3"),
      document.getElementById("NinjaWalk4"),
      document.getElementById("NinjaWalk4"),
      document.getElementById("NinjaWalk5"),
      document.getElementById("NinjaWalk5"),
      document.getElementById("NinjaWalk6"),
      document.getElementById("NinjaWalk6"),
      document.getElementById("NinjaWalk7"),
      document.getElementById("NinjaWalk7"),
      document.getElementById("NinjaWalk8"),
      document.getElementById("NinjaWalk8"),
      document.getElementById("NinjaWalk9"),
      document.getElementById("NinjaWalk9"),
      document.getElementById("NinjaWalk10"),
      document.getElementById("NinjaWalk10")
    ];

    /*Frames that will be used for the walk left animation*/
    this.framesWalkLeft = [
      document.getElementById("NinjaWalkLeft1"),
      document.getElementById("NinjaWalkLeft1"),
      document.getElementById("NinjaWalkLeft2"),
      document.getElementById("NinjaWalkLeft2"),
      document.getElementById("NinjaWalkLeft3"),
      document.getElementById("NinjaWalkLeft3"),
      document.getElementById("NinjaWalkLeft4"),
      document.getElementById("NinjaWalkLeft4"),
      document.getElementById("NinjaWalkLeft5"),
      document.getElementById("NinjaWalkLeft5"),
      document.getElementById("NinjaWalkLeft6"),
      document.getElementById("NinjaWalkLeft6"),
      document.getElementById("NinjaWalkLeft7"),
      document.getElementById("NinjaWalkLeft7"),
      document.getElementById("NinjaWalkLeft8"),
      document.getElementById("NinjaWalkLeft8"),
      document.getElementById("NinjaWalkLeft9"),
      document.getElementById("NinjaWalkLeft9"),
      document.getElementById("NinjaWalkLeft10"),
      document.getElementById("NinjaWalkLeft10")

    ];
    /*Frames that will be used for the attack right animation*/

    this.framesAttackRight = [
      document.getElementById("NAtackRight1"),
      document.getElementById("NAtackRight1"),
      document.getElementById("NAtackRight2"),
      document.getElementById("NAtackRight2"),
      document.getElementById("NAtackRight3"),
      document.getElementById("NAtackRight3"),
      document.getElementById("NAtackRight4"),
      document.getElementById("NAtackRight4"),
      document.getElementById("NAtackRight5"),
      document.getElementById("NAtackRight5"),
      document.getElementById("NAtackRight6"),
      document.getElementById("NAtackRight6"),
      document.getElementById("NAtackRight7"),
      document.getElementById("NAtackRight7"),
      document.getElementById("NAtackRight8"),
      document.getElementById("NAtackRight8"),
      document.getElementById("NAtackRight9"),
      document.getElementById("NAtackRight9"),
      document.getElementById("NAtackRight10"),
      document.getElementById("NAtackRight10")
    ];

    /*Frames that will be used for the attack left animation*/

    this.framesAttackLeft = [
      document.getElementById("NAtackLeft1"),
      document.getElementById("NAtackLeft1"),
      document.getElementById("NAtackLeft2"),
      document.getElementById("NAtackLeft2"),
      document.getElementById("NAtackLeft3"),
      document.getElementById("NAtackLeft3"),
      document.getElementById("NAtackLeft4"),
      document.getElementById("NAtackLeft4"),
      document.getElementById("NAtackLeft5"),
      document.getElementById("NAtackLeft5"),
      document.getElementById("NAtackLeft6"),
      document.getElementById("NAtackLeft6"),
      document.getElementById("NAtackLeft7"),
      document.getElementById("NAtackLeft7"),
      document.getElementById("NAtackLeft8"),
      document.getElementById("NAtackLeft8"),
      document.getElementById("NAtackLeft9"),
      document.getElementById("NAtackLeft9"),
      document.getElementById("NAtackLeft9"),
      document.getElementById("NAtackLeft9")


    ];
    /*Frames that will be used for the jump animation*/

    this.Jump_image = document.getElementById("JumpN6");
    this.Jump_reverse_image=document.getElementById("JumpNReverse");

    }

  else
  {
    this.lives=3;
    this.initial_lives=3;
    this.damage=250;
    this.attack_range=20;
    this.crit_chance=30;
    this.miss_chance=30;
    this.x_impulse=5;
    this.y_impulse=20;
    this.image = document.getElementById("Knight");

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

    this.Jump_image = document.getElementById("Jump5");
    this.Jump_reverse_image=document.getElementById("JumpReverse");

  }
    this.jump_sound = new Audio('http://localhost/proiect/Back/sound/Jump_sound.mp3');
    this.attack_sound= new Audio('http://localhost/proiect/Back/sound/attack.mp3');
    this.miss_sound = new Audio('http://localhost/proiect/Back/sound/miss.mp3');

    /*Frames that will be used for the walk right animation*/
   
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
    this.impulse_x = -this.x_impulse;
  }

  /*A function that implements the move right comand frame by frame*/

  moveRight() {
    this.orientation = "r";
  
if(this.jumping==false)
  {            this.frame=(this.frame>=this.framesWalkRight.length-1)?0:this.frame+1;

    this.image = this.framesWalkRight[this.frame];
   } 
    this.impulse_x =this.x_impulse ;
  }

  /*A function that implements the attack right comand frame by frame*/

  atackRight() {
     if(this.attacking===false)
      {
        this.attacking=true;
        this.damage_to_be_done=this.damage;
        var crit=Math.floor(Math.random()*100+1);
        if(crit<=this.crit_chance)
          this.damage_to_be_done*=2;
        var miss=Math.floor(Math.random()*100+1);
        if(miss<=this.miss_chance)
          {
            this.damage_to_be_done=0;
            this.miss_sound.play();
          }

      }
     this.frame=(this.frame>=this.framesAttackRight.length-1)?0:this.frame+1;

        if(this.frame===0)
    {
      this.damage_to_be_done=this.damage;
       var crit=Math.floor(Math.random()*100+1);
        if(crit<=this.crit_chance)
          this.damage_to_be_done*=2;
        var miss=Math.floor(Math.random()*100+1);
        if(miss<=this.miss_chance)
          {
            this.damage_to_be_done=0;
            this.miss_sound.play();
          }
    }
    this.image = this.framesAttackRight[this.frame];
                 this.attack_sound.play();
  }

  /*A function that implements the attack left comand frame by frame*/

  atackLeft() {
         if(this.attacking===false)
      {
        this.attacking=true;
        this.damage_to_be_done=this.damage;
        var crit=Math.floor(Math.random()*100+1);
        if(crit<=this.crit_chance)
          this.damage_to_be_done*=2;
        var miss=Math.floor(Math.random*100+1);
        if(miss<=this.miss_chance)
         {
            this.damage_to_be_done=0;
            this.miss_sound.play();
          }
      }
    this.frame=(this.frame>=this.framesAttackLeft.length-1)?0:this.frame+1;
    if(this.frame===0)
    {
      this.damage_to_be_done=this.damage;
       var crit=Math.floor(Math.random()*100+1);
        if(crit<=this.crit_chance)
          this.damage_to_be_done*=2;
        var miss=Math.floor(Math.random*100+1);
        if(miss<=this.miss_chance)
          {
            this.damage_to_be_done=0;
            this.miss_sound.play();
          }
    }
    this.image = this.framesAttackLeft[this.frame];
             this.attack_sound.play();

  }
  /*A function that is called when a command is finished,sets the 
  default right(idle facing right) frame for the caracter*/
  stopRight() {
    this.idle = 0;
    this.frame = 0;
    this.orientation = "r";
    this.impulse_x =0;

   if(this.jumping==false)
    if(this.character=="Ninja")
         this.image = document.getElementById("Ninja");
else
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
       if(this.character=="Ninja")
         this.image = document.getElementById("NinjaIdleLeft");
else
   this.image = document.getElementById("KnightIdleLeft");
  }

  /*A function that implements the jump  comand frame by frame*/

  Jump() {
   if(this.jumping==false)
   {
    this.jumping=true;
    this.impulse_y=-this.y_impulse;
    if(this.orientation==="r")
    this.image=this.Jump_image;
  else if(this.orientation==="l")
    this.image=this.Jump_reverse_image;
     this.jump_sound.play();
  }
  }

  
}

/* A class that will be used for managing the a Zombie NPC*/

export default class Zombie {
  constructor(positon_x,position_y,width,height) {
    /*The zombie's initial frame*/

    this.image = Image = document.getElementById("Zombie");
    this.width = width;
    this.height = height;
    /*The zombie's initial position*/

    this.initial_x=positon_x;
    this.x=positon_x;
    this.y=position_y;
    this.direction = 1;
    this.dangerous=true;

    this.dead=false;
    this.dying=false;
    this.sounds=[new Audio('http://localhost/game/Back/sound/groan2.mp3'),
    new Audio('http://localhost/game/Back/sound/groan4.mp3'),new Audio('http://localhost/game/Back/sound/groan5.mp3'),
    new Audio('http://localhost/game/Back/sound/groan6.mp3'),new Audio('http://localhost/game/Back/sound/groan5.mp3'),
    new Audio('http://localhost/game/Back/sound/groan6.mp3'),new Audio('http://localhost/game/Back/sound/groan5.mp3'),
    new Audio('http://localhost/game/Back/sound/groan6.mp3')];
    /*Frames that will be used for the walk right animation*/
    this.framesWalkRight = [
      document.getElementById("ZombieWalk1"),
      document.getElementById("ZombieWalk1"),
      document.getElementById("ZombieWalk2"),
      document.getElementById("ZombieWalk2"),
      document.getElementById("ZombieWalk3"),
      document.getElementById("ZombieWalk3"),
      document.getElementById("ZombieWalk4"),
      document.getElementById("ZombieWalk4"),
      document.getElementById("ZombieWalk5"),
      document.getElementById("ZombieWalk5"),
      document.getElementById("ZombieWalk6"),
      document.getElementById("ZombieWalk6"),
      document.getElementById("ZombieWalk7"),
      document.getElementById("ZombieWalk7"),
      document.getElementById("ZombieWalk8"),
      document.getElementById("ZombieWalk8"),
      document.getElementById("ZombieWalk9"),
      document.getElementById("ZombieWalk9"),
      document.getElementById("ZombieWalk10"),
      document.getElementById("ZombieWalk10")
    ];
    this.deathFrames=[document.getElementById("ZombieDead1"),
    document.getElementById("ZombieDead1"),
    document.getElementById("ZombieDead1"),
    document.getElementById("ZombieDead1"),
    document.getElementById("ZombieDead2"),
    document.getElementById("ZombieDead2"),
    document.getElementById("ZombieDead2"),
    document.getElementById("ZombieDead2"),
    document.getElementById("ZombieDead3"),
    document.getElementById("ZombieDead3"),
    document.getElementById("ZombieDead3"),
    document.getElementById("ZombieDead3"),  
    document.getElementById("ZombieDead4"),
    document.getElementById("ZombieDead4"),
    document.getElementById("ZombieDead4"),
    document.getElementById("ZombieDead4"),
    document.getElementById("ZombieDead5"),
    document.getElementById("ZombieDead5"),
    document.getElementById("ZombieDead5"),
    document.getElementById("ZombieDead5"),
    document.getElementById("ZombieDead6"),
    document.getElementById("ZombieDead6"),
    document.getElementById("ZombieDead6"),
    document.getElementById("ZombieDead6"),
    document.getElementById("ZombieDead7"),
    document.getElementById("ZombieDead7"),
    document.getElementById("ZombieDead7"),
    document.getElementById("ZombieDead7"),
    document.getElementById("ZombieDead8"),
    document.getElementById("ZombieDead8"),
    document.getElementById("ZombieDead8"),
    document.getElementById("ZombieDead8"),
    document.getElementById("ZombieDead9"),
    document.getElementById("ZombieDead9"),
    document.getElementById("ZombieDead9"),
    document.getElementById("ZombieDead9"),
    document.getElementById("ZombieDead10"),
    document.getElementById("ZombieDead10"),
    document.getElementById("ZombieDead10"),
    document.getElementById("ZombieDead10"),
    document.getElementById("ZombieDead11"),
    document.getElementById("ZombieDead11"),
    document.getElementById("ZombieDead11"),
    document.getElementById("ZombieDead11"),
    document.getElementById("ZombieDead12"),
    document.getElementById("ZombieDead12"),
    document.getElementById("ZombieDead12"),
    document.getElementById("ZombieDead12"),
    ];

    /*Frame counter*/
    this.frame = -1;
  }

  move() {
  if(this.dead===false)
{
   if(this.dying===false)
   { 
    this.frame=(this.frame==this.framesWalkRight.length-1)?0:this.frame+1;
    this.image = this.framesWalkRight[this.frame];
    this.x += this.direction * 2;
    if (this.x > this.initial_x+100) this.direction = -1;
    else if (this.x < this.initial_x) this.direction = 1;
    var chance=Math.floor(Math.random()*200+1);
    if(chance===5)
    {
      var sound=Math.floor(Math.random()*7);
      this.sounds[sound].play();
    }
  }
  else
  {
    this.frame++;
    if(this.frame===this.deathFrames.length)
      this.dead=true;
    else
    this.image=this.deathFrames[this.frame];


  }
  }
}
}

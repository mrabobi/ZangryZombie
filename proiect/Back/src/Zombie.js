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
    this.orientation="r";
    this.health=this.width/5*20;

    this.dead=false;
    this.dying=false;
    this.sounds=[new Audio('http://localhost/proiect/Back/sound/groan2.mp3'),
    new Audio('http://localhost/proiect/Back/sound/groan4.mp3'),new Audio('http://localhost/proiect/Back/sound/groan5.mp3'),
    new Audio('http://localhost/proiect/Back/sound/groan6.mp3'),new Audio('http://localhost/proiect/Back/sound/groan5.mp3'),
    new Audio('http://localhost/proiect/Back/sound/groan6.mp3'),new Audio('http://localhost/proiect/Back/sound/groan5.mp3'),
    new Audio('http://localhost/proiect/Back/sound/groan6.mp3')];
    this.take_hit=new Audio('http://localhost/proiect/Back/sound/take_hit.mp3')
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

     this.framesWalkLeft = [
      document.getElementById("ZombieWalkLeft1"),
      document.getElementById("ZombieWalkLeft1"),
      document.getElementById("ZombieWalkLeft2"),
      document.getElementById("ZombieWalkLeft2"),
      document.getElementById("ZombieWalkLeft3"),
      document.getElementById("ZombieWalkLeft3"),
      document.getElementById("ZombieWalkLeft4"),
      document.getElementById("ZombieWalkLeft4"),
      document.getElementById("ZombieWalkLeft5"),
      document.getElementById("ZombieWalkLeft5"),
      document.getElementById("ZombieWalkLeft6"),
      document.getElementById("ZombieWalkLeft6"),
      document.getElementById("ZombieWalkLeft7"),
      document.getElementById("ZombieWalkLeft7"),
      document.getElementById("ZombieWalkLeft8"),
      document.getElementById("ZombieWalkLeft8"),
      document.getElementById("ZombieWalkLeft9"),
      document.getElementById("ZombieWalkLeft9"),
      document.getElementById("ZombieWalkLeft10"),
      document.getElementById("ZombieWalkLeft10")
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
    
    this.x += this.direction * 2;
    if (this.x > this.initial_x+100) 
      {
        this.orientation="l";
        this.direction = -1;
        this.frame=-1;
      }
    else if (this.x < this.initial_x) 
    {
      this.direction = 1;
      this.frame=-1;
      this.orientation="r";
    }
    this.frame=(this.frame==this.framesWalkRight.length-1)?0:this.frame+1;
   if(this.orientation==="r")
    this.image = this.framesWalkRight[this.frame];
  else if(this.orientation==="l")
        this.image = this.framesWalkLeft[this.frame];
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

take_damage(value)
{
  this.health-=value;
   this.take_hit.play();
  if(this.health<=0)
    {
    this.dangerous=false;
    this.dying=true;
    }
}
}

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

    /*Frame counter*/
    this.frame = -1;
  }

  move() {
    this.frame=(this.frame==this.framesWalkRight.length-1)?0:this.frame+1;
    this.image = this.framesWalkRight[this.frame];
    this.x += this.direction * 2;
    if (this.x > this.initial_x+100) this.direction = -1;
    else if (this.x < this.initial_x) this.direction = 1;
  }
}

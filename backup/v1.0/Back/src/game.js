import Knight from "./Knigth.js";
import InputHandler from "./input.js";
import Background from "./Backgroud.js";
import Zombie from "./Zombie.js";

export default class Game {
  constructor(gamewidth, gameheight) {

  this.gamewidth = 1600;
  this.gameheight = 900;
  this.pause;
  this.score;
  this.over;
  this.scene_change = new Audio('http://localhost/game/Back/sound/Scene_Change.mp3');
  this.bonus = new Audio('http://localhost/game/Back/sound/Bonus.mp3');
  this.map;
  this.player;
  this.controller;
  this.zombies=[];
    
}


start()
{
  this.map= new Background();
  this.player = new Knight(this.gamewidth, this.gameheight);
  this.controller = new InputHandler(this);
  this.pause=false;
  this.over=false;
  this.score=0;
  this.add_zombies();


}

 update_position()
  {
    
       if (this.player.position.x + this.player.width+this.player.impulse_x > this.player.gamewidth)
     { 
      this.player.position.x = 0;
      var map_height=this.map.get_height();
      this.map.new_layout(Math.floor(Math.random()*(this.map.rows-1-map_height))+map_height);
          this.map.place_bonus();
          this.add_zombies();
      this.scene_change.play();
      this.score+=100;
     }

     else
     {
       var x_side=this.player.position.x;
     if(this.player.impulse_x>0)
      x_side+=this.player.width;

      if(this.map.get_tile_at(x_side+this.player.impulse_x,this.player.position.y+this.player.impulse_y)<=0)
        this.player.position.x+=this.player.impulse_x;
             if (this.player.position.x<0)
              this.player.position.x=0;
     }
      if(this.player.impulse_y<0)
      {
        if(this.map.get_tile_at(this.player.position.x,this.player.position.y+this.player.impulse_y)<=0 && 
          this.map.get_tile_at(this.player.position.x+this.player.width,this.player.position.y+this.player.impulse_y)<=0  )
                  this.player.position.y+=this.player.impulse_y;
                  this.player.impulse_y+=1.5;
                  this.player.frame=-1;

      }
      else
      {
        var y_side=this.player.position.y+this.player.height;
         if(this.map.get_tile_at(this.player.position.x,y_side+this.player.impulse_y)<=0 && 
          this.map.get_tile_at(this.player.position.x+this.player.width,y_side+this.player.impulse_y)<=0 )
                  {
                    this.player.position.y+=this.player.impulse_y;
                    this.player.impulse_y+=1.5;
                    this.player.frame=-1;
                  }
          else
          {
          if(this.player.jumping==true)
          {
          if(this.player.orientation==="l")
              this.player.image = document.getElementById("KnightIdleLeft");
          else
              this.player.image = document.getElementById("Knight");

                      this.player.frame=-1;
          }
          this.player.impulse_y=0;
          this.player.jumping=false;
          this.player.position.y=Math.round(this.player.position.y/100)*100+100-this.player.height;          
        }      
        }

  }

 check_health()
  {
    if(this.map.get_tile_at(this.player.position.x,this.player.position.y)===-1 )
    {  
      if(this.player.lives+1<this.player.initial_lives+3)
     {   
      
      this.player.lives++;
      this.bonus.play();
      this.map.layout[ Math.floor(this.player.position.y/100)*this.map.columns+Math.floor(this.player.position.x/100)]=0;
      }
      }

      else if(this.map.get_tile_at(this.player.position.x+this.player.width,this.player.position.y)===-1)
        {
          if(this.player.lives+1<this.player.initial_lives+3)
     {   
      
      this.player.lives++;
      this.bonus.play();
      this.map.layout[ Math.floor(this.player.position.y/100)*this.map.columns+Math.floor((this.player.position.x+this.player.width)/100)]=0;
      }
        }
  }

  add_zombies()
  {
     this.zombies=[];
     var column=3;
    while(column<this.map.columns-1)
    {
      var row=0;
      while(this.map.layout[(row+1)*this.map.columns+column]<=0)
      {
        row++;
      }

    var chance=Math.floor(Math.random()*5+1);
    if(chance===5)
       { var dimensions=Math.floor(Math.random()*15+75); 
        this.zombies.push(new Zombie(column*100-dimensions+100,row*100-dimensions+100,dimensions,dimensions));
          }
        column+=2;
    }
  }


  check_intersection(left1_x,letf1_y,right1_x,right1_y,left2_x,left2_y,right2_x,right2_y)
  {
    if (left1_x > right2_x || left2_x > right1_x) 
        return false; 
    if (letf1_y > right2_y || left2_y > right1_y) 
        return false; 
  
    return true;
  }

  check_zombie_hit()
  {
   for(var i=0;i<this.zombies.length;i++)
      {
        if(this.check_intersection(this.player.position.x,this.player.position.y,
          this.player.position.x+this.player.width,this.player.position.y+this.player.height,
          this.zombies[i].x,this.zombies[i].y,
          this.zombies[i].x+this.zombies[i].width,this.zombies[i].y+this.zombies[i].height)
          )
        {
          this.player.lives--;
          if(this.player.lives==0)
            this.over=true;

        else
          this.player.position.x=0;
      }
      }
  }


  update()
  {
    for(var i=0;i<this.zombies.length;i++)
      this.zombies[i].move();
    this.controller.execute_commands();
    this.update_position();
    this.check_health();
    this.check_zombie_hit()
  }

}
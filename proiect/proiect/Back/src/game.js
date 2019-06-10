import Player from "./Knigth.js";
import InputHandler from "./input.js";
import Background from "./Backgroud.js";
import Zombie from "./Zombie.js";

  var healthv;
  var damage;

export default class Game {

  constructor(gamewidth, gameheight,character) {

  this.gamewidth = 1600;
  this.gameheight = 900;
  this.pause;
  this.score;
  this.over;
  this.scene_change = new Audio('http://localhost/proiect/Back/sound/Scene_Change.mp3');
  this.bonus = new Audio('http://localhost/proiect/Back/sound/Bonus.mp3');
  this.gameover_sound = new Audio('http://localhost/proiect/Back/sound/evillaugh.mp3');
  this.map;
  this.player;
  this.character=character;
  this.controller;
  this.zombies=[];
    
}


start()
{
  this.map= new Background();
  this.player = new Player(this.gamewidth, this.gameheight,this.character);
  this.controller = new InputHandler(this);
  this.pause=false;
  this.over=false;
  this.updateFromShop();
  console.log(healthv);
  
  this.score=0;
  this.add_zombies();


}

 update_position()
  {
    
       if (this.player.position.x + this.player.width + this.player.impulse_x >= this.gamewidth)
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
          if(this.player.jumping===true)
          {

              if(this.player.orientation==="l" && this.character==="Ninja" )
            
              this.player.image = document.getElementById("NinjaIdleLeft");
            
             else if(this.player.orientation==="l" && this.character==="Knight" )
            
              this.player.image = document.getElementById("KnightIdleLeft");
            
             else  if(this.player.orientation==="r" && this.character==="Ninja")
            
              this.player.image = document.getElementById("Ninja");
            
             else if(this.player.orientation==="r" && this.character==="Knight")
            
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
     var column=2;
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
        column+=2;
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
          this.zombies[i].x+this.zombies[i].width,this.zombies[i].y+this.zombies[i].height) && this.zombies[i].dangerous===true
          )
        {
          this.player.lives--;
          if(this.player.lives==0)
            {
              this.over=true;
              this.gameover_sound.play();
            }

        else
          {
            this.player.position.x=0;
            this.player.position.y=0;
            this.player.jumping=true;
          }
      }
      }
  }

  check_attack()
  {
      if(this.player.attacking===true)
    {
   

   
if(this.player.orientation==="r")
    for(var i=0;i<this.zombies.length;i++)
      {
        if(this.check_intersection(this.player.position.x+this.player.width,this.player.position.y,
          this.player.position.x+this.player.width+this.player.attack_range,this.player.position.y+this.player.height,
          this.zombies[i].x,this.zombies[i].y,
          this.zombies[i].x+this.zombies[i].width,this.zombies[i].y+this.zombies[i].height) && this.zombies[i].dying===false && this.player.damage_to_be_done!=0
          )

        {
          this.zombies[i].take_damage(this.player.damage_to_be_done);
          this.player.damage_to_be_done=0;
          this.score+=50;
        }
       }

else if(this.player.orientation==="l")
  for(var i=0;i<this.zombies.length;i++)
      {
        if(this.check_intersection(this.player.position.x-this.player.attack_range,this.player.position.y,
          this.player.position.x,this.player.position.y+this.player.height,
          this.zombies[i].x,this.zombies[i].y,
          this.zombies[i].x+this.zombies[i].width,this.zombies[i].y+this.zombies[i].height) && this.zombies[i].dying===false && this.player.damage_to_be_done!=0
          )

        {
          this.zombies[i].take_damage(this.player.damage_to_be_done);
          this.player.damage_to_be_done=0;
          this.score+=50;
        }
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
    this.check_attack();
    this.check_zombie_hit();
  }

  updateFromShop(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","src/getStats.php", false);
    ajax.send();

    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data["healthv"]);
            this.player.lives = this.player.lives + data["health"];
            this.player.initial_lives = this.player.initial_lives + data["health"]; 
  }

};   
}



updateAjax(){
      this.updateFromShop();
        this.player.lives = this.player.lives;
        this.player.initial_lives = this.player.initial_lives + health;
        //this.player.damage = this.player.damage + attack;
    }  
    
}

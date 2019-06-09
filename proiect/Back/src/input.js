/*A class that will be used to collect the keyboard input and call the coresponding
functions from the Knight class*/
export default class InputHandler {
  constructor(game) {
    /*Commands that execute when a key is held down*/
    this.game=game;
    this.left_key=false;
    this.right_key=false;
    this.z_key=false;
    this.x_key=false;
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 27:
          if(this.game.pause===false)
          this.game.pause=true;
        else 
          this.game.pause=false;
          break;
          case 81:
          window.location.replace("http://localhost/game/index.html");
          break;
        case 37:
          if(this.right_key===false && this.x_key===false)
          this.left_key=true;
          break;

        case 39:
          if(this.left_key===false && this.x_key===false)
          this.right_key=true;
          break;

          case 82:
        this.game.start();
          break;

        case 88:
        if(this.left_key===false && this.right_key===false)
          this.x_key=true;
          break;

        case 90:
          this.z_key=true;
          break;
      }
    });
    /*Commands that execute when a key released(frame reset commands)*/

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
       {
        this.left_key=false;
              this.game.player.stopLeft();
       }
          break;

        case 39:
        {
          this.right_key=false;
             this.game.player.stopRight();
        }
          break;

        case 88:
         {
          if (   this.game.player.orientation === "r")    
           {
            this.game.player.stopRight();
            this.game.player.attacking=false;
           }
          else if (   this.game.player.orientation === "l")    
           { 
            this.game.player.stopLeft();
            this.game.player.attacking=false;
          }
          this.x_key=false;
        }
          break;

        case 90:
          this.z_key=false;
          break;
      }
    });
  }

  execute_commands()
  {
    if(this.left_key===true)
        this.game.player.moveLeft();
    if(this.right_key===true)
         this.game.player.moveRight();
    if(this.x_key===true)
  if ( this.game.player.orientation == "r")    
   {
   this.game.player.atackRight();
   }
   else if ( this.game.player.orientation == "l")     
   { 
    this.game.player.atackLeft();
  }
    if(this.z_key===true)
         this.game.player.Jump();
  }
}

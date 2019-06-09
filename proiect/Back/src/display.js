export default class Display {
  constructor(game,ctx) {
    /*Commands that execute when a key is held down*/
    this.game=game;  
    this.ctx=ctx;
    }

      display_player(ctx) {
    ctx.drawImage(
      this.game.player.image,
      this.game.player.position.x,
      this.game.player.position.y,
      this.game.player.width,
      this.game.player.height
    );
  }
    display_map(ctx) {
    ctx.drawImage(this.game.map.image, 0, 0, this.game.map.columns*100, this.game.map.rows*100);
    for(let index=0;index<this.game.map.layout.length;index++)
    {
      if(this.game.map.layout[index]!=0)

      {
      let value=this.game.map.layout[index]-1;
      if(value===-2)
        value=3;
      let start_y=Math.floor(index/this.game.map.columns)*100;
      let start_x=index%this.game.map.columns*100;
      if(value!=3)
      ctx.drawImage(this.game.map.tiles[value], start_x, start_y, 100, 100);
    else if(value===3)
      ctx.drawImage(this.game.map.tiles[value], start_x+25, start_y+25, 70, 70);
      }

    }
  }

  display_health_score(ctx)
  {
    ctx.font = '25px Arial';
    ctx.fillStyle = 'blue';
    ctx.fillText("SCORE: " + this.game.score, 0, 25);
    var initial_x=0;
    for(var i=0;i<this.game.player.lives;i++)
    {
      ctx.drawImage(document.getElementById("Heart"), initial_x, 50 , 50, 50);
      initial_x+=60;
    }

  }

  display_zombies(ctx)
  {
    for(var i=0;i<this.game.zombies.length;i++)
   if(this.game.zombies[i].dead===false)
    ctx.drawImage(
      this.game.zombies[i].image,
      this.game.zombies[i].x,
      this.game.zombies[i].y,
      this.game.zombies[i].width,
      this.game.zombies[i].height)
  
  }

  display()
  {
    this.display_map(this.ctx);
    this.display_player(this.ctx);
    this.display_health_score(this.ctx);
    this.display_zombies(this.ctx);

  }


}
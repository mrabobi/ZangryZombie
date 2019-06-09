/*A class used to draw the background*/
export default class Backgroud {
  constructor() {
    this.image = document.getElementById("BackGround");
   	this.columns=16;
   	this.rows=9;
    this.tiles = [document.getElementById("Tile1"),document.getElementById("Tile2"),document.getElementById("Tile3"),document.getElementById("Heart")];
    this.layout=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.new_layout(this.rows-1);
    this.place_bonus();
  }
  /*For now,the draw method draws a single picture using multiple images imported from the
HTML document*/
  get_tile_at(position_x,position_y)
  {

      var row=  Math.floor(position_y/100);
      var column= Math.floor(position_x/100); 
    return this.layout[row*this.columns+column];
  }

  get_height()
  {
    var i=0;
    while(this.layout[i*this.columns+this.columns-1]<=0)
      i++;
    return i;
  }
   get_height_first()
  {
    var i=0;
    while(this.layout[i*this.columns]<=0)
      i++;
    return i;
  }

  new_layout(height)
  {
    
    for(var i=0;i<this.rows;i++)
      for(var j=0;j<this.columns;j++)
        this.layout[i*this.columns+j]=0;
      this.layout[height*this.columns]=1;
      this.layout[height*this.columns+1]=2;
      for(var i=height;i<this.rows;i++)
        {
          this.layout[i*this.columns]=2;
          this.layout[i*this.columns+1]=2;
        }
        var column=2;
        var last_height=height;
       
        while(column<this.columns)
        {
          if(last_height<this.rows-1 && last_height>1)
          {
          var height_change=Math.floor(Math.random()*3);
          if(height_change==1 && last_height!=this.rows-1)
          {
            last_height+=1;
          }

          if(height_change==2)
          {
            last_height-=1;
          }

          this.layout[height*this.columns+column]=2;
          this.layout[height*this.columns+column+1]=2;
      for(var i=last_height;i<this.rows;i++)
        {
          this. layout[i*this.columns+column]=2;
          this.layout[i*this.columns+column+1]=2;
        }
        }
        else if(last_height==1)
          {
            var height_change=Math.floor(Math.random()*2);
          if(height_change==1)
          {
            last_height+=1;
          }

          this.layout[height*this.columns+column]=2;
          this.layout[height*this.columns+column+1]=2;
      for(var i=last_height;i<this.rows;i++)
        {
          this. layout[i*this.columns+column]=2;
          this.layout[i*this.columns+column+1]=2;
        }

          }

          else if(last_height==this.rows-1)
          {
            var height_change=Math.floor(Math.random()*2);
          if(height_change==1)
          {
            last_height-=1;
          }

          this.layout[height*this.columns+column]=2;
          this.layout[height*this.columns+column+1]=2;
      for(var i=last_height;i<this.rows;i++)
        {
          this. layout[i*this.columns+column]=2;
          this.layout[i*this.columns+column+1]=2;
        }

          }
        column+=2;


        }

  }

  place_bonus()
  {
    var column=1;
    while(column<this.columns)
    {
      var row=0;
      while(this.layout[(row+1)*this.columns+column]===0)
      {
        row++;
      }

      var chance=Math.floor(Math.random()*20+1);
      if(chance===10)
        this.layout[row*this.columns+column]=-1;

        column++;
    }
  }



}

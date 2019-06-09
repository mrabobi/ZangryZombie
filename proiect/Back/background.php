<?php
/*A class used to draw the background*/
  class Background{

    function __construct(){
    $contor = 0;
   	$columns=16;
   	$rows=9;
    $tiles = array($tile1, $tile2, $tile3);
    $layout= array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    new_layout($rows-1);
  }
  /*For now,the draw method draws a single picture using multiple images imported from the
HTML document*/
  draw(ctx) {

    ctx.drawImage(this.image, 0, 0, this.columns*100, this.rows*100);
  	for(let index=0;index<this.layout.length;index++)
  	{
  		if(this.layout[index]!=0){

 		   $value=$this->$layout[index]-1;
  		 $start_y=Math.floor(index/this.columns)*100;
  		let start_x=index%this.columns*100;
  		ctx.drawImage(this.tiles[value], start_x, start_y, 100, 100);
		}

  	}
  }

  public function get_tile_at($position_x,$position_y){

      $row = floor($position_y/100);
      $column = floor($position_x/100); 
    return $this->$layout[$row*$this->$columns+$column];
  }

  public function get_height()
  {
    $i=0;
    while($this->$layout[$i*$this->$columns+$this->$columns-1]==0)
      $i++;
    return $i;
  }

  

  }




?>
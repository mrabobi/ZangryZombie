<?php
    $height = $_GET['height'];
    $rows = $_GET['rows'];
    $columns = $_GET['columns'];

    $layout= array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
              0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    
    for($i=0;$i<$rows;$i++)
      for($j=0;$j<$columns;$j++)
        $layout[$i*$columns+$j]=0;
      $layout[$height*$columns]=1;
      $layout[$height*$columns+1]=2;
      for($i=$height;$i<$rows;$i++)
        {
          $layout[$i*$columns]=2;
          $layout[$i*$columns+1]=2;
        }
        $column=2;
        $last_height=$height;
       
        while($column<$columns)
        {
          if($last_height<$rows-1 && $last_height>1)
          {
          $height_change = rand()*3;
          echo $height_change;
          if($height_change==1 && $last_height!=$rows-1)
          {
            $last_height+=1;
          }

          if($height_change==2)
          {
            $last_height-=1;
          }

          $layout[$height*$columns+$column]=2;
          $layout[$height*$columns+$column+1]=2;
      for($i=$last_height;$i<$rows;$i++){
          $layout[$i*$columns+$column]=2;
          $layout[$i*$columns+$column+1]=2;
        }
        }
        else if($last_height==1)
          {
            $height_change = rand()*2;
          if($height_change==1)
          {
            $last_height+=1;
          }

          $layout[$height*$columns+$column]=2;
          $layout[$height*$columns+$column+1]=2;
      for($i=$last_height;$i<$rows;$i++)
        {
          $layout[$i*$columns+$column]=2;
          $layout[$i*$columns+$column+1]=2;
        }

          }

          else if($last_height==$rows-1)
          {
            $height_change=rand()*2;
          if($height_change==1)
          {
            $last_height-=1;
          }

          $layout[$height*$columns+$column]=2;
          $layout[$height*$columns+$column+1]=2;
      for($i=$last_height;$i<$rows;$i++)
        {
          $layout[$i*$columns+$column]=2;
          $layout[$i*$columns+$column+1]=2;
        }

          }
        $column+=2;

        }
        echo json_encode($layout);
?>
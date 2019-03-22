/*A class that will be used to collect the keyboard input and call the coresponding
functions from the Knight class*/
export default class InputHandler {
  constructor(Knight) {
    /*Commands that execute when a key is held down*/
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          Knight.moveLeft();
          break;

        case 39:
          Knight.moveRight();
          break;

        case 88:
          if (Knight.orientation == "r") Knight.atackRight();
          else if (Knight.orientation == "l") Knight.atackLeft();
          break;

        case 90:
          Knight.Jump();
          break;
      }
    });
    /*Commands that execute when a key released(frame reset commands)*/

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          Knight.stopLeft();
          break;

        case 39:
          Knight.stopRight();
          break;

        case 88:
          if (Knight.orientation === "r") Knight.stopRight();
          else if (Knight.orientation === "l") Knight.stopLeft();
          break;

        case 90:
          Knight.stopRight();
          break;
      }
    });
  }
}

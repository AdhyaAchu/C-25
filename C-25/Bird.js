/* 1. name of the class (extends)
2. constructor() of the class should remain the same
3. super = Bodies.rectangle()
4. image of the class
*/

class Bird extends Baseclass{
    constructor(x, y) {
     //super = transfer all the pros of the [parent class to the child class]
      super(x, y, 50, 50);
      this.image = loadImage("sprites/bird.png")

     
    
    };

    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  };
  
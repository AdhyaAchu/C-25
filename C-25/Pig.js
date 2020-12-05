/* 1. name of the class (extends)
2. constructor() of the class should remain the same
3. super = Bodies.rectangle()
4. image of the class
*/

class Pig extends Baseclass { 
    constructor(x, y) {
     
      super(x, y, 50, 50);
      this.image = loadImage("sprites/enemy.png")
    }
  };
  
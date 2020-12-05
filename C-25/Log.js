/* 1. name of the class (extends)
2. constructor() of the class should remain the same
3. super = Bodies.rectangle()
4. image of the class
*/

class Log extends Baseclass {
    constructor(x, y, height, angle) {
     
      super(x, y, 20, height);
      Matter.Body.setAngle(this.body, angle);
      this.image = loadImage("sprites/wood2.png")
    }
  };
  
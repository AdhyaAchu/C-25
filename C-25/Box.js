/* 1. name of the class (extends)
2. constructor() of the class should remain the same
3. super = Bodies.rectangle()
4. image of the class
*/

class Box extends Baseclass {
  constructor(x, y, width, height) {
    super(x, y, width, height);
      this.image = loadImage("sprites/wood1.png")

   
  }
};

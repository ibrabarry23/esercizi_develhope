class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(geometricShape){
    switch(true){

      case geometricShape instanceof Square:
        return  Math.pow(geometricShape.side,2);

      case geometricShape instanceof Rectangle:
        return geometricShape.width * geometricShape.height;
      
      case geometricShape instanceof Circle:
        return Math.PI * 2 * Math.pow(geometricShape.radius, 2); 
        default:
        console.log( "Geometric shape not supported ");
      
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
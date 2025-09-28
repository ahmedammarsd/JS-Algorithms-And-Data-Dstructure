// L — Liskov Substitution Principle (LSP)
// 1. Definition

// Objects of a superclass should be replaceable with objects of a subclass without breaking the application.

// 👉 In other words: Subtypes must behave like their parent type.
// If B extends A, then B should be usable wherever A is expected — without surprises.

// 2. Why
// Prevents “is-a” relationship misuse.
// Ensures polymorphism works safely.
// Leads to consistent, predictable APIs.

class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }
  area() {
    throw new Error("You Need to override this method");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    console.log("This is a rectangle area is :", this.width * this.height);
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    console.log("This is a square area is :", this.side * this.side);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    console.log(
      "This is a circle area or Diameter is :",
      Math.PI * (this.radius * this.radius)
    );
  }
}

const shapes = [new Rectangle(10, 20), new Square(10), new Circle(10)];
shapes.forEach((shape) => shape.area());

// Wrap-Up: Day 3 (LSP)
// Definition: Subtypes must be substitutable for their base type.
// Why: Keeps polymorphism reliable.
// How: Design correct abstractions, don’t force subtypes to violate contracts.

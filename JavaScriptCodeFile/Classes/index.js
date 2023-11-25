
// Classes are in fact "special functions", and just as you can define function expressions and function declarations,
//  a class can be defined in two ways: a class expression or a class declaration.

// Declaration
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  
  // Expression; the class is anonymous but assigned to a variable
  const Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  
  // Expression; the class has its own name
  const Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // call the super class constructor and pass in the name parameter
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const d = new Dog("Mitzie");
  d.speak(); // Mitzie barks.
  
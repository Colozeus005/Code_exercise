


Object.getPrototypeOf(x);

y.__proto__ === Array.prototype;            // true
y.__proto__.__proto__ === Object.prototype; // true


// We can use the instanceof operator to test whether the prototype property
//  of a constructor appears anywhere within an object’s prototype chain

y instanceof Array; // true

//Constructor

// Initialize a constructor function for a new Hero
function Hero(name, level) {
    this.name = name;
    this.level = level;
  }

let hero1 = new Hero('Bjorn', 1);   

// ♦Creating Method to object using .prototype
// You may notice that we’ve only defined properties and not methods in the constructor
// . It is a common practice in JavaScript to define methods on the prototype for increased efficiency and code readability.

// We can add a method to Hero using prototype. We’ll create a greet() method.

Hero.prototype.greet = function() {
    return `${this.name} says hello my friend.`
}

hero1.greet()   //=> use always parenthesis to call or invoke a function


// This is good, but now we want to create character classes for the heroes to use.
//  It wouldn’t make sense to put all the abilities for every class into the Hero 
//  constructor, because different classes will have different abilities. We want to
//   create new constructor functions, but we also want them to be connected to the original Hero.

// We can use the call() method to copy over properties from one constructor into another
//  constructor. Let’s create a Warrior and a Healer constructor.

// Initialize Warrior constructor

function Hero(name, level) {
    this.name = name;
    this.level = level;
  }

function Warrior(name, level, weapon){
    Hero.call(this, name, level)

    this.weapon = weapon
}

function Healer(name, level, spell){
    Hero.call(this, name, level)

    this.spell = spell
}

// create method in a constructor using prototype 

Warrior.prototype.attack = function() {
    return `${this.name} attacks with this ${this.weapon}!`
}

Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`;
  }

  const hero2 = new Warrior("Cris", "26", "Computer")
  const hero3 = new Healer("Thea", "26", "Cooking")

hero2.attack()


Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// All other prototype methods added below

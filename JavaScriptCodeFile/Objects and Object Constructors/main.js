
// There are multiple ways to define objects but in most cases, it is best to use the object literal syntax as follows:

const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
      // do stuff!
    }
}

// dot notation
myObject.property // 'Value!'

// bracket notation
myObject["obnoxious property"] // [Function]


const variable = 'property'

myObject.variable // this gives us 'undefined' because it's looking for a property named 'variable' in our object

myObject[variable] // this is equivalent to myObject['property'] and returns 'Value!'


// ♦ Objects as a design pattern ♦

// example one
const playerOneName = "tim"
const playerTwoName = "jenn"
const playerOneMarker = "X"
const playerTwoMarker = "O"

// example two
const playerOne = {
  name: "tim",
  marker: "X"
}

const playerTwo = {
  name: "jenn",
  marker: "O"
}

function printName(player) {
    console.log(player.name)
}

console.log(playerOneName)
console.log(playerTwoName)


function gameOver(winningPlayer){
    console.log("Congratulations!")
    console.log(winningPlayer.name + " is the winner!")
}

// ♦ Object constructors ♦

function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function(){
      console.log(name);
    }
}

// and which * !  you use by calling the function with the keyword new.

const player1 = new Player('steve', 'X')
const player2 = new Player('cris', 'Y')
console.log(player1.name) // 'steve'
player1.sayName

// Just like with objects created using the Object Literal method, you can add functions to the object:










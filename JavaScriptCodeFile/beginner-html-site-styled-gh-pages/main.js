alert("hello")

// let myVariable = "Bob"
// myVariable = "John"

// const myHeading = document.querySelector("h1") //<= This is object
// // ♦ Variables ♦ ~ String, Number ,Boolean, Array, Objects 

// myHeading.textContent = myVariable 

// ♦ Operator ♦~ Addition, Subtraction, Multiplication, Division, Assignment
// Strict equality [===], Not, Does-not-equal [!,!==]

// ♦ Mixing data types ♦ can lead to some strange results when performing
//  calculations. Be careful that you are referring to your variables correctly,
//  and getting the results you expect.

// ♦ Conditionals ♦~ Conditionals are code structures used to test
//  if an expression returns true or not.


let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

// ♦ Functions ♦ are a way of packaging functionality that you wish to reuse. It's 
// possible to define a body of code as a function that executes when you call the 
// function name in your code. This is a good alternative to repeatedly writing 
// the same code. 
// ~Functions often take arguments: bits of data they need to do their job. Arguments
//  go inside the parentheses, separated by commas if there is more than one argument.

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

let a = multiply(4, 7);
let b = multiply(20, 20);
let c = multiply(0.5, 3);

console.log(a);
console.log(b);
console.log(c);

// Events ~ Real interactivity on a website requires event handlers. These are code
// structures that listen for activity in the browser, and run code in response

document.querySelector("html").addEventListener("click", () => {
    alert("Stop Poking me!")
})


// ###Adding an image changer

const myImage = document.querySelector("img")


myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src")
    if (mySrc === "images/firefox-icon.png") {
        myImage.getAttribute("src", "images/firefox2.jpg")
    } else {
        myImage.getAttribute("src", "images/firefox-icon.png")
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.")
    localStorage.setItem("name", myName)
    myHeading.textContent = `Mozilla is cool, ${myName}`
}

if (!localStorage.getItem("name")){
    setUserName()
} else {
    const storedName = localStorage.getItem("name")
    myHeading.textContent = `Mozilla is cool, ${storedName}`
}

myButton.onclick = () => {
    setUserName()
    console.log("Yahoo");
}

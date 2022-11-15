
// import colored buttons for Simon
const redBtn = document.querySelector(".red")
const greenBtn = document.querySelector(".green")
const blueBtn = document.querySelector(".blue")
const yellowBtn = document.querySelector(".yellow")
// import menu buttons
const startBtn = document.querySelector(".start")
const quitBtn = document.querySelector(".quit")


// create a temp dynamic array to store computer chosen sequence
// red = box1; green = box2; blue = box3; yellow = box4
// create function to choose box
// if box# selected then change(blink) color accordingly
// store box selected into temp array
// take user input && if userInput === computerSequence => continue; else "GAME OVER" & break;
// generate new box# to select, blink then append to temp array that stores computer generated sequence
// take user input and compare to stored computer input and continue cycle
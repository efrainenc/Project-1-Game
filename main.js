
// import colored buttons for Simon
const redBtn = document.querySelector(".red")
const greenBtn = document.querySelector(".green")
const blueBtn = document.querySelector(".blue")
const yellowBtn = document.querySelector(".yellow")
// import menu buttons
const startBtn = document.querySelector(".start")
const quitBtn = document.querySelector(".quit")


// create a temp dynamic array to store computer chosen sequence
// create function to choose color
// if color selected then change(blink) color accordingly
// store color selected into temp array
// take user input && if userInput === computerSequence => continue; else "GAME OVER" & break;
// generate new color to select, blink then append to temp array that stores computer generated sequence
// take user input and compare to stored computer input and continue cycle until user fails.

// to store player color choices
let playerChoice = [];


// starts game and displays first sequence sequence
function startGame(){

    //nextLvl();
}

// call this to find new color; (if user correct then push this return to computerChoice array)
function newColor(){
    // store possible choices
    const colors = ["red", "green", "blue", "yellow"];
    // select random number from array & return
    const randColor = colors[Math.floor(Math.random() * colors.length)];
    return randColor;
}

// begins the next level and pushes new color to the array
function nextLvl(){
    const computerChoice = [];
    computerChoice.push(newColor());
}


function tempFunction(){

}
// Simons Colored Button Listeners
redBtn.addEventListener("click", tempFunction);
greenBtn.addEventListener("click", tempFunction);
blueBtn.addEventListener("click", tempFunction);
yellowBtn.addEventListener("click", tempFunction);
// Menu Event Listeners
startBtn.addEventListener("click", startGame);
quitBtn.addEventListener("click", tempFunction);
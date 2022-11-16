
// import colored buttons for Simon
const redBtn = document.querySelector(".red");
const greenBtn = document.querySelector(".green");
const blueBtn = document.querySelector(".blue");
const yellowBtn = document.querySelector(".yellow");
const simonBtns = document.querySelectorAll(".simon");
console.log(simonBtns)
// import menu buttons
const startBtn = document.querySelector(".start");
const quitBtn = document.querySelector(".quit");

//////////
// Psuedo
// if color selected then change(blink) color accordingly
// store color selected into temp array
// take user input && if userInput === computerSequence => continue; else "GAME OVER" & break;
// generate new color to select, blink then append to temp array that stores computer generated sequence
// take user input and compare to stored computer input and continue cycle until user fails.

//////////////////////////////////
// Global Variables to keep score
let score = 0;
let highScore = 0;
let playerChoice = [];
let compColor = [];


// call this to find new color; (if user correct then push this return to computerChoice array)
function newColor(){
    // store possible choices
    const colors = ["red", "green", "blue", "yellow"];
    // select random number from array & return
    const randColor = colors[Math.floor(Math.random() * colors.length)];
    return randColor;
}

// pushes new color to the array & starts the next level
async function nextLvl(){
    let computerChoice = [];
    computerChoice.push(newColor());
    const computerInput = await startLvl(computerChoice);
    console.log(computerInput);

    // await user input
    const userInput = await userPlay(computerChoice);
    console.log(userInput)
    // if user input matches computer input then begin next lvl
    if(computerInput === userInput){
        console.log("WE IN!")
        score++;
        document.querySelector(".currScore").innerHTML = `Current Score: ${score}`
        nextLvl();
    }
}

// starts game and displays first sequence
function startGame(){
    //
    nextLvl();
}
function quitGame(){
    // ends the game by resetting and emptying all values back to default
}

// blinks the colors passed in from startLvl
function blinkColor(color){
    // will call button value ".color" to blink white
    const blink = document.querySelector(`.${color}`);
    console.log(color)
    blink.style.backgroundColor = "white";
    // reverts to original color (.5sec blink duration)
    setTimeout(() => blink.style.backgroundColor = "", 180);
}

function userPlay(computerChoice){
    // to store player color choices
    console.log("Waiting for player input")
    for(let i=0; i<computerChoice.length; i++){
        playerChoice.push(readUserInput);
    }
    return playerChoice;
}

// takes the computer generated color choice array and calls blink function for each color element in array;
function startLvl(computerChoice){
    for(let i=0; i<computerChoice.length; i++){
        setTimeout(blinkColor(computerChoice[i]), 1000);// waits 1 second before blinking
    }
    return computerChoice;
}


function readUserInput(){
    // Simons Colored Button Listeners
    redBtn.addEventListener("click", () =>{
        return `${redBtn.className}`;
    });
    greenBtn.addEventListener("click", () =>{
        return `${greenBtn.className}`;
    });
    blueBtn.addEventListener("click", () =>{
        return `${blueBtn.className}`;
    });
    yellowBtn.addEventListener("click", () =>{
        return `${yellowBtn.className}`;
    });
}

// Menu Event Listeners
startBtn.addEventListener("click", startGame)
quitBtn.addEventListener("click", quitGame);
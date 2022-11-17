
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
let compColor = [];
let playerChoice = [];


// Randomly selects color and outputs it
function newColor(){
    // store possible choices
    const colors = ["red", "green", "blue", "yellow"];
    // select random number from array & return
    const randColor = colors[Math.floor(Math.random() * colors.length)];
    return randColor;
}



// Generates a new color sequence and awaits user input
async function nextLvl(computerChoice){
    const computerInput = await startLvl(computerChoice);
    console.log(computerInput[0]);

    // await user input
    const userInput = await userPlay(computerChoice);
    console.log(userInput)
    // if user input matches computer input then begin next lvl
    if(computerInput == userInput){
        console.log("WE IN!")
        score++;
        document.querySelector(".currScore").innerHTML = `Current Score: ${score}`
        nextLvl();
    }else{
        console.log("WRONG!");
    }
}

// starts game and displays first sequence
function startGame(){
    let computerChoice = [];
    nextLvl(computerChoice);
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

async function userPlay(computerChoice){
    // toggle to true to allow user inputs
    userPlaying = true;
    console.log("Waiting for player input");
    // temp player storage
    let playerSequence = [];
    // this has to be able to wait for the user to input so it can be stored
    playerSequence = readUserInput(computerChoice);
    // allow for string of inputs
    setTimeout(() => {
        return playerSequence
    }, 4000 * (score+1));
}

// takes the computer generated color choice array and calls blink function for each color element in array;
function startLvl(computerChoice){
    computerChoice.push(newColor());
    for(let i=0; i<computerChoice.length; i++){
        setTimeout(blinkColor(computerChoice[i]), 1000);// waits 1 second before blinking
    }
    return computerChoice;
}


function readUserInput(score, computerChoice){
    playerChoice = [];
    // if player and computer inputs same size then return
    setTimeout(() => {
        if(computerChoice.length === playerChoice.length){
            return 
        }else {
            return "Incorrect Input"
        }
    }
    , 3000 * (score+1));
}

// Menu Event Listeners
startBtn.addEventListener("click", startGame)
quitBtn.addEventListener("click", quitGame);

// Simons Colored Button Listeners
redBtn.addEventListener("click", () =>{
    playerChoice.push("red");
    console.log(playerChoice);
});
greenBtn.addEventListener("click", () =>{
    playerChoice.push("green");
    console.log(playerChoice);
});
blueBtn.addEventListener("click", () =>{
    playerChoice.push("blue");
    console.log(playerChoice);
});
yellowBtn.addEventListener("click", () =>{
    playerChoice.push("yellow");
    console.log(playerChoice);
});

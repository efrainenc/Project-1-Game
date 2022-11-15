
// import colored buttons for Simon
const redBtn = document.querySelector(".red")
const greenBtn = document.querySelector(".green")
const blueBtn = document.querySelector(".blue")
const yellowBtn = document.querySelector(".yellow")
// import menu buttons
const startBtn = document.querySelector(".start")
const quitBtn = document.querySelector(".quit")


// if color selected then change(blink) color accordingly
// store color selected into temp array
// take user input && if userInput === computerSequence => continue; else "GAME OVER" & break;
// generate new color to select, blink then append to temp array that stores computer generated sequence
// take user input and compare to stored computer input and continue cycle until user fails.

// to store player color choices
let playerChoice = [];


// call this to find new color; (if user correct then push this return to computerChoice array)
function newColor(){
    // store possible choices
    const colors = ["red", "green", "blue", "yellow"];
    // select random number from array & return
    const randColor = colors[Math.floor(Math.random() * colors.length)];
    return randColor;
}

// pushes new color to the array & starts the next level
function nextLvl(){
    const computerChoice = [];
    computerChoice.push(newColor());
    startLvl(computerChoice);
}

// starts game and displays first sequence
function startGame(){

    nextLvl();
}

// blinks the colors passed in from startLvl
function blinkColor(color){
    // will call value ".color" to blink white
    const blink = document.querySelector(`.${color}`).style.backgroundColor = "white";
    // reverts to original color (.5sec blink duration)
    setTimeout(blink.style.backgroundColor = `.${color}`, 500);
}

// takes the computer generated color choice array and calls blink function for each color element in array;
function startLvl(computerChoice){
    for(let i=0; i<computerChoice.length; i++){
        color = computerChoice[i]; // store computer selected colors to blink
        setTimeout(blinkColor(color), 1000);// waits 1 second before blinking
    }
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
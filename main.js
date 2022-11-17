
// import colored buttons for Simon
const redBtn = document.querySelector(".red");
const greenBtn = document.querySelector(".green");
const blueBtn = document.querySelector(".blue");
const yellowBtn = document.querySelector(".yellow");
const simonBtns = document.querySelectorAll(".simon");
const h2 = document.querySelector("h2");
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
let computerChoice = [];


// Randomly selects color and outputs it
function newColor(){
    // store possible choices
    const colors = ["red", "green", "blue", "yellow"];
    // select random number from array & return
    const randColor = colors[Math.floor(Math.random() * colors.length)];
    return randColor;
}



// Generates a new color sequence and awaits user input
function nextLvl(){
    // generate new CPU sequence
    cpuPlay(computerChoice)
    // reset playerChoice each level
    playerChoice = [];
    setTimeout(() => h2.innerHTML = "YOUR TURN!", (score+1) * 800);
    // wait for user input and check if correct
    setTimeout(() => {
        h2.innerHTML = "TURN OVER!"
        console.log(playerChoice)
        console.log(computerChoice)
        if(computerChoice.length === playerChoice.length){
            h2.innerHTML = "CORRECT"
            score++;
            document.querySelector(".currScore").innerHTML = `Current Score: ${score}`
            if(score > highScore){// set high score
                highScore = score;
                document.querySelector(".highScore").innerHTML = `High Score: ${score}`
            } else if(score === 25){
                alert("YOU WIN! YOU COMPLETED ALL 25 LEVELS!")
            }
            nextLvl();
        }else{
            h2.innerHTML = "GAME OVER!";
            // alert("GAME OVER!")
            return;
        }
    }, (score+1) * 4000);// more time based on score;
}

// starts game and displays first sequence
function startGame(){
    // reset at start
    computerChoice = [];
    score = 0;
    nextLvl();
}

// blinks the colors passed in from cpuPlay
function blinkColor(color){
    // will call button value ".color" to blink white
    const blink = document.querySelector(`.${color}`);
    if(color == "red"){
        blink.style.background = "radial-gradient(lightcoral, rgb(240, 73, 73))";
        // play red sound
    }else if(color == "green"){
        blink.style.background = "radial-gradient(greenyellow, rgb(30, 153, 30))";
        //play green sound
    }else if(color == "blue"){
        blink.style.background = "radial-gradient(skyblue, rgb(72, 72, 255))";
        //play blue sound
    }else if(color == "yellow"){
        blink.style.background = "radial-gradient(lightyellow, gold)";
        //play yellow sound
    }
    // reverts to original color (.5sec blink duration)
    setTimeout(() => blink.style.background = "", 180);
}

// takes the computer generated color choice array and calls blink function for each color element in array;
function cpuPlay(){
    h2.innerHTML = "LOADING..."
    computerChoice.push(newColor());
    computerChoice.forEach((color, i) => {
        setTimeout(() =>{
            blinkColor(color)
        }, (i + 1) * 500);// increments for each element so they dont overlap and blink simultaneously
    });
}

// Menu Event Listeners
startBtn.addEventListener("click", startGame)

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

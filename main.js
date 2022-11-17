
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

/////////////////
// Sound Storage
const sounds = {
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    yellow: new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
};

////////////////////
// Global Variables
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
    // Tells user its their turn
    setTimeout(() => h2.innerHTML = "YOUR TURN!", (score+1) * 800);

    // wait for user input and check if correct
    setTimeout(() => {
        h2.innerHTML = "TURN OVER!"
        console.log(playerChoice)
        console.log(computerChoice)
        if(computerChoice.length === playerChoice.length){
            // if correct, tell user and increment score
            h2.innerHTML = "CORRECT"
            score++;
            document.querySelector(".currScore").innerHTML = `Current Score: ${score}`
            if(score > highScore){// set high score
                highScore = score;
                document.querySelector(".highScore").innerHTML = `High Score: ${score}`
            } else if(score === 25){ // Winning score
                alert("YOU WIN! YOU COMPLETED ALL 25 LEVELS!")
                return;
            }
            nextLvl(); // start next level
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
        sounds.red.play()
        // change page bg red
    }else if(color == "green"){
        blink.style.background = "radial-gradient(greenyellow, rgb(30, 153, 30))";
        //play green sound
        sounds.green.play()
        // change page bg green
    }else if(color == "blue"){
        blink.style.background = "radial-gradient(skyblue, rgb(72, 72, 255))";
        //play blue sound
        sounds.blue.play()
        // change page bg blue
    }else if(color == "yellow"){
        blink.style.background = "radial-gradient(lightyellow, gold)";
        //play yellow sound
        sounds.yellow.play()
        // change page bg yellow
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


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
        console.log(`Player Choice is: ${playerChoice}`)
        console.log(`Computer Choice is: ${computerChoice}`)
        // compares both arrays
        const equals = (playerChoice, computerChoice) => playerChoice.length === computerChoice.length 
        && playerChoice.every((val, i) => val === computerChoice[i]);

        // if both arrays equal then go to next level
        if(equals(playerChoice, computerChoice) === true){
            // if correct, tell user and increment score
            h2.innerHTML = "CORRECT"
            console.log(`CORRECT`)
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
            console.log("Incorrect")
            // alert("GAME OVER!")
            return;
        }
    }, (score+1) * 3000);// more time based on score;
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
        blink.style.boxShadow = "lightcoral 0px 2px 4px 0px, lightcoral 0px 2px 4px 0px";
        // play red sound
        sounds.red.play()
        // change page bg red
    }else if(color == "green"){
        blink.style.background = "radial-gradient(greenyellow, rgb(30, 153, 30))";
        blink.style.boxShadow = "greenyellow 0px 2px 4px 0px, greenyellow 0px 2px 4px 0px";
        //play green sound
        sounds.green.play()
        // change page bg green
    }else if(color == "blue"){
        blink.style.background = "radial-gradient(skyblue, rgb(72, 72, 255))";
        blink.style.boxShadow = "skyblue 0px 2px 4px 0px, skyblue 0px 2px 4px 0px";
        //play blue sound
        sounds.blue.play()
        // change page bg blue
    }else if(color == "yellow"){
        blink.style.background = "radial-gradient(lightyellow, gold)";
        blink.style.boxShadow = "lightyellow 0px 2px 4px 0px, lightyellow 0px 2px 4px 0px";
        //play yellow sound
        sounds.yellow.play()
        // change page bg yellow
    }
    // reverts to original color
    setTimeout(() => blink.style.background = "", 165);
    setTimeout(() => blink.style.boxShadow = "", 165);
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
    blinkColor("red")
    console.log(playerChoice);
});
greenBtn.addEventListener("click", () =>{
    playerChoice.push("green");
    blinkColor("green")
    console.log(playerChoice);
});
blueBtn.addEventListener("click", () =>{
    playerChoice.push("blue");
    blinkColor("blue")
    console.log(playerChoice);
});
yellowBtn.addEventListener("click", () =>{
    playerChoice.push("yellow");
    blinkColor("yellow")
    console.log(playerChoice);
});

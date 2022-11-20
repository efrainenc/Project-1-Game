
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

const level = document.querySelector(".level");

/////////////////
// Sound Storage
const sounds = {
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    yellow: new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
    boot: new Audio ("https://ia601000.us.archive.org/35/items/windowsxpstartup_201910/Windows%20XP%20Startup.wav"),
    start: new Audio ("https://ia601000.us.archive.org/35/items/windowsxpstartup_201910/Windows%20XP%20Start.wav"),
    lose: new Audio ("https://ia601000.us.archive.org/35/items/windowsxpstartup_201910/Windows%20XP%20Shutdown.wav"),
    levelUp: new Audio ("https://ia601000.us.archive.org/35/items/windowsxpstartup_201910/chimes.wav"),
    win: new Audio ("https://ia601000.us.archive.org/35/items/windowsxpstartup_201910/tada.wav")
};

////////////////////
// Global Variables
let score = 0;
let highScore = 0;
let compColor = [];
let playerChoice = [];
let computerChoice = [];

// play windows bootup sound on page open
sounds.boot.play();
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
    setTimeout(() => h2.innerHTML = "YOUR TURN!", (score+1) * 780);

    // wait for user input and check if correct
    setTimeout(() => {
        // compares both arrays
        const equals = (playerChoice, computerChoice) => playerChoice.length === computerChoice.length 
        && playerChoice.every((val, i) => val === computerChoice[i]);

        // if both arrays equal then go to next level
        if(equals(playerChoice, computerChoice) === true){
            // play windows sound
            sounds.levelUp.play();
            // if correct, tell user and increment score
            level.innerHTML = "Correct!⭐"
            score++;
            setTimeout(() => level.innerHTML = `Level: ${score+1}`, 220);
            document.querySelector(".currScore").innerHTML = `Current Score: ${score}`
            if(score > highScore){// set high score
                highScore = score;
                document.querySelector(".highScore").innerHTML = `High Score: ${score}`
            } else if(score === 25){ // Winning score
                alert("YOU WIN! YOU COMPLETED ALL 25 LEVELS!")
                sounds.win.play(); // plays tada sound
                return;
            }
            nextLvl(); // start next level
        }else{
            h2.innerHTML = "GAME OVER!";
            level.innerHTML = "Level: ❌"
            console.log("Incorrect")
            sounds.lose.play();// play losing sound
            // alert("GAME OVER!")
            return;
            // play windows shutdown
        }
    }, ((score/2)+1) * 3000);// more time based on score;
}

// starts game and displays first sequence
function startGame(){
    // play windows start sound
    sounds.start.play();
    // also have recycle bin sound for quiting
    // reset at start
    computerChoice = [];
    score = 0;
    level.innerHTML = "Level: 1"
    document.querySelector(".currScore").innerHTML = "Current Score: 0"
    nextLvl();
}

// blinks the colors passed in from cpuPlay
function blinkColor(color){
    // will call button value ".color" to blink white
    const blink = document.querySelector(`.${color}`);
    if(color == "red"){
        blink.style.background = "radial-gradient(coral, #fe0000)";
        blink.style.boxShadow = "coral 0px 2px 4px 0px, coral 0px 2px 4px 0px";
        // play red sound
        sounds.red.play()
        // change page bg red
    }else if(color == "green"){
        blink.style.background = "radial-gradient(greenyellow, #06ff04)";
        blink.style.boxShadow = "greenyellow 0px 2px 4px 0px, greenyellow 0px 2px 4px 0px";
        //play green sound
        sounds.green.play()
        // change page bg green
    }else if(color == "blue"){
        blink.style.background = "radial-gradient(skyblue, #0000ff)";
        blink.style.boxShadow = "skyblue 0px 2px 4px 0px, skyblue 0px 2px 4px 0px";
        //play blue sound
        sounds.blue.play()
        // change page bg blue
    }else if(color == "yellow"){
        blink.style.background = "radial-gradient(lightyellow, #ffff04)";
        blink.style.boxShadow = "lightyellow 0px 2px 4px 0px, lightyellow 0px 2px 4px 0px";
        //play yellow sound
        sounds.yellow.play()
        // change page bg yellow
    }
    // reverts to original color
    setTimeout(() => blink.style.background = "", 170);
    setTimeout(() => blink.style.boxShadow = "", 170);
}

// takes the computer generated color choice array and calls blink function for each color element in array;
function cpuPlay(){
    setTimeout(() => h2.innerHTML = "LOADING...", 100);
    computerChoice.push(newColor());
    computerChoice.forEach((color, i) => {
        setTimeout(() =>{
            blinkColor(color)
        }, (i + 1) * 610);// increments for each element so they dont overlap and blink simultaneously
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

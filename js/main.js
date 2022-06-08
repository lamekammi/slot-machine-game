/*----- constants -----*/
const items = [
    '🖤',
    '💛',
    '💙',
    '💜',
    '💚',
    '🧡',
    '❤️️',
    '💗'
];

/*----- app's state (variables) -----*/
let winner = null;
let gameEnded = false;

/*----- cached element references -----*/
const slotMach = document.getElementById('slot-machine');
const squareEl1 = document.getElementById('square');
const squareEl2 = document.getElementById('square2');
const squareEl3 = document.getElementById('square3');
const leverButt = document.getElementById('lever');
const resetGameButt = document.getElementById('reset-game');
const scoreboardEl = document.getElementById('score-board');
const changeMessage = document.getElementById('message');
const winEl = document.getElementById('win');
const loseEl = document.getElementById('lose');

//console.log(boxesEl.textContent);

/*----- event listeners -----*/
leverButt.addEventListener('click', leverFunc);
resetGameButt.addEventListener('click', resetGame);

/*----- functions -----*/
function leverFunc(clicked) {
    if (clicked) {
        leverButt.disabled = true
        changeMessage.textContent = 'Spinning! Wait to see if you win~';
        spin(squareEl1);
        spin(squareEl2);
        spin(squareEl3);
        
        //spin()
    }

    //console.log('i am clicked')
}

function resetGame(clicked2) {
    if (clicked2) {
        changeMessage.textContent = 'Click the "Lever" button to start the game!';
    }
}

function getRandomIndex() {
    let currIdx = items.length
    return Math.floor(Math.random() * currIdx);
}

function spin(squareEl) {
    let index = getRandomIndex()
    squareEl.textContent = items[index];
    const spinInterval = Math.floor(Math.random() * (700 - 300) + 300);
    const interval = setInterval(() => {
        index = index === items.length - 1 ? 0 : index + 1;
        squareEl.textContent = items[index];
    }, spinInterval); 
    setTimeout(() => {
        clearInterval(interval);
        determineGameStatus();
    }, 6000);   
}

function determineGameStatus() {
    if (gameEnded) return;
    gameEnded = true;
    leverButt.disabled = false;
    [squareEl1.textContent, squareEl2.textContent, squareEl3.textContent]
        .every(x => x === squareEl1.textContent) ? win() : lose()
}
 function win() {
    changeMessage.textContent = "YOU ARE A WINNERWINNER CHICKEN DINNER";
    gameEnded = false;
}

function lose() {
    changeMessage.textContent = "YOU ARE A LOSERLOSER CHICKEN NOT DINNER";
    gameEnded = false;
}

// do after MVP is done.
function updateScore() {

}

//
//win logic:
//use the && and/or || operators to run thru each boxesEl to check if
//each of the items it lands on are the same item. if TRUE display a win Message

//else return a LOSE message.

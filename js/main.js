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
const squareEl1 = document.getElementById('square');
const squareEl2 = document.getElementById('square2');
const squareEl3 = document.getElementById('square3');
const leverButt = document.getElementById('lever');
const resetGameButt = document.getElementById('reset-game');
const changeMessage = document.getElementById('message');
const winEl = document.getElementById('win');
const loseEl = document.getElementById('lose');

/*----- event listeners -----*/
leverButt.addEventListener('click', leverFunc);
resetGameButt.addEventListener('click', resetGame);

/*----- functions -----*/
function leverFunc(clicked) {
    if (clicked) {
        leverButt.disabled = true
        resetGameButt.disabled = true
        changeMessage.textContent = 'Spinning! Wait to see if you win~';
        spin(squareEl1, true);
        spin(squareEl2);
        spin(squareEl3);
    }
}

function resetGame(clicked2) {
    if (clicked2) {
        changeMessage.textContent = 'Click the "Lever" button to start the game!';
        winEl.textContent = 0;
        loseEl.textContent = 0;
    }
}

function getRandomIndex() {
    let currIdx = items.length
    return Math.floor(Math.random() * currIdx);
}

function spin(squareEl, isFirst = false) {
    let index = getRandomIndex()
    squareEl.textContent = items[index];
    const spinInterval = Math.floor(Math.random() * (700 - 300) + 300);
    const interval = setInterval(() => {
        index = index === items.length - 1 ? 0 : index + 1;
        squareEl.textContent = items[index];
    }, spinInterval); 
    setTimeout(() => {
        clearInterval(interval);
        if (isFirst) determineGameStatus();
    }, 6000);   
}

function determineGameStatus() {
    if (gameEnded) return;
    gameEnded = true;
    leverButt.disabled = false;
    resetGameButt.disabled = false;
    [squareEl1.textContent, squareEl2.textContent, squareEl3.textContent]
        .every(x => x === squareEl1.textContent) ? win() : lose()
}
 function win() {
    changeMessage.textContent = "YOU ARE A WINNERWINNER CHICKEN DINNER";
    gameEnded = false;
    winEl.textContent = Number(winEl.textContent) + 1;
}

function lose() {
    changeMessage.textContent = "YOU ARE A LOSERLOSER CHICKEN NOT DINNER";
    gameEnded = false;
    loseEl.textContent = Number(loseEl.textContent) + 1;
}

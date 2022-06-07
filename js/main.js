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
let defualt = '⚫️';
let squares = [null, null, null];

/*----- cached element references -----*/
const slotMach = document.getElementById('slot-machine');
const squaresEl = document.querySelectorAll('.square');
const leverButt = document.getElementById('lever');
const resetGameButt = document.getElementById('reset-game');
const scoreboardEl = document.getElementById('score-board');
const changeMessage = document.getElementById('message');
const boxesEl = document.getElementById('box');

/*----- event listeners -----*/
leverButt.addEventListener('click', leverFunc);
resetGameButt.addEventListener('click', resetGame);

/*----- functions -----*/
function leverFunc(leverClicked) {
  
    console.log('i am clicked')
}

function resetGame() {
    winner = null;
    defualt = '⚫️';
    console.log('i am also clicked');
}

function initGame() {

}

function spin() {
    
}

// do after MVP is done.
function updateScore() {

}


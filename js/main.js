/*----- constants -----*/
const items = {

};

/*----- app's state (variables) -----*/
let winner, squares2, changeMessage;

/*----- cached element references -----*/
const slotMach = document.getElementById('slot-machine');
const squares = document.querySelectorAll('.square');
const leverButt = document.getElementById('lever');
const resetGameButt = document.getElementById('reset-game');
const scoreboardEl = document.getElementById('score-board');

/*----- event listeners -----*/
leverButt.addEventListener('click', leverFunc);
resetGameButt.addEventListener('click', resetGame);

/*----- functions -----*/
function leverFunc() {
    console.log('i am clicked');
}

function resetGame() {
    console.log('i am also clicked');
}

function initGame() {

}

function spin() {

}

function updateScore() {

}


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
const squareEl1 = document.getElementById('square');
const squareEl2 = document.getElementById('square2');
const squareEl3 = document.getElementById('square3');
const leverButt = document.getElementById('lever');
const resetGameButt = document.getElementById('reset-game');
const scoreboardEl = document.getElementById('score-board');
const changeMessage = document.getElementById('message');
//const boxesEl = document.querySelectorAll('.box');
//console.log(boxesEl.textContent);

/*----- event listeners -----*/
leverButt.addEventListener('click', leverFunc);
resetGameButt.addEventListener('click', resetGame);

/*----- functions -----*/
function leverFunc(clicked) {
    if (clicked) {
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
    squareEl.textContent = getRandomIndex();
    setInterval(() => {
        const currentIndex = squareEl.getAttribute('value')
        console.log(currentIndex)
        squareEl.textContent = currentIndex
    }, 1000) 

    
    
}
// function shuffle(item) {
//     let currIdx = item.length, randomIdx;
//     while (currIdx != 0) {
//         randomIdx = Math.floor(Math.random() * currIdx);
//         currIdx--;
//         [item[currIdx], item[randomIdx]] = [item[randomIdx], item[currIdx]];
//     } 
//     console.log(item)
//     return item;
//     }


//for (const value of items) {
    //console.log(value);
//}

// do after MVP is done.
function updateScore() {

}

//
//win logic:
//use the && and/or || operators to run thru each boxesEl to check if
//each of the items it lands on are the same item. if TRUE display a win Message

//else return a LOSE message.
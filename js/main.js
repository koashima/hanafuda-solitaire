/*----- constants -----*/
class Deck { 
    constructor(){
        this.deck = [];

        const suits = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        const values = [0, 1, 2, 3];

        for(let suit in suits) { 
            for(let value in values) { 
                this.deck.push({0: `${suits[suit]}${values[value]}`, img: `assets/${suits[suit]}${values[value]}.jpg`});
            }
        }
    }
    shuffle() {
        const deck = this.deck;
        let m = deck.length;
        let i;

        while (m) {
            i = Math.floor(Math.random() * m--);
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }
        return deck;
    }

}

const deck = new Deck;

const wildCard = 'nov';

/*----- app's state (variables) -----*/

let board = []

let bombArr = []

let handArr = []

/*----- cached element references -----*/

let gameBoard = document.querySelector('.board');

let handStack = document.querySelector('.hand-stack');

let endGameMessage = document.querySelector('.message');


/*----- event listeners -----*/

/*----- functions -----*/
init();

function drawBoard(){
    gameBoard.innerHTML = "";
    handStack.innerHTML = "";

    createBoard();
    createHandStack();
}

function shuffleDeckAndDeal(){
    let sDeck = deck.shuffle();
    handArr = sDeck.splice(0, 4);
    board = sDeck;
}

function createBoard(){
    for(i = 0; i < 44; i++){
        const card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML= `<img src="${board[i].img}">`;
        // card.innerHTML= board[i][0];
        gameBoard.appendChild(card);
        card.addEventListener('click', swapCard);
    }
}


function createHandStack(){
    for(i = 0; i < 4; i++){
        let handCard = document.createElement('div');
        handCard.classList.add('card');
        handCard.innerHTML= `<img src="${handArr[i].img}">`;
        handStack.appendChild(handCard);
    }
}


function swapCard(e){ 
        console.log(e.target)
        handArr.push(e.target)
        // [board[i], board[i]] = [handArr.push(board[i]), handArr.shift()];

    drawBoard();
}


function init() {
    shuffleDeckAndDeal();
    createBoard();
    createHandStack();
}





// bombArr = handArr.filter(removeBomb);

// function removeBomb(arr){ 
//     for(let i = 0; i < 4; i++){
//         let bomb = arr[i][0];
    
//     }
// }



// function swapCard(e){ 
//     console.log(e.target)
//     for(let i = 0; i < board.length; i++){
//         if(board[i][0] == e.target){ 
//             console.log()
//             [board[i], board[i]] = [handArr.push(board[i]), handArr.shift()];
//         }
//     }
//     drawBoard();
// }











// const checkForWin = () => {
//     let matchedCols = 0;
//     for (let i = 0; i < 44; i += 4) {
//         let currentColumnStreak = 0;
//         let lastSeen = null;
//         for (let x = i; x < 44; x++) {
//              if (lastSeen === null) {
//                 lastSeen = board[x];
//                 console.log(board[x]);
//                 currentColumnStreak++;
//              } else if (lastSeen === board[x]){
//                 currentColumnStreak++;
//                 if (currentColumnStreak === 4) matchedCols++;
//              } else {
//                 currentColumnStreak = 0;
//              }
//         }
//     }
//     if (matchedCols === 11) endGameMessage.innerHTML = `you won`;
// }
// checkForWin()


// const checkForWin = () => {
//     let matchedCols = 0;
//     for (let i = 0; i < 44; i += 3) {
//         let currentColumnStreak = 0;
//         let lastSeen = null;
//         for (let x = i; x < 44; x++) {
//              if (lastSeen === null) {
//                 lastSeen = board[x];
//                 currentColumnStreak++;
//              } else if (lastSeen === board[x]){
//                 currentColumnStreak++;
//                 if (currentColumnStreak === 4) matchedCols++;
//              } else {
//                 currentColumnStreak = 0;
//              }
         
//         }
//     }

//     if (matchedCols === 11) return true;
// }





// const checkForWin = () => {
//     for (let i = 0; i < 44; i += 4) {
//         if (!(board[i]==board[i+1])&&(board[i+1]==board[i+2])&&(board[i+2]==board[i+3])) {
//             console.log(endGameMessage.innerHTML = `you lost`);
//             return; 
//         } else {
//             endGameMessage.innerHTML = `you won`; 
//         }
// }
// }
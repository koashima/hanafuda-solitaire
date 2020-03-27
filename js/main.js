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

let wildArr = []

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
    //let filteredBoard = board.filter((element)=> element.kind !== "nov");
    for(i = 0; i < board.length; i++){
        const card = document.createElement('div');
        card.classList.add("card");
        // make inner html the number
        card.innerHTML= board[i][0];
        gameBoard.appendChild(card);
        card.addEventListener('click', swapCard);
    }
    createHandStack();
}
function createBoard(){
    // shuffle card deck
    let sDeck = deck.shuffle();
    // take hand out of shuffled deck 
    handArr = sDeck.splice(0, 4);

    board = sDeck;
    // set board to store the shuffled deck
    for(i = 0; i < 44; i++){
        const card = document.createElement('div');
        card.classList.add("card");
        // make inner html the number
        // card.innerHTML= board[i][0];
        card.innerHTML= board[i][0];
        gameBoard.appendChild(card);
        card.addEventListener('click', swapCard);
    }
}

function createHandStack(){
    for(i = 0; i < 4; i++){
        let handCard = document.createElement('div');
        handCard.classList.add('card');
        handCard.innerHTML = handArr[i][0];
        handStack.appendChild(handCard);
    }
}


function swapCard(e){ 
    for(let i = 0; i < board.length; i++){
        if(board[i][0] == e.target.innerHTML){ 
            // takes clicked card and moves it to the end of handArr and puts the first
            // card in handArr and puts it where clicked card was.
            [board[i], board[i]] = [handArr.push(board[i]), handArr.shift()];
            
        }
    }
    // if clicked item is wildCard put in wildArr
    drawBoard();
}

const checkForWin = () => {
    let matchedCols = 0;
    for (let i = 0; i < 44; i += 4) {
        let currentColumnStreak = 0;
        let lastSeen = null;
        for (let x = i; x < 44; x++) {
             if (lastSeen === null) {
                lastSeen = board[x];
                console.log(board[x]);
                currentColumnStreak++;
             } else if (lastSeen === board[x]){
                currentColumnStreak++;
                if (currentColumnStreak === 4) matchedCols++;
             } else {
                currentColumnStreak = 0;
             }
        }
    }
    if (matchedCols === 11) endGameMessage.innerHTML = `you won`;
}

checkForWin()
function init() {
    createBoard();
    createHandStack();
}


// function removeNov(){ 
//     bombStack = handArr.filter(function(el){
//         el.
//     });
// }
function render(){ 
   
}


//card.innerHTML= `<img src="${board[i].img}">`;

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
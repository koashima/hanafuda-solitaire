/*----- constants -----*/
class Deck { 
    constructor(){
        this.deck = [];

        const suits = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        const values = [1, 2, 3, 4];

        for(let suit in suits) { 
            for(let value in values) { 
                this.deck.push(`${suits[suit]} ${values[value]}`);
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

/*----- app's state (variables) -----*/

let board = []

let bombStack = []

let handArr = []

/*----- cached element references -----*/

let gameBoard = document.querySelector('.board');

let handStack = document.querySelector('.hand-stack')



/*----- event listeners -----*/

/*----- functions -----*/


createBoard();

createHandStack();

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
        card.innerHTML= board[i];
        gameBoard.appendChild(card);
        card.addEventListener('click', swapCard);
    }
    
}

function createHandStack(){
    for(i = 0; i < 4; i++){
        let handCard = document.createElement('div');
        handCard.classList.add('card');
        handCard.innerHTML = handArr[i];
        handStack.appendChild(handCard);
    }
}


function swapCard(e){ 
    for(let i = 0; i < board.length; i++){
        if(board[i] == e.target.innerHTML){
            [board[i], board[i]] = [handArr.push(board[i]), handArr.shift()];
        }
    }
}


function init() {
}

function render(){ 

}




// handArr.forEach( hand => {
//     let handCard =  document.createElement('div');
//     handCard.classList.add('card');
//     handStack.appendChild(handCard);   
// });


// let targetInd =  e.target.innerHTML;
//     const isEqual = function(element){ 
//         element == e.target.innerHTML;
//     }
//     console.log(board.findIndex(isEqual));
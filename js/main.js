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
            [deck[m], deck [i]] = [deck[i], deck[m]];
        }
        return deck;
    }

}

const deck = new Deck;

/*----- app's state (variables) -----*/

let board = []

let bombStack = []

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
    // set board to store the shuffled deck
    board = sDeck;
    for(i = 0; i < 44; i++){
        const card = document.createElement('div');
        card.classList.add("card");
        // make inner html the number
        card.innerHTML = sDeck[i];
        gameBoard.appendChild(card);
    }
}

function swap(){ 

}

function init() {

}

function render(){ 

}

function createHandStack(){
    for(i = 0; i < 4; i++){
        let handCard = document.createElement('div');
        handCard.classList.add('card');
        handCard.innerHTML = handArr[i];
        handStack.appendChild(handCard);
    }
}





// handArr.forEach( hand => {
//     let handCard =  document.createElement('div');
//     handCard.classList.add('card');
//     handStack.appendChild(handCard);
    
// });
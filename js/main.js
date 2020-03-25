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
    }
}

const deck = new Deck;

/*----- app's state (variables) -----*/

let board = []
let hand = []

let bombStack = []

/*----- cached element references -----*/



const gameBoard = document.querySelector('.board');

/*----- event listeners -----*/



/*----- functions -----*/

function init() {

}

createBoard();

function createBoard(){
    // board array
    board = [
        null, null, null, null,
        null, null, null, null,
        null, null, null, null,
        null, null, null, null, 
        null, null, null, null, 
        null, null, null, null, 
        null, null, null, null, 
        null, null, null, null, 
        null, null, null, null, 
        null, null, null, null, 
        null, null, null, null, 
        null, null, null, null];

    // shuffle card deck (do this before or after?)
    for(i = 0; i < 48; i++){
        const card = document.createElement('div');
        card.classList.add("card");
        // make inner html the number
        card.innerHTML = deck.deck[i];
        // card.innerHTML = i; (deck[i].value)
        gameBoard.appendChild(card);
    }
}

function shuffle(){

}



function swap(){ 

}









function render(){ 

}
/*----------------- DECLARATIONS -----------------*/

let first = getRandomCard();
let second = getRandomCard();
let cards = [first,second]
let sum = cards[0]+cards[1]; 
let blackjack = false;let alive = true;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")

/*----------------- RANDOM CARDS -----------------*/

function getRandomCard(){
    let randnum = Math.floor(Math.random()*13)+1
    if(randnum === 11 && randnum === 12 && randnum == 13){
        randnum = 10
    }
    else if(randnum == 1){
        randnum = 11
    }
    else{
        return randnum
    }
}

/*----------------- Rendering the cards -----------------*/

function renderGame(){
    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }else if(sum === 21){
        blackjack = true;
        message = "You've got blackjack";
    }else {
        alive = false;
        message = "Youre out of the game";
    }
    sumEl.textContent = "Sum: "+sum;
    cardEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length;i++){
        cardEl.textContent += cards[i] + " ";
    }
    messageEl.textContent = message;
}

function start(){
    renderGame()
}

function newCard(){
    let newcard = getRandomCard()
    sum += newcard
    cards.push(newcard)
    renderGame()
}
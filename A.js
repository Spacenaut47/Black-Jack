/*-----------------Declarations------------------*/

let cards = []
let sum = 0; 
let blackjack = false;let alive = false;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")
let first = 0
let second = 0
let newcard = 0

/*-----------------Random Card Generator------------------*/

function getRandomCard(){
    let randnum = Math.floor(Math.random()*13)+1
    if(randnum > 10){
        return 10
    }
    else if(randnum == 1){
        return 11
    }
    else{
        return randnum
    }
}

/*-----------------Rendering the game------------------*/

function renderGame(){
    if(sum <= 20){
        alive = true
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        blackjack = true
        message = "You've got blackjack"
    }else {
        alive = false;
        message = "Youre out of the game"
    }
    sumEl.textContent = "Sum: "+sum;
    cardEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length;i++){
        cardEl.textContent += cards[i] + " "
    }
    messageEl.textContent = message
}

/*-----------------Starting the Game------------------*/

function start(){
    alive = true
    first = getRandomCard()
    second = getRandomCard()
    cards = [first,second]
    sum = cards[0]+cards[1]
    renderGame()
}

/*-----------------Adding New cards---------*/

function newCard(){
    if(alive === true && blackjack === false){
        newcard = getRandomCard()
        sum += newcard
        cards.push(newcard)
        renderGame()
    }
}
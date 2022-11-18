const getDeck=()=>{
    let deck =[]
let test = 0;
for(let i =0;i<=51;i++){
  if(i<14){
    if(i == 0){
      test+=1
      deck.push({val:11, suit:'Hearts', displayVal:'Ace'})
    }
    if(0<i && i<10 ){
      test+=1;
      deck.push({val:test, suit:'Hearts', displayVal:test.toString()})
    }
    if(i==10){
      deck.push({val:10, suit:'Hearts', displayVal:'Jack'})
    }
    if(i==11){
      deck.push({val:10, suit:'Hearts', displayVal:'Queen'})
    }
    if(i==12){
      deck.push({val:10, suit:'Hearts', displayVal:'King'})
    }
  }
  if(12<i){
    if(i == 13){
      test+=1
      deck.push({val:11, suit:'Diamonds', displayVal:'Ace'})
    }
    if(13<i && i<23){
      test+=1
      deck.push({val:(test-10), suit:'Diamonds', displayVal:(test-10).toString()})
    }
    if(i==23){
      test+=1
      deck.push({val:10, suit:'Diamonds', displayVal:'Jack'})
    }
    if(i==24){
      test+=1
      deck.push({val:10, suit:'Diamonds', displayVal:'Queen'})
    }
    if(i==25){
      test+=1
      deck.push({val:10, suit:'Diamonds', displayVal:'King'})
    }

  }
  if(25<i){
    if(i == 26){
      test+=1
      deck.push({val:11, suit:'Clubs', displayVal:'Ace'})
    }
    if(26<i && i<37){
      test+=1
      deck.push({val:(test-23), suit:'Clubs', displayVal:(test-23).toString()})
    }
    if(i==37){
      test+=1
      deck.push({val:10, suit:'Clubs', displayVal:'Jack'})
    }
    if(i==38){
      test+=1
      deck.push({val:10, suit:'Clubs', displayVal:'Queen'})
    }
    if(i==39){
      test+=1
      deck.push({val:10, suit:'Clubs', displayVal:'King'})
    }
  }
  if(39<i){
    if(i == 40){
      test+=1
      deck.push({val:11, suit:'Spades', displayVal:'Ace'})
    }
    if(40<i && i<50){
      test+=1
      deck.push({val:(test-36), suit:'Spades', displayVal:(test-36).toString()})
    }
    if(i==50){
      test+=1
      deck.push({val:10, suit:'Spades', displayVal:'Jack'})
    }
    if(i==51){
      test+=1
      deck.push({val:10, suit:'Spades', displayVal:'Queen'})
    }
    if(i==52){
      test+=1
      deck.push({val:10, suit:'Spades', displayVal:'King'})
    }

  }
}
return deck
}
const blackjackDeck = getDeck();

/**
 * Represents a card player (including dealer).
 * @constructor
 * @param {string} name - The name of the player
 */
class CardPlayer {
  constructor(player){
    this.player = player;
  }
}; //TODO

// CREATE TWO NEW CardPlayers
const dealer = new CardPlayer('dealer') // TODO
const player= new CardPlayer('player') ; // TODO
/**
 * Calculates the score of a Blackjack hand
 * @param {Array} hand - Array of card objects with val, displayVal, suit properties
 * @returns {Object} blackJackScore
 * @returns {number} blackJackScore.total
 * @returns {boolean} blackJackScore.isSoft
 */
let win = true
let dealerHand=[]
let playerHand =[]
let playerScore =0;
let dealerScore =0;
let tableDeck = blackjackDeck
const blackjack =21;
const calcPoints = (hand) => {
  for(let i =0; i<2; i++){
    let card = tableDeck[Math.floor(Math.random()*52)];
    playerHand.push(card);
    for(let j =0;j<1;j++){
      let card = tableDeck[Math.floor(Math.random()*52)];
      dealerHand.push(card);
    }
  }
dealerScore =dealerHand[0].val+dealerHand[1].val
console.log(`Dealers Val: ${dealerScore}`)
return playerHand, dealerHand
}
calcPoints()
/**
 * Determines whether the dealer should draw another card.
 * 
 * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
 * @returns {boolean} whether dealer should draw another card
 */
const dealerShouldDraw = (dealerHand) => {
  if(dealerScore<17){
    let card = tableDeck[Math.floor(Math.random()*52)];
      dealerScore+=card.val
      dealerHand.push(card);
      console.log(`Dealers Val: ${dealerScore}`)
  }
  if(dealerScore>=17 && dealerScore<blackjack){
    return dealerHand
  }
  if(dealerScore==blackjack){
    return dealerHand, win
  }
  if(dealerScore>blackjack){
    return dealerHand, !win
  }
dealerShouldDraw(dealerHand)
return `${dealerHand}`
}
const playerShouldDraw=(playerHand)=>{
  if(playerScore<=17){
    let card = tableDeck[Math.floor(Math.random()*52)];
      playerScore+=card.val
      playerHand.push(card);
      console.log(`Player Val: ${playerScore}`)
  }
  if(playerScore>=17 && playerScore<blackjack){
    return playerHand
  }
  if(playerScore==blackjack){
    return playerHand, win
  }
  if(playerScore>blackjack){
    return playerHand, !win
  }
playerShouldDraw(playerHand)
return playerHand
}

dealerShouldDraw(dealerHand)
playerShouldDraw(playerHand)
/**
 * Determines the winner if both player and dealer stand
 * @param {number} playerScore 
 * @param {number} dealerScore 
 * @returns {string} Shows the player's score, the dealer's score, and who wins
 */
const determineWinner = (playerScore, dealerScore) => {
  let bust =0;
  switch(blackjack){
    case playerScore:
    console.log('Player: Win =>', win)
    case dealerScore:
    console.log('Dealer: Win =>', win)
    break
  }
  if(playerScore>blackjack){
    console.log('Player: BUST => Win =>', !win)
    bust+=1;
    if(dealerScore<blackjack){
      console.log('Dealer: Win =>', win)
    }else{
      console.log('Dealer: Bust => Win =>', !win)
      bust+=1;
    }
  }
  if(dealerScore>blackjack){
    bust+=1;
    console.log('Dealer: Bust => Win =>', !win)
    if(playerScore<blackjack){
      console.log('Player: Win =>', win)
    }else{
      bust+=1;
      console.log('Player: BUST => Win =>', !win)
    }
  }
  if(bust==0){
    if(playerScore<=dealerScore){
      console.log('Dealer: Win =>', win)
    }else{
      console.log('Player: Win =>', win)
    }
  }
  console.log(`\nPlayer Score:${playerScore}\n`, playerHand, `\n Dealer Score:${dealerScore}\n`, dealerHand) 
}
determineWinner(playerScore, dealerScore)
/**
 * Creates user prompt to ask if they'd like to draw a card
 * @param {number} count 
 * @param {string} dealerCard 
 */
const getMessage = (count, dealerCard) => {
  return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
}

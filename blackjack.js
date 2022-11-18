//blackJackCard

const cardDeck = getDeck()
/**
 * Represents a card player (including dealer).
 * @constructor
 * @param {string} name - The name of the player
 */
 class CreatePlayer {
    constructor(name){
        this.name = name;
        this.hand =[];
        this.drawCard= function (){
            console.log(this.name, 'Draws')
            let randomCard = Math.floor(Math.random()*52);
            this.hand.push(cardDeck[randomCard])
        };
    }
 }; //TODO
 // CREATE TWO NEW CardPlayers
 const player = new CreatePlayer('Player');
 const dealer = new CreatePlayer('Dealer');
 console.log(player, dealer)
//  const blackjack =21;
//  let playerScore=0;
//  let dealerScore=0;
 /**
  * Calculates the score of a Blackjack hand
  * @param {Array} hand - Array of card objects with val, displayVal, suit properties
  * @returns {Object} blackJackScore
  * @returns {number} blackJackScore.total
  * @returns {boolean} blackJackScore.isSoft
  */
const calcPoints = (hand) => {
    let blackJackScore = {
        isSoft: true,
        total:0,
        aceCount:0
    }
    for(let i=0 ; i<hand.length;i++){
        if(hand[i].displayVal=='Ace'){
            blackJackScore.aceCount+=1
        }
        if(blackJackScore.aceCount>1){
            if(hand[i].displayVal=='Ace'){
                blackJackScore.aceCount+=1
                hand[i].val = 1
            }else{
                continue
            }
            }
            blackJackScore.total+=hand[i].val
        }
        if(blackJackScore.total>21 && blackJackScore.aceCount>=1){
            blackJackScore.total-=10
    }
    if(blackJackScore.aceCount>0){
        blackJackScore.isSoft=true

        return blackJackScore
    }else{
        blackJackScore.isSoft=false
        return blackJackScore
    }
}
 /**
  * Determines whether the dealer should draw another card.
  * 
  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
  * @returns {boolean} whether dealer should draw another card
  */
 const dealerShouldDraw = (dealerHand) => {
   // CREATE FUNCTION HERE
   let points = calcPoints(dealerHand).total
    let ace = calcPoints(dealerHand).aceCount
    if(points<=16){
        return true
    }
    if(points==17){
        if(ace == 1){
            return true
        }
        return false
    }
}

/**
 * Determines the winner if both player and dealer stand
 * @param {number} playerScore 
 * @param {number} dealerScore 
 * @returns {string} Shows the player's score, the dealer's score, and who wins
 */
const determineWinner = (playerScore, dealerScore) => {
   if(playerScore>21){
       if(dealerScore>21){
           return `
           Player: Bust-> Win -> ${playerScore}
            Dealer: Bust -> Loose -> ${dealerScore}
            Result: You Win`
        }
        return `
        Player: Bust -> ${playerScore}
        Dealer: Win -> ${dealerScore}
        Result: Dealer Wins`
    }
    if(dealerScore>21){
        return `
            Player: Win -> ${playerScore}
            Dealer: Bust -> ${dealerScore}
            Result: You Win`
    }
    if(playerScore==21){
        if(dealerScore==21){
            return `
            Player: TIE -> ${playerScore}
            DealerResult: PUSH`
        }
        return `
            Player: Win -> ${playerScore}
            Dealer: Loose -> ${dealerScore}
            Result: You WIN!`
    }
    if(playerScore==dealerScore){
        return `
        Player: TIE -> ${playerScore}
        Dealer: TIE -> ${dealerScore}: TIE -> ${dealerScore}
        Result: PUSH`
    }

}
 
 /**
  * Creates user prompt to ask if they'd like to draw a card
  * @param {number} count 
  * @param {string} dealerCard 
  */
 const getMessage = (count, dealerCard) => {
   return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
 }
 
 /**
  * Logs the player's hand to the console
  * @param {CardPlayer} player 
  */
 const showHand = (player) => {
   const displayHand = player.hand.map((card) => card.displayVal);
   console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
 }
 
 /**
  * Runs Blackjack Game
  */
 const startGame = function() {
   player.drawCard();
   showHand(player)
   dealer.drawCard();
   showHand(dealer)
   player.drawCard();
   showHand(player)
   dealer.drawCard();
   let dealerScore = calcPoints(dealer.hand).total;
   let playerScore = calcPoints(player.hand).total;

   //#8 Extra Credit:
   if(playerScore ===21 || dealerScore ===21 ){
       if(playerScore===dealerScore){
           showHand(dealer)
           return`
           The Dealer wins a Tied Black Jack
           `
       }
       if(playerScore===21 && dealerScore!==21){
           showHand(dealer)
           return`
           BlackJack You WIN!`
       }
       showHand(dealer)
           return`
           The Dealer wins Black Jack`
   }
  while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
    player.drawCard();
    playerScore = calcPoints(player.hand).total;
    showHand(player);
  }
//    if this condition gets met before it reaches the second loop, it exits the function
//    if (playerScore > 21) {
//      return "You went over 21 - you lose!";
//    }

  console.log(`Player stands at ${playerScore}`);playerScore = calcPoints(player.hand).total;
  #8 Extra Credit:
  if(playerScore ===21 || dealerScore ===21 ){
      if(playerScore===dealerScore){
          showHand(dealer)
          return`
          The Dealer wins a Tied Black Jack
          `
      }
      if(playerScore===21 && dealerScore!==21){
          showHand(dealer)
          return`
          BlackJack You WIN!`
      }
      showHand(dealer)
          return`
          The Dealer wins Black Jack`
  }
 while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
   player.drawCard();
   playerScore = calcPoints(player.hand).total;
   showHand(player);
 }
//    if this condition gets met before it reaches the second loop, it exits the function
//    if (playerScore > 21) {
//      return "You went over 21 - you lose!";
//    }

 console.log(`Player stands at ${playerScore}`);
 showHand(dealer);
   while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
     dealer.drawCard();
     dealerScore = calcPoints(dealer.hand).total;
     showHand(dealer);
   }
//    if this condition gets met before it reaches the return stament, it exits the function
//    if (dealerScore > 21) {
//      return "Dealer went over 21 - you win!";
//    }
   console.log(`Dealer stands at ${dealerScore}`);
//    return 'hre'
  return determineWinner(playerScore, dealerScore);
 }
 console.log(startGame());

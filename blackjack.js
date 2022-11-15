const blackjackDeck = getDeck();

/**
*@constructor
*@param {string} name - The name of the player

*/
class CardPlayer {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
  //selects a card at random from the deck, and adds to hand array
  drawCard() {
    let drawRandomCard = blackjackDeck[Math.floor(Math.random() * blackjackDeck.length)];
    this.hand.push(drawRandomCard);
  }
};

// CREATE TWO NEW CardPlayers
const dealer = new CardPlayer('Dealer');
const player = new CardPlayer('Jeffrey');

/**
 * Calculates the score of a Blackjack hand
 * @param {Array} hand - Array of card objects with val, displayVal, suit properties
 * @returns {Object} blackJackScore
 * @returns {number} blackJackScore.total
 * @returns {boolean} blackJackScore.isSoft
 */
const calcPoints = (hand) => {
  // CREATE FUNCTION HERE
  total = 0;
  acePresent = 0;
  cardValue = 0;

  hand.forEach((card) => {
    if (card.displayVal !== 'Ace') {
      cardValue = card.val;
    } else if (card.displayVal === 'Ace' && total < 21) {
      cardValue = 11;
      acePresent += 1;
    } else if (card.displayVal === 'Ace' && total > 21) {
      cardValue = 1;
      acePresent += 1;
    };//display val

    total += cardValue;

  }); //for each card

  if (acePresent = 1) {
    isSoft = false;
  } else if (acePresent > 1) {
    isSoft = true;
  };

  return { total, isSoft };

}; // calc points

/**
 * Determines whether the dealer should draw another card.
 * 
 * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
 * @returns {boolean} whether dealer should draw another card
 */
const dealerShouldDraw = (dealerHand) => {
  // CREATE FUNCTION HERE

    pointsReturned = calcPoints(dealerHand);
    totalPointsReturned = pointsReturned.total;
    isSoft = pointsReturned.isSoft;

  if (totalPointsReturned <= 16) {
    drawCard = true;
  } else if (totalPointsReturned >= 17) {
    drawCard = false;
  } else if (totalPointsReturned === 17 && isSoft == false) {
    drawCard = true;
  } 
  return drawCard;
};

/**
 * Determines the winner if both player and dealer stand
 * @param {number} playerScore 
 * @param {number} dealerScore 
 * @returns {string} Shows the player's score, the dealer's score, and who wins
 */
const determineWinner = (playerScore, dealerScore) => {
  // CREATE FUNCTION HERE

  if (playerScore === dealerScore) {
    console.log(`Player score is ${playerScore}. Dealer score is ${dealerScore}. A tie!`);
  } else if (playerScore <= 21 && playerScore > dealerScore) {
    console.log(`Player score is ${playerScore}. Dealer score is ${dealerScore}. ${player.name} wins`);
  } else if (dealerScore <= 21 && dealerScore > playerScore) {
    console.log(`Player score is ${playerScore}. Dealer score is ${dealerScore}. ${dealer.name} wins`);
  } else {
    console.log("I am not sure who won. Look for errors");
  }
};

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

const startGame = function () {
  player.drawCard();
  dealer.drawCard();
  player.drawCard();
  dealer.drawCard();

  let playerScore = calcPoints(player.hand).total;
    showHand(player);
  while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
    player.drawCard();
    playerScore = calcPoints(player.hand).total;
    showHand(player);
  }
  if (playerScore > 21) {
    return 'You went over 21 - you lose!';
  }
  console.log(`Player stands at ${playerScore}`);
  let dealerScore = calcPoints(dealer.hand).total;
  while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
    dealer.drawCard();
    dealerScore = calcPoints(dealer.hand).total;
    showHand(dealer);
  }
  if (dealerScore > 21) {
    return 'Dealer went over 21 - you win!';
  }
  console.log(`Dealer stands at ${dealerScore}`);

  return determineWinner(playerScore, dealerScore);
}

console.log(startGame());

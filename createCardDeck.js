/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck = () => {

}
const cardSuit = ["hearts", "diamonds", "spades", "clubs"];
  const faceCards = ["jack", "queen", "king", "ace"];
  const  completeDeck = [];

    for (let i = 0; i < cardSuit.length; i++) {
        let suit = cardSuit[i];

        let numberOfCardsInSuit = 1;
        let cardNumber = 2;
        let faceCardNumber = 0;

          while (numberOfCardsInSuit < 10) {

            if (numberOfCardsInSuit === 10) {
              continue;
            }

              let deck = {
                val: cardNumber,
                displayVal: cardNumber.toString(),
                suit: suit
              }

          completeDeck.push(deck);

          cardNumber +=1;
          numberOfCardsInSuit +=1;

          } // number lt 10

          while ( numberOfCardsInSuit >= 10 && numberOfCardsInSuit <= 12 ) {

            if (numberOfCardsInSuit === 13) {
              break;
            }

              let deck = {            
                  val: 10,   
                  displayVal: faceCards[faceCardNumber],   
                  suit: suit,   
                    } 

             completeDeck.push(deck);

             faceCardNumber +=1;
             numberOfCardsInSuit +=1;       

          } //number between 10 and 12

          while ( numberOfCardsInSuit == 13 ) {

              let deck = {            
                 val: 11,   
                 displayVal: faceCards[faceCardNumber],   
                 suit: suit,   
                 } 

                completeDeck.push(deck);

                numberOfCardsInSuit +=1;   

           } //while 13

        } //for loop

        return completeDeck;
        

// CHECKS
const deck = getDeck();
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];

const cardHasVal = randomCard && randomCard.val && typeof randomCard.val === 'number';
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit = randomCard && randomCard.suit && typeof randomCard.suit === 'string';
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal = randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string';
console.log(`Random card has display value? ${cardHasDisplayVal}`);

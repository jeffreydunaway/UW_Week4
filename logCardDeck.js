const cards = [
  { val: 2, displayVal: '2', suit: 'hearts' },
  { val: 3, displayVal: '3', suit: 'hearts' },
  { val: 4, displayVal: '4', suit: 'hearts' },
  { val: 5, displayVal: '5', suit: 'hearts' },
  { val: 6, displayVal: '6', suit: 'hearts' },
  { val: 7, displayVal: '7', suit: 'hearts' },
  { val: 8, displayVal: '8', suit: 'hearts' },
  { val: 9, displayVal: '9', suit: 'hearts' },
  { val: 10, displayVal: '10', suit: 'hearts' },
  { val: 10, displayVal: 'Jack', suit: 'hearts' },
  { val: 10, displayVal: 'Queen', suit: 'hearts' },
  { val: 10, displayVal: 'King', suit: 'hearts' },
  { val: 11, displayVal: 'Ace', suit: 'hearts' },
  { val: 2, displayVal: '2', suit: 'diamonds' },
  { val: 3, displayVal: '3', suit: 'diamonds' },
  { val: 4, displayVal: '4', suit: 'diamonds' },
  { val: 5, displayVal: '5', suit: 'diamonds' },
  { val: 6, displayVal: '6', suit: 'diamonds' },
  { val: 7, displayVal: '7', suit: 'diamonds' },
  { val: 8, displayVal: '8', suit: 'diamonds' },
  { val: 9, displayVal: '9', suit: 'diamonds' },
  { val: 10, displayVal: '10', suit: 'diamonds' },
  { val: 10, displayVal: 'Jack', suit: 'diamonds' },
  { val: 10, displayVal: 'Queen', suit: 'diamonds' },
  { val: 10, displayVal: 'King', suit: 'diamonds' },
  { val: 11, displayVal: 'Ace', suit: 'diamonds' },
  { val: 2, displayVal: '2', suit: 'clubs' },
  { val: 3, displayVal: '3', suit: 'clubs' },
  { val: 4, displayVal: '4', suit: 'clubs' },
  { val: 5, displayVal: '5', suit: 'clubs' },
  { val: 6, displayVal: '6', suit: 'clubs' },
  { val: 7, displayVal: '7', suit: 'clubs' },
  { val: 8, displayVal: '8', suit: 'clubs' },
  { val: 9, displayVal: '9', suit: 'clubs' },
  { val: 10, displayVal: '10', suit: 'clubs' },
  { val: 10, displayVal: 'Jack', suit: 'clubs' },
  { val: 10, displayVal: 'Queen', suit: 'clubs' },
  { val: 10, displayVal: 'King', suit: 'clubs' },
  { val: 11, displayVal: 'Ace', suit: 'clubs' },
  { val: 2, displayVal: '2', suit: 'spades' },
  { val: 3, displayVal: '3', suit: 'spades' },
  { val: 4, displayVal: '4', suit: 'spades' },
  { val: 5, displayVal: '5', suit: 'spades' },
  { val: 6, displayVal: '6', suit: 'spades' },
  { val: 7, displayVal: '7', suit: 'spades' },
  { val: 8, displayVal: '8', suit: 'spades' },
  { val: 9, displayVal: '9', suit: 'spades' },
  { val: 10, displayVal: '10', suit: 'spades' },
  { val: 10, displayVal: 'Jack', suit: 'spades' },
  { val: 10, displayVal: 'Queen', suit: 'spades' },
  { val: 10, displayVal: 'King', suit: 'spades' },
  { val: 11, displayVal: 'Ace', suit: 'spades' }
];

/**
 * Logs every property of every card to the console
 *
 * @param {array} deck A deck of cards
 */
const logCardDeck = deck => {
  let hearts = []
  let diamonds =[]
  let clubs = []
  let spades =[]
  let jokers =[]
  let deckSize = deck.length
  let cardCount =0
  for(let i=0;i<deck.length;i++){
    if(deckSize==0){
      break
    }
    if(deck[i].suit=='hearts'){
      hearts.push(`\n${deck[i].val} - ${deck[i].displayVal} - ${deck[i].suit}\n`)
      deckSize-=1
      cardCount+=1
      }
    if(deck[i].suit=='diamonds'){
      diamonds.push(`\n${deck[i].val} - ${deck[i].displayVal} - ${deck[i].suit}\n`)
      deckSize-=1
      cardCount+=1
    }
    if(deck[i].suit=='clubs'){
      clubs.push(`\n${deck[i].val} - ${deck[i].displayVal} - ${deck[i].suit}\n`)
      deckSize-=1
      cardCount+=1
    }
    if(deck[i].suit=='spades'){
      spades.push(`\n${deck[i].val} - ${deck[i].displayVal} - ${deck[i].suit}\n`)
      deckSize-=1
      cardCount+=1
    }
    if(deck[i].suit=='joker'){
      jokers.push(`\n${deck[i].val} - ${deck[i].displayVal} - ${deck[i].suit}\n`)
      deckSize-=1
      cardCount+=1
    }
  }
  return `
Deck of Hearts:
      ${hearts}
        Total in Set: ${hearts.length}
Deck of Diamonds:
      ${diamonds}
        Total in Set: ${diamonds.length}
Deck of Clubs: 
      ${clubs}
        Total in Set: ${clubs.length}
Deck of Spades:
      ${spades}
        Total in Set: ${spades.length}
  
Jokers: ${jokers.length}
Total Cards in Deck: ${cardCount}`
};
console.log(logCardDeck(cards))

/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
 const getDeck = () => {
  let deck =[]
  let test = 0;
  for(let i =0;i<=52;i++){
    if(i<13){
      if(i == 0){
        test+=1
        deck.push({val:11, suit:'Hearts', displayVal:'Ace'})
      }
      if(0<i && i<10 ){
        test+=1;
        deck.push({val:test, suit:'Hearts', displayVal:test.toString()})
      }
      if(i==10){
        test+=1
        deck.push({val:10, suit:'Hearts', displayVal:'Jack'})
      }
      if(i==11){
        test+=1
        deck.push({val:10, suit:'Hearts', displayVal:'Queen'})
      }
      if(i==12){
        test+=1
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
        deck.push({val:(test-13), suit:'Diamonds', displayVal:(test-13).toString()})
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
      if(26<i && i<36){
        test+=1
        deck.push({val:(test-26), suit:'Clubs', displayVal:(test-26).toString()})
      }
      if(i==36){
        test+=1
        deck.push({val:10, suit:'Clubs', displayVal:'Jack'})
      }
      if(i==37){
        test+=1
        deck.push({val:10, suit:'Clubs', displayVal:'Queen'})
      }
      if(i==38){
        test+=1
        deck.push({val:10, suit:'Clubs', displayVal:'King'})
      }
    }
    if(38<i){
      if(i == 39){
        test+=1
        deck.push({val:11, suit:'Spades', displayVal:'Ace'})
      }
      if(40<i && i<50){
        test+=1
        deck.push({val:(test-39), suit:'Spades', displayVal:(test-39).toString()})
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
  
  console.log(getDeck())
// CHECKS
const deck = getDeck();
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];
console.log(randomCard)
const cardHasVal = randomCard && randomCard.val && typeof randomCard.val === 'number';
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit = randomCard && randomCard.suit && typeof randomCard.suit === 'string';
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal = randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string';

  console.log(`Random card has display value? ${cardHasDisplayVal}`);
  

const cardHasDisplayVal = randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string';
console.log(`Random card has display value? ${cardHasDisplayVal}`);

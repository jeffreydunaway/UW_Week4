/**
 * Determines whether meat temperature is high enough
 * @param {string} kind 
 * @param {number} internalTemp 
 * @param {string} doneness
 * @returns {boolean} isCooked
 */
const foodIsCooked = function(kind, internalTemp, doneness , isCooked=true) {
  if(kind =='chicken'){
    if(internalTemp>165){
      return `\nChiken is Cooked: ${isCooked}`
    }else{
      return `\nChicken is Cooked: ${!isCooked}`
    }
  }
  if(kind==='beef'){
    if(doneness==='rare'){
      if(125<=internalTemp && internalTemp<138){

        return `\nBeef is Cooked: ${isCooked}`
      }else{
        return `\nBeef is Cooked: ${!isCooked}`
      }
    }
    if(doneness==='medium'){
      if(135<=internalTemp && internalTemp<155){
        return `\nBeef is Cooked: ${isCooked}`
      }else{
        return `\nBeef is Cooked: ${!isCooked}`
      }
    }
    if(doneness==='well'){
      if(155<=internalTemp && internalTemp<160){
        return `\nBeef is Cooked: ${isCooked}`
      }else{
        return `\nBeef is Cooked: ${!isCooked}`
      }
    }
  }
}
// Test function
console.log(foodIsCooked('chicken', 90)); // should be false
console.log(foodIsCooked('chicken', 190)); // should be true
console.log(foodIsCooked('beef', 138, 'well')); // should be false
console.log(foodIsCooked('beef', 138, 'medium')); // should be true

console.log(foodIsCooked('beef', 138, 'rare')); // should be false

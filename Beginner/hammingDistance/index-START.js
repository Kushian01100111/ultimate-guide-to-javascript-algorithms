/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    if(!stringA.length === stringB.length) throw new Error('Strings do not have equal length');

    let count = 0;

    for(let i = 0; i < stringA.length; i++){
        if(stringA[i].toLowerCase() !== stringB[i].toLowerCase()) count++
    }
    
  return count
}



module.exports = hammingDistance
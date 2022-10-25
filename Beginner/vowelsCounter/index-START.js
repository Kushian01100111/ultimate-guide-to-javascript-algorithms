/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
const Vowels = ["a", "e", "i", "o", "u"]


function vowelsCounter(text) {
    let amount = 0;

    for(let letter of text.toLowerCase()){
        if(Vowels.includes(letter)) amount++
    }

    return amount
}

// function vowelsCounter(text) {
//     let amount = text.match(/[aeiou]/gi)
//     if (amount) return amount.length
//     else return 0
// }



module.exports = vowelsCounter;

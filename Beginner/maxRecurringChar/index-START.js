/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



// function maxRecurringChar(text) {
//     let charMap={},
//         maxCharValue = 0,
//         maxChar = '';
//     for(let char of text){
//         if(charMap.hasOwnProperty(char))charMap[char]++
//         else charMap[char] = 1;
//     }
//     for(let char in charMap){
//         if(charMap[char] > maxCharValue){
//             maxCharValue= charMap[char]
//             maxChar = char
//         }
//     }
//     return maxChar
// }

function maxRecurringChar(text) {
    let charMap={},
        charArray =[],
        valueArray = [],
        maxCharValue =0;
    for(let char of text){
        if(charMap.hasOwnProperty(char))charMap[char]++
        else charMap[char] = 1;
    }

    charArray  = Object.keys(charMap)
    valueArray = Object.values(charMap)
    maxCharValue =  Math.max(...valueArray)

    return charArray[valueArray.indexOf(maxCharValue)]
}



module.exports = maxRecurringChar;
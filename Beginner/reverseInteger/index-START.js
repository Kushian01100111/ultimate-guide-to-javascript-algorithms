
function reverseString(text){
    return [...text].reduce((acc,char)=> char + acc, '')
}

function reverseInteger(num){
let recersedNumber = parseInt(reverseString(num.toString()))

return ( recersedNumber * Math.sign(num))
}

console.log(reverseInteger(456),654)
console.log(reverseInteger(7126),6217)
console.log(reverseInteger(-456),-654)

/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

// function mergeArrays(...arrays) {
//     let joinArray = []

//     arrays.forEach(array =>{
//         joinArray = [...joinArray, ...array]
//     })

//     return [...new Set([...joinArray])]
// }

// function mergeArrays(...arrays) {
//     let joinArray = []

//     arrays.forEach(array =>{
//         joinArray = [...joinArray, ...array]
//     })

//     const uniqueArray =  joinArray.filter((item, index)=> joinArray.indexOf(item) === index)

//     return uniqueArray
// }


function mergeArrays(...arrays) {
    let joinArray = []

    arrays.forEach(array =>{
        joinArray = [...joinArray, ...array]
    })

    const uniqueArray = joinArray.reduce((newArray,item)=>{
        if(newArray.includes(item)) return newArray
        else return [...newArray, item]
    }, [])

    return uniqueArray
}

module.exports = mergeArrays
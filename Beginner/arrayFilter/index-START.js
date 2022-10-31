function isEven(n){
    return n % 2 === 0
}


function arrayFilter(arr,func){
    for(let elem of arr){
        if(func(elem))return elem
    }
    return undefined
}

function arrayFilter(arr,func){
    let filteredArray =  arr.filter(func)
    return filteredArray[0]? filteredArray[0]: undefined
}

function arrayFilter(arr, func){
    return arr.find(func)
}




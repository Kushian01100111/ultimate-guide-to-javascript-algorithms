
function  rangeSum(arr){
    let sum  = 0;
    for(let i = arr[0]; i < arr[1]; i++){
        sum += 1;
    }

    return sum
}

function  rangeSum(arr){
    return ((arr[1] - arr[0] +1) * (arr[0]+arr[1])) /2;
}


function  rangeSum(arr){
    if(arr[0]== arr[1]) return arr[0];
    else return rangeSum([arr[0], arr[1] -1 ]) + arr[1]
}

function  rangeSum(arr){
    let arrList =[];
    for(let i = arr[0]; i <=arr[1]; i++){
        arrList.push(i)
    }

    return arrList.reduce((acc,num)=> acc + num, 0)
}
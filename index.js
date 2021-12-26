//Write a program to flatten an array.

const flatArray = arr => arr.reduce((acc, next) => acc.concat(Array.isArray(next) ? flatArray(next) : next), [])

const arr= [1,[2,3,[4]],[[5,6],7]];
console.log(flatArray(arr))

// implement map function

function map(arr, callback){
    let newArr = [];
    for(let index = 0; index< arr.length; index++){
       newArr.push(callback(arr[index], index, arr)) 
    }  
    return newArr;
    
 }
let result = map([2,3], (el)=>{return(el*2)})
console.log(result);
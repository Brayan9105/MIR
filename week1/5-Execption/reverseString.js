const reverseString = arr => {
    let newArr = []
    for(let i=arr.length-1; i>=0; i--){
        newArr.push(arr[i])
    }
    return newArr
}

console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))
const addNumsArray = arr => {

    if(arr.length <= 0) return 0

    return arr[arr.length -1] + addNumsArray(arr.slice(0, arr.length -1))
    
}

console.log(addNumsArray([1, 2, 3, 4])); // 10
console.log(addNumsArray([15, 3, 2])); // 20
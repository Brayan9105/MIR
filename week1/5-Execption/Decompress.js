
const Decompress = arr => {
    let newArr = []

    for(let i=0; i<arr.length; i=i+2){
        
        j=0;
        while(j < arr[i]){
            newArr.push(arr[i+1])
            j++;
        }
    }

    return newArr
}

console.log(Decompress([1,2,3,4]))
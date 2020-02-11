const mountainArray = arr => {
    if(arr.length >= 3){
        for(let i=1; i<arr.length-1; i++){
            if( (arr[i] > arr[i-1] && arr[i] > arr[i+1]) && arr[i] < arr.length-1 ){
                return i
            }
        }
    }else{
        return false
    }
}

console.log(mountainArray([0, 1, 0]))
console.log(mountainArray([0, 2, 1, 0]))
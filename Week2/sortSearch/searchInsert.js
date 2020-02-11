const searchInsert = (arr, target) => {
    if(target > arr[arr.length-1]) return 0
    else{
        let start = 0;
        let end = arr.length -1
        let index = Math.floor((end - start) / 2)

        while(start < end){
            if(arr[index] === target) return index

            if(arr[index] > target){
                end = index-1
            }else{
                start = index+1
            }
        }
    }
}

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([1,3,5,6], 0))
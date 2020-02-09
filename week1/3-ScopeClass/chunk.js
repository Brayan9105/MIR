// const chunk = (arr, num) => {
//     let newArr = []
    
//     if(arr.length<num){
//         newArr.push(arr)
//         return newArr
//     }else{
//         let group = []
//         for(let i=0;i<arr.length;i++){
//             group.push(arr[i])
//             if((i+1) %num ===0){
//                 newArr.push(group)
//                 group = []
//             }
//         }

//         if(group.length != 0){
//             newArr.push(group)
//         }
//     }

//     return newArr
    
// }

// chunk([1, 2, 3, 4, 5, 6, 7, 8], 2)
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
// chunk([1, 2, 3, 4, 5], 10)
// console.log(chunk([1, 2, 3, 4], 3))
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))
// console.log(chunk([1, 2, 3, 4, 5], 10))




const chunk = (arr, num) => {
    let newArr = []
    
    for(let i=0;i<arr.length;i +=num){
        newArr.push(arr.slice(i, i+num))
    }
        
    return newArr
}

// chunk([1, 2, 3, 4, 5, 6, 7, 8], 2)
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
// chunk([1, 2, 3, 4, 5], 10)

console.log(chunk([1, 2, 3, 4], 6))
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 6))
console.log(chunk([1, 2, 3, 4, 5], 6))
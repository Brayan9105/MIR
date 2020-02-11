
// const flatten = arr => {
//     const res = [];
//     while(arr.length > 0){
//         // console.log(arr)
//         let lastElem = arr.pop()
//         if(Array.isArray(lastElem)){
//             arr.push(...lastElem) 
//             // console.log(arr)
//         }else{
//             res.push(lastElem)
//         }
//     }
//     return res.reverse()
// }

const flatten = arr => {

    if(arr.length <= 0) return []

    const [first, ...rest] = arr
    if(Array.isArray(first)) return flatten([...first, ...rest])

    return [first].concat(flatten(rest))

}

console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten( [[[1, [1.1]], 2, 3], [4, 5]] )); // [1, 1.1, 2, 3, 4, 5]

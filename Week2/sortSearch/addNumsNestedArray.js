const addNumsNestedArray = arr => {
    
    if(arr.length <= 0) return []

    const [first, ...rest] = arr
    if(Array.isArray(first)) return addNumsNestedArray([...first, ...rest])

    return [first].concat(addNumsNestedArray(rest))
                                                   .reduce( (acc, curr) => acc+curr,0) 

}

console.log(addNumsNestedArray([1, [2, 3], 4])); // 10
console.log(addNumsNestedArray([1, [1, 1], [1, [1, 1]], 1])); // 7




// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

// Input: [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

const transpose = list => {
    let transposeList = []

    for(let i=0; i< list[0].length; i++){
        let innerList = []
        for(let j=0; j<list.length; j++){
            innerList.push(list[j][i])
        }
        
        transposeList.push(innerList)
    }
    return transposeList
}

transpose([[1,2,3],[4,5,6],[7,8,9]]) //[[1,4,7],[2,5,8],[3,6,9]]
transpose([[1,2,3],[4,5,6]]) //[[1,4],[2,5],[3,6]]
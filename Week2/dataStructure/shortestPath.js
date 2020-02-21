
const shortestPath = (matrix, start, end) => {
    // if(start === end) return 0
    // let column = 0
    // let steps = 1
    // while(column < matrix.length){
    //     console.log(matrix[start][column])
    //     steps++
    //     if(steps === 3) return
    //     shortestPath(matrix, start, end)
    //     column++
    // }

    
    let v = matrix.length
    let visited = []
    let distance = []
    distance[0] = 0
    
    for(let i=1; i< v; i++){
        distance[i] = 5000
    }

    for(let i=0; i<v;i++){
        let minVertex = findMinVertex(distance, visited)
        visited[minVertex] = true

        for(let j=0; j<v;j++){
            if(matrix[minVertex][j] != 0 && !visited[j] && distance[minVertex] != 5000){
                let newDist = distance[minVertex] + matrix[minVertex][j]
                if(newDist < distance[j]){
                    distance[j] = newDist
                }
            }
        }
    }

    for(let i=0; i<v; i++){
        console.log(`${i} ${distance[i]}`)
    }


}

const findMinVertex = (distance, visited) => {
    let minVertex = -1
    for(let i=0; i< distance.length; i++){
        if(!visited[i] && (minVertex === -1 || distance[i] < distance[minVertex])){
            minVertex = i
        }
    }
    return minVertex
}

mat = [
        [-1, 10, 5, 0],
        [0, -1, 0, 3],
        [0, 4, -1, 6],
        [0, 0, 0, -1]
    ]

shortestPath(mat, 0, 3); // 11
// shortestPath(mat, 2, 0); // -1
// while(i<=arr.length || arr.length == 1)
const findIndex = (list, num) => {
    let i = Math.floor(Math.random() * 7)
    let head = 0
    let tail =list.length
    let indice = 0
    let control = 0
    while(control < 5){
        // console.log(`list: ${list.length} i: ${i} head: ${head} tail: ${tail}`)
        console.log(i)
        i = Math.floor(Math.random() * 7)
        // if(list[i] === num){ 
        //     return i
        // }else if(list[i] < num){
        //     head = i
        // }else if(list[i] > num){
        //     tail = i
        // }
        // indice = i
        // i = Math.round( (Math.random() * tail-head) / 2 ) 
        control++
    }
}
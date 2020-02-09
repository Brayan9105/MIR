const judgeCircle = str => {
    let x = 0
    let y = 0
    for(let i =0; i< str.length ; i++){
        if(str[i] === 'U') y++
        else if(str[i] === 'D') y--
        else if(str[i] === 'L') x++
        else if(str[i] === 'R') x--
    }

    return x === 0 && y === 0 ? true : false
}

console.log(judgeCircle('UD'))
console.log(judgeCircle('LL'))
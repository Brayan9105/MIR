const balanceString = str => {
    let countL =0, countR = 0, countSubStrings =0;

    for(let i=0; i< str.length ; i++){
        str[i] === 'R'? countR++ : countL++
        if(countL === countR){ 
            countL = 0
            countR = 0
            countSubStrings++
        }
    }
    return countSubStrings

}

console.log(balanceString("RLRRLLRLRL"))
console.log(balanceString("RLLLLRRRLR"))
console.log(balanceString("LLLLRRRR"))
console.log(balanceString("RLRRRLLRLL"))
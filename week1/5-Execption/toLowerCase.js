const toLowerCase = str => {
    let newStr = str
    for(let i=0; i < str.length; i++){

        let ascii = str[i].charCodeAt(0)

        if(ascii >= 65 && ascii <= 90){
            newStr = newStr.replace(str[i], String.fromCharCode(ascii+32))
        }

    }
    return newStr
}

console.log(toLowerCase('Hello'))
console.log(toLowerCase('here'))
console.log(toLowerCase('LOVELY'))

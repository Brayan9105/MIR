const isBalanced = str => {
    let stack = []
    let i= 0
    while(i < str.length){
        if(str[i] === '(') stack.push(str[i])
        else stack.pop()
        i++
    }

    if(stack.length === 0) return true
    else return false
}

console.log(isBalanced("(((())))")); // true
console.log(isBalanced("(((()))")); // false
console.log(isBalanced("())(()")); // false
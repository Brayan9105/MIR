const harmonicSum = num => {
    if(num <= 0) return 0

    return (1/num) + harmonicSum(num-1)
}

console.log(harmonicSum(1)); // 1
console.log(harmonicSum(2)); // 1 + 1/2 = 1.5
console.log(harmonicSum(3)); // 1 + 1/2 + 1/3 = 1.833333
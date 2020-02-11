// Write a function called printNumsBackwards that receives a number and prints all the numbers from the number to 1. Print each number in a new line.

const printNumsBackwards = num => {
    if(num <= 1){
        console.log(num)
        return num
    } 

    console.log(num)
    return printNumsBackwards(num-1)
}

// const printNumsBackwards = num => {
//    for(let i=num; i>0;i--){
//        console.log(i)
//    }
// }

// printNumsBackwards(10); // prints 10 to 1
// printNumsBackwards(500); // prints 500 to 1
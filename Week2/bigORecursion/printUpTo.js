// Write a function called printNumbers that receives a number and prints all the numbers from 1 to N. Print each number in a new line.
// let i=0;
function printUpTo(num) {
    if(num <= 0) return;
  
    printUpTo(num-1);
    console.log(num);
  }


// const printUpTo = num =>{
//     for(let i=1; i<=num; i++){
//         console.log(i)
//     }
// }


printUpTo(10); // prints 1 to 10
// printUpTo(500); // prints 1 to 500
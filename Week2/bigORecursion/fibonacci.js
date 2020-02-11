// Write a function called fibonacci that receives a number and returns the n number of the fibonacci sequence.

// function fibonacci (num){
//     let a = 1;
//     let b = 0;
  
//     while ( num >= 0 ){
//         let temporal = a;
//         a = a + b;
//         b = temporal
//         num --
//     }
//     return b
// }

function fibonacci(num){
    
    if(num <= 1) return 1
    
    return fibonacci(num-2) + fibonacci(num-1)

// fibonacci(1-2) + fibonacci(num-1) = 
    // fibonacci(num-2) + fibonacci(num-1) 
        
            
}

  console.log(fibonacci(0)); // 1
console.log(fibonacci(1)); // 1
console.log(fibonacci(4)); // 5
console.log(fibonacci(5)); // 8
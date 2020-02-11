// function countAs (str) {
//     let count = 0; 
//     for ( let i = 0 ; i < str.length ; i++ ) { 
//         if ( str[i] === "a" ) {
//             count++ 
//         }
//     }
//     return count;
// }

function countAs(str) {
    
    if(str.length <= 0){
        return 0
    }

    if ( str[str.length - 1 ] === "a" ) {
        return 1 + countAs(str.slice(0, str.length - 1))
    }
    
    return 0 + countAs(str.slice(0, str.length - 1))

// 0 + 3 = 3
    // 0 + 3 = 3
        // 0 + 3 = 3
            // 1 + 2 = 3
                // 1 + 1 = 2
                    // 1 + 0 = 1
                        // 0
}

console.log(countAs("aaabbb")); // 3
console.log(countAs("abc")); // 1
console.log(countAs("zxy")); // 0
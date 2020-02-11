function charExists ( str, char ) {
    if ( str[str.length - 1 ] === char ) {
        return true
    } else if ( str.length === 1 ) { 
        return false 
    }
    return charExists( str.slice(0, str.length - 1 ), char); 
}

console.log(charExists("hello", "l"),);
console.log(charExists("world", "n"));
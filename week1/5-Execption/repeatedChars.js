// 1. Write a function called repeatedChars that receives two strings and returns a new string with the characters that are repeated in both input strings:

// `repeatedChars("german", "gabriela"); // "gear"`

const repeatedChars = (str1, str2) => {
    let newStr = ''
    for(let i=0; i<str1.length; i++){
        for(let y=0; y<str2.length;y++){
            if(str1[i] === str2[y] && !newStr.includes(str1[i])) newStr+=str1[i]
        }
    }
    return newStr
}

console.log(repeatedChars("german", "gabriela"))
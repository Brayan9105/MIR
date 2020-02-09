// La palabra mas larga
const findLongestWordLength = str => {
    let newArr = str.split(' ').map( elem => elem.length)
    return Math.max(...newArr)
}

// findLongestWordLength("hi world"); // 5
// findLongestWordLength("the vampire serie"); // 7
// findLongestWordLength("The quick brown fox jumped over the lazy dog");//6


//Anagram

const anagram = (str1, str2) => {
    let res = false
    if(str1.length === str2.length){

        const obj1 = {}
        const obj2 = {}
    
        const arrStr1 = str1.split('')
        for(let i=0; i<arrStr1.length;i++){
            if(obj1[arrStr1[i]] === undefined){
                obj1[arrStr1[i]] = 1
            }else{
                obj1[arrStr1[i]] += 1 
            }
        }
    
        const arrStr2 = str2.split('')
        for(let i=0; i<arrStr2.length;i++){
            if(obj2[arrStr2[i]] === undefined){
                obj2[arrStr2[i]] = 1
            }else{
                obj2[arrStr2[i]] += 1 
            }
        }
        
        
        for( let key of Object.keys(obj1) ){
            if( !(obj1[key] === obj2[key]) ){
                res = false
                break
            }
            
            res = true
        }
    }


    return res

}

// console.log(anagram("anagram", "nagaram")); // true
// console.log(anagram("hello", "world")); // false


//Circle
class Circle{
    constructor(radius){
        this.radius = radius
    }

    circunferencia(){
        return 2 * this.radius * Math.PI
    }

    area(){
        return Math.PI * Math.pow(this.radius, 2)
    }
}

// circle = new Circle(2)
// console.log(circle.circunferencia())
// console.log(circle.area())

module.exports = {findLongestWordLength, anagram, Circle}
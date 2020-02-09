//const fizzBuzz = require('./index');

function fizzBuzz(num){
    if(num%3==0 && num%5==0){
      return 'fizzbuzz'
    }else if(num % 3  == 0){
      return 'fizz'
    }else if(num%5==0){
      return 'buzz'
    }else{
      return num
    }
    
  }

  const defangIPaddr = function(address) {
    let arr = address.split('');
    let newArr = []
    arr.forEach(str => str === '.' ? newArr.push('[.]') : newArr.push(str))
    return newArr.join('')
  };



  const subtractProductAndSum = (num) => {
    let arrNum = num.toString().split('')
    let product =1, sum=0;
    arrNum.forEach(num => {
      product *= parseInt(num);
      sum += parseInt(num);
    })
    return parseInt(product - sum)
  }



  const findNumbers = (arr) => {
    let count =0;
    arr.forEach(num => {
      if( (num.toString().length) %2===0) {count++};
    })
  
    return count
  }
  

describe('FizzBuzz', () => {
    it('Should expect fizz when the numbes is divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('fizz')
    })

    it('Should expect buzz when the numbes is divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('buzz')
    })

    it('Should expect fizzbuzz when the numbes is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz')
    })

    it('Should expect the same number of entry when the numbes dont be divisible by 3 o 5', () => {
        expect(fizzBuzz(1)).toBe(1)
    })
})

describe('defangIPaddr', () => {
    it('Should expect a dot conversion ( . to [.] )' , () => {
        expect(defangIPaddr("1.1.1.1")).toBe('1[.]1[.]1[.]1')
        
    })
})

describe('subtractProductAndSum', () => {
    it('Should expect th substraction of the product and the sum', () =>{
        expect(subtractProductAndSum(234)).toBe(15)
    })
})

describe('findNumbers', () => {
    it('Should expect the number of numbers that has even', () => {
        expect(findNumbers([12,345,2,6,7896])).toBe(2)
    })
})
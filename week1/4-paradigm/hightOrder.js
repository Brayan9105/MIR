
const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]
const double = arr.map( num => num * 2)
console.log(double)

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]
const filter = arr.filter(num => num%2===0)
console.log(filter)

// utilizar el método reduce para sumar todos los elementos
// 21
const sum = arr.reduce((acc, curr) => acc+curr)
console.log(sum)
const add = require('./math.js');

console.log(add(4, 5)); // logs `9`

// const math = require('./util/math.js');

console.log(math.add(4, 5)); // logs `9`
console.log(math.divide(4, 2)); // logs `2`
// Or, with es6 object destructuring assignment:


const {add, divide} = require('./math.js');

console.log(add(4, 5)); // logs `9`
console.log(divide(4, 2)); // logs `2`
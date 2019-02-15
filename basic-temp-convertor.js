// current kelvin degree
let kelvin = 0;
// find celsius
let celsius = kelvin - 273;
// formula for fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// round down to whole number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
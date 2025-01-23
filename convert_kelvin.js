const kelvin = 350;
// kelvin is a constant variable - can not be changed

const celsius = kelvin - 273;
//celsius is 273 degree less than kelvin  

let fahrenheit = celsius * (9/5) + 32;
// convert celsius to fahrenheit


fahrenheit = Math.floor(fahrenheit);
// round down the decimal nummer to a int

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

  

let newton = celsius * (33/100);
// convert celsius to newton


newton = Math.floor(newton);
// round down the decimal to int

console.log(`The temperature is ${newton} degrees newtons`)

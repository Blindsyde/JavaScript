//this is the constant value of kelvin
const kelvin = 0

//this is the constant value of celsius
const celsius = kelvin - 273

//this is the Fahrenheit calculation (not rounded)
let fahrenheit = celsius * (9/5) + 32

//this is the rounded Fahrenheit calculation
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit`)

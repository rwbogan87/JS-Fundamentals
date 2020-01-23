// // // Booleans or Bools

// // let i = true;

// // let j = false;

// // console.log(i, j);

// // // Null

// // let test = null;

// // // Undefined

// // let undefined = undefined;

// Number
// let degrees = 90;

// let precise = 999999999999999
// console.log(precise)

// let overflowed = 9999999999999999
// console.log(overflowed)

// let notQuite = 0.1 + 0.2
// console.log(notQuite)

// let numbersAreHard = (((0.2*10)+(0.1*10)) / 10)
// console.log(numbersAreHard)

// let numbers = Number('123')
// console.log(numbers)

// // Strings
// let stringOne = "Doubley bois";
// let string2 = 'singley bois';

// let first = 1050 + 100;
// let second = '1050' + '100';

// // console.log(first)
// // console.log(second)
// // console.log(first + second)
// console.log(first,second)

// // How to show data type
// console.log(typeof first,typeof second)

// // Adding strings and integers creates inferencing
// // console.log('123' + 999)

// Objects
// Key : Value pairs separated by a comma
// let car1 = {
//     color: 'red',
//     tires: 4,
//     extras: 'A/C and Radio',
//     cool: true,
//     'password':'password1'
// }

// car1['password'] = 'password2';

// console.log(car1)
// console.log(car1['tires'])

// car1.make = 'Ford'
// console.log(car1.make)

// car1['model'] = 'Bronco';
// console.log(car1['password'])

//Arrays
// let burritos = ['large', 4, true]
// console.log(burritos[1])
// console.log(typeof burritos)
// console.log(burritos instanceof Array)
// console.log(burritos.length)

// let a = "hello "
// let b = "hi"
// console.log(a + " " + b)

let greet = "Hey"
let name = "Ryan"

//String Interpolation (smashing strings together)
console.log(`${greet} ${name}! How are you?`)

let firstName = "Ryan"
let lastName = "Bogan"
let houseNumber = 8945
// let aptNumber = 'C'
let street = 'Ridgemont'
let city = 'Atlanta'
let state = 'Georgia'
let zipcode = 12345

let address = 
console.log(`Hello my name is ${firstName} ${lastName}. I live at ${houseNumber} ${street} in ${city}, ${state}, ${zipcode}.`)

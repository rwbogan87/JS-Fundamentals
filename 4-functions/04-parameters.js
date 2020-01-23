// function pet(animal) {
//     console.log(animal)
// }
// //parameter is a named place to store value for the scope inside of the function

// pet('Zebra', 'Lion', 'BushBaby', 'Angler');

/*
    write a function that takes two paramters:
    1) first name    2) last name
    "Hello, my name is Adam Jayne"
*/

first = `Adam`
last = `Jayne`
function greeting() {
    console.log(`Hello, my name is ${first} ${last}`)
}

greeting();

// Method 2

function greetin(first,last){
    console.log(`Hello, my name is ${first} ${last}`)
}

greeting();

// adam

let users = [
    {firstName: 'Adam', lastName: 'Jayne'},
    {firstName: 'Tyler', lastName: 'Ostrum'},
    {firstName: 'Abby', lastName: 'Baker'}
];

printUsers(users);
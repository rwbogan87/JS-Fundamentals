// function addition (num1, num2) {
//     /*
//     The addition function takes two numbers as opositional arguments, adds the numbers together, and then returns the result
//     */
//    let answer = num1 + num2;
//    return answer;
// }

// let coolio = addition(3,5);
// console.log(coolio);

/*
Farmer Jebb has brought his produce to the farmers market! He is excited because he has a new system to keep track of all the produce he sells to hipster vegans like Ronan and Kayden. He is a tech savy farmer, so hes made an array of his produce. 
let veggAmounts = [{name:'Sweet Potatoes',amount:4},{name:'Heirloom Tomatoes',amount:15},{name:'Kolrabi',amount:2},{name:'Honey Combs',amount:1}]
He also has an array of the prices for each one :
let veggPrices = [{name:'Sweet Potatoes',price:2},{name:'Heirloom Tomatoes',price:1.50},{name:'Kolrabi',price:4},{name:'Honey Combs',price:10}]
Oh no! Farmer Jebb needs both the amount and the prices to be in the same array of objects. Write a function that makes checks to see if for each object in the veggAmount array has a matching veggie in the veggPrices. If they match, add that price to correct object in the veggAmounts array. Console log the new array
Gathering tools is a great way to start planning your solution! Re-read the problem and see why i gathered the tools i did! 
    Tools:
    function 
    if statement
    for loop 
    way to add new key/pair values to an object
    Make your plan here. State what needs to happen first. Make sure the steps are small enough that the goal is clear. 
    1)
    2)
    3)
    4)
    5)
    ....make more steps if you need them!
    */

let veggAmounts = [['Sweet Potatoes',4],
                    ['Heirloom Tomatoes',15],
                    ['Kolrabi',2],
                    ['Honey Combs',1]]

let veggPrices = [['Sweet Potatoes',2],
                    ['Heirloom Tomatoes',1.50],
                    ['Kolrabi',4],
                    ['Honey Combs',10]]

for (i=0; i < veggAmounts.length; i++) {
    for (j=0; j < veggPrices.length; j++){
        if(veggAmounts[i][0]==veggPrices[j][0]){
            veggAmounts[i] = veggAmounts[i].concat(veggPrices[j].slice(1));
        }
    }
}
console.log('Farmer Jebb\'s Farm')
console.log(veggAmounts)


//
// function mergeArrays(veggAmounts,veggPrices) {
//     var l = Math.min(veggAmounts.length,veggPrices.length),
//         ret = [],
//         i;

//     for ( i=0; i<l; i++) {
//         ret.push(veggAmounts[i]+":"+veggPrices);
//     }
//     return ret;
// }

// mergeArrays();
// console.log(veggAmounts);



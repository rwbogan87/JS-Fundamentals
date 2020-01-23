

// Person { name:string, age:number, canVote:boolean}

// function Person(name,age,canVote) {
//     this.name = name;
//     this.age = age;
//     this.canVote = canVote;
// }

// let gabbie = new Person('Test', 78, true);

// console.log(gabbie)

// function Expense(price, number) {
//     this.price = price;
//     this.number = number;
//     this.calculateTax = function() {
//         return this.price*this.number*1.07;
//     }
// }

// let expenses = [
//     new Expense(8, 9),
//     new Expense(3, 89),
//     new Expense(9, 2),
// ]

// total = 0;
// for(item of expenses){
//     total += item.calculateTax();
// }
// console.log(total)

// Closure functions are Callback functions

function testing(cb){
    console.log('msg1');
    console.log('msg2');
    cb();
}

testing(function(){console.log('world')});

testing(() => console.log('Other World'));
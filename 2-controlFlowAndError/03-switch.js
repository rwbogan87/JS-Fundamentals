// let friend = 'Adam';

// switch (friend) {
//     case 'Will':
//         console.log('Will, did you forget the squirly bois');
//         break;
//     case 'Daylonian':
//         console.log('Dylan, don\'t come back');
//         break;
//     case 'Eric':
//         console.log('Stuff to say');
//         break;
//     default:
//         console.log(`I'm sorry Dave, I dont know who ${friend} is`);
//         break;
// }

// if (friend === 'Will') {
//     console.log('Will, did you forget the squirly bois')
// } else if (friend == 'Daylonius') {
//     console.log('Dylan, don\'t come back');
// } else if (friend == 'Eric') {
//     console.log('Stuff to say');
// } else {
//     console.log(`Go Away ${friend}`);
// }

// Challenge //

/*
Challenge:
Write a dessert menu;
If the dessert is pie, console.log 'Pie, pie, me oh my!'
If the dessert if cake, console.log 'Cake is great!'
If the dessert is ice cream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let Dessert = 'Cake';

switch (Dessert) {
    case 'Pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'Cake':
        console.log('Cake is great!');
        break;
    case 'Ice Cream':
        console.log('I scream for ice cream!');
        break;
    default:
        console.log(`Sorry, ${Dessert} isn\'t on the menu.`)
}
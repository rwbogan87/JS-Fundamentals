let x = 12;

function scope(){
    x =33;
    var y = 9;
    console.log(x);
}

scope();
console.log(x);
// console.log(y);
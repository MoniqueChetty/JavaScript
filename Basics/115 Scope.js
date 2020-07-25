//115 Scope Environment

var num2 = 50;
console.log(num2);

function sum(num3) {
    var total = num3 + num2;
    console.log(total);
}
sum(30);
sum(50);
//console.log(total); // scope error

var total2 = 0;

function sum(num3) {
    total2 = num3 + num2;
    console.log(total2);
}
sum(30);
sum(50);
console.log(total2);
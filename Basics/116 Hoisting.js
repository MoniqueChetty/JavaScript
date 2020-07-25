//116 Hoisting

num1 = 10;

console.log(num1);
var num1;

string1 = "upsidedown";

console.log(string1);
var string1; // auto moved to top : Creation then Execution


console.clear();



//117 Function Hoisting

sum(2, 9);


function sum(num1, num2) { // can be anywhere in code
    console.log(num1 + num2);
}
sum(222, 999);


var sum2 = function(num1, num2) { // must be before calling
    console.log(num1 + num2);
}
sum2(222, 999);

var sum3 = function(num1, num2) { // must be before calling
    total = num1 + num2
    console.log(total);
    var total;
}
sum3(222, 999);

var total2 = 10;
var sum4 = function(num1, num2) { // must be before calling
    var total2;
    total2 = num1 + num2
    console.log(total2);
    console.log(this.total2);

}
sum4(222, 999);
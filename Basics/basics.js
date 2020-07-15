// alert("123");
var num1 = 10;
var num2 = 25;
var sum = num1 + num2;
var multi = num1 + num2;
var div = num1 + num2;

console.log("Sum =" + sum);
console.log("Multi =" + multi);
console.log("Divide = " + div);

console.clear();

// toString() number to string

var num3 = 10;
var num4 = 20.3;
console.log(num3.toString());
console.log(num4.toString());



var strNum1 = "10";
var strNum2 = "20.3";
var strNum3 = "ABC";

//parseInt() string to Integer
console.log(parseInt(strNum1));
console.log(parseInt(strNum2));
console.log(parseInt(strNum3)); //not a number

//parseFloat string numaral as Float
console.log(parseFloat(strNum1));
console.log(parseFloat(strNum2));
console.log(parseFloat(strNum2)); //not a number

console.clear();

var strFloat = 87.987653;

// toFixed floating number round off
console.log(strFloat.toFixed());
console.log(strFloat.toFixed(2));
console.log(strFloat.toFixed(14));

console.clear();

//  96. JS Strings/////////////////////////////////////////////////////////////

var my1stString = "I Love Javascript";
console.log(typeof(myFirstString));

var my2ndString = " We will learn JS together";
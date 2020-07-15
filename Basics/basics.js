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

// 96. JS Strings//////////////////////////////////////////////////////

var my1stString = "I Love \"Javascript\" ";
console.log(typeof(myFirstString));

var my2ndString = 'We will learn JS together';

console.clear();
//97. JS Building String Functions//////////////////
var my1stString2 = "This is a string for JavaScript string functions, Javascript";

console.log(my1stString2.length);

//Find index of string inside another string
console.log(my1stString2.indexOf('JavaScript'));
console.log(my1stString2.indexOf('This'));

//Find Last index of sting in anoth String
console.log(my1stString2.lastIndexOf('Javascript'));
console.log(my1stString2.lastIndexOf('This'));

//part of a String slice(start, end)
console.log(my1stString2.slice(0, 4));
console.log(my1stString2.slice(21, 31));
console.log(my1stString2.slice(-10));
console.log(my1stString2.slice(5));

// sub string :- substr(startPos, length)
console.log(my1stString2.substr(0, 4));
console.log(my1stString2.substr(21, 10));
console.log(my1stString2.substr(21));

console.clear();

// 98. JS Sting Funstions/////////////////////////

var exampleString = "This is Javascript Tutorial";

console.log(exampleString.toUpperCase());
console.log(exampleString.toLowerCase());

//concat
var firstName = "Javascript";
var lastName = "Playground";
console.log(exampleString.concat(firstName));
console.log(exampleString.concat(' ', firstName, ' ', lastName));
console.log(firstName + ' ' + lastName + ' ' + exampleString);


//trim()
var space = '     run run run      ';
console.log(space.trim());

//charAt()
var charAtExample = 'This is my test string';
console.log(charAtExample.charAt(5));
console.log(charAtExample.charAt(11));

//split()
var sampleString = 'This is my sample string';
console.log(sampleString.split(' '));

var sampleString2 = 'This,is,my,sample,string';
console.log(sampleString2.split(','));

var sampleString3 = 'This is awesome';
console.log(sampleString3.split()); // does nothing

console.clear();
//null and undefined

var mVar //mvar holds no value
console.log(mVar); //undefined

mVar = null;
console.log(mVar); //null
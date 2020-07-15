// if / else
if (7 < 5) {
    console.log(true);
} else {
    console.log(false);
}

if (5 < 7) {
    console.log(5 < 7); // true
} else if (7 > 8) {
    console.log('7 > 8'); //'7>8' String
} else {
    console.log("Nothing");
}

console.clear();
//Arithmetic Operators

var num1 = 10;
var num2 = 15;
var num3 = 20;

console.log('Addition');
console.log(num1 + num2 + num3);
console.log('Subtraction');
console.log(num1 - num2 - num3);

console.log('Multiply');
console.log(num1 * num2 * num3);
console.log('Division');
console.log(num3 / num2);

console.log('Modulus');
console.log(num3 % num2);

console.log('Increment');
console.log(++num1);
console.log('Decrement');
console.log(--num1);
console.log('post Increment');
console.log(num1++);
console.log('post Decrement');
console.log(num1--);

console.clear();
//103
console.log('+=');
num1 += 10;
console.log(num1);
num2 += num1;
console.log(num2);

console.log('-=');
num1 -= 10;
console.log(num1);
num2 -= num1;
console.log(num2);

console.log('*=');
num1 *= 10;
console.log(num1);
num2 *= num1;
console.log(num2);

console.log('/=');
num1 /= 10;
console.log(num1);
num2 /= num1;
console.log(num2);

console.log('%=');
num1 %= 7;
console.log(num1);
num2 %= num1 + 5;
console.log(num2);
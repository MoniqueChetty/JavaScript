//104 Comparison and Logical Operators
var num1 = 10;
var num2 = 10;
var num3 = '10';

if (num1 == num2) { console.log(true); } else { console.log(false); }
// === type and value must be equale
console.log('===');
if (num1 === num3) { console.log(true); } else { console.log(false); }
if (num1 != num3) { console.log(true); } else { console.log(false); }
if (num1 !== num3) { console.log(true); } else { console.log(false); }

console.log('< >');
if (num1 < num3) { console.log(true); } else { console.log(false); }
if (num1 <= num3) { console.log(true); } else { console.log(false); }
if (num1 > num3) { console.log(true); } else { console.log(false); }
if (num1 >= num3) { console.log(true); } else { console.log(false); }

console.log('&&  ||');
if (num1 <= num3 && num2 <= num3) { console.log(true); } else { console.log(false); }
console.log(num1 <= num3 || num2 <= num3);

//Ternary Operator(expression) ? a : b
if (num1 <= num3 && num2 <= num3) { console.log(true); } else { console.log(false); }

(num1 <= num3 && num2 <= num3) ? console.log(true): console.log(false);
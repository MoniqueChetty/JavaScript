//113 Functions

// function mSum() {
//     var num1 = 10;
//     var num2 = 20;
//     var sum = num1 + num2;
//     console.log(sum);
// }

// mSum();

function mSum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

console.log(100 + mSum(12, 20));

console.clear();

//114 Function Arguments

function greeting(name) {
    console.log("Welcome " + name)
}
greeting("Jesse");
greeting("Maison");

function greeting(name, age) {
    console.log("Welcome " + name + " Your age is " + age)

}
greeting("Jesse", 13);
greeting("Maison", 18);

function mSum(num1, num2, num3 = 40) {
    var sum = num1 + num2 + num3;
    return sum;
}
console.log(100 + mSum(12, 20)); // num 3  to have default value
console.log(100 + mSum(12, 20, 15, 22)); // JS ignores additional number

function mSum(num4, num5, num6) {
    if (num6 == undefined) {
        return num4 + num5;
    } else {
        return num4 + num5 + num6;
    }
}
console.log(mSum(12, 20));
console.log(mSum(12, 20, 15, 22));
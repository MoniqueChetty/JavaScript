//105 Implicit Type Coercion
var mStr = 'Hello';
var mNum = 5;
var mSum = mStr + mNum;

console.log(mSum);
console.log(typeof(mSum));

console.log(mSum + "Dog");
console.log(typeof(mSum + "Dog"));

console.log(50 + "Dog");
console.log(typeof(50 + "Dog"));

var mValue = -'30';
console.log(mValue);
console.log(typeof(mValue));

var mValue = -'dog';
console.log(mValue);
console.log(typeof(mValue));

var mValue = 2 >= '2';
console.log(mValue);
console.log(typeof(mValue));

if ('apple') { console.log('apple true') } else { console.log('apple false') }
if (null) { console.log('null true') } else { console.log('null false') }
if ('apple' + 10) { console.log('apple+10 true') } else { console.log('apple+10 false') }
if (undefined) { console.log('undefined true') } else { console.log('undefined false') }

console.clear();
//107.Explicit Type Coercion

var mNum = 15;
console.log(typeof(mNum));
console.log(typeof(String(mNum)));
console.log(typeof(String(true)));
console.log(typeof(String(-98.10)));
console.log(typeof(String(null)));
console.log(typeof(String(undefined)));

//to Number
var mNum = 15;
console.log(typeof(mNum));
console.log(Number(mNum), typeof(Number(mNum)));
console.log(Number(true), typeof(Number(true)));
console.log(Number(-98.10), typeof(Number(-98.10)));
console.log(Number(null), typeof(Number(null)));
console.log(Number(undefined), typeof(Number(undefined)));
console.log(Number("apple"), typeof(Number("apple")));

//to Boolean
console.log(Boolean(1), typeof(Boolean(1)));
console.log(Boolean(0), typeof(Boolean(0)));
console.log(Boolean(2), typeof(Boolean(2)));
console.log(Boolean(null), typeof(Boolean(null)));
console.log(Boolean("Apple"), typeof(Boolean("Apple")));
console.log(Boolean(""), typeof(Boolean("")));

console.clear();

//107 Objects

var mCars = {
    "p1": "350 kmph",
    "gallardo": "320kmph",
    "veyron": "409 kmph",
    "agera": "429 kmph"
}
console.log(mCars);

var mAgera = {
    name: "Agera",
    manufacturer: {
        name: "Koenigsegg",
        location: "Sweden"
    },
    topSpeed: "429 kmph",
    color: "Black",
    spoilers: false,
    applyBrakes: function() {
        setTimeout(function() {
            console.log('Car Stopped');
        }, 5)
    }
}
console.log(mAgera.name);
console.log(mAgera.spoilers);
console.log(mAgera.manufacturer.name);
console.log(mAgera.applyBrakes());
console.log(mAgera.applyBrakes);
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
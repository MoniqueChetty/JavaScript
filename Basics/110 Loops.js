//110 Loops For and While



var mValue = 0;
while (mValue <= 50) {
    mValue++;
    if (mValue % 2) {
        console.log("Value: " + mValue);
    }

}
console.log(`Value: outside loop ${mValue}`);


console.clear()

for (var i = 0; i < 10; i++) {
    console.log("Number: " + i);
}

var mList = [1, 2, 3, 4, 5];
for (var i = 0; i < mList.length; i++) {
    console.log("1 Position => " + i + " List Value => " + mList[i]);
}
var mList = [1, 2, 3, 4, 5];
for (var i = 0; i < mList.length; i++) {
    if (i >= 3) break;
    console.log("2 Position => " + i + " List Value => " + mList[i]);
}
var mList = [1, 2, 3, 4, 5];
for (var i = 0; i < mList.length; i++) {
    if (i % 2 !== 0) continue;
    console.log("3 Position => " + i + " List Value => " + mList[i]);
}
var mList = [1, 2, 3, 4, 5];
for (var i = 0; i < mList.length; i++) {
    if (i % 2 == 0) continue;
    console.log("4 Position => " + i + " List Value => " + mList[i]);
}
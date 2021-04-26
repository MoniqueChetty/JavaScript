var mObj = {
    "name": 'John',
    "age": 28,
    "married": false,
    score: [22, 25, 12, 22, 32],
    score2: {
        "math": 25,
        "science": 24
    },

}
console.log(mObj);
console.log("Name " + mObj.name);

var strJson = JSON.stringify(mObj)
console.log(strJson);
console.log(JSON.parse(strJson));

///////////////////////

var mArr = [{
        "name": 'John',
        "age": 28
    },
    {
        "name": 'Sam',
        "age": 22
    },
    {
        "name": 'Ann',
        "age": 32
    }
]
console.log(mArr[2].name + " age " + mArr[2].age);

var strJson = JSON.stringify(mObj)
console.log(strJson);
console.log(JSON.parse(strJson));

//node script.js
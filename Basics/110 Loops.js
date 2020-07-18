//108 Arrays

var mFriends = ['Ann', 'Sam', 'John', 'Peter', 'Ivan', 'James', 'Tom'];
console.log(mFriends);
console.log(typeof(mFriends));

console.log(mFriends[2]);
console.log(mFriends[5]);
console.log(mFriends[10]);

// Update
mFriends[0] = "Anny";
console.log(mFriends);

//Add
mFriends[8] = "Jesse";
console.log(mFriends);

mFriends[mFriends.length] = "Keeno";
console.log(mFriends);

mFriends.push("Maison");
console.log(mFriends);

//Delete
var mName = mFriends.pop();
console.log(mName);
console.log(mFriends);
var mName = mFriends.pop();
console.log(mName);
console.log(mFriends);
var mName = mFriends.pop();
console.log(mName);
console.log(mFriends);
var mName = mFriends.pop();
console.log(mName);
console.log(mFriends);

console.clear();

//109 Arrays2

var mFriends2 = ['Ann', 'Sam', 'John', 'Peter', 'Ivan', 'James', 'Tom'];
mFriends2.splice(3, 0, "Andy", "Sandy");

//1st  - start position
//2nd - how many to delete
//3rd, 4th..... - items to add
console.log(mFriends2);

//From 0 delete 1 add Bill and Maison
mFriends2.splice(0, 1, "Bill", "Maison");
console.log(mFriends2);

//From 0 delete 1 
mFriends2.splice(3, 2);
console.log(mFriends2);

console.clear();
// Concatenation

var officeFriends = ["Tracy", " Steven", "Kathy", "Jannine"]

var allFriends = mFriends2.concat(officeFriends);

console.log(mFriends2)
console.log(officeFriends)
console.log(allFriends);

// Sort
console.log(allFriends.sort());
console.log(allFriends);
console.log(allFriends.reverse());
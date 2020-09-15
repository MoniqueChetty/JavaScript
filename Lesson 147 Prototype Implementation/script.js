var person = {
    name: 'Jack',
    yearOfBirth: 1990,
    job: 'Secret Agent'
}

function Person(pName, pYearOfBirth, pJob) {
    this.name = pName;
    this.yearOfBirth = pYearOfBirth;
    this.job = pJob;

    // this.calculateAge = function() {
    //     console.log(this.name + " ");
    //     console.log(2020 - this.yearOfBirth);

    // }
}
Person.prototype.lastName = "Clark"

Person.prototype.calculateAge = function() {
    console.log(this.name + " Age " + (2020 - this.yearOfBirth));
}
Person.prototype.updateYearOfBirth = function(birthYear) {
    this.yearOfBirth = birthYear;
    console.log(this.name + " Year of Birth Updated " + this.yearOfBirth);
}

var john = new Person('John', 1992, 'Pilot');
john.calculateAge();

var sam = new Person('Sam', 1985, 'Teacher');
sam.calculateAge();
console.log(john);
console.log(john.name);
console.log("John Last Name " + john.lastName);
console.log("Sam Last Name " + john.lastName);
john.updateYearOfBirth(1988);
john.calculateAge();
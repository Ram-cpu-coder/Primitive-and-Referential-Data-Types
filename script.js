
// primitive data types

// let age = 20;
// console.log(age);

// yourAge = age;
// console.log(yourAge);


// age = 40;

// console.log(age);
// console.log(yourAge);

// referential data types

let person = {
    age: 20,
    name : "Ram",
}

console.log(person);

person2 = person;

console.log(person2);


person.age = 40;
person.name = "Hari";

console.log(person);
console.log(person2);




// ----------------------------------String slice, includes and search-------------
// ----------------------------------String slice, includes and search-------------

//whenever we need the substring then we use slice 
const para = "My name is Ram.";
const sliced = para.slice(3,6);  ///here we are giving two values as it needs one starting and another ending point of slicing

console.log(sliced);

//also we can give only one value as well that means the starting point only but it will return us all the remaining string from that certain starting point 
const slicedOne = para.slice(5);
console.log(slicedOne);

// Also we can findout the last charactar like this way
const lastchar = para.slice(-1);
console.log(lastchar);


// ------------------------------includes-------------------------------

//includes finds out the given char in the paragraph
// and returns the value in true and false form
const include = para.includes("Ram");
console.log(include);
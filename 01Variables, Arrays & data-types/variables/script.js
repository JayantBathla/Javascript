// Ways to Declare a Variable
// var, let, const

let firstName = 'Jayant';
let lastName = 'Bathla';

console.log(firstName, lastName);

let age = 30;

console.log('age');

// Naming Conventions
//  - Only letters, numbersm underscores and dollar sign
//  - Can't start with a number


// /Multi-Word Conventions
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning variables
age =31;
console.log(age);


let score;

score = 1

console.log(score);

if (true) {
    score = score+1;
}

console.log(score);

const x =100;
//  const cam't be changedor reassigned directly like let and also can live without assigning value

const arr = [1,2,3,4,5];
console.log(arr);
arr.push(6);
console.log(arr);


const person = {
    name: 'Jayant'
}

person.name = 'Varun';
person.email = 'j@gmail.com';
console.log(person);

// mostly use const with array's and objects({dictionary}) or something that you know, you might change later on


// we can DECLARE MULTIPLE VALUES AT ONCE

let a, b , c;
 const d =10,
       e = 20,
       f =40;

console.log(e);




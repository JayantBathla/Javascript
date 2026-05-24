//strings
const firstName = 'Jayant';
console.log(firstName, typeof firstName);
//number
const output = 30;
const temp = 98.5;

console.log(output, typeof output);
console.log(temp, typeof temp);
//Boolean
const hasKids = true;
console.log(hasKids, typeof hasKids);
// Null
const apt = null;
console.log(apt, typeof apt);

//Undefiend
let score;

console.log(score, typeof score);


//symbol
const id = Symbol('id');
console.log(id, typeof id);
// BigINT
const n = 7423649823563985623523n;
console.log(n, typeof n);

//REFRENCE TYPES
const numbers = [1 ,2 ,3 ,4];
//------------------------------------------------------------

//values are stored in stack

const Name = 'Jayant'
const T_age = 23;


// Reference values are storeed on heap
const people = {
    names: 'Varun',
    ages:21 
};

let newName = Name;
newName = 'JayB'

console.log(Name, newName)
let newpeople = people
newpeople.names = 'Jayzb';

console.log(people, newpeople);

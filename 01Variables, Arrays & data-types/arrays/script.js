//ARRAY LITERAL
const numbers = [12, 45, 33, 29, 32];

// ARRAY CONSTRUCTOR

const fruits = new Array("apple", "grapes", "orange");
const mixed = [12, "Hello", true, null];

let x;

fruits[2] = "pear"; // Arrays are mutable
fruits[3] = "Banana";

fruits[fruits.length] = "Blueberry";

x = fruits;

console.log(x);

//ARRAY METHODS

const y = [12, 34, 56, 39, 94];

y.push(101); // add at n-1 last index

y.pop(); // remove last index

y.unshift(99); // add at index 0

y.shift(); // remove from index 0

y.reverse();

let a;
a = y.includes(56);

a = y.indexOf(39);

a = y.indexOf(200);

a = y.slice(1, 4); // it starts at 1st index and stops at 4. And it doesn't changes the originial array

a = y.splice(1, 4); //This manipulates original array
// after running splice, y has only 12 left because other 4 have plucked and set to a

a = y.splice(3, 1);
// ALSO SLICE GIVES YOU N-1 INDEX. WHERE AS SPLICE TAKE N INDEX
a = y.slice(1, 4).reverse().toString().charAt(1);

console.log(a, y);

// NESTING - HAVEING AN ARRAY AS INDEX INSIDE ANOTHER ARRAY
let x;
const fruits = ["apples", "oranges", "pear"];
const berries = ["strawberry", "blueberry", "raspberry"];

// fruits.push(berries);
// x = fruits[3][1];

const allfruits = [fruits, berries];
x = allfruits;

x = allfruits[0][1];

//CONCAT

x = fruits.concat(berries);

// SPREAD OPERATER (...)

x = [...fruits, ...berries];

//FLATTEN ARRAYS

const arr = [1, 2, [3, 4], 5, [6, 7], 8];

x = arr.flat();

// STATIC METHODS
x = Array.isArray(fruits);

x = Array.from("12345");
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);

console.log(x);

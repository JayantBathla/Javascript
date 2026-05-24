const email = "test@test.com";

if (email) {
  console.log("You Passed in an email");
}

console.log(Boolean(email));
// // //A string is always a truthy value

// FALSY VALUES:
// - false
// - 0
// - ""or '', empty string
// - null
// - undefined
// - NaN

const x = false;

if (x) {
  console.log("This is truthy");
} else {
  console.log("This is Falsey");
}

console.log(Boolean(x));

const y = 0;

if (y) {
  console.log("This is truthy");
} else {
  console.log("This is Falsey");
}

console.log(Boolean(y));

// Truthy & Falsey caveats

const children = 0;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter number of children");
}

//Checking for Empty arrays
const post = ["Post one", "Post two"];

if (post) {
  console.log("List Posts");
} else {
  console.log("No Posts");
}

const posts = [];

if (posts.length > 0) {
  console.log("List Posts");
} else {
  console.log("No Posts");
}

// Checking for empty Objects
const user = {
  name: "Jayant",
};

if (user) {
  console.log("List User");
} else {
  console.log("No User");
}

const users = {};

if (Object.keys(users).length > 0) {
  console.log("List User");
} else {
  console.log("No User");
}

// LOOSE EQUALITY (==)
// Below are case that you wouldn't want to be true
console.log(false == 0);
console.log("" == 0);
console.log(null == undefined);
// Use ===, as it also checks type as well
console.log(false === 0);
console.log("" === 0);
console.log(null === undefined);

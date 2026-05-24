if (true) {
  console.log("This is true");
}

if (false) {
  console.log("this is not true");
}

const x = 10;
const y = 5;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is not equal to ${y}`);
}
// BLOCKS LIKE IF STATMENTS HAVE THEIR OWN SCOPE

if (x !== y) {
  const z = 20;
  console.log(`${z} is 20`);
}

// console.log(z); // it will show undefined, but if we used Var it would have shown value of z

// Short hand if
if (x !== y) console.log(`${x} is greater than ${y}`);

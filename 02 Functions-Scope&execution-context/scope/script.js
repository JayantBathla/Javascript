alert("Hello");

console.log(innerWidth);
const x = 100; // global scope
console.log(x, "in global");

function run() {
  console.log(window.innerHeight);
  console.log(x, "in function");
}

run();

function add() {
  const x = 1; //function scope
  const y = 50;
  console.log(x + y);
}

add();

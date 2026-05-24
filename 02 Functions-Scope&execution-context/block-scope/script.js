const x = 100;
if (true) {
  const y = 200;
  console.log(x + y);
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c); //Var is not block scoped, const and let are
// But var is function scoped so if we use var inside a function, you can't call it outside that function

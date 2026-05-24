let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);

let sum = x + y;
let Dif = x - y;
let product = x * y;
let Div = x / y;
let rm = x % y;

let sumOutput = String(`${x}  +  ${y}  =  ${sum}`);
let DifOutput = String(`${x} - ${y} = ${Dif}`);
let productOutput = String(`${x}  *  ${y}  =  ${product}`);
let DivOutput = String(`${x}  /  ${y}  =  ${Div}`);
let rmOutput = String(`${x}  %  ${y}  =  ${rm}`);

console.log(sumOutput, typeof sumOutput);
console.log(DifOutput);
console.log(productOutput);
console.log(DivOutput);
console.log(rmOutput);

let x;

const name = "Jayant";
const age = 23;

x = "Hello, my name is " + name + " and i am " + age + " years old";

// Template Literals  to do easily
x = `Hello, my name is ${name}, and i am ${age} years old.`;

// STRING Properties and methods
const s = "Helu world";
x = typeof s;

// x = s.length;

// ACCESS VALUE BY INDEX/KEYS
x = s[1];

x = s.__proto__;

x = s.toUpperCase();

x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf("H");

x = s.substring(0, 4);

x = s.slice(-10, -5);

x = "            Hello World";
x = x.trim();

x = s.replace("Helu", "Halo");

x = s.includes("hal");

x = s.valueOf();

x = s.split("");

console.log(x);

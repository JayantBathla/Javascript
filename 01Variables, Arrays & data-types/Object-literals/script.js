// OBJECT LITERAL ARE LIKE DICTIONARY IN PYTHON, STORED IN KEY VALUE PAIRS

let x;

const person = {
  name: "jayaNT bathla",
  age: 23,
  isAdmin: true,
  address: {
    street: "Nehru Nagar",
    city: "gzb",
    state: "UP",
    hobbies: ["gym", "music"],
  },
};

x = person.name;
x = person["age"];

x = person.address.state;

x = person.hobbies[0];

delete person.age;

person.hasChildern = false;

person.greet = function () {
  console.log(`Hello myname is ${this.name}`);
};

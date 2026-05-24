const todo = new Object();

todo.id = 1;
todo.name = "START AI LEVEL3";
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      lat: 12.23,
      long: 34.82,
    },
  },
};

x = person.address.coords.long;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };

const obj4 = Object.assign({}, obj1, obj2);
x = obj4;

const todos = [
  { id: 1, name: "Do Java" },
  { id: 2, name: "ai bootcamp" },
  { id: 3, name: "las" },
];

x = todos[0].name;

x = Object.keys(todo);

x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty("name");

console.log(x);

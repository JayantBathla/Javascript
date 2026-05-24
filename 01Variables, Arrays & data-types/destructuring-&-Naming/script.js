// where key and variable are same

const firstName = "Jayant";
const lastName = "Bathla";
const age = 23;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person);

// DESTRUCTURING

const todo = {
  id: 1,
  title: "Take out Trash",
};

// const { id, title } = todo;

const { id: todoId, title } = todo;

console.log(todoId);

const numbers = [23, 43, 41, 67];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);

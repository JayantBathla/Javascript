const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    status: {
      own: true,
      reading: false,
      read: true,
    },
  },
];

//1)
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

//2)
const { title: firstBook } = library[0];

console.log(firstBook);

//3)

let lib;
lib = JSON.stringify(library);

console.log(lib, typeof lib);

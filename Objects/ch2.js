// 1)
const student = {
  name: "walid",
  age: 21,
  iPresente() {
    console.log(`hello i'm ${this.name} i'm ${this.age} years old`);
  },
};

// student.iPresente();
// 2)
const person = student;

// for (const key in person) {
//   console.log(person[key]);
// }

// 3)
const studentsClass = {
  students: ["walid", "oussama", "ayoub"],
  displayStudent() {
    this.students.forEach((student) => console.log(student));
  },
};

// studentsClass.displayStudent();
// 4)
const books = [
  {
    title: "book1",
    author: "walid",
    year: 2022,
  },
  {
    title: "book2",
    author: "oussama",
    year: 2015,
  },
  {
    title: "book3",
    author: "ayoub",
    year: 2017,
  },

  function findBook(title) {
    return books.find((book) => book.title === title);
  },
];

// books.forEach((book) => console.log(book.title));
// 5)
console.log(books.at(-1)("book1"));

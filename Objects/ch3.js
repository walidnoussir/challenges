//
const company = {
  adresse: {
    rue: "rue national N8",
    ville: "beni mellal",
    codePostal: 23000,
  },
};
// 1)
// console.log(company.adresse.ville);
// 2)
const products = [
  {
    name: "iPhone",
    price: 3000,
    quantity: 20,
  },
  {
    name: "hp",
    price: 5000,
    quantity: 30,
  },
  {
    name: "dell",
    price: 7000,
    quantity: 15,
  },
];

// products.forEach((product) => console.log(product.price * product.quantity));
// 3)
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  parler() {
    console.log("haw haw");
  }
}

const dog = new Animal("bobi", "hayawan");
// console.log(dog);

const employers = [
  {
    name: "walid",
    age: 21,
    salary: 20000,
  },
  {
    name: "oussama",
    age: 22,
    salary: 20000,
  },
  {
    name: "simo",
    age: 21,
    salary: 500,
  },
];

// console.log(employers.filter((employer) => employer.salary > 3000));

// 5)
const cloner = (obj) => {
  const newObj = { ...obj };
  console.log(newObj);
};

cloner({ name: "walid", age: 21 });

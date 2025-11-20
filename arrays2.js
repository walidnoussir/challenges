const prompt = require("prompt-sync")();

// challenge 1
const generateName = (name) => {
  const data = ["batman", "spongebob", "benten", "spiderman"];
  name = prompt("enter your name : ");
  const randomNum = Math.floor(Math.random() * 5);

  const randomName = name.split("").slice(0, 3).join("") + data[randomNum];
  console.log(randomName);
};

// generateName()

// challenge 2
const reverseWord = (word) => {
  word = prompt("enter a word : ");
  let str = "";
  for (let i = word.length - 1; i >= 0; i--) {
    str += word[i];
  }

  console.log(str);
};

// reverseWord()
// challenge 3
const rateFilms = (film, point) => {
  const rates = [];
  for (let i = 0; i < 3; i++) {
    film = prompt("enter a film : ");
    point = Number(prompt("enter a point : "));
    rates.push({ film, point });
  }

  rates.forEach((el) => {
    switch (el.point) {
      case 5:
        el.comment = "Chef d'œuvre";
        break;

      case 4:
        el.comment = "Très bon";
        break;

      case 3:
        el.comment = "Correct";
        break;

      case 2:
        el.comment = "Bof";
        break;

      case 1 || 0:
        el.comment = "À éviter";
        break;

      default:
        null;
        break;
    }
  });

  console.log(rates);
};

// rateFilms()

// challenge 4
const generateAsrt = (name) => {
  const action = ["Tu vas découvrir", "Attention à", "Ne refuse pas"];
  const objet = ["une opportunité", "une pizza", "un bug", "un pigeon"];
  const situation = ["au travail", "en ligne", "dans tes rêves"];

  const randomValue = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  name = prompt("enter your name : ");
  console.log(`
    ${name}  ${randomValue(action)} ${randomValue(objet)} ${randomValue(
    situation
  )}
  `);
};

// generateAsrt();

// challenge 5
const symetrique = (number) => {
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    number = Number(prompt(`enter number ${i + 1} = `));
    numbers.push(number);
  }

  numbers[0] === numbers[4] && numbers[1] === numbers[3]
    ? console.log("symetrique")
    : console.log("Non symétrique");
};

// symetrique();
// challenge 6
const equilibrage = (price) => {
  let prices = [];

  for (let i = 0; i < 5; i++) {
    price = Number(prompt(`Entrez le prix de l'article ${i + 1} :`));
    prices.push(price);
  }

  for (let i = 0; i < 5; i++) {
    const others = prices.filter((_, index) => index !== i);

    const avg = others.reduce((sum, val) => sum + val, 0) / others.length;

    prices[i] > avg
      ? console.log(`Article ${i + 1} : Ce produit est trop cher`)
      : console.log(`Article ${i + 1} : Prix raisonnable`);
  }
};

// equilibrage();

// challenge 7

const wordGame = (word) => {
  word = prompt("enter a word = ");
  let result = "";

  word.split("").forEach((el, i) => {
    console.log((result += el));
  });
};

// wordGame();

// challenge 8
const inverse = (num) => {
  const nums = [];
  for (let i = 0; i < 3; i++) {
    num = Number(prompt(`enter a number ${i + 1} = `));
    nums.push(num);
  }

  const numsCopy = [...nums];

  console.log(nums.concat(numsCopy.reverse()));
};

// inverse();
// challenge 9
const addRemove = (input, person) => {
  const persons = [];
  input = prompt(
    "Choose commande (add / remove) to finish type fin : "
  ).toLowerCase();

  while (input !== "fin") {
    if (input === "add") {
      person = prompt("enter a person = ");
      persons.push(person);
      console.log(`${person} added successfully`);
    } else if (input === "remove") {
      persons.length > 0 ? persons.shift() : console.log("array is empty");
    } else {
      console.log("commande not found");
    }

    input = prompt("type add / remove / fin = ").toLowerCase();
  }

  console.log(persons);
};

// addRemove();

// challenge 10
const verifyNotes = (note) => {
  const notes = [];
  let result = "";
  for (let i = 1; i <= 5; i++) {
    note = Number(prompt(`enter note ${i} = `));
    notes.push(note);
  }

  for (let i = 0; i < notes.length - 1; i++) {
    notes[i] > notes[i + 1]
      ? (result = "Régression")
      : notes[i] < notes[i + 1]
      ? (result = "Progression")
      : (result = "Tendance irrégulière");
  }

  console.log(result);
};

verifyNotes();

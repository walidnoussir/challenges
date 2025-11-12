// challenge 1

const prompt = require('prompt-sync')();

const pairImpair = (num) => {
    num = Number(prompt('enter a number: '));

    num % 2 === 0 ? console.log('pair') : console.log('impair');   
}

// pairImpair()

// challenge 2
const numberState = (num) => {
    num = Number(prompt('enter a number : '));

    num >= 0 ? console.log('positif') : num < 0 ? console.log("negatif") : console.log('null');

    
}

// numberState()


// challenge 3
const verifyAge = (age) => {
    
    age = Number(prompt("enter your age : "));

     age >= 18 ? console.log('Éligibldeux e au vote') : console.log('Non éligible');
    
    
}

// verifyAge()

// challenge 4
const maxNumber = (num1, num2) => {
    num1 = Number(prompt('enter number 1 : '));
    num2 = Number(prompt('enter number 2 : '));

    num1 > num2 ? console.log(`the max number is : ${num1}`) : console.log(`the max number is : ${num2}`)
    


}

// maxNumber();

// challenge 5
let result;
const scorePoint = (point) => {
    point = Number(prompt('enter the point = '));


   switch (true) {
    case point >= 90 && point <= 100 : result = 'A'
    break;

    case point >= 80 && point <= 89 : result = 'B'
    break;


    case point >= 70 && point <= 79 : result = 'C'
    break;
    
    case point >= 60 && point <= 69 : result = 'D'
    break;
    
    case point <= 60 : result = 'F'
    break;

    

    default: result = 'Invalid input'
    
        break;
   }

   console.log(result)
}

// scorePoint()

// challenge 6
const bissextileYear = (year) => {
    year = Number(prompt('enter a year = '));

    year % 400 === 0  || year % 100  !== 0 && year % 4 === 0 ? console.log('Année bissextile') : console.log('machi bissextile');
    
    
}
// bissextileYear()

// challenge 7
const VerifyPassword = (password) => {
  password = prompt("enter a password : ");
  if (
    password.length >= 8 &&
    /\d/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password)
  ) {
    console.log("Fort");
  } else if (password.length >= 6 && /\d/.test(password)) {
    console.log("Moyen");
  } else if (password.length < 6) {
    console.log("Faible");
  }
};

VerifyPassword();

// console.log(rigexData.test(342342));

// challenge 8
const lightColor = (light) => {
    light = prompt('enter light = ');
    let result;

    switch (light) {
        case 'red': result = 'stop'
        break;

        case 'yellow': result = 'be ready'
        break;

        case 'green': result = 'gooo'
        break;
            
    
        default: result = 'invalid input'
            break;
    }

    console.log(result);
    
}

// lightColor()

// challenge 9
const fizzBuzz = (num) => {
    num = Number(prompt('enter number = '));

    num % 3 === 0 && num % 5 === 0 ? console.log('FizzBuzz') : num % 3 === 0 ? console.log('Fizz') : num % 5 === 0 ? console.log('Buzz')  : console.log(num);
    
}

// fizzBuzz()

// challenge 10
const connection = (user, pass) => {
    user = prompt('enter username = ');
    pass = Number(prompt('enter password = '));

    user === 'admin' && pass === 1234 ? console.log('welcome admin') : pass !== 1234 ? console.log('password incorrect') : console.log('user not found');
    
    
    
}

// connection()
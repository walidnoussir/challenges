// challenge 1
const prompt = require('prompt-sync')();

// const first_name = prompt("enter your first name");
// const last_name = prompt("enter your last name");
// const age = prompt("enter your age");
// const sexe = prompt("enter your sexe");
// const phone = prompt("enter your phone");

// console.log(`your name is : ${first_name} ${last_name} your age is : ${age} your sexe : ${sexe} and your phone number is : ${phone}`);


// challenge 2

// const convertTemp = (temp) => {
//     const Fahrenheit = (temp * 1.8) + 32;
//     return Fahrenheit
// }

// console.log(convertTemp(23));

// challenge 3
// var a = "value";

// let b = a
// let c = b
// var a = c
// console.log(a, b, c);

// challenge 4

const operations = (a, b) => {
    
    console.log(`${a + b} \n${a - b} \n${a * b} \n${a / b} `);
    
}

// operations(3, 2)

const calc = (a, b, c, d) => {
    const sum  = a + b + c + d
    const moy = sum / 4;

    console.log(`sum : ${sum}\nmoy : ${moy}`);
    
}

// calc(1, 2, 3, 4)

// challenge 6

const distance = (fast, time) => {
    console.log(fast * time);
     
}

// distance(220, 5)

// challenge 7

const circ = (r) => {
    console.log(2 * Math.PI * r);
    
}

// circ(12)

// challenge 8
const reverse = (x) => {
    const numbers = [x];
    console.log(Number(numbers.join('').split('').reverse().join('')))

}

reverse(123)

// challlenge 9
const convertDist = (dist) => {
 console.log(dist / 1.609);
 
}

// convertDist(300)

const convertMoneyToMAD = (money) => {
    console.log(money * 10.61);
    
}

// convertMoneyToMAD(23)

const prompt = require('prompt-sync')();

// challenge 1
const multiple = (num) => {
    num = Number(prompt('enter a number = '));

    for (let i = 1; i <= 10; i++) {
        console.log(` ${num} * ${i} = ${ num * i}`); 
    }

}

// multiple()
// challenge 2

const premierNum = (num) => {
    num = Number(prompt('enter a num = '))
    let count = 0

    for(let i = 0; i <= num; i++) {
        if(num % i === 0)  count++ 
    }

    if(count === 2) {
        console.log('premier');
    } else {
        console.log('machi premier');

    }
    
}

// premierNum()

// challenge 3

const sumMax = (num) => {
    let sum = 0;
    let max = [];

    while(num !== 0) {
        num = Number(prompt('enter number = '));

        if (num < 100) {
            sum += num
            max.push(num)
        }

        
    }
    console.log(`sum : ${sum} max : ${Math.max(...max)}`);

    
}
// sumMax()

// challenge 4
const reverse = (x) => {
        x = prompt('enter: ')

    const numbers = [x];
    // console.log(numbers);
    
    console.log(Number(numbers.join('').split('').reverse().join('')))

}

// challenge 5

const premierNums = (num) => {
    num = Number(prompt('enter a number = '));
    let premiers = [];
    let x = 0

    for(let i = 2; i <= num; i++) {
        for(let j = 2; j <= 10; j++) {
            if(i % j === 0)  continue
            x = j
    }
    console.log(i, x, i % x);
    

    }

    // console.log(`les premiers : ${premiers.join('-')}`);
    
}

// premierNums()

// challenge 6
const powerNum = (num1, num2) => {
    num1 = Number(prompt('enter number 1 = '));
    num2 = Number(prompt('enter number 2 = '));
    let i = 0
    let result = 1;

    while(i <= num2) {
         result *= num1 
        i++
    }

    console.log(result);
    
}

// powerNum()

// challenge 7
const sumPositive = (num) => {
    let sum = 0
    for(let i = 0; i < 5; i++) {
        num = Number(prompt('enter number = '))
        if(num > 0 ) sum += num
    }

    console.log(sum);
    
}

// sumPositive()

const pyramidStars = (lines) => {
    lines = Number(prompt('enter lines number = '));

    for(let i = 0; i < lines; i++) {
        for(let j = lines; j < i; j++) {
            console.log(j, i);
            
        }
    }
}

pyramidStars()
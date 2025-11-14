// challenge 1
const prompt = require('prompt-sync')();

const inverse = (a, b, c, d) => {
    a = Number(prompt('enter a number = '));
    b = Number(prompt('enter a number = '));
    c = Number(prompt('enter a number = '));
    d = Number(prompt('enter a number = '));

    const inversedArr = [a, b, c, d];
    console.log(inversedArr.reverse());
    
}

// inverse()

// challenge 2
const sumMoy = (num) => {
    const nums = [];
    for (let i = 1; i <= 5; i++) {
        num = Number(prompt(`enter number ${i} = `))
        nums.push(num)
    }

    const sum = nums.reduce((acc, cur) =>  acc + cur);
    console.log(`the sum : ${sum}\nmoyenne : ${sum / nums.length}`);
    
}

// sumMoy()

// challenge 3
const searchNumber = (num) => {
    const numbers = [];
    
   for (let i = 1; i <= 5; i++) {
        num = Number(prompt(`enter number ${i} = `))
        numbers.push(num)
    }
    
    searchedNum = Number(prompt(`enter a number = `))

    numbers.includes(searchedNum) ? console.log(`Yes is exist with index ${numbers.indexOf(searchedNum)}`) : console.log(`${searchedNum} does'n exist`);
}

// searchArr()

//challenge 4
const searchString = (str) => {
    const words = [];
    
   for (let i = 1; i <= 3; i++) {
        str = prompt(`enter word ${i} = `)
        words.push(str)
    }
    
    searchedWord = prompt(`enter a word = `)

    words.includes(searchedWord) ? console.log(`Yes ${searchedWord} is exist with index ${words.indexOf(searchedWord)}`) : console.log(`${searchedWord} does'n exist`);
}

// searchString()

// challenge 5
const minMax = (num) => {
    const nums = []
    for (let i = 1; i <= 5; i++) {
        num = Number(prompt(`enter number ${i} = `))
        nums.push(num)
    }

    const max = nums.sort((a, b) => a - b).at(-1)
    const min = nums.sort((a, b) => b - a).at(-1)

    console.log(`the max number = ${max}\nthe min number = ${min}`);
    

}
// minMax()
// challenge 6
const squareNumber = (num) => {
    const nums = []
    for (let i = 1; i <= 5; i++) {
        num = Number(prompt(`enter number ${i} = `))
        nums.push(num)
    }

    nums.forEach((num) => console.log(`${num} ** 2 = ${num ** 2}`))
}
// squareNumber()

// challenge 7
const includesVowel = (str) => {
    const vowels = ["a", "e", "i", "o", "u", "y"]
    let count = 0;
    str = prompt('type something : ');
    vowels.forEach(vowel => {

        str.split(" ").forEach(el => {

            if(el.includes(vowel)) count++
        } ) 
    })
    console.log(count);

}

includesVowel()
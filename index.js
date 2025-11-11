const prompt = require('prompt-sync')();

// defi 1
const helloFlan = (name) => {
     name = prompt('enter your name :')

    console.log(`hello ${name}`);

    
}

// helloFlan()

const sunTwoNum = (num1, num2) => {
    num1 = prompt('enter number 1 : ')
    num2 = prompt('enter number 2 : ')

    console.log(`the sun is : ${Number(num1) + Number(num2)}`);
    
}

// sunTwoNum()

const addFiveToNumber = (num) => {
    num = Number(prompt('enter the number : '))

    console.log(num + 5);
    
}

// addFiveToNumber()

const isConnected = (res) => {
    res = prompt('are you connected :');

    if (res === 'yes') {
        console.log('welcome body');
    }else if(res === 'no') {
        console.log('try to connect');
        
    }else {
        console.log('error');
        
    }
}

// isConnected()

const replaceSecondElement = (fruit1, fruit2, fruit3) => {
    fruit1 = prompt('enter first fruit :')
    fruit2 = prompt('enter second fruit :')
    fruit3 = prompt('enter third fruit :')

    const fruits = [fruit1, fruit2, fruit3];
    console.log("fruits updated", fruits.join(' ').replace(fruit2, 'Mangue'));
    

}

// replaceSecondElement()

const updateAge = (name, age, newAge) => {
    name = prompt('enter your name : ')
    age = prompt('enter your age : ')

    const person = {name, age};
    newAge = prompt('enter your new age : ')
    person.age = newAge

    console.log(person);
    


}

// updateAge()

const test = () => {
    const message = prompt('write a message')
}

// test()

const concat = (fname, lname) => {
    fname = prompt('enter your fname');
    lname = prompt('enter your lname');

    console.log(`your name complete is : ${fname} ${lname}`);
    
}

// concat()

const total = (n, num) => {
    n = Number(prompt('how much nums you wanna enter: '));
    // let sum = 0;
    let sum = []
    let total = 0

    for (let i = 1; i <= n ; i++) {
        num = Number(prompt('enter number :'))
        sum.push(num)
        total = sum.reduce((acc, number) => acc + number, 0)

    }

    console.log(total);
    
}

// total()

const status = prompt('write something');
console.log(status);

const test2 = () => {
    const status = prompt('write something');
    console.log(status);
    
}

test2()
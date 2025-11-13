// exercice 1
const prompt = require('prompt-sync')();

const calcPrice = (price, category) => {
    price = Number(prompt('enter the price = '));
    category = prompt('enter the category = ');

    category === 'student' ? console.log(price - (price * 0.2)) : category === 'senior' ? console.log(price - (price * 0.3)) : console.log(price);
    
}

// calcPrice()

// exercice 2

const guessNumber = (num) => {
    const secretNumber = Math.floor(Math.random() * 10);
    console.log(secretNumber);
    num = Number(prompt('enter a number = '));

    num > secretNumber ? console.log('very high') : num < secretNumber ? console.log('very low') : console.log('Congratulations');
}

// guessNumber()

// exercice 3

const calcMoy = (point1, point2, point3) => {
    point1 = Number(prompt('enter point 1 = '));
    point2 = Number(prompt('enter point 2 = '));
    point3 = Number(prompt('enter point 3 = '));

    const moy = (point1 + point2 + point3) / 3;

    switch (true) {
        case moy >= 16 : console.log('Excellent');
        
            break;
            
            case moy >= 12 && moy <= 15 : console.log('Bien');
            break;
            
            case moy >= 10 && moy <= 11 : console.log('Passable');
            break;

            case moy < 10 : console.log('Échec');
                break;
    
        default: console.log('invalid input');
        
            break;
    }

    // console.log(result);
    
}


// calcMoy()

// exercice 4

const calcSalair = (salaire, status) => {
    salaire = Number(prompt('enter salaire = '));
    status = prompt('enter status = ').toLocaleUpperCase();

    status === 'CDI' ? console.log(Math.floor(salaire - ((salaire * 22) / 100))) : status === 'CDD' ? console.log(Math.floor(salaire - ((salaire * 18) / 100))) : status === 'Stage' ? console.log(Math.floor(salaire - ((salaire * 10) / 100))) : console.log(salaire);
}

// calcSalair();

// exercice 5

const validAge = (age, country) => {
    country = prompt('enter country = ').toLocaleLowerCase();
    age = Number(prompt('enter age = '));
    
    if(country === 'france') {
        if (age > 18 ) {
            console.log('Tu es majeur');
        } else {
            console.log('Tu es mineur');
        }
        
    }else if (country === 'usa') {
        if (age > 21 ) {
            console.log('Tu es majeur');
        } else {
            console.log('Tu es mineur');
        }
    }
    
}

// validAge()

// exercice 6
const calcFaisSport = (country, montant) => {
    country = prompt('enter country = ');
    montant = Number(prompt('enter montant = '));

    if (montant >= 50) {
        console.log('Livraison gratuite');
    }else {
        if (country === 'france') {
            console.log('Livraison = 5€');   
        }else {
            console.log('Livraison = 10€');   

        }
    }
}


// calcFaisSport()
// exercice 7

const validForm = (nom, age, email) => {
    nom = prompt('enter your name : ');
    email = prompt('enter your email : ');
    age = Number(prompt('enter your age : '));

    if (nom && age >= 13 && email.includes('@')) {
        console.log('form valid');
        
    }else {
        console.log('invalid form');
        
    }
}

// validForm();


const checkConditions = (age, permis, vehicule) => {
    let notFound = [];
    age = parseInt(prompt("age"));
  permis = prompt("do u have permis(O/N) : ").toUpperCase() === "O" ? true : false;
  vehicule = prompt("do u have vehicule (O/N)").toUpperCase() === "O" ? true : false;
  
  age < 18 && notFound.push("age");
  !permis && notFound.push("! permis");
  !vehicule && notFound.push("! vehicule");
  
  if (notFound.length === 0) {
      console.log("pret a conduire");
    } else {
        console.log(notFound.join(","));
    }
};

// checkConditions()

// exercice 9

const sortThree = (num1, num2, num3) => {
    num1 = Number(prompt('enter number 1 = '));
    num2 = Number(prompt('enter number 2 = '));
    num3 = Number(prompt('enter number 3 = '));

    const sortedArr = [num1, num2, num3];

    if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
        console.log(sortedArr.sort((a, b) => a - b).join(' '))
    } else {
        console.log('Les nombres doivent être uniques');
    }
    

}

// sortThree()

// exercice 10

const comparePassword = (password) => {
    const correctPassword = '1234';
    let count = 0
    
    while (count < 3) {
        password = prompt('enter the password = ');
        count++
        if (password === correctPassword) {
            break
        } else if(count === 3) {
            console.log('Accès bloqué');
        }
        

        
    }

    
}

comparePassword()
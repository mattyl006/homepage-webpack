import '../scss/main.scss';
import moment from 'moment';

function greet(name, age) {
    console.log(`Siema, mam na imię ${name}, mam ${age} lat`);
}

const greetArrow = (name, age) => {
    console.log(`Siema, mam na imię ${name}, mam ${age} lat`);
}

const greetObject = {
    hello: (name, age) => {
        console.log(`Siema, mam na imię ${name}, mam ${age} lat`);
    }
}

greet('Mateusz', 20);
greetArrow('Strzałka', 6);
greetObject.hello('Obiekcik', 'x');


console.log('Przypadki immutability w obiektach;');

// Przypadki immutability w obiektach

// Przykład 1

const humanA = {
    name: 'Maciek',
    age: 32
}

const humanB = {
    name: 'Stefan',
    age: 32
}

// W obu obiektach age wskazuje na 32
humanB.age = 35;
// Własności obiektów mogą być mutowane, const odnosi się do samego całego obiektu
console.log('humanA : ' + humanA.age);
console.log('humanB : ' + humanB.age);

// Przykład 2

const humanC = humanA;
humanC.age = 36;
console.log('humanA : ' + humanA.age);
console.log('humanC : ' + humanC.age);
// Wartości własności zmieniły się w dwóch obiektach, przez połączenie humanThree z humanOne

// Przykład 3

const humanD = {
    name: 'Stefan',
    age: humanA.age
}

// Tutaj humanD podłączy się po prostu do wartości własności humanA.age, nie do całego obiektu
console.log('humanD : ' + humanD.age);
humanD.age = 12;
console.log('humanD : ' + humanD.age);
console.log('humanA : ' + humanA.age);

// Przykład 4

const humanE = {
    name: 'Marian',
    age: 21,
    address : {
        street: 'Kurczaka',
        city: 'Zielona Góra'
    }
}

const humanF = {
    name: 'Stochaj',
    age: 18,
    address : humanE.address
}

console.log('humanE : ' + humanE.address.street);
console.log('humanF : ' + humanF.address.street);

humanF.address.street = 'Górajska';

console.log('humanE : ' + humanE.address.street);
console.log('humanF : ' + humanF.address.street);

//  Tutaj tak jak w Przykładzie 2, powiązujemy pewien element nie bezpośrednio do wartości, 
// więc zmiana będzie miała skutek wszędzie, chłopaki będą zawsze podążać razem

// Jak temu zapobiec?
const humanG = {
    name: 'Adrian',
    age: 18,
    address : {
        city: 'Piła',
        street: humanE.address.street // Połączyć bezpośrednio z wartością
    } 
}
console.log('humanG : ' + humanG.address.street);

humanG.address.street = 'Bebapska';
console.log('humanF : ' + humanF.address.street);
console.log('humanG : ' + humanG.address.street);

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation--js');
    const hamburger = document.querySelector('.hamburger--js');
    hamburger.classList.toggle('hamburger--close');
    navigation.classList.toggle('navigation--open');
})

console.log(`Dzień się zaczął: ${moment().startOf('day').fromNow()}`);
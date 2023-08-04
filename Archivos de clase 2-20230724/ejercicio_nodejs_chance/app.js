const Chance = require('chance');

const chance = new Chance();

// Genera datos aleatorios utilizando Chance
const randomName = chance.name();
const randomAge = chance.age();
const randomEmail = chance.email();

// Imprime los datos aleatorios en la consola
console.log('Nombre Aleatorio: ', randomName);
console.log('Edad Aleatoria: ', randomAge);
console.log('Email Aleatorio: ', randomEmail);
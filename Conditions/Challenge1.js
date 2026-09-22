const prompt = require('prompt-sync')();
let number = parseInt(prompt("entre un nombre"));
if (number % 2 === 0) {
    console.log(`Le nombre ${number} est pair.`);
} else {
    console.log(`Le nombre ${number} est impair.`);
}

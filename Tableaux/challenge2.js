const prompt = require('prompt-sync')();
let nombre = parseInt(prompt("combien d'éléments"));
let neww = [];
for (let i = 0; i < nombre; i++) {
    let element = prompt(`Donne l'élément ${i + 1} :`);
    neww.push(element);
   
}
console.log("Voici votre tableau :");
console.log(neww);
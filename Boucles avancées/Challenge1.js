let n = parseInt(prompt("Entrez le nombre de la table souhaitée :"));

let affichage = "";

// On commence à 10, tant qu'on est >= 1, on décrémente de 1
for (let i = 10; i >= 1; i--) {
    let resultat = n * i;
    // On ajoute à la chaîne (si on veut tout afficher sur une ligne)
    affichage += `${n} * ${i} = ${resultat}   `;
}

console.log(affichage);

let etudiant = {
    nom: "pablo",
    prenom: "jokh",
    notes: [20 , 12 , 02 , 10]
    };
    console.log(`${etudiant.prenom} ${etudiant.nom}`);
    console.log("notes: " + etudiant.notes.join(", "));
    let total = 0;
for (let note of etudiant.notes) {
    total += note;
}
let a = total / etudiant.notes.length;
console.log(`Moyenne : ${a}`);

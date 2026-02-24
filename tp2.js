const etudiants = [
    {id: 1, nom: "Rakoto", filiere: "Gestion", moyenne: 14},
    {id: 2, nom: "Rabe", filiere: "Economie", moyenne: 12.5},
    {id: 1, nom: "Rasoa", filiere: "Droit", moyenne: 15},
    {id: 1, nom: "Randia", filiere: "Medecine", moyenne: 11}
]

console.log(`- ${etudiants[1].nom}`);

console.log(`La liste des noms des etudiants: `);
for (let i=0; i<=(etudiants.length - 1); i++) {
    console.log(`- ${etudiants[i].nom}`);
}

for (let j=0; j<=(etudiants.length - 1); j++){
    const {nom, moyenne} = etudiants[j];
    console.log(`Nom : ${nom}, Moyenne : ${moyenne}`)
}
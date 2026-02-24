// Exo1
const etudiants = [
    {id: 1, nom: "Rakoto", filiere: "Gestion", moyenne: 14},
    {id: 2, nom: "Rabe", filiere: "Economie", moyenne: 12.5},
    {id: 1, nom: "Rasoa", filiere: "Droit", moyenne: 15},
    {id: 1, nom: "Randia", filiere: "Medecine", moyenne: 11}
]

console.log(`La liste des noms des etudiants: `);
for (let i=0; i<=(etudiants.length - 1); i++) {
    console.log(`- ${etudiants[i].nom}`);
}

for (let j=0; j<=(etudiants.length - 1); j++){
    const {nom, moyenne} = etudiants[j];
    console.log(`Nom : ${nom}, Moyenne : ${moyenne}`)
}

// Exo2

// Exo3
    // Fonction flechee
const afficherEtudiant = (etudiant) => {
    console.log(`ID: ${etudiant.id}, Nom: ${etudiant.nom}, Filiere: ${etudiant.filiere}, Moyenne: ${etudiant.moyenne}`);
};
    // Template literal
afficherEtudiant(etudiants[3]);

// Exercice 4

function chargerEtudiants(){
    // Attend 2 secondes avant de retourner
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(etudiants)
        },2000);
    })
}

async function afficherEtudiants(){
    try {
        // Arret tant que la valeur n'est pas reçu
        let etudiants_charge = await chargerEtudiants();
        
        /// Afficher les étudiants reçu
        for (etudiant of etudiants_charge) {
            console.log(`nom: ${etudiant.nom}, filière: ${etudiant.filiere}, moyenne: ${etudiant.moyenne}`);
        }
    } catch (error) {
        console.log("Une erreur s'est produite");
        console.log(error);
    }
}

// Exercice 5 
const moyenneGenerale = etudiants.reduce((accumulateur,actuel)=>{
    // La moyenne générale c'est la somme divisé par le nombre total
    return accumulateur+ (actuel.moyenne/etudiants.length)
},0);

console.log(`Moyenne Général : ${moyenneGenerale}`);
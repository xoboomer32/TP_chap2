const etudiants = [
    {id: 1, nom: "Rakoto", filiere: "GL", moyenne: 12},
    {id: 1, nom: "Rabe", filiere: "IG", moyenne: 9},
    {id: 1, nom: "Mah", filiere: "ARSB", moyenne: 15},
    {id: 1, nom: "Nao", filiere: "IAD", moyenne: 13},
];

const afficherEtudiant = (etudiant) => {
    console.log(`ID: ${etudiant.id}, Nom: ${etudiant.nom}, Filiere: ${etudiant.filiere}, Moyenne: ${etudiant.moyenne}`);
};

afficherEtudiant(etudiants[3]);
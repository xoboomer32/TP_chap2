const etudiants = [
    {
        id: 1,nom:"Rakoto",filiere:"GL",moyenne:12
    },
    {
        id: 2,nom:"Rabe",filiere:"IG",moyenne:9
    }
]


//// Exercice 4

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

///// Exercice 5 
const moyenneGenerale = etudiants.reduce((accumulateur,actuel)=>{
    // La moyenne générale c'est la somme divisé par le nombre total
    return accumulateur+ (actuel.moyenne/etudiants.length)
},0);

console.log(`Moyenne Général : ${moyenneGenerale}`);
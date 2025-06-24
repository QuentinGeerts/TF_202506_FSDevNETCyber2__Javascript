/*
  Utilisez l’objet Date et des structures conditionnelles,
  écrivez un programme qui affiche le jour de la semaine.
  Exemple : « Bonjour, nous sommes lundi! »
*/

const today = new Date();


// 1ère version (switch)

let jour;
switch (today.getDay()) {
  case 0:
    jour = "dimanche"
    break;
  case 1:
    jour = "lundi"
    break;
  case 2:
    jour = "mardi"
    break;
  case 3:
    jour = "mercredi"
    break;
  case 4:
    jour = "jeudi"
    break;
  case 5:
    jour = "vendredi"
    break;
  default:
    jour = "samedi"
}

console.log(`Bonjour, nous sommes ${jour} !`);

// 2ème version (tableau)
const joursSemaine = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
console.log(`Bonjour, nous sommes ${joursSemaine[today.getDay()]} !`);


// 3ème version (toLocaleDateString)
console.log(`Bonjour, nous sommes ${today.toLocaleDateString('fr-FR', { weekday: 'long' })} !`);


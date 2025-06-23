/*

  Créer un programme qui permet de demander à l'utilisateur combien de notes il doit rentrer.
  Boucle sur le nombre de notes et les ajoute à un tableau.

  Calcul la somme et la moyenne des notes. Ensuite les affiche.

*/

const notes = [];
const NB_NOTES = parseInt(prompt("Combien de notes à rentrer :"));

for (let i = 0; i < NB_NOTES; i++) {
  notes.push(parseInt(prompt("Entrez la note n°" + (i + 1) + ": ")));
}

const somme = notes.reduce((acc, value) => acc + value);
const moyenne = somme / NB_NOTES;

console.log('notes :>> ', notes);
console.log('somme :>> ', somme);
console.log('moyenne :>> ', moyenne.toFixed(2));

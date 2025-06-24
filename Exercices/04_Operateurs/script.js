// Calcul de la TVA
// Écrire un programme qui :
// 1. Demande à l’utilisateur un prix unitaire hors taxe d’un livre
// 2. Demande à l’utilisateur la quantité de livre
// 3. Calcule et affiche le prix total TTC de la commande, en utilisant une TVA de 21%

let prixHTVA, nbLives;

do {
  prixHTVA = parseFloat(prompt("Entrez le prix du livre HTVA: "));
} while (isNaN(prixHTVA))

do {
  nbLivres = parseInt(prompt("Entrez le nombre de livre: "));
} while (isNaN(nbLivres))

const TVA = .21;

const prixTotal = nbLivres * (prixHTVA * (1 + TVA));

console.log(`${nbLivres} livres à ${prixHTVA}€ vaut ${prixTotal} TTC.`);

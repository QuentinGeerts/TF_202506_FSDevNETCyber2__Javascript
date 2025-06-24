// Fonctions

// 1. Procédure simple
function nomProcedure() {
  console.log("Hello");
}

nomProcedure();

// 2. Fonction simple

/**
 *
 *
 * @return {string}
 */
function nomFonction() {
  return "Hello";
}

let resultat = nomFonction();

// 3. Fonction avec paramètres

// ⚠️ Extension utilisée: Document This

/**
 * Fonction permet de calculer la somme de deux nombres.
 *
 * @param {number} a Le premier nombre
 * @param {number} b Le deuxième nombre
 * @return {number} La somme des deux nombres
 */
function addition(a, b) {
  return a + b;
}

resultat = addition("5", "3");
console.log("resultat :>> ", resultat);

// 4. Valeur par défaut

/**
 *
 *
 * @param {*[]} array
 * @param {string} [sep=" - "]
 * @return {string}
 */
function formatTableau(array, sep = " - ") {
  return array.join(sep);
}

// 5. Valeur vs Reference

/**
 *
 *
 * @param {{ nom: string, prenom: string, age: number}} personne
 * @param {string} nouveauPrenom
 */
function updatePersonnePrenomRef(personne, nouveauPrenom) {
  personne.prenom = nouveauPrenom;
}

function updatePersonnePrenomValue(prenom, nouveauPrenom) {
  prenom = nouveauPrenom;
}

const personne = {
  nom: "Geerts",
  prenom: "Quentin",
  age: 29,
};

console.log('personne :>> ', personne);

updatePersonnePrenomRef(personne, "Anonyme"); // Envoi d'une référence
console.log('personne :>> ', personne); // Anonyme
updatePersonnePrenomValue(personne.prenom, "Nouveau"); // Envoi d'une valeur
console.log('personne :>> ', personne); // Anonyme

// 6. Fonction Anonyme

let a = function () { } // a()
const b = function () { } // b()
const c = [function () {}, function () {}] // c[0](), c[1]()
const d = {
  addition: function (a, b) { return a + b; },
  soustraction: function (a, b) { return a - b; },
  multiplication: function (a, b) { return a * b; },
  division: function (a, b) { return a / b; },
};

d.addition(5, 3);

// 7. Fonction fléchée
let e = () => {};
const f = prenom => {};
const g = (nom, prenom) => {};

// const addition = (a, b) => a + b;
// const soustraction = (a, b) => { return a - b; }

// 8. Callback

function filter (array, predicate) {
  const filtered = [];

  for (const element of array) {
    if (predicate(element)) {
      filtered.push(element);
    }
  }

  return filtered;
}

/**
 *
 *
 * @param {{prenom: string, age: number, sexe: 'M' | 'F'}} personne
 */
function onlyFFn (personne) {
  return personne.sexe === 'F';
}

const persons = [
  { prenom: 'Quentin', age: 29, sexe: 'M' },
  { prenom: 'Mélanie', age: 37, sexe: 'F' },
  { prenom: 'Pietro', age: 41, sexe: 'M' },
  { prenom: 'Bengi', age: 34, sexe: 'F' },
];

const onlyFemale = filter(persons, onlyFFn);
console.log('onlyFemale :>> ', onlyFemale);

const onlyBetween30And40 = filter(persons, function (p) { 
  return p.age >= 30 && p.age <= 40;
})

console.log('onlyBetween30And40 :>> ', onlyBetween30And40);

const onlyOlderThan40 = filter(persons, (p) => p.age > 40);
console.log('onlyOlderThan40 :>> ', onlyOlderThan40);
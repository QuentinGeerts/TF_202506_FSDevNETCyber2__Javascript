// Constantes prédéfinies de Javascript

// 1. NaN (= Not a Number) (Provient de Number)

console.log('42 / "a" :>> ', 42 / "a"); // NaN
// Number.NaN
// Number.isNaN()

// Pour vérifier si un nombre est bien un nombre:
// - Privilégiez le isNaN
console.log('isNaN(42 / "a") :>> ', isNaN(42 / "a")); // true
console.log(42 / "a" == NaN); // false ⚠️

console.clear();

// 2. Infinity (comme l'infini mathématique)

console.log("42 / 0 :>> ", 42 / 0); // Infinity
console.log("42 / Infinity :>> ", 42 / Infinity); // 0
console.log("Infinity * Infinity :>> ", Infinity * Infinity); // Infinity
console.log("Infinity / Infinity :>> ", Infinity / Infinity); // NaN

console.clear();

// 3. Undefined (Possède une valeur non définie)

let maVariable1; // undefined
console.log("maVariable1 :>> ", maVariable1);
console.log("typeof maVariable1 :>> ", typeof maVariable1);

maVariable1 = 42;
console.log("maVariable1 :>> ", maVariable1);
console.log("typeof maVariable1 :>> ", typeof maVariable1);

maVariable1 = undefined;
console.log("maVariable1 :>> ", maVariable1);
console.log("typeof maVariable1 :>> ", typeof maVariable1);

console.log("maVariable1 == undefined :>> ", maVariable1 == undefined); // true
console.log('typeof a == "undefined" :>> ', typeof a == "undefined"); // true
console.log('typeof a == "number" :>> ', typeof a == "number"); // false

console.clear();

// 4. Math

console.log("Math :>> ", Math);
console.log("Math.random() :>> ", Math.random());
console.log(
  "Math.floor(Math.random() * 10) + 1 :>> ",
  Math.floor(Math.random() * 10) + 1
);
console.log("Math.PI :>> ", Math.PI); // 3.141592653589793
console.log("Math.PI.toFixed(2) :>> ", Math.PI.toFixed(2)); // 3.14

console.clear();

// 5. Number

console.log("Number :>> ", Number);

console.log('parseInt("42") :>> ', parseInt("42")); // 42 <Number>
console.log('parseInt("42a") :>> ', parseInt("42a")); // 42 <Number>
console.log('parseInt("a42") :>> ', parseInt("a42")); // NaN <Number>
console.log('parseInt("a") :>> ', parseInt("a")); // NaN <Number

console.log('parseFloat("42.2") :>> ', parseFloat("42.2")); // 42.2 <Number>
console.log('parseFloat("42.2a") :>> ', parseFloat("42.2a")); // 42.2 <Number>
console.log('parseFloat("a42.2") :>> ', parseFloat("a42.2")); // NaN <Number>

console.log('+"42" :>> ', +"42"); // 42 <Number>
console.log('+"42a" :>> ', +"42a"); // NaN <Number
console.log('+"a42" :>> ', +"a42"); // NaN <Number

console.log('+"42.2" :>> ', +"42.2"); // NaN <Number
console.log('+"42.2a" :>> ', +"42.2a"); // NaN <Number
console.log('+"a42.2" :>> ', +"a42.2"); // NaN <Number

// Choix de la base de conversion
console.log('parseInt("F", 16) :>> ', parseInt("F", 16)); // 15

console.clear();

// 6. let, const et var

// Avant ES6 (2015): var 💩💩
// A partir de ES6 (2015): let et const 💖✨

// let pour créer une variable
// const pour créer une constante

const PI = 3.141592; // Déclaration + affectation
console.log("PI :>> ", PI);

// PI = 3.14; // Impossible: Uncaught TypeError: Assignment to constant variable.

// Différence entre ES5 et ES6:

nom = "Stourme"; // Peut être utilisé avant d'être déclaré (Hoisting possible)
console.log("nom :>> ", nom);
var nom = "Geerts";
console.log("nom :>> ", nom);
var nom = "Thys"; // Re-déclaration de bloc fonctionnel
console.log("nom :>> ", nom);

// prenom = "Quentin"; // Hoisting impossible
let prenom = "Quentin";
console.log("prenom :>> ", prenom);
// let prenom = "Jonathan"; // Uncaught SyntaxError: Identifier 'prenom' has already been declared

if (true) {
  // x et y sont des variables locales au bloc
  var x = 2;
  let y = 2;
}

console.log("x :>> ", x); // Accès car du global scoped
// console.log('y :>> ', y); // Pas accès car local scoped

console.clear();

// 7. Types

// 7.1. number

let myNumber;
console.log("typeof myNumber :>> ", typeof myNumber); // undefined

myNumber = 42;
console.log("typeof myNumber :>> ", typeof myNumber); // number

myNumber = 42.2;
console.log("typeof myNumber :>> ", typeof myNumber); // number

// 7.2. string

let myString;
console.log("typeof myString :>> ", typeof myString); // undefined

myString = new String("Ma nouvelle chaîne de caractères");
console.log("typeof myString :>> ", typeof myString); // String

myString = "Ma seconde chaîne de caractères";
console.log("typeof myString :>> ", typeof myString); // string

console.log("myString.length :>> ", myString.length); // 31

console.log('42.toString() :>> ', (42).toString());
console.log('42.2.toString() :>> ', (42.2).toString());
console.log('true.toString() :>> ', (true).toString());

// 7.3. booléen

let myBoolean;
console.log("typeof myBoolean :>> ", typeof myBoolean); // undefined

myBoolean = true;
console.log("typeof myBoolean :>> ", typeof myBoolean); // boolean

myBoolean = false;
console.log("typeof myBoolean :>> ", typeof myBoolean); // boolean

// 7.4. bigint
let maxNumber = Number.MAX_SAFE_INTEGER;
console.log("maxNumber :>> ", maxNumber);
console.log("maxNumber + 1 :>> ", maxNumber + 1);
console.log("maxNumber + 2 :>> ", maxNumber + 2);
console.log("maxNumber + 3 :>> ", maxNumber + 3);

let myBigInt = BigInt(Number.MAX_SAFE_INTEGER);

console.log("myBigInt + 1n :>> ", myBigInt + 1n);
console.log("myBigInt + 2n :>> ", myBigInt + 2n);
console.log("myBigInt + 3n :>> ", myBigInt + 3n);

console.clear();

// 7.5. Array

let myArray;
console.log("typeof myArray :>> ", typeof myArray); // undefined

myArray = new Array(); // Avec constructeur
console.log("typeof myArray :>> ", typeof myArray);
console.log("myArray.constructor :>> ", myArray.constructor);
console.log("myArray.constructor == Array :>> ", myArray.constructor == Array);

myArray = [];
console.log("typeof myArray :>> ", typeof myArray);
console.log("myArray.constructor :>> ", myArray.constructor);
console.log("myArray.constructor == Array :>> ", myArray.constructor == Array);

myArray = [42, "bonjour", true, [], {}, () => {}];

console.clear();

// 7.6. Object

let myObject;

myObject = { nom: "Geerts", prenom: "Quentin" };
myObject = { nom: "Geerts", prenom: "Quentin" };
myObject = {
  nom: "Geerts",
  prenom: "Quentin",
  "nom-complet": "Geerts Quentin",
};

console.log("typeof myObject :>> ", typeof myObject);
console.log('myObject["nom"] :>> ', myObject["nom"]);
console.log('myObject["prenom"] :>> ', myObject["prenom"]);
console.log('myObject["nom-complet"] :>> ', myObject["nom-complet"]); // ✅ pour les noms composés

console.log("myObject.nom :>> ", myObject.nom);
console.log("myObject.prenom :>> ", myObject.prenom);
// console.log('myObject.nom-complet :>> ', myObject.nom-complet); // Pas possible

console.clear();

// 7.7. Fonctions

let myFunction = function () {
  console.log("Hello !");
};

console.log("myFunction :>> ", myFunction);
console.log("myFunction() :>> ", myFunction());
console.log("typeof myFunction :>> ", typeof myFunction); // function
console.log("myFunction.constructor :>> ", myFunction.constructor); // Function

console.clear();

// 7.8. null

let myNull;
console.log("typeof myNull :>> ", typeof myNull);

myNull = null;
console.log("typeof myNull :>> ", typeof myNull);

// 7.9. any

let myAny;
myAny = 42;
console.log("typeof myAny :>> ", typeof myAny);
myAny = "Bonjour";
console.log("typeof myAny :>> ", typeof myAny);
myAny = true;
console.log("typeof myAny :>> ", typeof myAny);
myAny = [];
console.log("typeof myAny :>> ", typeof myAny);
myAny = () => {};
console.log("typeof myAny :>> ", typeof myAny);
myAny = {};
console.log("typeof myAny :>> ", typeof myAny);

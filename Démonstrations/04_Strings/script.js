// Chaine de caractères

let nom = "Geerts"; // 💖
let prenom = new String("Quentin");

let nomComplet = nom + ' ' + prenom; // Concaténation
let nomComplet2 = `${nom} ${prenom}`;

// Caractères d'échappement
console.log('Je m\'appelle Quentin');
console.log("Je m'appelle \"Quentin\"");
console.log(`Je m'appelle "Quentin"`);

// Fonctions avec les chaînes de caractères

console.log('prenom[4] :>> ', prenom[4]);

console.log(prenom.indexOf("i")); // 5

console.log(prenom.match(/[a-z]/g));

let message = "Bonsoir il va bien être l'heure de nous quitter pour de meilleures aventures."

let arrayMessage = message.split(" ");
console.log('arrayMessage :>> ', arrayMessage);

console.log('message.split("") :>> ', message.split(""));
console.log('message.split("").join("") :>> ', message.split("").join(""));

console.log('message.toUpperCase() :>> ', message.toUpperCase());
console.log('message.toLowerCase() :>> ', message.toLowerCase());


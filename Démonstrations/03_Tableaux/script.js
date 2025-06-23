// Tableaux

// - Dynamique en terme de types
// - Dynamique en terme de taille

// 1. Déclaration
const tab = ["Mélanie", "Quentin", "Benjamin", "William", "Antoine"]; // à la volée 💖
console.log("tab :>> ", tab);

const tab2 = new Array(); // avec constructor
console.log("tab2 :>> ", tab2);

// 2. Affectation
tab2[0] = 42;
tab2[10] = 52;
tab2[999] = 24;

console.log("tab2 :>> ", tab2);

tab2["lundi"] = "Frites";
console.log("tab2 :>> ", tab2);

const jours = [];
jours["lundi"] = "Steak Frites";
jours["mardi"] = "Sandwich";
jours["mercredi"] = "Pâtes bolo";
jours["jeudi"] = "Curry";
jours["vendredi"] = "Panini";
jours["samedi"] = "Salade";
jours["dimanche"] = "BBQ";

console.log("jours :>> ", jours);

console.log("Object.keys(jours).length :>> ", Object.keys(jours).length);

console.clear();

// 3. Récupération
console.log("tab[0] :>> ", tab[0]); // "Mélanie"
console.log("tab[tab.length - 1] :>> ", tab[tab.length - 1]); // "Antoine"
console.log("tab[4] :>> ", tab[4]); // "Antoine"
console.log("tab[-1] :>> ", tab[-1]); // undefined
console.log("tab[5] :>> ", tab[5]); // undefined

console.clear();

// 4. Parcourir un tableau

// 4.1. foreach (méthode)
tab.forEach((value, index, array) => {
  console.warn("");
  console.log("value :>> ", value);
  console.log("index :>> ", index);
  console.log("array :>> ", array);
});

function callbackFn (value, index, array) {
  console.warn("");
  console.log("value :>> ", value);
  console.log("index :>> ", index);
  console.log("array :>> ", array);
}
tab.forEach(callbackFn);

console.error("");

// 4.2. for classique

for (let i = 0; i < tab.length; i ++) {
  console.log('tab[' + i + '] :>> ', tab[i]);
}

console.clear();

// 4.3. for ... of (sans index)

for (const personne of tab) {
  console.log('personne :>> ', personne);
}

console.clear();

// 4.4. for ... in (avec index)

for (const index in jours) {
  console.log('jours[' + index + '] :>> ', jours[index]);
}

console.clear();
/*
  Chaîne : « ma formation javascript »
  Avec la chaîne ci-dessus :
    1. Retourner la position de « ma »
    2. Indiquer l’indice de la lettre « p »
    3. Retrouver la lettre située à l’indice 21
    4. Remplacer « javascript » par « Java »
    5. Découper la chaîne avec le délimiteur «  » (espace)
    6. Inverser la chaîne de caractères (+ difficile) :
    « ma formation javascript » → « tpircsavaj noitamrof am »
*/

const chaine = "ma formation javascript";

// 1. Retourner la position de « ma »
console.log('chaine.indexOf("ma") :>> ', chaine.indexOf("ma"));

// 2. Indiquer l’indice de la lettre « p »
console.log("chaine.search(/p/gi) :>> ", chaine.search(/p/gi));

// 3. Retrouver la lettre située à l’indice 21
console.log("chaine.at(21) :>> ", chaine.at(21));
console.log("chaine[21] :>> ", chaine[21]);

// 4. Remplacer « javascript » par « Java »
console.log('chaine.replace("javascript", "Java") :>> ', chaine.replace("javascript", "Java"));

// 5. Découper la chaîne avec le délimiteur «  » (espace)
console.log('chaine.split(" ") :>> ', chaine.split(" "));

// 6. Inverser la chaîne de caractères (+ difficile) :
console.log('chaine.split("").reverse().join("") :>> ', chaine.split("").reverse().join(""));

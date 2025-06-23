// Les différentes fonctions des tableaux

const array = [];

array.push(1, 2, 3, 4);
console.log('array :>> ', array);

const persons = [
  { prenom: 'Quentin', age: 29 },
  { prenom: 'Jonathan', age: 36 },
  { prenom: 'Arnaud', age: 28 },
  { prenom: 'Luca', age: 33 },
  { prenom: 'Omaima', age: 26 },
  { prenom: 'Bengi', age: 34 },
  { prenom: 'Julian', age: 28 },
  { prenom: 'Dany', age: 47 },
  { prenom: 'Zineb', age: 22 },
  { prenom: 'Jordan', age: 28 },
  { prenom: 'Alain', age: 40 },
  { prenom: 'Véronique', age: 43 },
  { prenom: 'Vincent', age: 31 },
  { prenom: 'Pietro', age: 41 },
  { prenom: 'Damien', age: 27 },
]

// persons.sort((p1, p2) => p1.age - p2.age);

const sortedPersons = persons.toSorted((p1, p2) => p1.age - p2.age);

console.log('persons :>> ', persons);
console.log('sortedPersons :>> ', sortedPersons);
// Dates

// 1. Création de dates

// 1.1. new Date()

const today = new Date();
console.log("today :>> ", today);

// 1.2. new Date(value)

const date1 = new Date(Date.now() - 3600 * 1000);
console.log("date1 :>> ", date1);

// 1.3. new Date(dateString)

const date2 = new Date("1996-04-03 13:14:32");
console.log("date2 :>> ", date2);
const date3 = new Date("04-03-1996 13:14:32"); // ⚠️ mois et jour inversé
console.log("date3 :>> ", date3);

// 1.4. new Date(year, monthIndex [, day[, hour[, minute[, second[, millisecond]]]]])

const date4 = new Date(2025, 5); // Juin 2025 ⚠️ monthIndex = mois - 1
console.log("date4 :>> ", date4);
const date5 = new Date(2025, 5, 24); // 24 Juin 2025
console.log("date5 :>> ", date5);
const date6 = new Date(2025, 5, 24, 10); // 24 Juin 2025 10:00:00.000
console.log("date6 :>> ", date6);
const date7 = new Date(2025, 5, 24, 10, 17); // 24 Juin 2025 10:17:00.000
console.log("date7 :>> ", date7);
const date8 = new Date(2025, 5, 24, 10, 17, 31); // 24 Juin 2025 10:17:31.000
console.log("date8 :>> ", date8);
const date9 = new Date(2025, 5, 24, 10, 17, 31, 233); // 24 Juin 2025 10:17:31.233
console.log("date9 :>> ", date9);

console.clear();

// 2. Récupération des parties d'une date

console.log('today.getDate() :>> ', today.getDate());
console.log('today.getMonth() :>> ', today.getMonth()); // ⚠️ Month Index (commence à 0)
console.log('today.getFullYear() :>> ', today.getFullYear());
console.log('today.getHours() :>> ', today.getHours());
console.log('today.getMinutes() :>> ', today.getMinutes());
console.log('today.getSeconds() :>> ', today.getSeconds());
console.log('today.getDay() :>> ', today.getDay()); // Jour de la semaine ⚠️ dimanche 0

console.clear();

// 3. Modification des parties d'une date

today.setDate(29)
today.setMonth(1)
today.setFullYear(2019)
today.setHours(17)
today.setMinutes(39)
today.setSeconds(55)
// today.setDay() // Le seul qui ne peut pas être modifié

console.log('today :>> ', today);

console.clear();

// 4. Formattage d'une date

const formatDate = today.toLocaleDateString(navigator.language, { 
  day: "2-digit", 
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit", 
  fractionalSecondDigits: 3,
  weekday: "long",
  era: "long"
});

console.log('formatDate :>> ', formatDate);
// Démonstration: Timers

const startTimeoutBtn = document.getElementById("startTimeoutBtn");
const stopTimeoutBtn = document.getElementById("stopTimeoutBtn");
const startIntervalBtn = document.getElementById("startIntervalBtn");
const stopIntervalBtn = document.getElementById("stopIntervalBtn");

// 1. setTimeout (callback: () => void, nbMillisecond: number): number
// > Permet l'exécution d'un callback après un certain temps (unique)

let timerTimeout;

startTimeoutBtn.addEventListener("click", () => {
  console.log("Démarrage du timeout"); // OrdreExecution: 1, OrdreAffichage: 1

  timerTimeout = setTimeout(() => {
    console.log("Exécution du timer"); // OrdreExecution: 2, OrdreAffichage: 3
  }, 3 * 1000);

  console.log("Fin du timeout"); // OrdreExecution: 3, OrdreAffichage: 2
});

stopTimeoutBtn.addEventListener("click", () => {
  console.log("Arrêt du timeout");
  clearTimeout(timerTimeout);
});

// 2. setInterval (callback: () => void, nbMillisecond: number): number
// > Permet l'exécution d'un callback après un certain temps (répétée)

let timerInterval;

startIntervalBtn.addEventListener("click", () => {
  console.log("Démarrage de interval");

  timerInterval = setInterval(() => {
    console.log("Exécution du timer");
  }, 3 * 1000);

  console.log("Fin de interval");
});


stopIntervalBtn.addEventListener("click", () => {
  console.log("Arrêt de interval");
  clearInterval(timerInterval);
});
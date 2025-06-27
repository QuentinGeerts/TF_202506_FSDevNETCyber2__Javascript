function afficherMonHumeur() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() <= 0.6) {
        resolve("Content que ça soit bientôt le weekend. 😄");
      } else {
        reject("Trop mal la tête. 😭");
      }
    }, 2000);
  });
}

afficherMonHumeur()
  .then((message) => console.log("message :>> ", message))
  .catch((error) => console.log("error :>> ", error))
  .finally(() => console.log("L'affiche de l'humeur est terminé."));

// 2e façon avec async / await
window.addEventListener("DOMContentLoaded", async () => {
  try {
    const message = await afficherMonHumeur();
    console.log("message :>> ", message);
  } catch (error) {
    console.log("error :>> ", error);
  }

  console.log("L'affiche de l'humeur est terminé.");
});

// Echainement de promesses

function faireLeCafe() {
  return new Promise((resolve, reject) => {
    if (Math.random() <= 0.8) {
      resolve("Le café coule.");
    } else {
      reject("Plus de filtre.");
    }
  });
}

function seLaver() {
  return new Promise((resolve, reject) => {
    if (Math.random() <= 0.6) {
      resolve("Chante sous la douche");
    } else {
      reject("Plus de shampoing");
    }
  });
}

function dejeuner() {
  return new Promise((resolve, reject) => {
    if (Math.random() <= 0.3) {
      resolve("Miam les céréales");
    } else {
      reject("Snif. Plus de céréales.");
    }
  });
}


faireLeCafe()
  .then(message => {
    console.log('message :>> ', message);
    return seLaver();
  })
  .then(dejeuner)
  .catch(err => console.log('err :>> ', err))
  .finally(() => console.log("La journée peut commencer."));
/* 

Créez un formulaire simple : Nom, Prénom.
À l’aide du JavaScript, proposez une complétion automatique du formulaire 
(Jean, Dupont) lorsque l’on appuie sur un bouton.
Ajoutez un bouton qui remet à zéro tous les champs du formulaire

Reprenez le formulaire précédent. Ajoutez-y un champ Code Postal.
À l’aide du JavaScript, faites les vérifications nécessaires sur les champs.
→ Un code postal est un nombre de 4 chiffres (entre 1000 et 9999).

Vérifiez si les champs sont bien remplis, et si le code postal est conforme.
Lorsque le formulaire est valide, un message s’affiche sur la page.

*/

/** @type {HTMLFormElement} */
const form = document.forms["form"];
const autoCompleteBtn = document.getElementById("auto-complete-btn");
const resetBtn = document.getElementById("reset-btn");

autoCompleteBtn.addEventListener("click", () => {
  form["firstname"].value = "Jean";
  form["lastname"].value = "Dupont";
});

resetBtn.addEventListener("click", () => {
  form.reset();
});

form.addEventListener("submit", (event) => {
  // Annulation de la redirection
  event.preventDefault();

  let formValidity = true;

  const errors = document.getElementsByClassName("error");
  for (const error of errors) {
    error.classList.remove("error");
  }

  // Vérification des entrées

  /** @type {HTMLInputElement} */
  const firstname = form["firstname"];
  
  /** @type {HTMLInputElement} */
  const lastname = form["lastname"];
  
  /** @type {HTMLInputElement} */
  const zipcode = form["zipcode"];

  if (firstname.value == "") {
    formValidity = false;
    firstname.classList.add("error");
  }

  if (lastname.value == "") {
    formValidity = false;
    lastname.classList.add("error");
  }
  
  if (zipcode.value == "" || zipcode.value < 1000 || zipcode.value > 9999) {
    formValidity = false;
    zipcode.classList.add("error");
  }

  if (formValidity) {
    alert("Message envoyé");
  } else {
    // ...
  }
});

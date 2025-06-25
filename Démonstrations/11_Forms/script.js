/** @type {HTMLFormElement} */
const form = document.forms["formName"];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const errorMessages = document.getElementsByClassName("error-message");
  for (const error of errorMessages) {
    error.remove();
  }

  let formValidity = true;

  // Gestion des données d'envoi

  /** @type {HTMLInputElement} */
  const firstname = form["firstname"];
  // const firstnameInput = form.elements[0];

  /** @type {HTMLInputElement} */
  const adult = form["isAdult"];

  if (
    !Validator.required(firstname.value) ||
    !Validator.minLength(firstname.value, 2) ||
    !Validator.maxLength(firstname.value, 15)
  ) {
    formValidity = false;

    const firstnameErrorMessage = firstname.insertAdjacentElement(
      "afterend",
      document.createElement("span")
    );
    firstnameErrorMessage.classList.add("error-message");

    if (!Validator.minLength(firstname.value, 2)) {
      firstnameErrorMessage.textContent =
        "La valeur doit avoir minimum 2 caractères !";
    }

    if (!Validator.maxLength(firstname.value, 15)) {
      firstnameErrorMessage.textContent =
        "La valeur doit avoir minimum 15 caractères !";
    }

    if (!Validator.required(firstname.value)) {
      firstnameErrorMessage.textContent = "Le champ est requis !";
    }
  }

  if (!adult.checked) {
    formValidity = false;
    const adultErrorMessage = adult.insertAdjacentElement(
      "afterend",
      document.createElement("span")
    );
    adultErrorMessage.classList.add("error-message");
    adultErrorMessage.textContent = "Vous devez être adulte pour valider.";
  }

  if (formValidity) {
    console.log("Envoi des données");
  } else {
  }
});

const Validator = {
  required: (value) => value !== "",
  minLength: (value, minLengthValue) => value.length >= minLengthValue,
  maxLength: (value, maxLengthValue) => value.length <= maxLengthValue,
};

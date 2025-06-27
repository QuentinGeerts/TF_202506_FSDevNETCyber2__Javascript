/*
  Exercice: Consommation API avec Agify
*/

const COUNTRIES_API = "https://restcountries.com/v3.1/all?fields=cca2,translations";
const AGIFY_API = "https://api.agify.io?name=";

const form = document.forms.namedItem("form");
const select = form.elements.namedItem("countries");
const input = form.elements.namedItem("username");

const result = document.getElementById("result");

window.addEventListener("DOMContentLoaded", async () => {
  const countries = await getData(COUNTRIES_API);
  // Générer toutes les options avec les pays
  createOptions(countries);
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const countryCode = select.value;
  const username = input.value.trim();

  let url = AGIFY_API + username;

  if (countryCode) url += "&country_id=" + countryCode;

  const data = await getData(url);
  console.log('data :>> ', data);
  
  // Génération du DOM côté HTML...

  /*
  {
    "count": 49066,
    "name": "Dominique",
    "age": 67
  }
  */

  if (data.count > 0)
    result.innerHTML = `<p>${data.name} a ${data.age} ans.</p>`;
  else
    result.innerText = `Aucune valeur pour ${data.name}`;

});

async function getData(url) {
  return (await fetch (url)).json();
}

function createOptions(countries) {
  for (const country of countries) {
    const option = select.appendChild(document.createElement("option"));
    option.textContent = country.translations.fra.common;
    option.value = country.cca2;
  }
}
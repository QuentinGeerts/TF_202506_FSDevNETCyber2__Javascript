const POKE_API = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;

const pokemonsUL = document.getElementById("pokemons");
const pokedex = document.getElementById("pokedex");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

window.addEventListener("DOMContentLoaded", async () => {
  // Charger les pokémons au chargement de la page.
  // const response = await fetch(POKE_API);
  // console.log('response :>> ', response);
  // const data = await response.json();
  // console.log('data :>> ', data);

  const data = await getParsedData(POKE_API);

  const pokemons = await loadPokemons(data.results);
  createMenu(pokemons, data);
});

async function loadPokemons(dataUrl) {

  const pokemons = await Promise.all(dataUrl.map((poke) => getParsedData(poke.url)));

  const species = await Promise.all(pokemons.map(p => getParsedData(p.species.url)));

  const mergedPokemons = [];

  for (let i = 0; i < pokemons.length; i++) {
    mergedPokemons.push({ data: pokemons[i], species: species[i] })
  }

  return mergedPokemons;
}

async function getParsedData(url) {
  return (await fetch(url)).json();
}

function createMenu(pokemons, data) {
  pokemonsUL.textContent = "";
  pokemons.forEach((pokemon) => {
    createMenuItem(pokemon);
  });

  if (!data.previous) previousBtn.disabled = true;
  else {
    previousBtn.disabled = false;
    previousBtn.onclick = async () => {
      const previousData = await getParsedData(data.previous);
      console.log("previousData :>> ", previousData);
      createMenu(await loadPokemons(previousData.results), previousData);
    };
  }

  if (!data.next) nextBtn.disabled = true;
  else {
    nextBtn.disabled = false;
    nextBtn.onclick = async () => {
      const nextData = await getParsedData(data.next);
      createMenu(await loadPokemons(nextData.results), nextData);
    };
  }
}

function createMenuItem(pokemon) {
  const li = pokemonsUL.appendChild(document.createElement("li"));
  li.textContent = `${pokemon.data.id}. ${pokemon.species.names[4].name}`;

  li.addEventListener("click", () => {
    createDetails(pokemon);
    const audio = new Audio(pokemon.data.cries.latest);
      audio.play();
  });
}

function createDetails(pokemon) {
  console.log("pokemon :>> ", pokemon);

  pokedex.textContent = "";

  const pokemonName = document.createElement("h1");
  pokemonName.textContent = `${pokemon.species.names[4].name} - N°${pokemon.data.id}`;

  const pokemonSprite = document.createElement("img");
  pokemonSprite.src = pokemon.data.sprites.other["official-artwork"].front_default;
  pokemonSprite.width = "300";

  pokedex.append(pokemonName, pokemonSprite);
}

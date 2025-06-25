/*
  1. Créez un programme qui permet d’ajouter un élément à une liste lorsque l’on clique
  sur un bouton.
*/

window.addEventListener("DOMContentLoaded", () => {
  // Récupération des éléments HTML
  const addItemBtn = document.getElementById("add-item-btn");
  const items = document.getElementById("items");

  // Ajout d'un comportement au clic du bouton d'ajout
  addItemBtn.addEventListener("click", addItemFn);

  // Comportement pour ajouter un élément à la liste
  function addItemFn() {
    // 1. Création de l'élément de liste (li)
    const li = document.createElement("li");

    // 2. Modifier le contenu de l'élément de liste
    li.textContent = "item";

    // 3. Ajouter l'élément de liste à la liste
    items.append(li);

    // OU

    // items.appendChild(document.createElement("li")).textContent = "item";

  }
});


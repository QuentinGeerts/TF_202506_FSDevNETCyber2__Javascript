/*
  1. Créez un programme qui permet d’ajouter un élément à une liste lorsque l’on clique
  sur un bouton.
  2. En reprenant le code précédent, permettre à l’utilisateur d’écrire l’élément à l’aide
  d’un input. Attention, gestion des valeurs vides + doublons + ajouter bouton suppression.
*/

window.addEventListener("DOMContentLoaded", () => {
  // Récupération des éléments HTML
  const addItemBtn = document.getElementById("add-item-btn");
  const items = document.getElementById("items");
  const itemName = document.getElementById("item-name");

  // Ajout d'un comportement au clic du bouton d'ajout
  addItemBtn.addEventListener("click", addItemFn);
  itemName.addEventListener("keyup", (e) => {
    if (e.key === "Enter") addItemFn();
  });

  // Comportement pour ajouter un élément à la liste
  function addItemFn() {

    // Nettoyage de la donnée
    const value = itemName.value.trim();
    itemName.value = "";
    itemName.focus();

    if (value === "" || isAlreadyIn(value)) return;

    const li = document.createElement("li");
    li.textContent = value;
    items.append(li);

    const removeItemBtn = li.insertAdjacentElement("beforeend", document.createElement("button"));
    removeItemBtn.textContent = "❎";
    removeItemBtn.addEventListener("click", removeItemFn);
  }

  function isAlreadyIn(value) {
    for (const item of items.children) {
      if (item.textContent.toLowerCase() === value.toLowerCase()) return true;
    }
    return false;
  }

  function removeItemFn (event) {
    const parent = event.target.parentElement;
    parent.remove();
  }
});

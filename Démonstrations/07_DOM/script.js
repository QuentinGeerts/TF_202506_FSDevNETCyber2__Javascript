// Manipulation du DOM (Document Object Model)

// 1. Récupération d'éléments

// 1.1. Par ID
const btn = document.getElementById("btn");
console.log("btn :>> ", btn);

// 1.2. Par Class
const titles = document.getElementsByClassName("title");
console.log("titles :>> ", titles);

for (const title of titles) {
  console.log("title :>> ", title);
}

// 1.3. Par balise
const allParagraphes = document.getElementsByTagName("p");
console.log("allParagraphes :>> ", allParagraphes);

// 1.4. Par sélecteur CSS
// document.querySelector();
const allPAfterTitle = document.querySelectorAll(".title + p");
console.log("allPAfterTitle :>> ", allPAfterTitle);

console.clear();

// 2. Création d'éléments
// > document.createElement(tagName: string): HTML...Element

const img = document.createElement("img");
console.log("img :>> ", img);

const p = document.createElement("p");

console.clear();

// 3. Modification (de base) d'un élément

img.src =
  "https://www.francebleu.fr/s3/cruiser-production-eu3/2025/02/33fe1bd1-39e9-431f-a932-0bee063e1ec9/1200x680_sc_250305-fich-diff-chat-mariia-zotova-getty.jpg";

img.alt = "Un magnifique chaton 💖";
img.width = "300";
img.id = "img-cat";
img.className = "img bordered hovered";
img.classList.remove("bordered");

p.textContent = "Hello World !";
p.innerText += "<button onclick='alert(`Hacked 😨`);'>Hello World !</button>";
p.innerHTML = p.innerText;

// 4. Insérer un élément sur la page

// 4.1. En tant que dernier enfant (d'un parent)
// > parent.appendChild(nodeChild: Node): Node
// > parent.append(...nodeChild: Node[]): void

document.body.append(img, p);

const titleH2 = document.body.appendChild(document.createElement("h2"));
titleH2.textContent = "MON TITRE H2";

// 4.2. Avant un autre élément
// > parent.insertBefore(nouveauNoeud, noeudExistant): nouveauNoeud

const h3 = document.body.insertBefore(document.createElement("h3"), img);
h3.textContent = "Mon magnifique petit chat maaaanwh";

// 4.3. A des endroits spécifiques
// > parent.insertAdjacentElement(position, node: Node):

const span = btn.insertAdjacentElement(
  "beforeend",
  document.createElement("span")
);
span.textContent = " 💩";

btn.insertAdjacentText("afterbegin", "✨ ");

// 4.4. Supprimer un élément
// > parent.removeChild(node)
// > node.remove()

const p8 = document.body.removeChild(document.getElementById("p8"));
console.log('p8 :>> ', p8);

titleH2.remove();
console.log('titleH2 :>> ', titleH2);
const btn = document.getElementById("btn");

btn.onclick = handleClick;
btn.onclick = handleClick2;
btn.onclick = null;

console.dir(btn);

btn.addEventListener("click", function (event) {
  console.log("[anonyme] this :>> ", this);
  console.log('event :>> ', event);
});

btn.addEventListener("click", (event) => {
  console.log("[lambda] this :>> ", this);
  console.log('event :>> ', event);
});

btn.addEventListener("contextmenu", (event) => {
  console.log('event :>> ', event);
  event.preventDefault();
});

function handleClick() {
  console.log("Clic!");
}

function handleClick2() {
  console.log("Clic 2 !");
}


function disableCopyAndCut (event) {
  event.preventDefault();
  console.log("Petit malin, t'as essayé de copier / couper. ;)");
}

window.addEventListener("copy", disableCopyAndCut);
window.addEventListener("cut", disableCopyAndCut);
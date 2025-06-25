const p1 = document.getElementById("p1");
p1.style.backgroundColor = "cadetblue";
p1.style.padding = "5px 10px 15px";

console.log('p1.style.backgroundColor :>> ', p1.style.backgroundColor); // cadetblue
console.log('p1.style.fontStyle :>> ', p1.style.fontStyle); // 
console.log('getComputedStyle(p1).fontStyle :>> ', getComputedStyle(p1).fontStyle); // italic
console.dir(p1);
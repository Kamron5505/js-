// 1-savol: Arifmetik operatorlar
alert(5 % 2);

// 2-savol: Math metodlari
alert(Math.floor(Math.random() * 10) + 1);

// 3-savol: Math metodlari
alert(Math.floor(12.51));

// 4-savol: So‘z uzunligini topish
let text = "MARS IT SCHOOL";
alert(text.length);

// 5-savol: For loop
for (let i = 0; i < 10; i++) {
  console.log("MARS IT SCHOOL");
}

//6-savol:Array Methods
let harflar = [
  "a",
  "b",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z",
];

let ism =
  harflar[10] +
  harflar[0] +
  harflar[12] +
  harflar[17] +
  harflar[14] +
  harflar[13];

console.log(ism);

let yosh = prompt("Yoshingizni kiriting:");
if (yosh > 18) {
  console.log("Siz balog‘at yoshiga yetgansiz");
} else if (yosh == 18) {
  console.log("Balog‘at yoshi muborak!");
} else {
  console.log("Siz balog‘at yoshiga yetmagansiz");
}

// 8-savol: String metodlari
let ismFoydalanuvchi = prompt("Ismingizni kiriting:");
console.log(ismFoydalanuvchi.split("").reverse().join(""));

// 9-savol: DOM
let ismDOM = prompt("Ismingizni kiriting:");
let yoshDOM = prompt("Yoshingizni kiriting:");

let p = document.createElement("p");
p.textContent = `Ism: ${ismDOM}, Yosh: ${yoshDOM}`;
p.style.fontSize = "20px";
p.style.color = "blue";
p.style.fontWeight = "bold";
document.body.appendChild(p);

// 10-savol: Array metodlari
let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sonlar.filter((son) => son % 2 === 0));

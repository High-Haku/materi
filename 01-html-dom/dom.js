console.log(document);
console.log(document.getElementById("personal").innerHTML);
console.log(document.getElementsByClassName("skilvul"));
console.log(document.querySelector(".skilvul").innerHTML);
console.log(document.querySelector("#personal").innerHTML);

document.getElementById("personal").innerHTML = "My beautiful website";
document.querySelector("#personal").innerHTML = "Wonderfull website";

document.querySelector("#list").innerHTML = "<li>item1</li>";

const boxH1 = document.createElement("h1");
boxH1.textContent = "Ini HTML dibuat menggunakan DOM";

document.querySelector(".box").appendChild(boxH1);
// document.querySelector(".box").innerHTML = "<h1>Box2 dengan dom</h1>";

// menambahkan event dalam input dan button
const input = document.querySelector("#user-input");
const button = document.querySelector("#alert-button");

// button.addEventListener("click", function () {
//   alert(input.value);
// });

button.onclick = function () {
  alert(input.value);
};

button.addEventListener("mouseover", function () {
  button.style.color = "green";
  button.style.fontSize = "50px";
  button.style.backgroundColor = "yellow";
});

console.log(document.querySelector("#elementP"));
document.querySelector("#elementP").addEventListener("mouseover", function () {
  document.querySelector("#elementP").style.fontSize = "50px";
  console.log("sudah masuk mouse");
});

const submit = document.querySelector("#input-submit");
const email = document.querySelector("#input-email");
const password = document.querySelector("#input-password");

submit.onclick = function () {
  console.log("test click", email.value, password.value);
};

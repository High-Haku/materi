// session

let cartList = [];

const addToCart = (name, price, quantity) => {
  cartList.push({
    name,
    price,
    quantity,
  });
  console.log("cart", cartList);

  sessionStorage.setItem("cart", JSON.stringify(cartList));
};

const deleteCart = () => {
  sessionStorage.removeItem("cart");
};

// buat 2 buah form berisi nama dan alamat domisili
// lalu simpan ke dalam local storage
// dan tampilkan hasilnya kedalam dom

// const data = [];

// const onSubmit = () => {
//   const nameInput = document.querySelector("#name").value;
//   const domisiliInput = document.querySelector("#domisili").value;

//   console.log(nameInput, domisiliInput);

//   const dataUser = {
//     name: nameInput,
//     domisili: domisiliInput,
//   };

//   console.log("dataUser", dataUser);
//   const dataUserJSON = JSON.stringify(dataUser);
//   console.log("dataUserJSON", dataUserJSON);

//   // simpan ke local storage
//   localStorage.setItem("dataUser", dataUserJSON);
// };

// const dataLocalStorage = JSON.parse(localStorage.getItem("dataUser"));
// console.log(dataLocalStorage);

// const nameShow = (document.querySelector("#name-show").innerHTML =
//   dataLocalStorage.name);
// const domisiliShow = (document.querySelector("#domisili-show").innerHTML =
//   dataLocalStorage.domisili);

// function onClear() {
//   localStorage.clear();
// }

// const dataMap = dataLocalStorage.map((item) => item.name);

// console.log(dataLocalStorage.map((x) => x.name));

// dataShow.innerHTML = showLocal(dataLocalStorage);
// showLocal();

// console.log("tes");

// const skilvul = "skilvul";

// localStorage.setItem("username", skilvul);

// let nameArray = [];

// function onSubmit() {
//   const nameInput = document.getElementById("name").value;
//   console.log(nameInput);
//   nameArray.push(nameInput);
//   console.log(nameArray);

//   const nameArrayJSON = JSON.stringify(nameArray);
//   console.log(nameArrayJSON);
//   localStorage.setItem("nameHistory", nameArrayJSON);
// }

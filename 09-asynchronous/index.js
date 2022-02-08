// async await

async function helloWorld() {
  let halo = await "hello";
  return halo;
}
console.log("helloWorld", helloWorld());

const helloHighHaku = async () => {
  let halo = await "hello high haku";
  return halo;
};

console.log("helloHighHaku", helloHighHaku());

// fetching data dari server menggunakan async await
// menggunakan cara function biasa
// async function getDataPost() {
//   const option = {
//     method: "GET",
//   };
//   let response = await fetch(
//     "https://jsonplaceholder.typicode.com/users",
//     option
//   );
//   response = await response.json();
//   console.log(response);
// }

// getDataPost();

// menggunakan arrow function
// const getDataComment = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/comments");
//   console.log(response);
//   response = await response.json();
//   console.log(response);
// };

// getDataComment();

// fecthing data menggunakan promise

const getDataUsers = () => {
  const api = "https://jsonplaceholder.typicode.com/users";
  const option = {
    method: "GET",
  };

  fetch(api, option)
    .then((response) => response.json())
    .then((result) => console.log(result));
};

getDataUsers();

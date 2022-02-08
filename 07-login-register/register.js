console.log("first");

const register = () => {
  console.log("tes");
  const userNameInput = document.querySelector("#username").value;
  const passInput = document.querySelector("#password").value;

  let userData = {
    username: userNameInput,
    password: passInput,
  };

  localStorage.setItem("user", JSON.stringify(userData));
  console.log(userNameInput, passInput);
};

// function register() {
//   console.log("tes");
//   const userNameInput = document.querySelector("#username").value;
//   const passInput = document.querySelector("#password").value;

//   console.log(userNameInput, passInput);
//   // localStorage.setItem("user");
// }

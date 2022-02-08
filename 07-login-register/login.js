console.log("tes");

const login = () => {
  const userNameInput = document.querySelector("#username").value;
  const passInput = document.querySelector("#password").value;

  const dataLocalStorage = JSON.parse(localStorage.getItem("user"));
  console.log(userNameInput, passInput);
  console.log("data", dataLocalStorage);

  if (
    userNameInput === dataLocalStorage.username &&
    passInput === dataLocalStorage.password
  ) {
    alert("Anda berhasil login");
    window.location.replace("./profile.html");
  } else {
    alert("username atau password anda salah");
  }
};

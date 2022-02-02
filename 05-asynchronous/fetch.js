// Bagaimana caranya nampilin data dari API
// 1. ambil data dari API menggunakan fetch
// 2. Tampilkan data ke HTML

// step menampilkan data ke tampilan HTML
// 1. siapin wadah html
// 2. ambil wadah html menggunakan DOM
// 3. isi elementnya dengan data yg sudah diambil

// cara async await
async function getDataDigimon() {
  const URL = "https://digimon-api.vercel.app/api/digimon";

  try {
    // nerima paket
    const response = await fetch(URL);

    // unboxing paket
    const result = await response.json();

    // ambil element HTML
    const digimonContainer = document.querySelector(".digimon-container");

    // tampilkan data ke HTML
    for (let i = 0; i < 10; i++) {
      digimonContainer.innerHTML += `
      <div onClick=handleClick("${result[i].name}") > 
        <image src=${result[i].img} width=200 />
        <h3>${result[i].name}</h3>
        <span>${result[i].level}</span>
      </div>
      `;
    }
  } catch (err) {
    console.log(err);
  }
}

function handleClick(data) {
  console.log(data);
}

// cara promise
function getDataDigimonPromise() {
  const URL = "https://digimon-api.vercel.app/api/digimon";
  fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      console.log(result[0]);
    })
    .catch((err) => console.log(err));
}

getDataDigimonPromise();
getDataDigimon();

// scoping

let number = 1;

if (true) {
  console.log("didalam conditional", number);
  let number2 = 2;
  console.log("didalam conditional", number2);
}

let number3 = 30;
console.log("dipaling bawah file", number);
console.log("dipaling bawah file", number3);
// console.log("dipaling bawah file", number2);

// console.log("hello world");

// function

// function printName() {
//   console.log("hello world diatas return");
//   return "Print my name is Skilvul";
// }
// console.log(printName());

function pertambahan(angka1, angka2) {
  console.log(angka1, angka2);
  return angka1 + angka2;
}

console.log(pertambahan(8, 12));
console.log(pertambahan(7, 14));
console.log(pertambahan(6, 15));

function luasPersegi(panjang, lebar = 1) {
  return panjang * lebar;
}

console.log(luasPersegi(5, 6));
console.log(luasPersegi(10));
console.log(luasPersegi(null, 10));

function luasLingkaran(jariJari) {
  return (22 / 7) * jariJari * jariJari;
}

console.log(luasLingkaran(7));

function multiplyBy9per5(number) {
  return (number * 9) / 5;
}

// function helper >> untuk memecah isi function menjadi lebih sederhana

function getFahrenheit(numberNormalize) {
  return multiplyBy9per5(numberNormalize) + 32;
}

console.log(getFahrenheit(15));

// function getFahrenheit2(number) {
//   return (number * 9) / 5 + 32;
// }

const getFahrenheit2 = (number) => (number * 9) / 5 + 32;
console.log(getFahrenheit2(15));

////////////////////////////////////////////
// let number1 = 1;
// let years = 2022;
// let negative = -10;
// let koma = 9.99;

// console.log(koma);

// let myName = "Thoriq";
// console.log(myName);
// let score = "100";
// console.log(score);

// console.log(koma + score);

// let bool1 = true;
// let bool2 = false;

// console.log(bool1);

// let kosong = null;
// console.log(kosong);
// let stringKosong = " ";
// // console.log(stringKosong);

// let arr = [1, 2];
// // console.log(stringUndefined);

// console.log(arr[100]);

// // object

// let murid = {
//   name: "Skilvul",
//   age: 3,
//   isVaccined: true,
//   score: {
//     absensi: 100,
//     quiz: 100,
//     mid: 100,
//     final: 1000000,
//   },
// };

// console.log(murid);
// console.log(murid.name);
// console.log(murid.score.final);

// // assignment nunber

// let num1 = 4;

// num1 = num1 + 1;
// num1 += 1;
// num1++;
// num1--;

// console.log(num1);

// let string = "hello";
// console.log(string);

// string = "hello world!";
// console.log(string);

// conditional

let lapar = false;

// if (lapar) {
//   console.log("Kalau lapar kita makan");
// } else {
//   console.log("Kalau tidak lapar kita tidur");
// }

// ternary
// lapar
//   ? console.log("Kalau lapar kita makan")
//   : console.log("Kalau tidak lapar kita tidur siang");

// let nilai = 101;
// console.log(nilai >= 90);

// if (nilai >= 90) {
//   console.log("Selamat nilai anda A");
// } else {
//   console.log("Nilai anda tidak A");
// }

// let angka = 7;

// if (angka % 2 === 0) {
//   console.log("genap");
// } else if (angka % 2 === 1) {
//   console.log("ganjil");
// } else {
//   console.log("cek angkanya terlebih dahulu");
// }

// let stopLight = "red";

// ternary
// stopLight === "red"
//   ? console.log("Dilarang melintas")
//   : stopLight === "yellow"
//   ? console.log("Berhati hati")
//   : stopLight === "green"
//   ? console.log("Boleh melintas")
//   : console.log("Lintasan diizinkan");

// if (stopLight === "red") {
//   console.log("Dilarang melintas");
// } else if (stopLight === "yellow") {
//   console.log("Berhati hati");
// } else if (stopLight === "green") {
//   console.log("Silahkan melintas");
// } else {
//   console.log("Lebih berhati hati dengan keadaan");
// }

// switch (stopLight) {
//   case "red": {
//     console.log("Dilarang melintas");
//     break;
//   }
//   case "yellow": {
//     console.log("berhati hati");
//     break;
//   }
//   case "green": {
//     console.log("Silahkan melintas");
//     break;
//   }
//   default: {
//     console.log("Lebih berhati hati dengan keadaan");
//   }
// }

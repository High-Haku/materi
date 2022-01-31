console.log("connected");

// object
let person = { name: "John", age: 30, hairColor: "blue", isVaccined: true };

console.log(person);
console.log(person.age);
console.log(person["hairColor"]);

person.fullName = "Stevens John";

console.log(person);

person.age = person.age += 1;
console.log(person.age);

person.hairColor = "red";
console.log(person.hairColor);

// const in object

const pet = { name: "katy", age: 1 };

pet.name = "snowy";
console.log(pet);

pet.age = 2;
console.log(pet);

pet.color = "white";
console.log(pet);

delete pet.name;
console.log(pet);
// pet = { name: "kati", age: 3 };

let car = {
  name: "BMW",
  year: 2018,
  color: "black",
  // fungsi didalam object disebut dengan method
  engineStart: function () {
    console.log("engine start");
  },
  engineStop: function () {
    console.log("engine stop");
  },
};
console.log(car.engineStart());

let mouse = {
  merk: "logitech",
  warna: "hitam",
  bluetooth: true,
  mouseMove: function () {
    console.log("mouse move");
  },
  mouseClick: function () {
    console.log("mouse click");
  },
};

let highHaku = {
  name: "Haku",
  student: {
    student1: {
      name: "Dolos",
      domisili: "Jakarta",
    },
    student2: {
      name: "Stevens",
      domisili: "Jakarta",
    },
  },
};
console.log(highHaku.student.student1.name);

for (let data in highHaku.student) {
  console.log(highHaku.student[data]);
}

// pass by reference
// let number = {
//   a: 1,
//   b: 2,
// };
// console.log(number);
// function changeNumber(object) {
//   object.a = 3;
//   object.b = 4;
// }
// changeNumber(number);
// console.log(number);

// function PassbyReference(obj) {
//   // Changing the reference of the object
//   obj = {
//     a: 11,
//     b: 22,
//     c: "GEEKSFORGEEKS",
//   };
//   console.log(`Inside Pass by
//       Reference Function -> obj `);

//   console.log(obj);
// }

// let obj = {
//   a: 10,
//   b: 20,
// };
// console.log(`Updating the object reference -> `);
// console.log(`Before calling Pass By
//       Reference Function -> obj`);
// console.log(obj);

// PassbyReference(obj);
// console.log(`After calling Pass By
//       Reference Function -> obj`);
// console.log(obj);

// array of object

let student = [
  { name: "John", age: 30 },
  { name: "Peter", age: 25 },
  { name: "James", age: 20 },
];

console.log(student);

student.forEach(function (listStudent) {
  console.log(listStudent.name);
});

// array of object pet, kucing, anjing dan kelinci
// berika properti nama, umur, warna, dan jenis

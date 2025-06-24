// function pasRund(p) {
//   const pass = "12fas0%8wNHAgqJ@g9c/vQE?SD4G>5cV!vx6WGzb7$pko3RghdmnbBrLSj^&X";
//   let outPut = "";
//   for (let i = 0; i < p; i++) {
//     passRandom = Math.floor(Math.random() * pass.length);
//     outPut = outPut + pass[passRandom];
//   }
//   return outPut;
// }
// console.log(pasRund(20));

// 57
// const student = {
//   name: "Michael",
//   age: 25,
//   university: "LearnJS",
//   major: "Front End",
// };

// const printStudentInfo = (person) => {
//   const { name, age, university, major } = person;
//   console.log(
//     `Имя ${name}, возраст ${age}, уневерситет ${university}, основа ${major}`
//   );
// };

// printStudentInfo(student);

//62 Задание
// console.log("-----------------------");
// const car = {
//   brand: "brand",
//   modal: "modal",
//   year: "year",
//   displayInfo: function () {
//     console.log(
//       `Марка: ${this.brand}, модель: ${this.modal}, год выпуска: ${this.year}`
//     );
//   },
// };

// const camry = Object.create(car);
// (camry.brand = "Toyota"), (camry.modal = "Camry"), (camry.year = 2020);
// const mustang = Object.create(car);
// (mustang.brand = "Ford"), (mustang.modal = "mustang"), (mustang.year = 2015);
// camry.displayInfo();
// mustang.displayInfo();

// 71 задание
// const users = [
//   { id: 1, name: "Alice", isActive: true },
//   { id: 2, name: "Bob", isActive: false },
//   { id: 3, name: "Charlie", isActive: true },
//   { id: 4, name: "David", isActive: false },
//   { id: 5, name: "Eve", isActive: true },
// ];

// const activeUser = users.filter((actUs) => actUs.isActive === true);
// console.log(activeUser);

// 72 задание
// console.log("--------------------");
// const students = [
//   { name: "Алиса", subjects: ["JavaScript", "Python"] },

//   { name: "Боб", subjects: ["Java", "C++"] },

//   { name: "Чарли", subjects: ["HTML", "CSS"] },
// ];
// const stud = students.find((studName) => studName.name === "Алиса");
// console.log(stud.subjects.includes("JavaScript"));

// 73 задание
// console.log("--------------------");
// const words = ["Привет", "мир", "изучаем", "JavaScript"];

// function combineStrings(arr) {
//   const result = arr.reduce((acc, item) => acc + " " + item);
//   return result;
// }
// const combinedString = combineStrings(words);
// console.log(combinedString);

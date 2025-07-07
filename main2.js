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

// 77 задание

// const users = [
//   { name: "Alice", age: 40, country: "USA" },

//   { name: "Bob", age: 25, country: "Canada" },

//   { name: "Charlie", age: 35, country: "USA" },

//   { name: "Diana", age: 30, country: "USA" },

//   { name: "Eva", age: 22, country: "Canada" },
// ];
// const filtUser = users // 1- фильтруем по ввозрасту 30+ лет, 2- из USA, 3- сортируем по возрсту
//   .filter((item) => item.age >= 30 && item.country === "USA")
//   .toSorted((a, b) => a.age - b.age);
// console.log(filtUser);

// 84 задание
// console.log("-----------------");
// const arrTask1 = [10, 20, 30, 40, 50];
// const arrWork1 = arrTask1.reduce((acc, item) => acc + item);
// console.log(arrWork1);
// console.log("-----------------");
// const arrTask2 = [10, 5, 20, 8, 15, 27];
// const arrWork2 = arrTask2.reduce((acc, item) =>
//   acc < item ? (acc = item) : (acc = acc)
// );
// console.log(arrWork2);
// console.log("-----------------");
// const arrTask3 = [22, true, "World", 40];
// const arrTask31 = ["Work", "Vallet", 13, false];
// const arrWork3 = arrTask3.concat(arrTask31);
// console.log(arrWork3);

import { Temporal } from 'temporal-polyfill' // нельзя ставить в нутрь обьекта
// запись выше импортирует код
// далее весь код выводится в консоле, для вывода нужно указать директорию(при необходимости)...
// ... и совершить вызов js файла (node main.js)


console.log(Temporal.Now.instant().toString()) //--> 2025-07-07T18:59:19.959Z дата и время (В консоле)
console.log(Temporal.Now.instant().toLocaleString()) // --> 07.07.2025, 21:59:19, ...
// ... локальный формат вывода даты и времени
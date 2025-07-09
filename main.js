"use strict";
function fnDec() {
  return; //  declaration - можно вызывать до обьявления
}
const fnExp = function () {
  return; // expression - нельзя вызвать до обьявления
};

function arg(arg1, arg2, arg3) {
  // 35
  console.log(arguments); //   все переданные аргументы попадут сформируются в массивоподобный обьект
}
arg("Make", 23, true); // вывод -- Arguments(3) ['Make', 23, true]

function fn() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }
  return total;
}
console.log(fn(10, 20, 15, 45)); // применяется в случае когда неизвестно кол-во аргументов

console.log("--------------------------------------");
// 54
const obj1 = {
  color: "red",
  age: 15,
  border: "2px",
};

const obj2 = Object.assign({}, obj1); // Object.assign() - создает копию обьекта(вложенности не копирует)
obj2.age = 40;
obj2.outline = "none";

console.log(obj1);
console.log(obj2);

const obj3 = { name: "John" };
const obj4 = {};

Object.assign(obj4, obj3); // первый арг.(obj4) это обьект в который мы копируем, остальные арг. которые мы копируем
console.log(obj4); // --> {name: 'John'}

const obj5 = { name: "Patrick" };
const obj6 = { name: "Luk", age: 30 };
const obj7 = Object.assign({}, obj5, obj6); // Object.assign() может добавить или заменить свойство с одним ключем
console.log(obj7); // --> {name: 'Luk', age: 30}

console.log("------------------------");

const obj8 = {
  color: "red",
  age: 15,
  border: "2px",
  param: {
    width: "100px",
    height: "75px",
    padding: "20px",
  },
};

const obj9 = { ...obj8 }; // оператор "spread" также копирует ссылку на обьект и копирует только первый уровень вложенностей
obj9.color = "black";
obj9.param.width = "250px"; // у оператора "spread" при замене вложенного свойства у копии это свойство миняется и у оригинала
console.log(obj8);
console.log(obj9); // --> {color: 'red', age: 15, border: '2px'}

const obj10 = structuredClone(obj8); // "structuredClone" копирует обьект и при замене вложенности не влияет на свойство оригинала
obj10.param.padding = "100px"; // миняет только у копии

console.log(obj10);
console.log("-----------------------------");

const obj11 = {
  color: "red",
  age: 15,
  border: "2px",
  param: {
    width: "100px",
    height: "75px",
    padding: "20px",
  },
};
const obj12 = JSON.stringify(obj11); // JSON.stringify - переводит обьект в строку
const obj13 = JSON.parse(obj12); // переводит строку из обьекта обратно в обьект
// JSON.stringify и JSON.parse не копирует функции
// JSON.stringify и JSON.parse производит глобоко копирование, при замене свойств у копии не миняет свойств оригинала
console.log(obj11);
console.log(obj12); // --> {"color":"red","age":15,"border":"2px","param":{"width":"100px","height":"75px","padding":"20px"}}
console.log(obj13); // --> {color: 'red', age: 15, border: '2px', param: {…}}
console.log("-----------------------------------");

// 57 деструктуризация - извлекает значение из обьекта и присваивать простые переменные

const obj14 = {
  age: 20,
  name: "Vallet",
};

const { age, name } = obj14; // - деструкткризация обьекта
console.log(age);
console.log(obj14);

const obj15 = {
  num: 25,
  surname: "Vallet",
};
const { num: myNum, surname: mySurname } = obj15; // при деструктуризации можно минять имя ключа(в самом обьекте изменений нет)
console.log(myNum, mySurname); // --> 25 'Vallet'

const obj16 = {
  name2: "Vallet",
};
const { name2, age2 = 44 } = obj16; // также можно создовать переменные паралельно извлечению
console.log("--------------------");

const person = { name3: "Vallet", age3: 34, tel: +7388445530 };

const printHandler = ({ name3, age3, tel }) => {
  // пример приминения диструктуризации
  console.log(`имя ${name3}, возраст ${age3}, телефон ${tel}`);
};

printHandler(person); // --> имя Vallet, возраст 34, телефон 7388445530
console.log("-----------------------");

const obj17 = {
  name4: "Vallet",
  open: 10,
  style: {
    color: "pink",
    display: "flex",
    fontSize: "24px",
  },
};

const {
  name4, // пример извличения свойства из вложенности в обьекте
  style: { color, fontSize },
} = obj17;
console.log(color, fontSize);
console.log("---------------------------");

const userr = [
  { id: 1, name5: "Bob" },
  { id: 2, name5: "Alice" },
  { id: 3, name5: "Charlie" },
  { id: 4, name5: "Vallet" },
];

for (const { id, name5 } of userr) {
  console.log(`User ${id} - ${name5}`); // пример диструктуризации обьектов из массива
}
console.log("------------------------");

const obj18 = { name6: "John", age6: 40, country: "USA" };

const { name6, ...items } = obj18; // пример извличения свойства с помощью rest(...items)
console.log(name6); // --? John
console.log(items); // --> {age6: 40, country: 'USA'}

const arr1 = [1, 2, 3, false];
const arr2 = [...arr1, 4, 5, 6]; // оператор spread распоковывает массив(также можно параллельно добовлять свойства в новый массив)

const arr3 = [10, 20, undefined, function () {}, {}, { name: "costa" }];
const [a1, ...LastItems] = arr3; // оператор rest, отличается от spread тем что rest запоковывает a spread распоковывает,
// rest(...) идет до оператора присваения(=), spread идет после оператора присвоения

console.log(a1); // --> 10
console.log(LastItems); // --> [20, undefined, ƒ, {…}, {…}]
console.log("---------------------");

{
  const obj = {
    // пример spread с обьектом
    name: " Lavetti",
    age: 30,
  };
  const obj2 = { ...obj, country: "USA" }; // оператор spread не ссылается на копируемый обьект а создает новый,
  // ...в отличии от запсили "obj2 = obj"
  console.log(obj2);
  console.log("----------------------");
}
{
  const { name, ...rest } = {
    ...{ name: "lavetti--", age: 42 }, // пример комбинации операторов rest и spread
    city: "London",
  };
  console.log(rest);

  const objTest = { time: 1200, color: "blue", fontSize: "232px" };
  const { time: time2, ...rest2 } = { ...objTest, city: "Chicago" }; // другой пример и замена имени свойтсва при деструктурезации
  console.log(time2);
  console.log(rest2); // --> {color: 'blue', fontSize: '232px', city: 'Chicago'}
}

// 59 методы обьектов

{
  const obj = {
    name: "Vallet",
    day: 2,
    sayHello: function () {
      console.log(true);
    },
    openModal: function () {
      return false;
    },
  };
  const keys = Object.keys(obj); // метод Object.keys позволяет получить все ключи из обьекта в виде массива
  console.log(keys); // --> ['name', 'day', 'sayHello', 'openModal']

  for (let key of keys) {
    console.log(`${key} - ${obj[key]}`); // пример извлечения через цикл
  }
  console.log(Object.values(obj)); // Object.values - получаем массив с значениями обтекта
  console.log(Object.entries(obj)); // Object.entries получаем масси массивов(ключ - значение) из обьекта
  console.log(obj.hasOwnProperty("name")); // ищет наличие указанного свойства в обьекте(ворзврощает true/false)
  Object.freeze(obj); // замраживает обьект(нельзя добовлять, минять, улаоять свойства)
  Object.seal(obj); // запечатывает обьект(нельзя добовлять или удалять свойства но можно минять)
  Object.preventExtensions(obj); // нельзя добовлять свойства( остальные изминения доступны)
  console.log(Object.isFrozen(obj)); // провиряет замарожен ли обьект(возврощает true/false)
  console.log(Object.isSealed(obj)); // провиряет запичатан ли обьект(возврощает true/false)
}

// 60 оператор нулевого слияния

{
  const person = {
    name: "Alice",
    age: 22,
    addres: {
      city: "London",
      id: 5912541,
    },
  };

  const idCode = person.addres.id ?? "пусто"; // оператор - ?? проверяет значение свойства на null или undefined
  console.log(idCode); // ...выводит значение проверяемого обьекта в случает отсутствия и указ. значение("пусто") в случае оратного
}

// 61 оператор опциональной последовотельности

{
  const user = {
    name: "John",
    address: {
      city: "NewYork",
    },
  };

  const a1 = user.address?.city; // оператор - ? проверяет наличие свойтсва
  console.log(a1); //... получем undefined в случает отсутствия указ. свойства
}

// 62 опреатор опциональной последовотельности и оператор нулевого слияния (приминение вместе)

{
  const user = {
    name: "John",
    addres: null,
  };

  const city = user.addres?.city ?? "Город не известен";
  console.log(city); // --> Город не известен
}

// 63 Массивы

{
  const arr = ["Vallet", 2025, true, 33];
  console.log(arr.indexOf(33)); // метод indexOf - ищет индекс указ. элемента в масиве
  console.log(arr.indexOf(100)); // если искомого элемента нет выведет --> -1
}
// 65 метод slice
{
  const arr = ["car", "heelo", "mobail", true, "2020"];
  const arr2 = arr.slice(1, 4); // метод slice передает элементы с указанного индекса по указанный(не включительно!)
  const arr3 = arr.slice(2); // при указании одного интедкса передает все начиная с него
  const arr4 = arr.slice(); // если не казать интекс перезает все элементы
  const arr5 = arr.slice(0, -2); // при указании второго индекса отрицательным передает все элементы за вычетом указанного колво элементов с конца
  console.log(arr2);
}

// 66 метод splice / toSplaced
{
  const arr = [1, 2, 3, 4, 5];
  const arr2 = arr.splice(2, 2); // splice вырезает из обьекта элементы и сохроняет их в перемен.
  console.log(arr2);
  const arr3 = arr.toSpliced(2, 2); // toSplaced копирует указ. элементы не миняя оригинал
  console.log(arr3);

  const arr4 = [10, 20, 30, 40, 50];
  const arr5 = arr4.splice(2, 2, "Hello", true); // splice также одновременно может добовлять элементы в массив
  console.log(arr4);
  const arr6 = arr4.splice(1); // удаление с указ. индекса
  const arr7 = [10, 20, 30, 40, 50];
  const arr8 = arr4.splice(-2, 2); // также можно вырезать с конца массива
}
console.log("----------------------");
// 67 метод concat
{
  const arr1 = ["a", "b", "c"];
  const arr2 = ["d", "e", "f"];
  const arr3 = arr1.concat(arr2); // concat обьединяет массивы
  console.log(arr3);
  const arr4 = [1, 2, 3];
  const arr5 = arr4.concat(4, 5, 6); // также concat можно использовать для копирования и добовления одновременно элементов массива
  console.log(arr5);
  const arr6 = arr1.concat(arr2, "h", "g", "j"); // можно добовлять как дркгие массивы так и эдементы вместе
  console.log(arr6);
}
console.log("--------------------------------");
// 68 циклы for of для массивоф
{
  const arr = [1, "hello", true, "world"];
  for (const item of arr) {
    console.log(item); // пребираем все эдементы массива
  }
}

// 69 метод forEach
{
  const arr = [1, 2, 3, 4, 5];
  arr.forEach((item, index, array) => {}); // метод forEach принимает три(3) аргумента и переберает массив
  const arr2 = ["a", "b", "c", "d"];
  arr2.forEach(function (item, index, array) {
    console.log(`${item}, ${index}, ${array}`); // выводит наши параметры(свйство, индекс, весь массив)
  });
  console.log("--------------------");
  const arr3 = ["C#", "JavaScript", "Python", "C++"];
  arr3.forEach((item, index) => {
    // также можно брать только два или один параметр
    console.log(`index: ${index}, item: ${item}`);
  });

  const arr4 = [1, 2, 3, 5, 6, 7, 8];
  const s1 = [];
  arr4.forEach((num) => {
    s1.push(num * num); // пример приминения forEach
  });
  console.log(s1); // --> [1, 4, 9, 25, 36, 49, 64]
}

// метод map
{
  const arr = [1, 2, 3, 4, 5];
  const arr2 = arr.map((number) => {
    return number.toString(); // метод map также как и forEach перебирает массив а также может вернуть значения
  });
  console.log(arr); // --> [1, 2, 3, 4, 5]
  console.log(arr2); // --> ['1', '2', '3', '4', '5']

  const arr3 = [1, 2, 3, 4, 5];
  const arr4 = arr3.map((num) => num * 3); // другой пример (возврощает массив)
  console.log(arr4); // --> [3, 6, 9, 12, 15]
  console.log("------------------------");

  const arr5 = [
    { id: 15, name: "John" },
    { id: 23, name: "Vallet" },
    { id: 39, name: "Lorren" },
  ];
  const arr6 = arr5.map((item) => item.id); // оброзаемся к определенным свойствам по ключю
  console.log(arr6); // --> [15, 23, 39]
}

// 71 метод Filter
{
  const arr = [1, 2, 3, 4, 5];
  //const filt = arr.filter((item, index, arr)); // метод filter может принимать три пораметра(свойство, индекс, весь массив)
  const arr2 = arr.filter((num) => num > 3); // фильтрует и сохроняет элементы
  console.log(arr2);
  console.log("------------------------");

  const arr3 = ["Vallet", "Roman", "Loren", "Chelsi", "Cate", "Josh"];
  const arr4 = arr3.filter((nema) => nema.length < 5); // сохроняет только те элементы которые прошли условие
  console.log(arr4);
  console.log("-------------------");
  const arr5 = [
    { price: 15, name: "banana" },
    { price: 23, name: "Cherry" },
    { price: 39, name: "kiwi" },
    { price: 45, name: "apple" },
  ];
  const arr6 = arr5.filter(function (product) {
    return product.price < 30; // другой пример
  });
  console.log(arr6); // --> [{ price: 15, name: "banana" }, { price: 23, name: "Cherry" }]
}
console.log("------------------------------");
// метод find
{
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = arr1.find((num) => num === 3); // метода find ищет и возврощает искомый элемент
  console.log(arr2);
  const arr3 = [
    { id: 15, name: "John" },
    { id: 23, name: "Vallet" },
    { id: 39, name: "Lorren" },
  ];
  const arr4 = arr3.find((user) => user.id === 23); // примерр с обьектом в массиве
  console.log(arr4); // --> {id: 23, name: 'Vallet'}
  const arr5 = [
    { price: 15, name: "banana" },
    { price: 23, name: "Cherry" },
    { price: 39, name: "kiwi" },
    { price: 45, name: "apple" },
  ];
  const arr6 = arr5.find(
    (product) => product.price > 25 && product.name.includes("le") // другой пример
  ); //... метод includes с указанным значение ищет свойство содержащая указанное значение
  console.log(arr6); // --> {price: 45, name: 'apple'}  в случает отсутствия подходящего свойства вернет undefined
  const arr7 = ["guage", "man", 1, 2];
  console.log("-------------------");
  console.log(arr7.includes(2)); // --> true, тут includes ищет искомое свойство
  const arr8 = [24, 33, 13, 86, 30];
  const arr9 = arr8.includes(13, 1); // includes - может принимать два параметра (какое свойство ищем и с кокого индекса)
  console.log(arr9); // --> true
}

console.log("---------------------");
// 73 метод reduce
{
  const arr = [10, 20, 30, 40];
  //reduce(acc, item, index, arr); // reduce принимает 4 параметра (накопительная переменная, элементы массива, индексы массива, весь массив)
  const arr2 = arr.reduce((acc, item) => acc + item); // reduce - накопительный метод
  console.log(arr2); // --> 100
  const arr3 = arr.reduce((acc, item) => acc + item, 15); //последний параметр это параметр acc(по умолчанию = 0)
  console.log(arr3);
  const arr4 = ["hello", "ny", "frend"];
  const arr5 = arr4.reduce((acc, item) => acc + " " + item, ""); // пример со строками
  console.log(arr5); // --> hello ny frend
  const arr6 = [23, 54, 30, 40, 81];
  const arr7 = arr6.reduce((acc, num) => Math.max(acc, num, 0)); // пример с поиском максимального числа
  console.log(arr7); // --> 81
  console.log("-------------------");
  const arrA = ["Vallet", "Lorren", "Chelsee", "Josh"];
  const arrb = arrA.reduce((acc, item, index) => {
    acc[index] = item; // обьект из массива
    return acc;
  }, {});
  console.log(arrb); // --> {0: 'Vallet', 1: 'Lorren', 2: 'Chelsee', 3: 'Josh'}
}

// 74 метод revers / toReversed
{
  const arrA = ["A1", "B1", "C1", 10];
  const reversed = arrA.reverse(); // reverse - разварачивает переданный массив и миняет оригинальный массив
  console.log(reversed); // --> [10, 'C1', 'B1', 'A1']
  console.log(arrA); // --> [10, 'C1', 'B1', 'A1']
  const arrRev = ["a", "b", "c", "d"];
  const arrRevCopy = arrRev.toReversed(); // toReversed - также переворачивет массив но не миняет оригинал
  console.log(arrRevCopy); // --> ['d', 'c', 'b', 'a']
}

console.log("--------------------");
// 75 метод sort / toSorted
{
  const arr = [1, 30, 8, 9, 4];
  const arr2 = arr.sort(); // sort - сортирует массив и миняет оригинал(по умолчанию сортируются как строки)
  console.log(arr); // --> [1, 30, 4, 8, 9]
  console.log(arr2); // --> [1, 30, 4, 8, 9]
  console.log("------------------------");
  const arr3 = [2, 30, 14, 23, 42, 5, 19];
  const arr4 = arr3.sort((a, b) => a - b); // sort - принимет функцию для изминения метода сортировки
  console.log(arr4); // --> [2, 5, 14, 19, 23, 30, 42]
  const arr5 = ["A", "a", "B", "b", "C", "c"];
  arr5.sort(); //                                        sort на строках
  console.log(arr5); // --> ['A', 'B', 'C', 'a', 'b', 'c']
  const objA = [
    { name: "Valler", age: 30 },
    { name: "Boosh", age: 24 },
    { name: "Loren", age: 18 },
    { name: "Ches", age: 28 },
  ];
  const objB = objA.sort((a, b) => a.age - b.age); // sort с обьектами в массиве и правильной сортировкой по возрасту
  console.log(objB);
  console.log("------------------------");
  const arr6 = [21, 13, 2, 5, 33, 14, 8, 40];
  const arr7 = arr6.toSorted((a, b) => a - b); // toSorted - работает также как sort но не миняет оригинал
  console.log(arr6); // [21, 13, 2, 5, 33, 14, 8, 40]
  console.log(arr7); // [2, 5, 8, 13, 14, 21, 33, 40]
}

// 76 метод with
{
  const arr = [1, 2, 3, 4, 5];
  const arr2 = arr.with(2, true); // with принимает два параметра(какое свойство по индексу минять, на что минять)
  console.log(arr); // ... не миняет оригинал
  console.log(arr2);
}

console.log("-----------------------------");
// вызов методов массивов по цепочке
{
  const arr = [5, 2, 8, 1, 4, 20, 13, 10, 19];
  const arr2 = arr.filter((num) => num % 2 === 0).sort((a, b) => a - b); // два метода в одной строке
  console.log(arr2);
  console.log("--------------------");
  const names = ["Vallet", "Chelse", "Vallet", "Loren", "Bob", "Loren"];
  const unicNemas = names.filter(
    (item, index, array) => array.indexOf(item) === index // сравнимается индекс первого искомого значения и индекс значения на котором происходит итерация
  );
  console.log(names.indexOf("Vallet")); // indexOf - выводит индекс первого попавшегося искомого значения
  console.log(unicNemas);
  console.log("--------------------");
  const numbers = [1, 3, 6, 9, 12, 15];
  const sum = numbers
    .filter((num) => num % 3 === 0) // фильтруем является этерируемый элемент кратный 3(filter) и если да то складываем их вмместе(reduce)
    .reduce((acc, item) => acc + item);
  console.log(sum);
  console.log("--------------------");
  const fructs = ["apple", "banana", "grape", "cherry"];
  const sortFruct = fructs.map((item) => item.toUpperCase()).toSorted(); //map просто пиридирает массив по 1, toUpperCase переводит буквы свойства в верхний регистр...
  // ... toSorted - сортирует результат в алфовитном
  console.log(sortFruct); // --> ['APPLE', 'BANANA', 'CHERRY', 'GRAPE']
}

// 78 многомерный массив
{
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log(arr[1][1]); // оброщение к двухмерному массиву, аналогично с трехмерными массивами
  const c1 = [
    [
      [1, 2],
      [3, 4],
    ],
    [
      [5, 6],
      [7, 8],
    ],
  ];
  const c2 = c1.map((elem) => elem.map((num) => num.map((item) => item * 5))); // импользование методов с многомерным массивом
  console.log(c2);
  console.log(c1);

  for (let i = 0; i < c1.length; i++) {
    for (let j = 0; j < c1[i].length; j++) {
      // итерация по трехмерному массиву
      console.log(c1[i][j]);
    }
  }
  arr.push([10, 11, 12]); // добовление массива в двухмерный массив
  console.log(arr);
  c1[1].push([9, 10]); // добовление массива в трехмерный массив
  console.log(c1);
}

console.log("----------------------");
// 79 метод some / every
{
  const arr = [1, 2, 3, 1, 2, 3];
  console.log(arr.lastIndexOf(2)); // lastIndexOf - возврощает индекс последнего указанного элемента
  let number = [1, 2, 3, 4, 5];
  let number2 = number.some((num) => num - 5 === 0); // some - возврощает true ксли хотябы один рас пройдет условие, в ином случае вернет false
  console.log(number2); // --> true
  let number3 = number.every((num) => num - 5 === 0); // every аозврощает true елси все элементы пройдут условие, иначе верчнет false
  console.log(number3); // --> false
  const arr2 = ["apple", "banana", "orange"];
  const arr3 = arr2.every((value) => value.includes("a")); // проверяем есть ли "a" в каждом элементе строки
  console.log(arr3);
  const arrMix = [4, "hello", 20, "help"];
  const arrMix2 = arrMix.every((item) => typeof item === "number"); // проверяем все ли элементы массива относятся к числу
  console.log(arrMix2);
}

console.log("---------------------------------");
// 80 метод findIndex
{
  const arr = [19, 24, 31, 35, 42];
  const arr2 = arr.findIndex((index) => index > 30 && index < 40); //findIndex возврощает индекс мервого элемента прошедшего условие
  console.log(arr2); // --> 2
  const arr3 = [
    { id: 1, name: "Vallet" },
    { id: 2, name: "Jhon" },
    { id: 3, name: "Chelse" },
  ];
  const arr4 = arr3.findIndex((item) => item.name === "Chelse"); // другой пример (возврозает -1 если ненайдет искомый элемент)
  console.log(arr4); // --> 2
}

console.log("-------------------------");
// 81 метод flat
{
  const arr = [1, 2, 3, [4, 5]];
  const arr2 = arr.flat(); // flat - сплющевает массив на 1 уровень(параметр по умолчанию 1)
  console.log(arr2); // --> [1, 2, 3, 4, 5]
  const arr3 = [1, [2, [3]]];
  const arr4 = arr3.flat(2); //с параметром (2) массив с двойной вложенностью в обычный массив
  console.log(arr4); // --> [1, 2, 3]
  const arr5 = [1, 2, [3, 4, 5]];
  const arr6 = arr5.flat().map((num) => num * 2); //пример с использованием двух методов
  console.log(arr6); // --> [2, 4, 6, 8, 10]
  const arr7 = [1, , , , , [, 20, 30]];
  const arr8 = arr7.flat(); // одновременнов бирает пустые ячеки
  console.log(arr8); // --> [1, 20, 30]
}

console.log("---------------------");
// 82 метод flatMap
{
  const arr = [1, 2, 3, 4];
  const arr2 = arr.flatMap((num) => (num % 2 === 0 ? num : [])); //flatMap обьединяет в себе flat и map
  console.log(arr2); // --> [2, 4]
}

console.log("----------------");
// 83 метод split / join
{
  const str = "Hello World";
  const arr = str.split(" "); // split - переводит строку в массив, принимает 2 параметра...
  // первый параметр указываем эдемент по котрому строку делить на массивы, 2 параметр до кокого индекса не включительно
  console.log(arr); // --> ['Hello', 'World']
  const str1 = "JavaScript";
  const arr2 = str1.split(""); // если указать разделить по которому делим в виде "" - разабьет все символы
  console.log(arr2); // --> ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
  const str3 = "JavaScript";
  const arr3 = str3.split("", 4); // пример с использование второго параметра
  console.log(arr3); // --> ['J', 'a', 'v', 'a']
  console.log("----------------");
  const arrStr = ["apple", "banana", "orenge"];
  const arrStr2 = arrStr.join(" "); // join переводит массив в строку с указанным разделителем
  console.log(arrStr2); // --> apple banana orenge
}

// 85+ работа над строками
{
  const str = "hello World!";
  const str2 = str.slice(6, 12); // метода slice работает с обьектами и строкми
  console.log(str2); // --> World!

  const str3 = "loren Ipsome to loren ipsome to";
  const str4 = str3.replace("to", "and"); //replace - миняет указанное значение в строке на указанное значение(что заменить, начто заменить)

  console.log(str4); // --> const str4 = str3.replace("to", "and")
  const str5 = str3.replaceAll("to", "and"); // также миняет указанные значения но работает по всей строке
  // replace и replaceAll - работает только со строками
}
{
  const str = "loren Ipsome to loren ipsome to";
  console.log(str.indexOf("to")); // indexOf - также работает со строками(указывает с кокого индекса)
}

// 88 деструктуризация массивоф
{
  const array = ["one", "to", "three"];
  const [a, b, c] = array; // (наглядный пример)(undefined - если переменной нечего присвоить)
  console.log(a);
  const arr = [1, 2, 3, 4, 5, 6, "hi"]; // с оператором rest(...rest)
  const [a1, b1, ...c1] = arr;
  console.log(c1);
  const arr2 = ["first", "second"];
  const [a2, b2, c3 = "true"] = arr2; // паролельно можно создовать и просваивть одновременнно
  const arr3 = [140, 200, 335, -430, 300];
  const sumArr = (...arrg) => arrg.reduce((acc, num) => acc + num); // пример распоковки и складывания вместе с присвоением результата
  console.log(sumArr(...arr3)); // --> 545
  const arr4 = [11, 22, 33];
  const sum2 = (a4, b4, c4) => a4 + b4 + c4; // другой пример
  console.log(sum2(...arr4)); // --> 66
}

console.log("-------------------------");

// 89 map полное руководство
{
  let map = new Map(); // создать структуру Map
  map.set("key1", "value1"); // set добавить в map пару (ключ, значение)
  console.log(map); // --> {'key1' => 'value1'}
  map.set("key2", "value2").set("key3", true).set(123, false); // можно создать несколько сразу
  console.log(map);
  console.log(map.get(123)); // get получение значение по ключю
  console.log(map.has("key4")); // --> false, has - проверка наличия ключа(true/false)
  map.set("open", 1000);
  console.log(map);
  map.delete("open"); // delete - удаление пары в map
  console.log(map);
  console.log(map.size); // --> 4, size - получаем размер нащего map(кол-во элементов)

  console.log("-------------------------");
  for (let key of map.keys()) {
    console.log(key); // метод keys - получаем все ключи
  }
  for (let key of map.values()) {
    console.log(key); // метод keys - получаем все значения
  }
  for (let [key, value] of map.entries()) {
    console.log(key, value); // метод keys - получаем все кдючи и значение
  }

  let map2 = new Map();
  map2.set("add1", true).set("add2", false);
  map2.clear(); // clear - очищает Map
  let map3 = new Map([
    ["color", "red"], // добовляем при создании кдюч значение - color => red
    ["color2", "blue"],
    ["color3", "pink"],
  ]);
  map3.forEach((key, value) => {
    console.log(`${key}, ${value}`); // выводим все значения через forEach
  });
  let mapToArray = Array.from(map3); // Array.from используется для создания нового массива из массивоподобного, итерируемого обьекта
  console.log(mapToArray); // - получаем массив массивоф
  let str1 = "Hello world";
  let str2 = Array.from(str1); // пример для наглядности
  console.log(str2); // --> ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
  let str3 = [...str1]; // аналогичная запись
  console.log(str3); // --> ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
  console.log("-----------------");

  const mapToObj = Object.fromEntries(map3); // Object.fromEntries приминяется для создания нового обьекта из массива
  console.log(mapToObj);
}

console.log("-------------------------");
// 90 set полное руководство
{
  const set1 = new Set(); // создаем set\
  set1.add(true).add("1"); // .add домавить в set элемента(в скобках что добавить), также работает добовление по цепочке
  set1.add([1, 2, 3, 4, 5]);
  console.log(set1);
  const set2 = new Set([1, 2, 3, 4, 1]);
  console.log(set2); // --> {1, 2, 3, 4}, получем только уникальные значения
  console.log(set2.has(2)); // --> true has - также как и в map проверяе наличие указанного элемента
  console.log(set1.size); // --> 3, size также как и в map возврощает колво элементов
  console.log("-------------------------");
  set1.add("hello World");
  set1.forEach(function (item) {
    console.log(item);
  });
  const arraySet = Array.from(set1); // Array.from используется для создания нового массива из массивоподобного, итерируемого обьекта
  console.log(arraySet);
  const arraySpread = [...set1]; // оператор spread здесь работает также как и from
  console.log(arraySpread);
  const array = [1, 1, 34, 2, 2, "A", "A", "b", true];
  const set3 = new Set(array);
  console.log(set3); // --> {1, 34, 2, 'A', 'b', …} откидывает повторяющиеся занчения автомотически
  set3.clear(); // .clear - очищает set
  console.log(set3); // -- > {size: 0}
  console.log("------------------------");
  const setA = new Set([1, 2, 3, 4]);
  const setB = new Set([4, 3, 2, 1, 0]);
  const setAB = new Set([...setA, ...setB]); // фщрмирование set из двух других set
  console.log(setAB); // --> {1, 2, 3, 4, 0}
  const setC = new Set([1, 2, 3, 4]);
  const setD = new Set([5, 1, 3, 4]);
  const setCD = new Set([...setC].filter((a) => setD.has(a))); // возврощает все повторяющиеся элементы в Set
  console.log(setCD); // --> {1, 3, 4}
  const setCD2 = new Set([...setC].filter((x) => !setD.has(x))); // возврощает те элементы которые не повторялись
  console.log(setCD2); // --> {2}
}

console.log("--------------------------");
// 91 WeakMap
{
  // основное различие WeakMap от Map в том что ключи в WeakMap подлежат к сборке муссора если на них нет какихто ссылок
  // WeakMap нельзя перебирать(не итерируемый) нельзя очистить(.clear!), зделано для приватности какихто ключей
  const weak1 = new WeakMap(); // создаем WeakMap
  const obj = {};
  weak1.set(obj, "hello"); // .set добовляет  свойство(одновременно присваеваем значение)
  console.log(weak1); // --> {{…} => 'hello'}
  console.log(weak1.get(obj)); // --> hello, .get возврощает свойство по ключю
  console.log(weak1.has(obj)); // --> true, .has - проверка наличия указанного элемента
  weak1.delete(obj); // .delete удаление элемента
  console.log(weak1); // --> {}
}

console.log("----------------");
// 92 WeakSet
{
  // WeaSet может содержать только обьекты(приметивные типы непотдерживаются)
  // WeaSet не имеет методов для перебора
  // в WeaSet нет свойства size
  const weakSet = new WeakSet(); // создаем
  const obj1 = {};
  const obj2 = {};
  weakSet.add(obj1).add(obj2); // добовляем
  console.log(weakSet);
  weakSet.delete(obj1); // удаляем
  console.log(weakSet);
}

console.log("--------------------------");
// 93 прототипы (Prototype)
{
  const a = {
    age: 22,
    fn1: function () {
      console.log("hello");
    },
  };

  const a1 = Object.create(a); // Object.create метод для создания нового обьекта с указанныи прототипом
  // в этом случае "a" стоновится прототипом "a1"
  a1.fn1(); // a1 не имеет метода fn1 но находит его в цепочке прототипов
  console.log(a1);
  console.log("------------------");

  const obj1 = {
    name: "Villa",
    MyNethod() {
      console.log(`Hello world ${this.name}`);
    },
  };

  const obj2 = Object.create(obj1); // таким образом obj2 наследует методы и свойства от obj1 но они лежат в прототипе
  obj2.MyNethod();
  console.log(obj2.name); // --> Villa
}

console.log("------------------");
// 94 свойство __proto__
{
  // аналогично наоборот #create
  // __proto__ - скрытое свойство которое содержит ссылку на обьект нашего прототипа
  const obj1 = {};
  const obj2 = Object.getPrototypeOf(obj1); // так obj2 становится прототипом obj1
  obj2.city = "london";

  console.log(obj1.city); // --> london

  obj2.myFn = function () {
    console.log("Big World");
  };
  obj1.myFn(); // --> Big World

  console.log("------------------");
  // getPrototypeOf
  const obj3 = {};

  const objProto = {
    myFn() {
      console.log("Frends");
    },
  };
  Object.setPrototypeOf(obj3, objProto); // (1 - параметр для кого установить прототип, 2 - кто прототип)
  objProto.city = "London";
  console.log(obj3.city); // --> London

  obj3.age = 23;
  console.log(objProto.age); // --> undefined
}

console.log("------------------");
// 96 функции высшего порядка и функции нисшего порядка
{
  const a1 = (a, b) => a + b; // пример функции нисшего порядка
  const strHandler = (names) => `Hello ${names}`;
  console.log(strHandler("missa")); // --> Hello missa, другой пример функции нисшего порядка

  function fn1(a, b) {
    // примеры функций высшего порядка ...
    return b(a);
  }
  function fn2(c) {
    return c * 5;
  }
  console.log(fn1(10, fn2)); // --> 50

  const fn3 = (a, b) => b(a); // оналог записи выше
  const fn4 = (c) => c * 4;
  console.log(fn3(4, fn4)); // --> 16

  function m1(a) {
    return function (c) {
      return c * a;
    };
  }
  const m2 = (a) => (c) => c * a;

  const f1 = m1(3);
  const f2 = m2(10);
  console.log(f1(6)); // --> 18
  console.log(f2(10)); // --> 100
  // примеры функций высшего порядка как метода массива
  const arrNum = [1, 2, 3, 4, 5];
  const b = arrNum.map((num) => num * 2); // умножаем кажное число на 2
  console.log(b); // --> [2, 4, 6, 8, 10]

  const b2 = arrNum.filter((num) => num % 2 === 0); // другой пример, проверка на четность
  console.log(b2); // --> [2, 4]

  const b3 = arrNum.reduce((acc, item) => acc + item, 0);
  console.log(b3); // --> 15
  console.log(" ");
  // задача для примера

  const task = [3, 5, 7, 12, 22, 58, 70];
  const max = 15;
  const taskCont = task.filter((num) => num > max);
  console.log(taskCont);
}

console.log("------------------------");
// 97 метод call, apply, bind
{
  const obj = {
    name: "Zigl",
    myMethod(lastName) {
      console.log(`Привет ${this.name} ${lastName}`);
    },
  };
  const obj2 = {
    name: "Violet",
  };
  const a1 = obj.myMethod;
  a1.call(obj, "Zpez"); // --> Привет Zigl Zpez, метод call позволяет вызвать метод с укозанием конкретного обьекта
  // a1("zpez"); вызовет ошибку!
  a1.call(obj2, "Evergader"); // --> Привет Violet Evergader
  // call может использовать одну и туже функцию в разных контекстах
  // ... так например изначально мы оброщаемся к методу в obj но контектом передаем obj2

  console.log(" ");

  // метод aplly также как call используется для вызова функции с указанием контекста но принимает арг. в виде массива
  a1.apply(obj2, ["mantana"]); // --> Привет Violet mantana, (непринимает строку в качестве аргумента!(вернет ошибку))

  console.log(" ");

  // метод bind создает новую функцию с привязанным контекстом, этот контекст не может быть измене при вызове новой функции
  const a2 = obj.myMethod.bind(obj2); // можно передать аргумент при вызове
  a2("Garant"); // --> Привет Violet Garant, в отличии от call и apply можно вызвать позже
  const a3 = obj.myMethod.bind(obj2, "gloma"); // можно передать аргумент сразу
  a3(); // --> Привет Violet gloma
  // прмер для наглядности >
  const obj3 = {
    language: "C#",
    arr: [],
    method(par1, par2) {
      console.log(
        `Привет я программист на ${this.language}, меня зовут ${par1}, мне ${par2} лет.`
      );
      this.arr.push({
        name: par1,
        lang: `${this.language}`,
      });
    },
  };
  const obj4 = obj3.method;
  obj4.call(obj3, "Rubi", 30); // --> Привет я программист на C#, меня зовут Rubi, мне 30 лет.
  const obj5 = {
    language: "JavaScript",
    arr: [],
  };
  obj4.call(obj5, "Andy", 28); // --> Привет я программист на JavaScript, меня зовут Andy, мне 28 лет.
  console.log(obj3.arr);
  console.log(obj5.arr);

  const arr1 = ["Vallet", 22];
  const arr2 = ["Boomer", 30];
  obj4.apply(obj3, arr1);
  obj4.apply(obj5, arr2);
  obj4.call(obj5, ...arr2); // в call можно передать массив с распоковкой

  const b = obj4.bind(obj3);
  b(...arr1);
}

console.log("---------------");
// 98 получение даты

{
  // new Date возврощает часовой пояс и время
  console.log(new Date()); // Thu Jul 03 2025 22:31:19 GMT+0300 (Москва, стандартное время)
  const date = new Date(2025, 1, 18); // можно указывать свои данные(год, месяй, время), месяцы в js начинаются с 0
  console.log(date);
  console.log(" ");
  const date2 = new Date();
  const year = date2.getFullYear(); // метод getFullYear служит для получения текущщего года
  console.log(year); // --> 2025
  const month = date2.getMonth(); // getMonth получаем текущий месяц
  console.log(month); // --> 6
  const hours = date2.getHours(); // getHours получаем часы( мез минут)
  console.log(hours);
  const minutes = date2.getMinutes(); // getMinutes получаем минуты
  console.log(minutes);
  const second = date2.getSeconds(); // getSeconds получаем секунды
  console.log(second);
  const milliSecond = date2.getMilliseconds(); // getMilliseconds получаем милисекунды
  const dayfOfWeak = date2.getDay(); // getDay получаем день недели(где 0 это воскресенье)
  console.log(dayfOfWeak);

  const date3 = new Date();
  date3.setFullYear(2028); // setFullYear миняем год(если хоти получить присатвка get а если изменить приставка set)
  date3.setMonth(12); // setMonth миняем месяц. Так как отсчет месяцев начинается с нуля до 11 включительно, JS перевел на след год
  console.log(date3); // --> Wed Jan 03 2029 23:35:40 GMT+0300 (Москва, стандартное время)
  console.log(`время ${hours}:${minutes}:${second}`);
}

console.log("-----------------------");
// 99 приоброзуем дату в строку
{
  const date = new Date();
  date.setDate(date.getDate() + 10); // добовляем 10 ко дням даты
  console.log(date);

  date.setMonth(date.getMonth() - 1); // миняем месяц
  console.log(date);

  const date2 = new Date();
  const date21 = date2.toISOString(); // toISOString миняет формат вывода даты
  console.log(date21); // --> 2025-07-03T20:53:37.612Z
  const date22 = date21.toString();
  console.log(date22);
  const date3 = date2.toISOString().slice(0, 10); // пример со slice для наглядности
  console.log(date3); // --> 2025-07-03
}

console.log("----------------------");
// 100 toLocaleDateString
{
  const date = new Date();
  console.log(date.toLocaleDateString()); // --> 04.07.2025, toLocaleDateString - выводит текщюю дату(число, месяй, год)
  console.log(date.toLocaleDateString("en-US")); // --> 7/4/2025, миняет вывод на тип указанной страны (месяй, число, год)
  console.log(date.toLocaleDateString("zh-CN")); // --> 2025/7/4, Китай

  const date2 = new Date();
  console.log(
    date2.toLocaleDateString("en-US", {
      weekday: "long", // получаем день недели
      //weekday: 'narrow' получаем первую букву дня недели
      //weekday: "short" получаем две буквы дня недели
      year: "numeric", // выводит год
      //month: "2-digit", // получаем месяц из двух символов
      month: "long", // получаем месяц словом
      day: "2-digit", // получаем число
      hour: "2-digit", // выводит часы
      minute: "2-digit", // выводит минуты
      second: "2-digit", // выводит секунды
      timeZoneName: "short", // выводит часовой пояс
    })
  ); // принимает 2 необязательных параметра (страна, обьект)
  // --> Friday
}

console.log("----------------");
//101 toLocalString
{
  // toLocalString схож с toLocaleDateString
  // разница: toLocaleDateString формотирует только дату а toLocaleString формотирует и дату и время
  const date = new Date();
  console.log(date.toLocaleString()); // --> 04.07.2025, 13:35:55, toLocaleString выводит только дату и время
  console.log(
    date.toLocaleString("ru-RU", {
      weekday: "long",
      year: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );
}

console.log("----------------------");
// 102 setTimeout

function setTimeoutt() {
  function fn1(a, b, c) {
    console.log("Hello world");
  }
  setTimeout(fn1, 2000, "a", "b", "c"); // setTimeout принимает 2 основных параметра(колбек функция, время задержки выполнения в микра-сек.)
  // пораметры самой функции передаются после времени
  setTimeout(function () {
    console.log(`Привет мир`); // пример с анонимной функцией
  }, 3000);
  function fn2(name) {
    console.log(`Ваше имя - ${name}`);
  }
  setTimeout(fn2, 2500, "Alica"); // пример с передачей параметра функции

  console.log(" ");
  function seyHi() {
    console.log("JavaScript");
  }
  const time1 = setTimeout(seyHi, 1000);
  clearTimeout(time1); // clearTimeout отминяет вызов функции

  setTimeout(() => console.log("time"), 1000); // можно также передавать callBack функцию
}

console.log("----------------------");
//103 метод padStart / padEnd
// пример работы padStart
const num = "9";
const numUpdate = num.padStart(3, "0"); // (сколько символоф, какими заполнять в случаем нехватки(в начале))
console.log(numUpdate); // --> 009

// пример работы padEnd
const numUpdate2 = num.padEnd(3, 0); // padEnd (сколько символоф, какими заполнять в случаем нехватки(в конце))
console.log(numUpdate2); // --> 900

const card = "8913";
const cardUpdate = card.padStart(16, "*"); // другой пример
console.log(cardUpdate); // --> ************8913

function padStart() {
  function fn1(par) {
    const n = document.querySelector(".add"); // функция по выводу текста в браузере
    n.textContent = par;
    setTimeout(function () {
      n.remove(); // remove - удаляет переменную(в данном случае с задержкой)
    }, 4000);
  }

  fn1("Hello");

  setTimeout(() => {
    //window.location.href = "https://wallpaperscraft.ru/catalog/anime"; // переход на ссылку
  }, 6000);
}
function padStart2() {
  function fn2() {
    const time = new Date();
    const hours = time.getHours().toString().padStart(2, "0"); // padStart

    const minutes = time.getMinutes().toString().padStart(2, "0");
    const second = time.getSeconds().toString().padStart(2, "0");

    const d1 = document.querySelector(".add");
    d1.textContent = `${hours}:${minutes}:${second}`;
  }
  fn2();
}
// padStart2();

console.log("----------------------");
// 104 setInterval

function setIntervall() {
  const lang = "JavaScrtipt";
  function fn1() {
    console.log(`Hello ${lang}`);
  }

  //setInterval(fn1, 2000); // setInterval принимает 2 обязательных параметра(функйия, время в микросекундах) >
  // ... зыпускает переданную функцию с переданной переодичностю

  //setInterval(() => {console.log(`Hello world`);}, 2000); // также работает callBack вызов

  const f1 = (name) => console.log(`hello ${name}`);

  //setInterval(f1, 2000, "Vallet"); // пример с предачей параметра функции

  function printMassage() {
    console.log("Time go");
  }

  const p = setInterval(printMassage, 1000);

  setTimeout(() => {
    clearInterval(p); // clearInterval - останавливает setInterval
    console.log("Прошло шесть секунд"); // пример интервального выполнения функции с остановкой с задержкой
  }, 6000);
}

console.log("--------------");
// 105 практика

function b1(el) {
  let bol = true;
  function t1() {
    bol = !bol; // миняет на значение на противоположное при каждом вызове(true/false)
    el.style.opacity = bol ? 1 : 0; // миняет прозрачность текста(1 если bol = true, 0 если bol = false)
    setTimeout(t1, 500); // задержка выполнения функции
  }
  t1(); //запускает функцию t1 заново сразу после ее завершения(рекурсия)
}

const cursorEL = document.querySelector("h1");

//b1(cursorEL); // вызов функции

// 106 рандомный цвет фона
function randomColor() {
  const simbol = "0123456789ABCDEF"; // набор символов которые учавствуют в зборке цвета по RGB
  let colorr = "#";
  for (let i = 0; i < 6; i++) {
    colorr += simbol[Math.floor(Math.random() * simbol.length)]; // набираем рамдомный цвет в подготовленную переменную colorr
  }
  console.log(colorr);
  return colorr;
}

function color2() {
  const colorBody = document.querySelector("body"); // оброщаемся к основному тегу в html и присваеваем его в переменную
  colorBody.style.backgroundColor = randomColor(); // присваеваем набранный набор RGB цвета(colorr) в стили цвета заднего фона пременной
}

//setInterval(color2, 1000); // вызов

console.log("-------------------");
// 107 интeрнационализация
{
  // форматирование чисел
  const number = 123456.78;

  const ru = new Intl.NumberFormat("ru-RU").format(number); // Intl.NumberFormat прнимает 2 параметра(страну, обьект)(сейчас только страна)
  // ... форматирует переданные числа в ту запись которая используется в переданной стране

  const usa = new Intl.NumberFormat("en-US").format(number);
  const germany = new Intl.NumberFormat("de-DE").format(number);
  const austria = new Intl.NumberFormat("de-AT").format(number);

  console.log(ru); // --> 123 456,78
  console.log(usa); // --> 123,456.78
  console.log(germany); // --> 123.456,78
  console.log(austria); // --> 123 456,78
}

console.log(" ");
// 108 Форматирование дат
{
  const locales = [
    "en-US", // Америка
    "de-DE", // Германия
    "ru-RU", // Россия
    "kk-KZ", // Казахстан
    "zh-CN", // Китай
    "ar", // Арабские страны
    "hi-IN", // Индия
    "fr-FR", // Франция
  ];

  const number = 1234567.89;

  const format1 = locales.map((item) =>
    console.log(new Intl.NumberFormat(item).format(number))
  );
  for (let i = 0; i < locales.length; i++) {
    console.log(new Intl.NumberFormat(locales[i]).format(number));
  }

  const number2 = 0.12345;

  console.log(" ");
  // пример с передачей обьекта с настройками
  const format2 = locales.map((item) =>
    new Intl.NumberFormat(item, {
      style: "percent", // ставим знак процент в конце записи
      minimumFractionDigits: "2", // сколько цифр покажет после запятой или точки
    }).format(number2)
  );

  console.log(format2);
  console.log("  ");

  const money = 222.35;
  const format3 = locales.map((item) =>
    new Intl.NumberFormat(item, {
      style: "currency", // указываем что это валюта
      currency: "USD", // ставим знак валюты( доллар )
    }).format(money)
  );

  console.log(format3.join("\n"));
  console.log("------------------");
  // форматирование дат

  const date = new Date();

  const newDate = locales.map(function (item) {
    return new Intl.DateTimeFormat(item).format(date);
  });

  console.log(newDate.join("\n"));
}

console.log("---------------------");
//109 редактировать дату
{
  const locales = [
    "en-US", // Америка
    "de-DE", // Германия
    "ru-RU", // Россия
    "kk-KZ", // Казахстан
    "zh-CN", // Китай
    "ar", // Арабские страны
    "hi-IN", // Индия
    "fr-FR", // Франция
  ];
  // формат вывода даты в разных странах >
  const date1 = new Date();

  // отдельный обьекта с настройками для вывода даты/времени
  const options = {
    weekday: "long", // weekday - день медели, "long" - полное название
    year: "numeric", // год: числом
    month: "long", // месяц: полное название
    day: "numeric",
  };
  const newDate = locales.map((item) =>
    new Intl.DateTimeFormat(item, options).format(date1)
  );
  console.log(newDate.join("\n"));
  console.log("  ");

  // формат вывода времени в разных странах >
  const date2 = new Date();
  const options2 = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const newDate2 = locales.map((item) =>
    new Intl.DateTimeFormat(item, options2).format(date2)
  );
  console.log(newDate2.join("\n"));
  console.log(" ");

  // выводим - Год, месяц, день, часы, минуты, секунды, в формате разных стран
  const date3 = new Date();
  const options3 = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const newDate3 = locales.map((item) =>
    new Intl.DateTimeFormat(item, options3).format(date3)
  );
  console.log(newDate3.join("\n"));

  // воводим время на страницу с обновлением каждую секунду
  function updateTime() {
    const currentDate = new Date(); // получаем время, дату
    // настраиваем что будим выводить и в каком формате >
    const options = {
      hour: "2-digit", // числовой тип вывода
      minute: "2-digit",
      second: "2-digit",
    };
    // форматируем дату под указанную страну и передаем настройки нужных данных в переменной - options >
    const timeFormat = new Intl.DateTimeFormat("default", options); // default - страна по умолчанию(определяется сама)

    const formatDateTime = timeFormat.format(currentDate); //.format - применяем в отдельной строке чтоб зделать код более читабельным
    const timeDiv = document.querySelector(".add2"); // оброщаемся к тегу в html файле и присваеваем его переменной
    timeDiv.textContent = formatDateTime; // присвоенному тегу в контент через .textContent отформатированную дату
  }
  setInterval(updateTime, 1000); // запускаем функцию каждую секунду
}

console.log("------------------");
//110 UTC GMT точное время
{
  const a1 = new Date();
  console.log(a1);
  console.log(a1.getUTCHours()); // getUTC получаем всемирную время/дату
  console.log(a1.getUTCMonth()); // месяцы начинаются с 0

  const utcDate = new Date(Date.UTC(2024, 3, 23, 6, 25, 0)); // создаем переменную и присваеваем дату...
  // ... в скобках обращаемся к самой дате через метод UTC и передаем свои значения даты ...
  // ... (год, месяц, день, часы, минуты, секунды)
  const utcDateString = utcDate.toUTCString(); // переводим нашу дату в строковой формат
  console.log(utcDateString); // --> Tue, 23 Apr 2024 06:25:00 GMT
}
{
  // Temporal API — это современный и более мощный и точный способ работы с датами, временем, временными интервалами и таймзонами в JavaScript.
  // temporal-polyfill установить как расширение в проект (код установки в npm)
  // руководство по temporal IPA - https://tc39.es/proposal-temporal/docs/;
  // ... модуль "temporal-polyfill"  это код который эмулирует функциональность которая может остутствовать в старых версия языка
  // ПРОДОЛЖЕНИЕ В main2.js - 119 строка
}

console.log("--------------------");
//112 DOM, 113 методы для выборки html элементов

{
  const titleText = document.getElementById("add"); // .getElementById - позволяет обратится у элементу по ID
  console.log(titleText); // --> <div id = "add"></div>

  console.log(document.querySelector("p")); // --> <p>1</p>
  //  querySelector - возврощает только первый элемент соответствующий CSS селектору
  console.log(document.querySelectorAll("p")); // NodeList(3) [p, p, p]
  // querySelectorAll - возврощает все элементы с соответствующим CSS селектору

  const p = document.querySelectorAll("p");

  Array.from(p).forEach((el) => {
    el.textContent = "Hello"; // Array.from - превращает из нод элемента в массив чтобы вызвать метод...
    //  ... forEach - пребор элементов (доступен только для массива)
  });
  // альтернатива >

  for (let val of p) {
    //console.log(val)  // выводим тег <p>
    val.textContent = "Hello World"; // миняем текст в теге <p>
  }

  for (let val of p) {
    //console.log(val)
    val.innerHTML = "<b>Hello World</b>"; // innerHTML добовляем тег стекстом в указанный тег через перебор
  }

  for (let val of p) {
    //console.log(val)
    val.innerText = "<b>Hello World2</b>"; // игнарирует скрытые элементы или стили и миняет только текст
  }

  console.log(document.getElementsByClassName("d1")); // возврощает HTML коллекцию с указанным классам
  console.log(document.getElementsByTagName("p")); // возврощает HTML колекцию тегов с указанным именем
}

console.log("-------------------------");
//114 Обработчик событий
{
  const tegAdd = document.querySelector("h1");
  const inputt = document.querySelector(".input");

  tegAdd.addEventListener("click", function () {
    //tegAdd.textContent = "Кнопка нажата!"; // миняет текст при нажатии
    //this.textContent = "Кнопка нажата"; // миняет текст при нажатии (с использование this)
  }); // addEventListener - метод используется для добавления слушателя событий
  // ... позволяет риагировать на действия пользовотеля (клик мыши, навидение курсора, нажатие клавиш и тд.)(принимает 3 параметра)
  // ... 1 - параметр событие 2 - функция запускающаяся при указ. событии, 3 - опциональное значение(необязательно)

  function myFn() {
    this.style.color = "#fff";
  }
  function myFn2() {
    this.style.color = "yellow";
  }

  tegAdd.addEventListener("mouseover", myFn); // mouseover - срабатывает при наведениее курсора
  tegAdd.addEventListener("mouseout", myFn2); // mouseout - срабатывает при отвода курсора

  inputt.addEventListener("input", function (event) {
    //console.log(event); // в этом случае event - предстовляет собой обьект событий различных
    tegAdd.textContent = event.target.value; // - оброщаемся к заголовку и миняем текст...
    // ... .target.value - возврощает значение нашем input
    if (inputt.value === "") {
      tegAdd.textContent = "JavaScript"; // выводит указанный тест при условии указанного значания inputt
    }
  });

  function BgColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // функция миняет цвет фона
  }

  document.querySelector("body").style.backgroundColor = `rgb(211, 41, 156)`;
  document.querySelector("body").addEventListener("click", BgColor);
}

// 115 insertAdjacentHtml
function insAdjHt(){
  let newElement = document.createElement("div"); // createElement - создаем новый элемент
  newElement.textContent = "Новый элемент"; // вносим контент в новый элемент
  let parentElement = document.querySelector(".wrapper"); // оброщаемся к тегу в html по классу
  //parentElement.appendChild(newElement); // appendChild - передаем указанный в скобках элемент в элмент к которому применяем
  parentElement.prepend(newElement); // prepend - также добовляет дочерний элемент в родительский но ставит его сверху
  parentElement.removeChild(newElement) // удаляет указанный элемент из родительского

  const h1 = document.querySelector('h1');
  let parentH1 = h1.parentNode; // parentNode - получаем родительский элемент указанного элемента
  console.log(parentH1)
}

function insAdjHt2(){
  let text = document.querySelector(".wrapper");
  text.insertAdjacentHTML('beforebegin', `<div>Новый элемент перед элементом</div>`);
  //insertAdjacentHTML - метод с помощью которго можно вставить HTML разметку, 1 парам. принимает 1 из 4 свойств...
  // ... 2 свойство блок кода HTML разметки, 'beforebegin' - ставит наш блок перед родительским элементом
  
  text.insertAdjacentHTML('afterbegin', `<div>Новый элемент в нутри элемента в начале</div>`);
  // 'afterbegin' - вставляет наш блок в нутрь родительского элемента с верху остальных элементов

  text.insertAdjacentHTML('beforeend', `<div>Новый элемент в нутри элемента в конце</div>`);
  //beforeend - вставляет наш блок внутри элемента а конце остальных

  text.insertAdjacentHTML('afterend', `<div>Новый элемент после элемента</div>`);
  // 'afterend' - вставляет наш блок после родительского блока
}
insAdjHt2()

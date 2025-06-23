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

const obj2 = Object.assign({}, obj1); // Object.assign() - создает комию обьекта(вложенности не копирует)
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

// 57 деструктуризация - извекает значение из обьекта и присваивать простые переменные

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

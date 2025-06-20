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

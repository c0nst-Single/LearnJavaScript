// oop-142 , прототипное наследованние 143
// обьектно ореинтированное программирование
// неглассное прпавило - функции конструкторы вссегда подписываются с большой буквы

function oopProto() {
  function Test1(name, age, year) {
    this.name = name;
    this.age = age;
    this.year = year;
  }

  const person1 = new Test1("costa", 29, 1995); // создаем обьекты через функцию конструктор и передаем аргументы
  const person2 = new Test1("bob", 30, 1995);
  console.log(person1);
  console.log(person2);

  // прототипное наследованние 143
  Test1.prototype.greet = function () {
    // заносим в прототип функции конструктор метод который выводит надпись...
    console.log(`Hello ${this.name}`);
  };

  person1.greet();
}

function Color(color) {
  this.color = color;
}
Color.prototype.getColor = function () {
  return this.color;
};

// const a1 = new Color("DarkBlue");
// console.log(a1.getColor()); // --> DarkBlue

function Style(color, width, height) {
  Color.call(this, color);
  this.width = width;
  this.height = height;
}

Style.prototype = Object.create(Color.prototype); //создаем обьект прототипом которого является Color.prototype
Style.prototype.constructor = Style; // свойство constructor далжно указывать именно на наш конструктор
// создаем метод и добовляем в прототип функции конструктора Style >
Style.prototype.getArea = function () {
  return this.width * this.height;
};

let my1 = new Style("blue", 10, 2);

// в записе выше есть функция конструктор Color у которой в прототипе метод - getColor...
// дальше создаем функцию конструктор Style и в её прототип добовляем функцию конструктор Color(и ее прототипы)
console.log(my1);
console.log(my1.getArea());
console.log(my1.getColor());

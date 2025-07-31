// oop-142 , прототипное наследованние 143
// обьектно ореинтированное программирование
// неглассное прпавило - функции конструкторы вссегда подписываются с большой буквы

function oop_proto142_143() {
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
}

// инкапсуляция 144

function Counter() {
  let count = 0;
  this.increment = function () {
    count++;
  };
  this.decrement = function () {
    count--;
  };
  this.getCount = function () {
    return count;
  };
}
function encapsulation() {
  let a1 = new Counter();
  console.log(a1.count); // вернет undefined (недаступна напрмую)
  console.log(a1.getCount()); // --> 0
  a1.increment();
  console.log(a1.getCount()); // --> 1
  a1.decrement();
  console.log(a1.getCount()); // --> 0

  console.log("-------------------------");

  function CreatPerson(name, age) {
    let objA = {
      name,
      age,
    };
    return {
      getName: function () {
        return objA.name;
      },
      getAge: function () {
        return objA.age;
      },
      setAge: function (n) {
        objA.age = n; // метод для смены возраста
      },
    };
  }

  let person1_2 = new CreatPerson("Garper", 33);
  console.log(person1_2);
  console.log(person1_2.getAge());
  console.log(person1_2.getName());
  person1_2.setAge(45); // миняем возраст на указанный
  console.log(person1_2.getAge());
}

// полиморфизм 145

function polymorphism() {
  // полиморфизм озночает способность разных обьектов в прототипе друг у друга...
  // ... использовать методы с одинаковыми именами и разной реализацией >

  function Fn1() {}
  Fn1.prototype.myMethod = function () {
    console.log("function FN1");
  };

  function Fn2() {}
  Fn2.prototype = Object.create(Fn1.prototype);
  Fn2.prototype.constructor = Fn2;

  Fn2.prototype.myMethod = function () {
    console.log("function FN2");
  };

  function Fn3() {}
  Fn3.prototype = Object.create(Fn1.prototype);
  Fn3.prototype.constructor = Fn3;

  Fn3.prototype.myMethod = function () {
    console.log("function FN3");
  };

  let fn1 = new Fn1();
  let fn2 = new Fn2();
  let fn3 = new Fn3();

  fn1.myMethod();
  fn2.myMethod();
  fn3.myMethod();
}

// оператор in 146

function operIN_146() {
  function Persone(nane) {
    this.name = name;
  }

  Persone.prototype.hello = function () {
    console.log("Hello");
  };

  const costa = new Persone("Costa");
  console.log(costa);
  console.log(costa.hasOwnProperty("name")); // --> true
  // проверяет содержит ли наш обьект указ. свойство(как собственное)

  const ivan = new Persone("ivan");
  console.log("name" in ivan); //--> true, проверка на наличе указ. свойства(унасл. и неунасл.)
  console.log("hello" in ivan); //--> true
}

// Синтаксис классов 147

function classes() {
  // Пример щнакомого способа >
  function FunctionTest(name, age) {
    this.name = name;
    this.age = age;
  }

  FunctionTest.prototype.sayHello = function () {
    // создаем метод для функции конструктор FunctionTest
    console.log(`Привет, меня завут ${this.name} и мне ${this.age} лет.`);
  };

  const person4 = new FunctionTest("Costa", 34);
  console.log(person4);
  console.log(person4.name);
  console.log(person4.age);
  person4.sayHello(); // вызываем созданный метод
  console.log("-----------------------------------");

  // пример через class >
  // более удобная и популярная форма функция конструкторов >
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    sayHello() {
      // создаем метод для классы Persone (будит находися сразу в прототипе)
      console.log(`Привет, меня завут ${this.name} и мне ${this.age} лет.`);
    }
  }

  const person1 = new Person("John", 25);
  console.log(person1);
  console.log(person1.name);
  console.log(person1.age);
  person1.sayHello();
}

// геттеры и сеттеры - 148
// геттеры(get) для получения(чтения) свойства в обьекте
// сеттеры(set) для изминения(записи) свойства в обьекте

function getSet() {
  class Person {
    constructor(name, age) {
      this._name = name; // _ приватное поле (неявляется спец. обозночением, неглассное правило)
      this._age = age;
      // префикс _ говорит о том что мы недолжные его менять из вне функции конструктора...
      // менять можно только с помошью тех методов которые мы создали в нейже
    }
    get names() {
      return this._name;
    }

    set age(newAge) {
      if (newAge > 0 && newAge < 90) {
        this._age = newAge;
      } else {
        console.log("Некорректные данные");
      }
    }
  }

  const person = new Person("John", 15);
  console.log(person.names);
  person.age = 60; // замена значения через метод get встроенный в функции конструкторе
  console.log(person._age);
}

// практика >

function practice_149() {
  class Person {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
    get fullName() {
      return this._firstName + " " + this._lastName;
    }

    set fullName_2(newName) {
      if (newName) {
        const [firstName, lastName] = newName.split(" ");
        this._firstName = firstName;
        this._lastName = lastName;
      }
    }
  }

  const person = new Person("Honda", "Merkury");

  console.log(person.fullName);
  let inp = prompt("текст");
  person.fullName_2 = inp;
  console.log(person.fullName);
}


// oop-142
// неглассное прпавило - функции конструкторы вссегда подписываются с большой буквы
function Test1 (name, age, year){
    this.name = name;
    this.age = age;
    this.year = year;
}

const person1 = new Test1('costa', 29, 1995); // создаем обьекты через функцию конструктор и передаем аргументы
const person2 = new Test1('bob', 30, 1995);
console.log(person1);
console.log(person2)
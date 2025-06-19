function arg(arg1, arg2, arg3){
    console.log(arguments)   //   все переданные аргументы попадут сформируются в массив
}
arg('Make', 23, true)  // вывод -- Arguments(3) ['Make', 23, true]

function fn(){
    let total = 0
    for(let i = 0; i < arguments.length;i++){ 
        total = total + arguments[i];
    }
    return total;
}
console.log(fn(10,20,15,45))    // применяется в случае когда неизвестно кол-во аргументов 
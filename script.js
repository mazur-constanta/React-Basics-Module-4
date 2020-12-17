"use strict";
// Реакт БАЗА. УРОК 85. Есть React Native - для моб.приложений, ecnm React 360 - виртульная реальность
let a = 0;
console.log(a);

// Стрелочные функции
// let obj= {
//     number: 5,
//     sayNumber: function() {
//         function say() {
//             console.log(this)
//         }
//         say();
//     }
// }

// obj.sayNumber();    // глобальный объект window

// let obj= {
//     number: 5,
//     sayNumber: function() {
//         say = () => {
//             console.log(this)
//         }
//         say();
//     }
// }

// obj.sayNumber();   

// Методы map и filter - методы перебора массивов, перебивают весь, и возвращают новый взависимости от переданного в них коллбэка.
// МЕТОД FILTER 
let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

let shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);            // [ 'Ivan', 'Ann' ]

// МЕТОД MAP
let answers = ['IvAn', 'AnnA', 'HeLLo'];
answers = answers.map((item) => item.toLowerCase());

console.log(answers);               // [ 'ivan', 'anna', 'hello' ]

// ИНТЕРПОЛЯЦИЯ
console.log(`Пользователь ${name}, ${age} лет.`);

function fetchData(data, count /* = 0 */) {     // можно прям в параметре присвоить значение 
    console.log(`Данные: ${data} в количестве ${count}`);
}
fetchData('something');             // Данные: something в количестве undefined

// c 2015. Rest-параметр - группирует в массив аргументы, кот-ые не были переданы, как аргументы функции.

function max(...numbers) {
    console.log(numbers);
}

max(3, 4, 67);                      // [ 3, 4, 67 ] - все аргументы записались в один массив и с ними можно что-то делать

// Rest-оператор должен быть всегда В КОНЦЕ.
// Rest-оператор должен быть всего 1.
function max(a, b, ...numbers) {
    console.log(numbers);
}

max(3, 4, 67, 97);                  // [ 67, 97 ] - вывел numbers, а = 3, b = 4


// Spread-оператор - оператор РАЗВОРОТА. Разворачивает массив на список каких-то элементов.
const arr1 = [1, 2, 5],
      arr2 = [43, 2, 6];

const res = Math.max(...arr1, ...arr2);

console.log(res);                  // 43

// или добавить элементы включ.в функцию
const arr1 = [1, 2, 5],
      arr2 = [43, 2, 6];

const res = Math.max(1, ...arr1, 300, ...arr2);

console.log(res);                  // 300

// Object Spread-оператор
// Object.assign - перезапишет
const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const admin = {
     name: 'admin',
     pass: 'root'
};

const res = Object.assign(user, admin);
console.log(res);               // { name: 'admin', pass: 'root', rights: 'user' } объединил 2 объекта 

// перезапишет в новый пустой объект
const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const admin = {
     name: 'admin',
     pass: 'root'
};

const res = Object.assign({}, user, admin);
console.log(res);               // { name: 'admin', pass: 'root', rights: 'user' } объединил 2 объекта 

// ES8-стандарт. Spread-оператор
const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const admin = {
     name: 'admin',
     pass: 'root'
};

const res = {...user, ...admin};
console.log(res);               // { name: 'admin', pass: 'root', rights: 'user' } объединил 2 объекта 

const x = 25, y = 10;
const coords = {
    x: x,
    y: y
};

console.log(coords);            // { x: 25, y: 10 }


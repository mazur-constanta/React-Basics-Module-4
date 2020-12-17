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
const avatar = 'Photo';
const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

const admin = {
     name: 'admin',
     pass: 'root'
};

const res = {...user, ...admin, avatar};
console.log(res);               // { name: 'admin', pass: 'root', rights: 'user', avatar: 'Photo' } объединил 2 объекта 

const x = 25, y = 10;
const coords = {
    x: x,
    y: y
};

console.log(coords);            // { x: 25, y: 10 }

// То же самое 
const x = 25, y = 10;
const coords = {
    x,
    y
};

console.log(coords);            // { x: 25, y: 10 }

// упрощение использования метода. Новый формат
const x = 25, y = 10;
const coords = { x, y,
    calcSq() {
        console.log(this.x * this.y);
    }
};

coords.calcSq();                // 250


// Старый формат
const x = 25, y = 10;
const coords = {
    x: x,
    y: y,
    calcSq: function() {
        console.log(this.x * this.y);
    }
};

coords.calcSq();                // 250


// Деструктуризация - раб. с объектами и массивами. Для использования объекта вне массива.
const user = {
    name: 'default',
    pass: 'qwerty',
    rights: 'user'
};

//console.log(user.name);         // default

// для многократного использования
//const userName = user.name;     // default

// Пример деструктуризации
const {name, pass, rights} = user;
console.log(name, rights);      // default, user

// деструктурировали объект внутри объекта
const user1 = {
    name: {
        first: 'Sam',
        second: 'Smith'
    },
    pass: 'qwerty',
    rights: 'user'
};

const {name: {first, second}, pass, rights} = user1;

console.log(first, second);     // Sam Smith


// Типичный паттерн в JS
function connect({
    host = 'localhost',
    port = 3000,
    user = 'default'}) {
        console.log(`host: ${host}, port: ${port}, user: ${user}`)
}

connect({
    port: 2000,
    host: 'sdsd'
});                             // host: sdsd, port: 2000, user: default

// connect({}) - выведет все параметры по умолчанию

function connect2({
    host = 'localhost',
    port = 3000,
    user = 'default'} = {}) {
        console.log(`host: ${host}, port: ${port}, user: ${user}`)
}

connect2();                             // host: localhost, port: 3000, user: default


// Деструктуризация для массива данных

const numb = [3, 5, 6, 6];

const [a, b, c] = numb;
console.log(a, b, c);                   // 3 5 6

//
const numb2 = [3, 5, 6, 6];

const [, , c] = numb2;
console.log(c);                   // 6

//
const numb3 = [[3, 5], [6, 6]];
//numb3[0][0];
const [[a, b], [c, d]] = numb3;
console.log(a, b, c, d);                   // 3 5 6 6


//
const country = {
    name: 'England',
    population: 20000000,
    gender: {
        male: ['15%', '40'],
        female: ['16%', '29%']
    }
}

//country.gender.male[0];
const {gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18, femaleAdult]}} = country;

console.log(`Мужчины до 18: ${maleUnder18}, женщины старше 18: ${femaleAdult}.`);
// Мужчины до 18: 15%, женщины старше 18: 29%.


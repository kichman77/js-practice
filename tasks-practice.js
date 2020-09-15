// ============================= Массивы ==============================

// let a = function (a, b, c, d, e) {
//   const array = Array.from(arguments);
//   return console.log(array);

// }
// a(1, 2, 3, 4, 5)


// const arr = [];
// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients);

// const clients = ["Mango", "Poly", "Ajax"];

// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);

//можно добавить или заменить элемент массива//

// const clients = ['Mango', 'Poly', 'Ajax'];
// clients[0] = 'Kiwi';
// clients[3] = 'Alex';
// console.log(clients);
// //console.log(clients[3]);


// --------------------------- длинна массива-------------------

// const clients = ['Mango', 'Poly', 'Ajax',' '];
// //console.log(clients.length);

// clients.length = 5;
// console.log(clients);


// ----------------------------- итерация по массиву -------------------
//

//----------- перебор массива for   ------------

// const clients = ['Mango', 'Poly', 'Ajax'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients :' , clients[i]);
// }

// --------------- заполнение массива -------------------

// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label - ${i}`);
// }
// console.log('numbers :', numbers);

// ---------------- for ... of ---------------------

// const clients = ["Mango", "Poly", "Ajax"];

// for (const client of clients) {
//   console.log(client);
// }

// const numbers = [1, 2, 3, 4, 5];

// for (const number of numbers) {
//   console.log(number);
// }


// --------------- break / continue -------------------------------/

// const clients = ['Mango', 'Poly', ' Ajax'];
// const clientNameToFind = 'Poly';

// let message;

// for (let client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем в базе данных';
//     break;
//   }
//   message = 'Клиента с таким именем нет в базе данных!';

// }
// console.log(message);

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message = 'Клиента с таким именем нет в базе данных!';

// for (const client of clients){
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

// }
// console.log(message);

// const numbers = [1, 3, 14, 27, 4, 9, 56, 34, 87];
// const  threshold = 15;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число больше чем ${threshold} : ${numbers[i]}`);
// }




// ----------------- методы массивов ---------------------------------

// ------------------------ split -----------------------------------
// преобразование строки в массив

// const message = 'Welcomme to Bahamas!';

// console.log(message.split(' '));

// ------------------------- join --------------------------------
// преобразвание массива в строку

// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients.join(' '));
// console.log(clients.join('-'));
// console.log(clients.join(','));


// ---------------------------- indexOf() / includes()--------------------
// возвращает, если есть: индекс элемента / true
//                                     -1 / false

// const clients = ["Mango", "Poly", "Ajax", 'Kiwi'];
// console.log(clients.indexOf('Ajax'));
// console.log(clients.indexOf('Mercury'));

// const clients = ["Mango", "Poly", "Ajax", 'Kiwi'];
// console.log(clients.includes('Poly'));
// console.log(clients.includes('Mercury'));


// const fruit = 'apple';

// if (fruit === 'apple' || fruit === 'strawberry') {
//   console.log('It is a red fruit!');
// }

// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

// if (redFruits.includes(fruit)) {
//   console.log('It is a red fruit!');
// }

// --------------------- push () / pop () -------------------------------

// const stack = [];
// console.log(stack);

// // stack.push(1);
// console.log(stack);

// stack.push(2);
// console.log(stack);

// stack.push(3);
// console.log(stack);

// // -----------------

// stack.pop();
// console.log(stack);

// stack.pop();
// console.log(stack);

// stack.pop();
// console.log(stack);



// const clients = ['Mango', 'Poly', 'Ajax', 'Mercury'];

// console.log(clients.shift());
// console.log(clients);

// console.log(clients.shift());
// console.log(clients);

// console.log(clients.shift());
// console.log(clients);

// console.log(clients.shift());
// console.log(clients);


// ------------------------- slice--------------------------------

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];

// console.log(clients.slice(1, 3));
// console.log(clients.slice(1));
// console.log(clients.slice());
// console.log(clients.slice(-2));

// ---------------------- splice () ------------------------------------

// const scores = [1, 2, 3, 4, 5];
// console.log(scores);
// const deletedScores = scores.splice(0, 3);
// console.log(scores);
// console.log(deletedScores);



// const colors = ['red', 'green', 'blue'];
// console.log(colors);
// colors.splice(2, 0, 'purple');
// console.log(colors);
// colors.splice(3, 0, 'yellow', 'pink');
// console.log(colors);


// const lenguages = ['C', 'C++', 'Java', 'JavaScript'];
// console.log(lenguages);

// lenguages.splice(1, 1, 'Python');
// console.log(lenguages);

// lenguages.splice(2, 1, 'C#', 'Swift', 'Go');
// console.log(lenguages);

// ------------------------- concat()-----------------------------

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Mokogon', 'Singu'];
// console.log(oldClients);
// console.log(newClients);

// const allClients = oldClients.concat(newClients);

// console.log(allClients);


//========================= Function ======================

// const add = function (a, b, c) {
//   return a + b + c;

// }
// console.log(add(55, 17, 15));

// const resalt = add(1, 2, 3)
//   console.log(resalt);

// console.log(add(5, 10, 15));

// --------------------параметры по умолчанию ----------------------------------------------------

// const count = function (countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// };

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
//count(2); // countFrom = 2, countTo = 10, step = 1
//count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
//count(); // countFrom = 0, countTo = 10, step = 1

// ------------------------псевдомассив arguments---------------------------------------------------

// const sum = function () {
//   let total = 0;

//   for (const argument of arguments) {
//     total += argument;
//   }

//   return total;
// }

// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4, 5));


// ---------------------- if ... else -----------------------------------------

// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля');
//   } else if (amount > balance) {
//     console.log('Не достаточно средств на счету');
//   } else {
//     console.log('Операция успешно проведена');
//   }
// }
// withdraw(0);
// withdraw(500, 300);
// withdraw(0)

// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log('Для проведения операции введите сумму больше нуля.');
//     return;
//   }
//   if (amount > balance) {
//     console.log('Недостаточно средств на счету.');
//     return;
//   }
//   console.log('Операция по снятию средств проведена.');
// }
// withdraw(0, 300)
// withdraw (500,300)
// withdraw(100,500)

// -----------------------------------------вызов функции-----------------------

// function print(str) {
//   console.log(str);
// }
// print('foo')

// const print = function (f) {
//   console.log(f);
// }
// print('doom')

// const name = function (n) {
// console.log(n);
// }
// name('Jhony')

// const car = function (x) {
//   console.log(x);
// }
// car('x5')

// ----------------- область видимости ------------------------

// const b = 10;

// const add = function () {

//   const a = 5;

//   return a + b;

// };
// console.log(add());

// ----область видимости функции -----------------------

// const value = 50;

// const add = function (num) {
//   const value = 10;
//   const innerValue = 5;
//   return num + value + innerValue;
// };
// console.log(add(value));


// --------------------- стрелочные функции ------------------------------

// const add = function (a, b, c) {
//   return a + b + c;
// }
// console.log(add(5, 7, 9));

// const fn = () => {
//   console.log("Hello! :]");
// };
// fn()


// const add = (...args) => {
//   console.log(args);
// };
// add()

// let anonim = () => 15 + 98;


// console.log(anonim());

// ------------------- Object -------------------------------

// --------------------- создание объекта -----------------

// const hotel = {};
// console.log(hotel);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capasity: 100,
// };
// console.log(hotel);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capasity: 100,
// };
// console.log(hotel.name);
// console.log(hotel['name']);

// hotel.name = 'CoastLine Resort';
// console.log(hotel.name);
// console.log(hotel['name']);


// hotel['name'] = 'Stardust Hotel';
// console.log(hotel.name);
// console.log(hotel['name']);



// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capasity: 100,
// };
// console.log(hotel);

// hotel.address = '1, Beach ava.';
// hotel['manager'] = 'Chack Norris';

// console.log(hotel.address);
// console.log(hotel['manager']);



// ------------------- удаление свойств -------------------------


// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capasity: 100,
// };
// console.log(hotel);

// delete hotel.name;
// console.log(hotel);

// delete hotel.stars;
// console.log(hotel);

// delete hotel.capasity;
// console.log(hotel);


// --------------------- отсутствующее свойство -----------------


// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capasity: 100,
//   guests: ['mango', 'poly', 'ajax'],
// };
// console.log(hotel);
// console.log(hotel.pool);

// let name = 'Resort Hotel';
// let stars = 5;

// const hotel = {
//   name,
//   stars,
//   capacity: 100,
// };


// console.log(hotel);


// ------------------ вычисляемые свойства -------------------------

// const key = 'person';
// const object = {};

// object[key] = 'Mango';
// console.log(object);

// const key = 'person';
// const getKey = function () {
//   return 'age';
// };
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// };

// console.log(object);

// ---------------------- методы объекта ----------------------


// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
//   // Так метод объявлялся в ES5
//   greetInES5: function () {
//     console.log("Welcome!");
//   },
//   // Так метод объявляется в ES6
//   greetInES6() {
//     console.log("Welcome!");
//   },
// };
// hotel.greetInES5();
// hotel.greetInES6();


// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// hotel.greet = function () {
//   console.log("Welcome!");
// };

// hotel.greet();


// ---------------------- доступ через this -------------------

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };

// hotel.showName();

// hotel.changeCapacity(200);
// console.log(hotel.capacity);


// ------------------- for in -----------------------------------


// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capasity: 100,
// };
// for (const key in hotel) {
//   console.log('key :', key);
// }

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capasity: 100,
// };

// for (const key in hotel) {
//   console.log('Value', hotel[key]);
// }

// ---------------Object.keys(), Object.values(), Object.entries();----------

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
// //console.log(hotel);

// const keys = Object.keys(hotel);
// for (const key of keys) {
//    console.log(key);
//  }


// const values = Object.values(hotel);

// for (const value of values) {
//   console.log(value);
// }
// const entries = Object.entries(hotel);

// //console.log(entries);

// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key} ${value}`);
// }




// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   chees: 7,

// };

// const values = Object.values(goods);
// //console.log(values);
// let total = 0;

// for (const value of values) {
//   //console.log(value);
//   total += value;

// }
// console.log(total);



// ------------------------------ spread -------------------------------

// const temperatures = [18, 14, 12, 21, 17, 29];
// const min = Math.min(...temperatures);
// console.log(min);

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const copyOfHouses = [...houses, 'Targaryen'];

// console.log(houses);
// console.log(copyOfHouses);
// console.log(houses === copyOfHouses);

// const firstBatch = ["Arryn", "Frey", "Greyjoy"];
// const secondBatch = ["Stark", "Lannister", "Tyrell"];

// const houses = [...firstBatch, ...secondBatch];
// console.log(houses);

// const houses = ["Arryn", "Frey", "Greyjoy", "Stark", "Lannister", "Tyrell"];
// console.log(houses);
// const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];

// console.log(housesInDebt);


// const houses = ["Arryn", "Frey", "Greyjoy", "Stark", "Lannister", "Tyrell"];


// const updatedHouses = [...houses.slice(0, 1), "Frey of the Crossing", ...houses.slice(2)];

// console.log(updatedHouses);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 }; //???????????????

// const c = Object.assign({}, a, b);
// console.log(c);

// ------------------------------ rest ---------------------------------

// const add = function (...args) {
//   console.log(args);
// };
// add(1, 2, 3, 4 , 5)


// const add = function (value, ...args) {
//   console.log(value);
// }
// add(10, 1, 2, 3);
// add(15, 2 , 3 , 4 , 5 , 6 , 7)

// -------------------------- деструктуризация объектов -----------------------

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
// const { name, stars, status } = hotel;

// console.log(name, stars, status);

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
// const { name = "hotel", stars = 3, status = "empty" } = hotel;
// console.log(name, stars, status);

// const { name: hotelName, stars, status: hotelStatus = 'empty' }= hotel;
// console.log(hotelName, stars, hotelStatus);

// const { name, ...rest } = hotel;
// console.log(name);
// console.log(rest);

// ------------------- деструктуризация массивов  ----------------------

// const rgb = [200, 255, 100];

// const [red, green, blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue ${blue}`);


// ========================================================================
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ========================================================================









// 1
// Объяви две переменные хранящие имя пользователя и сообщение приветствия: userName и greeting
// Переменная с именем пользователя должна принимать данные через окно ввода.
// Используя шаблонную строку и интерполяцию выведи в консоль информацию  товаре, получится: 'Имя пользователя, приветствие'

// let userName = prompt('Введите имя')
// let greeting = 'Hello'
// console.log(`${userName}, ${greeting}`);


// 2
// ============== 1 ====================================

// объяви три переменные с именами var1, var2 и var3 соответственно

// присвой им значения: 1, 0, true

// выведи в консоль результаты сравнения:

// var1 > var2
// var1 == var3
// var1 === var3
// var1 != var3
// var2 !== var3
// var1 > var2 == var3
// var1 > var2 > var3

// напиши в комментарии после команды console.log, ответ из консоли

// объясни почему получаются такие ответы

// let var1 = 1;
// let var2 = 0;
// let var3 = true;
// console.log(var1 > var2); // true - 1 > 0;
// console.log(var1 == var3);// true - приведение типов при не строгом сравнении
// console.log(var1 === var3);//  false - сравнение типов данных
// console.log(var2 !== var3);// true - разные типы данных
// console.log(var1 > var2 == var3); // true - результат первого выражения не строго равен var3
// console.log(var1 > var2 > var3);// false - true не больше true
// console.log(undefined === null);// false
// console.log(undefined == null);// true
// console.log(undefined == false);// false
// console.log(undefined == true);// false


// ============== 2 ====================================

// объяви переменную val
// выведи ее в консоль
// присваивай ей следующие значения: "River", "Mountain", 232, true, null,
// проверь на число каждое присвоенное значение и узнай тип данных, укажи результат в комментарий после сonsole.log

// let val;
// console.log(val);
// val = "River";
// console.log(isNaN(val)); // true
// console.log(typeof val);

// val = "Mountain";
// console.log(isNaN(val)); // true
// console.log(typeof val);

// val = undefined;
// console.log(isNaN(val)); // true
// console.log(typeof val);

// // значения, которые можно привести к числу и проходят проверку на число
// val = 232;
// console.log(isNaN(val)); // false
// console.log(typeof val);

// val = true;
// console.log(isNaN(val)); // false
// console.log(typeof val);

// val = false;
// console.log(isNaN(val)); // false
// console.log(typeof val);

// val = null;
// console.log(isNaN(val)); // false
// console.log(typeof val);

// val = '2';
// console.log(isNaN(val)); // false
// console.log(typeof val);


// ============== 3 ====================================
// объяви две переменные alfa и beta со значениями 0.2 и 0.4
// запиши результат суммы этих переменных так, чтобы получилось 0.6 в переменную result
// выведи результат в консоль

// const alfa = 0.2;
// const beta = 0.4;
// let result;

// result = (alfa * 10 + beta * 10) / 10;
//  console.log(result);
// console.log(typeof result);

// result = +(alfa + beta).toFixed(1)
// console.log(result);
// console.log(typeof result);



// ============== 4 ====================================

// объяви переменную tetra
// присвой ей значения: 12px, 13.34em,
// выведи результат в консоль и укажи результат в комментарий после console.log

// let tetra = 12 + 'px';
// console.log(tetra);
// tetra = 13.34 + 'em';
// console.log(tetra);



// ============== 5 ====================================

// выведи в консоль наибольшее и наименьшее число из указанных (2, 34, 99, 3, 22, 36, 733, 18)



// ============== 6* ===================================

// объяви переменную random

// пусть она принимает рандомное целое число от 3 до 19 включительно

// выведи результат в консоль

// 3
// ============== 1 ====================================

// Создай массив fruits с элементами: яблоки, бананы, апельсины.

// Выведи массив в консоль

// Выведи в консоль элемент массива с индексом 1

// Измени значение этого элемента на киви

// Выведи массив в консоль и убедись, что элемент изменился

// Добавь следующими после элемента "апельсины", такие элементы: "груши", "виноград", "персики"

// Выведи массив в консоль и убедись, что элементы добавлены



// ============== 2 ====================================

// Создай массив test1, который содержит результаты тестов студентов:

// 4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12

// С помощью цикла со счетчиком for выведи в консоль только те значения, которые могут быть зачтены, т.е. они должны быть больше 12, это значение должно храниться в переменной score1



// ============== 3 ====================================

// Создай массив test2, который содержит результаты тестов студентов:

// 17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20

// С помощью цикла со счетчиком for выведи в консоль только те значения, которые могут быть зачтены, т.е. они должны быть больше 15, это значение должно храниться в переменной score2



// ============== 4 ====================================

// Создай массив test3, который содержит результаты тестов студентов:

// 20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22

// С помощью цикла со счетчиком for выведи в консоль только те значения, которые могут быть зачтены, т.е. они должны быть больше 16, это значение должно храниться в переменной score3



// ============== 5 ====================================

// Создай многомерный массив tests, который содержит 3 вложенных массива, с результатами трех тестов студентов:

// первый: 4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12

// второй: 17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20

// третий: 20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22

// Выведи в консоль все три вложенных массива с помощью цикла for



// 4
// ============== 1 ===============================================

// Создай массив authors с именами авторов:

// William Shakespeare, Guy de Maupassant, Dante Alighieri, Mikhail Bulgakov, Albert Camus, Erich Maria Remarque

// С помощью методов массива, добавь в конец массива authors три элемента со значениями:

// Honore de Balzac, Miguel de Cervantes, Anton Chekhov

// а в начало массива, три элемента со значениями:

// Charles Dickens, Edgar Allan Poe, Gabriel Garcia Marquez

// Выведи обновленный массив в консоль. В комментарии после команды консоль укажи количество элементов измененного массива



// ============== 2 ===============================================

// Создай массив scores с элементами:

// 12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42

// с помощью методов массива shift() и pop(), удали первые два и последние три элемента

// Выведи результат в консоль



// ============== 3 ===============================================

// Создай массив results с элементами:

// 12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42

// с помощью метода splice(), удали первые два и последние три элемента, записав удаленные элементы

// в отдельные массивы removeFromStart и removeFromEnd

// Выведи в консоль все массивы



// ============== 4 ===============================================

// Создай массив partOfResults и скопируй в него элементы от 3 до 532 включительно

// из измененного массива results из задания 3 (т.е. все задание 3 и массив results должны быть раскомментированы)



// ============== 5 ===============================================

// Создай массив doubleResults и скопируй в него все элементы из измененного массива results из задания 3



// ============== 6 ===============================================

// Перебери массив doubleResults из задания 5

// Четные числа из массива запиши в новый массив evenResults, а

// Нечетные - в oddResults

// В обратной последовательности в обоих случаях

// Выведи в консоль массивы evenResults и oddResults



// ============== 7 ===============================================

// Объедините массивы oddResults и evenResults из задания 6, записав их в новый массив AllResults

// Перебери новый массив AllResults и выбери только те элементы массива, которые содержат 1 и запиши эти элементы в новый массив includesOne

// "обрати внимание, что массив includesOne должен содержать элемента с типом number, а не string!

// 5
// ============== 1 ===========================

// Напиши функцию toPassTests как FUNCTION EXPRESSION

// (функциональное выражение через переменную)

// и как ARROW FUNCTION (стрелочная функция),

// которая выводит пользователю всплывающее окно с сообщением

// Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!

// и вызови эту функцию

// убедись, что функция выполнилась при любом ее выражении



// FUNCTION EXPRESSION

// тут объяви функцию как FUNCTION EXPRESSION



// ARROW FUNCTION

// тут объяви функцию как ARROW FUNCTION



// вызов функции

// тут вызывай функцию



// ============== 2 ===========================

// Напиши функцию checkAge как FUNCTION EXPRESSION

// (функциональное выражение через переменную)

// и как ARROW FUNCTION (стрелочная функция),

// которая проверяет значение возраста, которое пользователь ввел в модальное окно

// и выводит пользователю всплывающее окно с сообщением

// если возраст равен или более 18, то - Here you are! You are got access!

// в остальных случаях - Sorry, you can't to get access

// и вызови эту функцию

// убедись, что функция выполнилась при любом ее выражении

// FUNCTION EXPRESSION

// тут объяви функцию как FUNCTION EXPRESSION



// ARROW FUNCTION

// тут объяви функцию как ARROW FUNCTION



// вызов функции

// тут вызывай функцию



// ============== 3 ===========================

// Напиши скрипт подсчета стоимости гравировки украшений.

// Для этого создай функцию toGetCost(message, pricePerWord)

// как FUNCTION EXPRESSION и как ARROW FUNCTION

// принимающую строку (в строке будут только слова и пробелы) и цену гравировки

// одного слова, и возвращающую цену гравировки всех слов в строке.

// и вызови эту функцию

// убедись, что функция выполнилась при любом ее выражении



// FUNCTION EXPRESSION

// тут объяви функцию как FUNCTION EXPRESSION



// ARROW FUNCTION

// тут объяви функцию как ARROW FUNCTION



// вызов функции

// используй эти консоли для проверки своего кода



// console.log(toGetCost("To be, or not to be, that is the question", 10)); // 100

// console.log(toGetCost("Whether 'tis nobler in the mind to suffer", 20)); // 160

// console.log(toGetCost("The slings and arrows of outrageous fortune,", 40)); // 280

// console.log(toGetCost("Or to take arms against a sea of troubles", 20)); // 180



// ============== 4 ===========================

// Напиши функцию logItems(array), которая получает массив и использует цикл for,

// который для каждого элемента массива будет выводить в консоль сообщение

// в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого

// элемента массива ['Mango', 'Banana', 'Ajax']

// с индексом 0 будет выведено '1 - Mango',

// а для индекса 2 выведет '3 - Ajax'.

// const array = ['Mango', 'Banana', 'Ajax'];



// // FUNCTION EXPRESSION



// Вызовы функции для проверки кода

// logItems([

//   "Wolverine",

//   "Thor",

//   "Iron Man",

//   "Deadpool",

//   "Nick Fury",

//   "Colossus"

//   ]);

//   logItems([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);



  // ============== 5 ===========================

  // Напиши функцию checkTheWord(message) как FUNCTION EXPRESSION и как ARROW FUNCTION,

  // принимающую 1 параметр message - строку.

  // Функция проверяет ее на содержание слов lose и not. Если нашли запрещенное слово

  // то функция возвращает true, если запрещенных слов нет функция возвращает false.

  // Слова в строке могут быть в произвольном регистре.



  // FUNCTION EXPRESSION

  // тут объяви функцию как FUNCTION EXPRESSION



  // ARROW FUNCTION

  // тут объяви функцию как ARROW FUNCTION



  // вызов функции

  // используй эти консоли для проверки своего кода

  // console.log(checkTheWord("Than fly to others that we know not of?")); // true

  // console.log(checkTheWord("Thus conscience does make cowards of us all")); // false

  // console.log(checkTheWord("And enterprises of great pitch and moment")); // false

  // console.log(checkTheWord("And lose the name of action")); // true



  // ============== 6 ===========================

  // Напиши функцию countTestsScore() как FUNCTION EXPRESSION,

  // принимающую при вызове все аргументы в виде псевдомассива arguments,

  // Функция суммирует все полученные аргументы, независимо от их количества при вызове.

  // в переменную totalSum и выводит это значение в консоль



  // FUNCTION EXPRESSION

  // тут объяви функцию как FUNCTION EXPRESSION



  // Вызовы функции для проверки кода

  // countTestsScore(16, 22, 23); // укажи результат

  // countTestsScore(15, 20, 22, 20); // укажи результат

  // countTestsScore(14, 19, 21, 20, 23); // укажи результат



  // ============== 7 ===========================

  // Напиши функцию myNewArrowFunction() как ARROW FUNCTION,

  // принимающую при вызове все аргументы с помощью ...rest ,

  // и выводит массив этих аргументов в консоль



  // ARROW FUNCTION

  // тут объяви функцию как ARROW FUNCTION



  // Вызовы функции для проверки кода

  // myNewArrowFunction(1, 2, 3); // укажи результат

  // myNewArrowFunction(100, 200, 300, 400, 500); // укажи результат

  //myNewArrowFunction("Js", "Python", "Java", "PHP", "C++"); //укажи результат
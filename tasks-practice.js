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

// const message = 'Welcomme to Bahamas!';

// console.log(message.split(' '));

// ------------------------- join --------------------------------

// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients.join(' '));
// console.log(clients.join('-'));
// console.log(clients.join(','));


// ---------------------------- indexOf() / includes()--------------------

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


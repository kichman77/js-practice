// let a = 'JavaSkript'
// console.log(a.length);

// console.log(a.toUpperCase());

// let age;
// const yearOfBirth = 1990;
// console.log( yearOfBirth);
// console.log(age);
// age = 34;
// console.log(age);

// const COLOR_TEAL = '#009688';
// console.log(COLOR_TEAL);
// const MESSAGE_LOGIN_SUCCESS = "Добро пожаловать!";
// console.log(MESSAGE_LOGIN_SUCCESS);

// let name;
// console.log(name);
// {
//   let age1 = 28;
//   console.log(age1);
// }
// const z = 'типы примитивов- number, string, boolean, null, undefined'
// console.log(z);

// let an;
// console.log(typeof an);

// const b = null;
// console.log(b);

// const c = 3;
// console.log(typeof c);

// const d = '';
// console.log(typeof d);

// const e = false;
// console.log(typeof e);

// const message = 'JavaScript is awesome!'
// console.log(message);

// let name = 'Kiwi';
// console.log('My name is:', name);

// let name1 = 'Igor';
// console.log('my name is:', name1);

// let name2 = 'Bob';
// console.log('his name is:', name2);

// let message1 = "Hello world!";
//  alert(message1)

// const isComing = confirm('Hi man!');
// console.log(isComing);

// const hotelName = prompt('Pleas enter something');
// console.log(typeof hotelName);// всегда возвращает строчное значение !!!!

// const x = 10;
// const y = 5;
// console.log(10 % 5); // остаток от деления!

// a > b и a < b - больше/меньше
// a >= b и a <= b - больше/меньше или равно
// a == b - равенство
// a != b - неравенство
// a === b - строгое равенство
// a !== b - строгое неравенство

// const valueA = '5';
// console.log(Number(valueA));
// console.log(typeof Number(valueA));

// const valueB = 'random string';
// console.log(Number(valueB));
// console.log(typeof Number(valueB));

// const valueC = 'asd4';
// console.log(typeof Number(valueC));

// const num = Number('37');
// console.log(Number.isNaN(num));

// console.log(0.1 + 0.2 === 0.3);
// console.log((0.1 * 10 + 0.2 * 10) / 10);

// console.log(Math.floor(1.5));
// console.log(Math.ceil(1.6));

// console.log(Math.round(1.3));
// console.log(Math.round(1.7));

// console.log(Math.max(12, 58, 67, 91));
// console.log(Math.min(4, 56, 1, 12));

// console.log(Math.pow(2, 5));

// console.log(Math.random(12-4)+4);

// const name = 'Micky';
// const age = 100;
// const mood = 'happy';

// const message = `my name is ${name} my age is ${age} i'm ${mood}`
// console.log(message);

// const num1 = 56;
// const num2 = 45;
// const num = num1 > num2 ? num1 : num2;
// console.log(num);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }

// const target = 5; //
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// ======================= proto/prototype ===============

// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;
// };

// Manager.prototype.sell = function () {
//   this.sales += 1;
// };

// Manager.prototype.changeName = function (name) {
//   this.name = name;
// };
// const mango = new Manager("Mango", 5);
// console.log(mango);

// console.dir(Manager);

// mango.sell();
// console.log(mango);

// mango.sell();
// console.log(mango);

// const poly = new Manager("Poly", 10);
// console.log(poly);
// poly.sell();
// console.log(poly);
// poly.sell();
// console.log(poly);

// poly.changeName('Kiwi');
// console.log(poly);
// poly.sell();
// console.log(poly);

// poly.changeName('Apple');
// console.log(poly);
// poly.sell();
// console.log(poly);

// console.log(mango.__proto__ === Manager.prototype);

// ======================= ES6 class ====================================

// const objA = {
//   q: 5,
//   z: 6,
// };
// const objB = Object.create(objA);

// objB.x = 1;
// objB.y = 2;
// console.log(objB.hasOwnProperty('x'));
// console.log(objB.hasOwnProperty("z"));

// for (const key in objB) {
//   console.log(key);
// }
// console.log(Object.keys(objB));

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };
// Hero.description = 'This is a Hero base class';
// console.dir(Hero);

// Hero.showStats = function (hero) {
//   console.log(`Loggin stats from Hero.showStats:`, hero);
// }
// Hero.prototype.changeName = function (name) {
//   this.name;
// }
// const mango = new Hero('Mango', 1000);
// console.log(mango);

// Hero.showStats(mango);

// Array.from();
// Number.parseInt();  ===> стфтические методы конструктора
// Object.keys();

// class Hero {
//   //статические свойства класса
//   //  static description = "This is a Hero base class";
//   //  static showStats(hero) {
//   //   console.log(`Loggin stats from Hero.showStats:`, hero);
//   // }
//   // методы класса
//   constructor(name, xp) {
//     this._name = name;
//     this.xp = xp;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     this._name = newName;
//   }
//   // changeName(name) {
//   //   this.name = name;
//   // }
//   // getName() {
//   //   return this.name;
//   // }
//   gainXp(amount) {
//     console.log(`${this.name} получил ${amount} опыта`);
//     this.xp += amount;
//   }
// }
// // console.dir(Hero);

// class Warrior extends Hero {
//   constructor(name, xp, weapon) {
//     super(name, xp);
//     this.weapon = weapon;
//   }
//   attack() {
//     console.log(`${this.name} attacks with ${this.weapon}`);
//   }
// }

// // const mango = new Warrior('Mango', 1000,"Алибарда");
// // console.log(mango);
// // mango.attack();
// // mango.gainXp(2000);

// class Paladin extends Warrior {
//   constructor(name, xp, weapon, spell) {
//     super(name, xp, weapon);
//     this.spell = spell;
//   }
// }
// const mango = new Paladin('Mango', 1000, "Алибарда", 'Cleanse');
// console.log(mango);
// mango.attack();
// mango.gainXp(2000);

// console.log(mango.name);
// mango.name = "Kiwi";

// console.log(mango.name);

// mango.gainXp(2000);
// console.log(mango);

// console.log(mango.getName());

// =========================== императивный / декларативный подход =======

// Императивный
// const numbers = [1, 2, 3, 4, 5];
// const filtredNumbers = [];

// for (let i = 0; i < numbers.length; i++){
//   if (numbers[i] > 3) {
//     filtredNumbers.push(numbers[i])
//   }
// }
// console.log(filtredNumbers);

// Декларативный

// const numbers = [1, 2, 3, 4, 5];
// const filtredNumbers = numbers.filter(value => {
//   return value > 3;
// });
// console.log(filtredNumbers);

// ---------------- чистые и грязные функции --------------------

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] * value;
//   }
// };
// const numbers = [1, 2, 3, 4, 5]; // [2, 4, 6, 8, 10] измененный массив
// dirtyMultiply(numbers, 2);
// console.log(numbers);

// const pureMultiply = (array, value) => {
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     result.push(array[i] * 2);
//   }
//   return result;
// }; // не изменяет исходный массив данных

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// const dabledNumbers = pureMultiply(numbers, 2);

// console.log(dabledNumbers);

// ================================= forEach()====================

// const numbers = [1, 2, 3];

// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(numbers[i]);
// // }

// numbers.forEach((num) => console.log(num));

// -------------------------- map ------------

// const numbers = [1, 2, 3];
// console.log(numbers);
// const dobleendNumbers = numbers.map((num) => num * 2);
// console.log(dobleendNumbers);

// ---------------------------- filter -----------------------

// const users = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
//   { name: "Chelsey", isActive: false },
// ];

// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);

// // ------------------------------- finde ---------------------------
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.find((num) => num > 5)); // 6

// console.log(numbers.find((num) => num < 5)); // 0

// console.log(numbers.find((num) => num === 5)); // 5

// const users = [
//   { id: "000", name: "Mango", isActive: true },
//   { id: "001", name: "Poly", isActive: false },
//   { id: "002", name: "Ajax", isActive: true },
//   { id: "003", name: "Chelsey", isActive: false },
// ];

// const user = users.find(user => user.id === '003');
// console.log(user);
// const getUserById = (arr, id) => arr.find( x => x.id === id);
// console.log(getUserById(users, "001"));
// console.log(getUserById(users, "003"));

// ------------------------------------ reduce ----------------------

// const numbers = [11, 21, 34, 4, 53];
// const summ = numbers.reduce((acc, value) => acc + value, 0);
// console.log(summ);

// ========================== DOM ===========================

//console.dir(window.document); // встроенный объект
// console.dir(document);

// const titleRef = document.querySelector('.test1');
// console.dir(titleRef);

// const linkRef = document.querySelector('.link')
// console.log(linkRef.classList.contains('item'));
// linkRef.classList.add('link-item');
// // linkRef.classList.remove("link-item");
// console.log(linkRef);
// const pRef = document.querySelector(".test");
// console.log(pRef);

// //const pRef = document.querySelector('.text')
// console.log(pRef);
// pRef.textContent = 'Hi world, have a good day!';

// const liRef = document.querySelectorAll('.item-text');
// console.log(liRef);

// const imgRef = document.querySelector('img');
// console.log(imgRef);
// console.log(imgRef.alt);
// imgRef.alt = 'меняющиеся фотки';
// imgRef.srs = "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
// console.log(imgRef.srs);

// console.log(imgRef.getAttribute('src'));
// console.log(imgRef.hasAttribute('alt'));

// const titleRef = document.createElement('h1')
// console.log(titleRef);
// titleRef.classList.add('body-title')
// titleRef.classList.add("site-title");
// titleRef.id = 'Dom';

// titleRef.textContent = 'New title!'

// const containerRef = document.createElement('div')
// containerRef.classList.add('card')
// console.log(containerRef);

// const titleRef = document.createElement('h2');
// titleRef.classList = 'product-card';
// console.log(titleRef);

// const descriptionRef = document.createElement('p');
// console.log(descriptionRef);
// descriptionRef.textContent = ("Lorem ipsum, dolor sit amet consectetur adipisicing elit.");

// // containerRef.appendChild(titleRef);
// // containerRef.appendChild(descriptionRef);
// // console.log(containerRef);

// containerRef.append(titleRef, descriptionRef);// важен порядок передачи!!
//  console.log(containerRef);

// const cardRootRef = document.querySelector('#root');
// cardRootRef.append(containerRef);
// console.log(cardRootRef);

// ===========================  СОБЫТИЕ =====================================

// const targetBtnRef = document.querySelector(".js-target-btn");
// const addListenerBtnRef = document.querySelector(".js-add-listener");
// const removeListenerBtnRef = document.querySelector(".js-remove-listener");

// const doStuffOnClick = () => {
//   console.log("Click!!!");
// };

// addListenerBtnRef.addEventListener("click", () => {
//   targetBtnRef.addEventListener("click", doStuffOnClick);
// });
// removeListenerBtnRef.addEventListener("click", () => {
//   targetBtnRef.removeEventListener("click", doStuffOnClick);
// });

// targetBtnRef.addEventListener('click', event => {
//   console.log(event.target);
// });
// ---------------------------------- form ------------------------------
// const formRef = document.querySelector('.js-register-form');

// formRef.addEventListener('submit', event => {
//   event.preventDefault();

//   // const formElements = event.target.elements;
//   console.log(event.target.elements);

//   console.log('Submit');
// });
// -------------------------- input -------------------------------------
// const btnRef = document.querySelector(".js-bttton");
// const inputRef = document.querySelector(".js-input");
// const nameLabelRef = document.querySelector(".js-button > span");
// const licenseRef = document.querySelector(".js-license");

// // inputRef.addEventListener("change", (e) => {
// //   console.log(e.target.value);
// //   console.log("Hello");
// // });
// inputRef.addEventListener("input", (event) => {
//   nameLabelRef.textContent = event.target.value;
// });
// licenseRef.addEventListener("change", event => {
//   console.log(event);

//   // btnRef.disabled = !event.target.checked; => что-то не работает!!!
// });

// -------------------------- события клавиатуры -------------------------
// const outputRef = document.querySelector(".js-output");

// window.addEventListener("keypress", event => {
//   console.log("event.key:", event.key);
//   console.log("event.code:", event.code);

//   outputRef.textContent += event.key;
// });
// что-то не так !!!!!

// --------------------------------------------------------------------
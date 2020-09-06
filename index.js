// 'use strict'
// let a;
// console.log(a);

// let b = 1;
// b = 2;
// console.log(b);

// const c = [1, 2];
// console.log(c);
// c.push(3);
// console.log(c);

// a = 1;
// b = 2;
// console.log(a + b);
// alert("hello world");

// let a = 24;
// let b = '1';
// let c = a + Number(b);
// console.log(c);

// const name = 'Igor';
// let age = prompt ('введите ваш возраст');
// console.log(typeof age);
// // age + age;
// console.log(typeof age);
// age = Number(age)
// const message = 'hello '  + name;
// console.log(message);

// const newMessage = `my age is ${age}`
// console.log(newMessage);
// age = 30;
// console.log(typeof age);

// let answer = confirm('вам есть 18');
// console.log(answer);
// console.log(typeof answer);

// let newquestion = `вы любите js?`;
// let newAnswer =confirm (newquestion);

// let num = 10;
// let boolNum = Boolean(num);
// console.log(boolNum);
// num = 0;
// boolNum = Boolean(num);
// console.log(boolNum);
// let str = `Igor`;
// let boolstr = Boolean(str);
// console.log(boolstr);

// str = ``;
// boolstr = Boolean(str);
// console.log(boolstr);
// str = ` `;
// boolstr = Boolean(str);
// console.log(boolstr);

// let isOpen;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolUnd = Boolean(isOpen);
// console.log(boolUnd);
// console.log(typeof boolUnd);

// isOpen = null;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolNull = Boolean(isOpen);
// console.log(boolNull);
// console.log(typeof boolNull);

// =========== 04.09.======================

// ======= сравнение если / то
// let vova = {
//   age : 16,
//   dad: 'mehanic'
// }
// if(vova.age >= 18) {
//   alert(`Prohodi paren`);
// }else if (vova.dad === 'deputat'){
//   alert(`Prohodi paren`);

// }else {
//   alert('Izvini brat');
// }

// vova.age >= 18 || vova.dad === `deputat`
// ? alert('Prohodi paren')
// : alert('Izvini brat');

// ========= кривой пример/ требует разбора=======
// const PASSWORD = 'iLovejs'
// let promt1 = promt('Enter your name: ');

// if(promt1) {
//   promt === PASSWORD
//   ? console.log('You"re in')
//   : console.log('Wrong password!!!)
// };

// let a = 1;
// let b = 2;
// let c = 3;

// if (true) {
//   c = 4;
// }
// console.log(c);

// =========== циклы =================

// let q;

// while (q !== null && q !== '') {
//   q = prompt ( 'enter youre number: ');
//   console.log(q);
// }

// =============== for =================
// for(let i = 0; i<10; i++) {
//   console.log(i);
// }
// for (let b = 0; b<10;) {
//   console.log(++b);
// }

// let ageIgor = 39;
// let ageOleg = 27;
// const ageTotal = ageIgor + ageOleg;
// console.log(ageTotal);

// let radius = 10;
// let PI = 3.14;
// const S = PI *(Math.pow(radius, 2 ));
// console.log(S);

// let name = 'Igor';
// let age = 39;
// const group = 24;
// console.log(`Я ${name}, мне ${age} лет, я учусь на ${group} буткемпе!!!`)

// ============самостоятельный разбор ==========
// let b = 11;
// const a = b * 2;
// console.log(a);

// let age;
// const myAge = 39;
// age = myAge;
// console.log(age);

// let age;
// console.log(age);
// age = 14;
// console.log(age);

// ==== ошибка =====
// const d = 57;
// console.log(d);

// const d = 58;
// console.log(d);

// ======= обращай внимание на сиснтаксические ошибки ====
// const b = 1155;
// console.log(b);

// const age = 20;
// const number = 5.8;
// console.log(age);

// const war = (number + age)/2;
// console.log(war);

// const name = 'Mango';
// console.log(name);
// const user = 'Orange'
// console.log(name,user);

// let a;
// console.log(a);

// const b = null;
// console.log(typeof null);

// const c = 5;
// console.log(typeof c);

// const d = 'JavaScript is awesome!'
// console.log(typeof d);

// const e = false;
// console.log(typeof e);

// ========== alert and message ======

// const message = 'JavaScript is awesome';
// console.log(message);

// const name = 'Mango';
// console.log('My name is', name);
// alert(name);

// ========= promt and confirm =======

// const isComing = confirm('Piease confirm hotel reservation ');
// console.log(isComing);

// const hotelName = prompt('Please enter desired  hotel name: ');
// console.log(hotelName);

// const value = prompt('Please enter a number! ');
// console.log(typeof value );
// console.log(value);

// const x = 5;
// const y = 10;
// console.log(x + y);
// console.log(y - x);
// console.log(y / x);
// console.log(y * x);
// console.log(y % x);

// let valeu = 5;
// valeu += 25;
// console.log(valeu);

// const valueA = '5';
// console.log(valueA);
// console.log(typeof Number(valueA));

// const valueB = 'random string';
// console.log(Number (valueB));
// console.log(typeof Number(valueB));

// console.log(Number.parseInt('5px'));
// console.log(Number.parseInt('qwrre'));

// console.log(Number.parseFloat('23.89qewgdw35'));

// const validNumber = Number ('59');

// =========== готовый пример ==========

// let delivery = prompt("Укажите страну получателя");
// console.log(delivery);
// let cost;
// delivery = (delivery + "").toLowerCase();

// if (delivery === "китай") {
//   cost = 100;
//   console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`);
// } else if (delivery === "чили") {
//   cost = 250;
//   console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`);
// } else if (delivery === "австралия") {
//   cost = 170;
//   console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`);
// } else if (delivery === "индия") {
//   cost = 80;
//   console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`);
// } else if (delivery === "ямайка") {
//   cost = 120;
//   console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов`);
// } else if (delivery === "null") {
//   alert("Отменено пользователем");
// } else {
//   console.log(`В вашей стране доставка не доступна`);
// }

// ================== пример 2 ==========================

// let message;

// if (delivery === "китай") {
//   cost = 100;
//   message = `Доставка в ${delivery} будет стоить ${cost} кредитов`;
// } else if (delivery === "чили") {
//   cost = 250;
//   message = `Доставка в ${delivery} будет стоить ${cost} кредитов`;
// } else if (delivery === "австралия") {
//   cost = 170;
//   message = `Доставка в ${delivery} будет стоить ${cost} кредитов`;
// } else if (delivery === "индия") {
//   cost = 80;
//   message = `Доставка в ${delivery} будет стоить ${cost} кредитов`;
// } else if (delivery === "ямайка") {
//   cost = 120;
//   message = `Доставка в ${delivery} будет стоить ${cost} кредитов`;
// } else if (delivery === "null") {
//   message ="Отменено пользователем";
// } else {
//   message = `В вашей стране доставка не доступна`;
// }
// alert(message);

// ============= три примера =================

// let input = confirm('хотите сыграть ?');
// //console.log(input);
// let total = 0;

// while (input) {
//   console.log('loop is started');
//   input = prompt('введите число');
//   if (isNaN(input)) {
//     alert('введите число');
//     continue;
//   }
//   total = total + +input; //tottal += input;

// }
// alert(`Общая сумма чисел равна ${total}`);

// let input = confirm('хотите сыграть?');
// //console.log(input);
// let total = 0;

// while (input) {
//   console.log('Loop is started');
//   input = prompt('введите число');
//   if (isNaN(input)) {
//     alert('введите число');
//     continue;
//   }
//   total = total + +input; //total += input;

// }
// alert(`Общая сумма чисел равна ${total}`);

// let input = confirm('хотите сыграть?');
// // console.log(input);
// let total = 0;

// while (input) {
//   console.log('Loop is started');
//   input = prompt('введите число');
//   if (isNaN(input)) {
//     alert('введите число');
//     continue;
//   }
//   total = total + +input; //total += input;
// }
// alert(`Общая сумма чисел равна ${total}`);

// == task-1 ==
// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert(должна показать «Джон»).

// let admin;
// let name;
// console.log(name);
// name = "Джон";
// admin = name;
// alert(admin);

// == task-2 == //
// Завдання: Написати програму яка буде перевіряти чи рік народження користувача був високосним
// Наприклад: 2000, 2004, 2016 - високосні 1998, 2002, 1900 2100 - не високосні

// console.log(10 % 3);
// let year = prompt('введите год');
// if (year % 4 === 0) {
//   console.log('высокосный год');
// } else {
//   console.log('не высокосный' );
// }

// == task-3 == //
// Написати програму де компютер загадає число від 1 до 10 і запропонує
//користувачу вгадати його Користувач вводить свій варіант і отримує результат(Виграв чи ні)
//Вивести результат в форматі "Вітаю ви вгадали число (тут варіант компютера)" або "Ви програли,
//компютер загадав(тут варіант компютера)"

//  ================ пример округлений =================

// console.log("ceil", Math.ceil(1.1));
// console.log("ceil", Math.ceil(1.5));
// console.log("ceil", Math.ceil(1.9));

// console.log("floor", Math.floor(1.1));
// console.log("floor", Math.floor(1.5));
// console.log("floor", Math.floor(1.9));

// console.log("round", Math.round(1.1));
// console.log("round", Math.round(1.5));
// console.log("round", Math.round(1.9));
// let num = 1.945;
// console.log(typeof num.toFixed());

// let random = Math.ceil(Math.random() * (3 - 1) + 1);
// console.log(random);
// let userNumber = +prompt('введите число');
// console.log(userNumber);
// if (userNumber === NaN || userNumber === 0) {
//   console.log('введите число');
// } else {
//   if (random === userNumber) {
//     console.log('вы угадали');
//   } else {
//     console.log('не угадали');
//   }
// }
// == task-4 == //
// Написати програму яка буде знаходити суму, різницю, добуток,
//частрку двох чисел Користувач вводить 2 числа потім вводить знак операції і отримує результат
//в форматі "Сума чисел a i b = результат"(такий шаблон для кожної відповіді)

// let num1 = +prompt("введите первое число");
// let num2 = +prompt("введите второе число");
// let sign = prompt("введите математический оператор");
//    //console.log(num1, num2, sign);
// let total = 0;
// if (isNaN(num1) || isNaN(num2)) {
//   console.log("введите число");
// } else {
//   // console.log("привет");
//   if (sign === '+') {
//     total = num1 + num2;
//   } else if (sign === '-') {
//     total = num1 - num2;
//   } else if (sign === '*') {
//     total = num1 * num2;
//   } else if (sign === '/') {
//     total = num1 / num2;
//   } else {
//     console.log('введите математический оператор');
//   }
// }
// console.log(total);

// == task-5 == //
// Написати програму яка буде переводити температуру з цельсія в фаренгейти,
// або навпаки з фаренгейта в цельсії
//(0 °C × 9 / 5) + 32 = 32 °F

// let cd = 20;
// let fd = (cd * 9 / 5) + 32;
// // fd - 32 = cd * 9 / 5;
// // (100 - 32) * 5 = cd * 9;
// // 340 = cd * 9;
// // cd = 20;
// console.log(fd);
// let newfd = 68;
// let newcd = ((newfd - 32) / 9) * 5;
// console.log(newcd);

// == task-6 == //
// Написати програму яка перевіряє чи введене число потрапляє в діапазон від 55 до 99 включно

// let num = prompt('введите число');
// console.log(num);

// if (num >= 55  && num <= 99) {
// console.log('верно');
// } else {
//   console.log(' не верно ');
// }

// if (num > 30 && num < 70) {
//   console.log(`данное число ${num} в диапазоне от 30 до 70`);
// } else {
//   console.log(`данное число не прошло валидацию`);
// }

// if (num > 5 && num <= 15) {
//   console.log(`какое-то число`);
// } else {
//   console.log(`число не прошло валидацию`);
// }

// == task-7 == //
// Написати програму де користувач вводить 3 числа, після вводу всіх трьох чисел йому на екрані
//показується найбільше з них.Додатково перевіряти чи це взагалі числа

// let num1 = +prompt("введите число");
// let num2 = +prompt("введите число");
// let num3 = +prompt("введите число");

// console.log(Math.max(num1, num2, num3));

// == task-8 == // переписать на switch
// Написати програму яка переведе введену оцінку студента до болонського
//формату 89 - 100 це A 75 - 88 це В 60 - 74 це С 45 - 59 це D 20 - 44 це Е до 20 це F

// let sign = prompt('введите количество баллов');
// if (sign >= 89 && sign <= 100) {
//   console.log('A');
// } else if (sign >= 75 && sign <= 88) {
//   console.log('B');
// } else if (sign >= 60 && sign <= 74) {
//   console.log('C');
// } else if (sign >= 45 && sign <= 59) {
//   console.log('D');
// } else if (sign >= 20 && sign <= 44) {
//   console.log('E');
// } else if (sign < 20) {
//   console.log('F');
// } else {
//   console.log('введите число');
// }

// == task-9 == //
// Написати програму яка отримає від користувача число (кількість хвилин)
//і виведе на екран строку в форматі години і хвилини
//Приклад 70 покаже 1: 10 450 покаже 7: 30 1441 покаже 24: 1

// let num = 1441;
// let min = num % 60;
// let hour = ((num - min) / 60);
// console.log(hour);
// console.log(`${hour}: ${min}`);

// num = 450;
// min = num % 60;
// hour = ((num - min) / 60);
// console.log(hour);
// console.log(`${hour}: ${min}`);

// num = 70;
// min = num % 60;
// hour = ((num - min) / 60);
// console.log(hour);
// console.log(`${hour}: ${min}`);

// == task-10 == //
// Написати гру камінь ножиці папір. Де компютер загадує своє значення
//потім користувач вводить свій варіант і далі ми бачимо результат на екрані хто виграв

// const userChoise = prompt(`'enter 'paper', 'rock', 'Scissors'`);
// console.log(userChoise);
// let random = Math.random();
// let compChoise;
// if (random <= 0.34) {
//   compChoise = 'paper';
// } else if (random >= 0.35 && random <= 0.67) {
//   compChoise = 'rock';
// } else if (random > 0.68) {
//   console.log('scissors');
// }
// console.log(compChoise);

// if (compChoise === userChoise) {
//   console.log('draw');
// } else if (compChoise === 'paper' && userChoise === 'rock') {
//   console.log('comp win');
// } else if (compChoise === 'paper' && userChoise === 'scissors') {
//   console.log('user win');
// } else if (compChoise === 'rock' && userChoise === 'scissors') {
//   console.log('comp win');
// } else if (compChoise === 'rock' && userChoise === 'paper') {
//   console.log('user win');
// } else if (compChoise === 'scissors' && userChoise === 'rock') {
//   console.log('user win');
// } else if (compChoise === 'scissos' && userChoise === 'paper') {
//   console.log('comp win');
// } else {
//   console.log(`your choise wrong`);
// }

// ======================== hw-1 ===========================================

// ---------------- task 1 ------------------------------

// const name = 'Генератор защитного поля';
// //let price = 1000;
// //console.log(`Выбран ${name}, цена за единицу ${price}, кредитов`);
// //let price = 2000;

// console.log(`Выбран ${name}, цена за единицу ${price}, кредитов`);

// let age = 25;
// console.log(age);
// const updateAge = function (a) {
//   a += 1;
//   return a
// }
// age = updateAge(age)
// console.log(age);
// -------------------- task 2 --------------------------------

// const total = 100;
// let ordered = 50;

// if (ordered > total) {
//   console.log('На складе не достаточно товаров!');
// } else {
//   console.log('Закз оформлен, с вами свяжется менеджер');
// }

// ordered = 20;
// if ( ordered > total) {
//   console.log('На складе недостаточно товаров!');
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }

// ordered = 130;
// if (ordered > total) {
//   console.log("На складе недостаточно товаров!");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }

// ------------------------ task 3 ----------------------------

// const ADMIN_PASSWORD = "jqueryismyjam";
// let message = prompt('Введите пароль')

// if (message === ADMIN_PASSWORD) {
//   console.log('Добро пожаловать');
// } else if(!message){
//   console.log("Отменено пользователем!");
// } else {
//   console.log("Доступ запрещен, неверный пароль!");
// }

// ---------------------- task 4 -----------------------------

// const credits = 23580;
// const pricePerDroid = 3000;

// let quantityDroid = prompt('Количество дроидов!');
// let totalPrice = quantityDroid * pricePerDroid;
// //console.log(typeof quantityDroid);
// console.log(quantityDroid);
// console.log(totalPrice);

// //console.log(isNaN(quantityDroid));
// if (quantityDroid === null) {
//  // console.log("Отменено пользователем!");
// } else if (isNaN(quantityDroid) || quantityDroid === '') {
//   console.log('Укажите число!');
// } else {
//   if (credits < totalPrice) {
//     console.log("Недостаточно средств на счету!");
//   } else {
// console.log(`вы купили ${quantityDroid} дроидов , на счету осталось ${credits - totalPrice} кредитов! `);
//   }
// };

// -------------------------------- task 5 -----------------------------

// let delivery = prompt("Введите страну получателя");
// console.log(delivery);
// let cost;
// delivery = (delivery + '').toLowerCase();

// switch (delivery) {
//   case 'китай':
//     cost = 100;
//     console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов!`);
//     break;
//   case 'чили':
//     cost = 250;
//     console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов!`);
//     break;
//   case 'австралия':
//     cost = 170;
//     console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов!`);
//     break;
//   case 'индия':
//     cost = 80;
//     console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов!`);
//     break;
//   case 'индия':
//     cost = 120;
//     console.log(`Доставка в ${delivery} будет стоить ${cost} кредитов!`);
//     break;

//   default:
//     console.log(`В вашей стране доставка не доступна!`);
// }

// -------------------- task 6 -------------------------------

// let input = confirm('хотите сыграть?');
// //console.log(input);
// let total = 0;

// while (input) {
//   console.log('Loop is started!');
//   input = prompt('введите число');
//   if (isNaN(input)) {
//     alert("введите число");
//     continue;

//   }
//   total = total + + input;

// }
//   alert(`Общая сумма чисел равна ${total}`);


// ====================== hw 2 ==================================

// ------------------------ task 1 -----------------------------------

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1){
//     console.log(`${i+1} - ${array[i]}`);
//   }

// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ------------------------ task 2 --------------------------------

// const calculateEngravingPrice = function(message, pricePerWord) {
//   let line = message.split(' ');
//   console.log(line);

//   let word = line.length;
//   console.log(word);

//   let sum = pricePerWord * word;
//   return sum;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120


// ----------------------------- task 3 -------------------------------

// const findLongestWord = function (string) {
//    console.log(string);
//   let arrayWord = string.split(" ");

//   let longestWord = arrayWord[0];
//   let wordLength = arrayWord[0].length;
//   for (let i = 1; i < arrayWord.length; i++) {
//      console.log(arrayWord[i]);
//      console.log(arrayWord[i].length);
//     if (wordLength < arrayWord[i].length) {
//       wordLength = arrayWord[i].length;
//        console.log(wordLength);
//       longestWord = arrayWord[i];
//        console.log(longestWord);
//     }
//   }
//   return longestWord;
// };
// const a = function (string) {
//   console.log(string.split(' '));
//   let b = string.split(' ');
//   let name = b[0];
//   let l = b[0].length
//   for (let i = 1; i < b.length; i += 1){
//     console.log(b[i]);
//     if (l < b[i].length) {
//       l = b[i].length;
//       name = b[i];
//       }
//   }

// }
// a('Mango foo');
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'


// --------------------------task 4 --------------------------------

// const formatString = function(string) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка
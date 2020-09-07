// ============================= МАССИВЫ ================================

// let str = 'AVA';
// let str2 = str.split('').reverse().join('');
// console.log(str === str2);

// let arr = [1, 2, 3]
// let newArr = arr.slice();

// console.log(newArr);

// let arr = [1, 2, 3]
// arr.splice(1, 0, 'hello');
// console.log(arr);

// ====================================================
//1)

// let styles = ["Джаз", "Блюз"];
// console.log(styles);

// styles.push("Рок-н-ролл");
// console.log(styles);
// let arr = (Math.round(styles.length / 2)-1);
// console.log(arr);

// styles.splice(arr, 1, "Классика");
// console.log(styles.shift());
// console.log(styles);

// styles.unshift("Рэп", "Регги");
// console.log(styles);

// доделать задачу!!!!!

// ===================== ФУНКЦИИ ===============================

// const fn = function (a, b, c, d) {

//   console.log(a, b, c, d);

// }
// fn(1, 2, 3, 4);

// console.log(fn());

// const fn = function (a = 0, b = 0, c = 0, d = 0) {

//   console.log(a, b, c, d);
// }
//    fn(1);

// ====================================================

// console.log(add(1, 2, 3))

// function add(a, b, c) {
//   return a + b + c;
// }

// const showMeArguments = function (...args) {
//   console.log(args);
// }
// showMeArguments('Thor', 'Black Window', 'Ant Man');

// =============================================================

// const add = (...arg) => {
//   for (let el of arg) {
//     console.log(el);
//   }
//   return 1
// }
// console.log(add(1, 2, 3));

// =======================================================================

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
//   Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
//   Сделайте два варианта функции checkAge:
//   Используя оператор ?
//   Используя оператор

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//   }
// }
// console.log(checkAge);

// const age = 19;
// const type = age >= 18 ? age >= 18 : age < 18 ${`Родители разрешили ?`};
// console.log(age);

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type);

// #6
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// #7
// а теперь максимальное число если функция принимает неограниченое к-во аргументов
// const max = function () {}

// ======================== HW-task 1 ==================================================

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i = i + 1) {
//     console.log(`${i} - ${array[i]}`);
//   }
// };

// logItems(["Mango", "Polly", "Ajax", "Lux", "Jay", "Kong"]);

// logItems([5, 10, 15, 20, 25, 30, 40, 45, 50]);

// logItems([100, `CSS`, `JS`, [`REACT`, `ANGULAR`]]);

// ====================================== HW-task 2 ========================================

// const calculateEngravingPrice = function (message, pricePerWord) {
//   let line = message.split(' ');
//   // console.log(line);

//   let word = line.length;
//   // console.log(word);

//   let summ = pricePerWord * word;
//   return summ;
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

// ======================= HW-task 3 =======================================

// const findLongestWord = function (string) {
//   let arrayWord = string.split(' ');
//  // console.log(arrayWord);
//   let longestWord = '';
//   // console.log(arrayWord);
//   // let longestWord = arrayWord[0];
//   // let wordLength = arrayWord[0].length;
//   // for (let i = 1; i < arrayWord.length; i++){
//   //   // console.log(arrayWord[i]);
//   //   // console.log(arrayWord[i].length);
//   //   if (wordLength < arrayWord[i].length) {
//   //     wordLength = arrayWord[i].length
//   //     // console.log(wordLength);
//   //     longestWord = arrayWord[i];
//   //     // console.log(longestWord);
//   //   }
//   // }
//   // return longestWord;

//   for (let word of arrayWord) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//    }
//   }
//   return longestWord
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// =+++++++++++++++++++++++++++++++++ dop ++++++++++++++++++++++++++++++++++++++++++

// let input;
// let total = 0;

// while (true) {
//   let input = prompt('Введите число');

//   if (input === null) {
//     console.log('Отменено пользователем!');
//     break;
//   }

//   input = Number(input);

//   if (isNaN(input)) {
//     alert('Было введено не число, попробуйте еще раз');
//     continue;
//   }

//   total += input;
// }

// alert(`Общая сумма чисел равна ${total}`);

// ======================== HW-task 4 ================================

// const formatString = function (string) {
//   // console.log(string.length);
//   // if (string.length <= 40) {
//   //   return string;
//   // } else {
//   //   return string = string.slice(0, 40) + '...'

//   // }
//   if (string.length <= 40) return string;
//    return `${string.substr(0, 40)}...`;
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

// ====================== HW-task 5 =====================

// const checkForSpam = function (message) {
//   message = message.toLowerCase()
//  //  console.log(message.indexOf('spam'));
//     //  1-й вариант
//   // if (message.includes('spam') || message.includes('sale')) return true;

//       // 2-й вариант
//   // if (message.indexOf('spam') >= 0 || message.indexOf('sale') >= 0) return true;
//   // return false;

//   // 3-й вариант
//   return (message.includes('spam') || message.includes('sale')) ? true :  false;

// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// ======================= HW-6 =================================

// let input = ' ';
// const numbers = [];
// let total = 0;

// while (input) {
//   input = prompt('Введите число');
// // console.log(input);
//   if (input === null) {
//     alert('Отменено пользователем');
// //    console.log(input);

//   } else {
//     input = Number(input);
//     numbers.push(input);
//     if (!isNaN(input));
//     total += input;
//   }

// }
// console.log(numbers);
// for (let number of numbers) {
//   total += number;

// }
// for (let i = 0; i < numbers.length; i++) {
//   total += numbers[i];
// }
// console.log(numbers);
// console.log(`Общая сумма чисел равна ${total}`);

// ======================== HW-task 7 =============================================

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) return true;
  return false;
};

const isLoginUnique = function (allLogins, login) {
  for (let loginElem of allLogins) {
    if (loginElem === login) return false;
  }
  return true;
};

const addLogin = function (allLogins, login) {
  // if (!isLoginValid(login)) {
  //   return "Ошибка! Логин должен быть от 4 до 16 символов";
  // } else {
  //   if (!isLoginUnique(allLogins,login)) return "Такой логин уже используется!";
  //     allLogins.push(login);
  //     return "Логин успешно добавлен!";
  // }
  if (!isLoginValid(login)) return "Ошибка! Логин должен быть от 4 до 16 символов";
  if (!isLoginUnique(allLogins, login)) return "Такой логин уже используется!";
  allLogins.push(login);
  return "Логин успешно добавлен!";
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

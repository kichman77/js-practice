// ------------------------- module - 2 -------------------------------

// ========================== task - 1 ==================================

const logItems = function (array) {
  for (let i = 0; i < array.length; i++){
    console.log(`${i+1} - ${array[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// ============================== task - 2 ===================================

// const calculateEngravingPrice = function (message, pricePerWord) {
//   // разбиваем строку на массив слов, значение длины полученного
//   // массива умножаем на цену из параметра
//   return message.split(" ").length * pricePerWord;
// };

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

// ============================== task - 3 ===================================

// const findLongestWord = function(string) {
//   // разбиваем строку на массив слов
//   const array = string.split(' ')
//   // console.log(array);
//   // запишем значение и длинну первого элемента массива как начальные значения
//   let word = array[0];
//   let long = array[0].length
//   // console.log(word,long);
//   // переберем массив начиная со следующего элемента после записанного в начальные значения
//   for (let i = 1; i < array.length; i++){
//     // console.log(array[i]);
//     // на каждой итерации сравниваем длинну элемента на текущей итерации с длинной элемента записанного вначальное значение
//     if (array[i].length > long) {
//       // если длина итерируемого элемента > длины записанного в начальное, то перезаписываем это значение вместо начального
//       long = array[i].length;
//       // и само значение большего элемента запишем в переменную вместо начального
//       word = array[i];
//       // console.log(long,word);
//     }
//   }
//   return (word);
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

//  console.log(findLongestWord('Google do a roll')); // 'Google'

//  console.log(findLongestWord('May the force be with you')); // 'force'

// ============================== task - 4 ===================================

// const formatString = function (string) {
//   console.log(string.length);
//   if (string.length <= 40) return string;
//   return string.slice(0, 41) + "...";
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."));
// // вернется форматированная строка

// ============================== task - 5 ===================================

// const checkForSpam = function (message) {
//   message = message.toLowerCase().split(" ");
//   console.log(message);
//   if (message.includes("sale") || message.includes("spam") || message.includes("[spam]") || message.includes("[sale]"))
//     return true;
//   return false;
// };

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// ============================== task - 6 ===================================

// let input;
// const numbers = [];
// let total = 0;

// do {
//   //console.log(input)
//   input = +prompt('Введите число')
//   if (!input == false|| !input===NaN) {
//     numbers.push(input)
//     // console.log(input, numbers);
//   }
// } while (input)
// // console.log(numbers);
// if (numbers.length > 0) {
//   for (let num of numbers) {
//     total += num
//   }
// }
// console.log(total);

// ============================== task - 7 ===================================

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login) {
//   if (login.length >= 4 && login.length <= 16) return true;
//   return false;
// };
// const isLoginUnique = function (allLogins, login) {
//   if (allLogins.includes(login)) return false;
//   return true;
// };
// const addLogin = function (allLogins, login) {
//   if (!isLoginValid(login)) return "Ошибка! Логин должен быть от 4 до 16 символов";
//   if (!isLoginUnique(allLogins, login)) return "Такой логин уже используется!";
//   allLogins.push(login);
//   return "Логин успешно добавлен!";
// };
// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
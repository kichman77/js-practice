// ============== 1 ====================================

// Создай массив fruits с элементами: яблоки, бананы, апельсины
// Выведи массив в консоль
// Выведи в консоль элемент массива с индексом 1
// Измени значение этого элемента на киви
// Выведи массив в консоль и убедись, что элемент изменился
// Добавь следующими после элемента "апельсины", такие элементы: "груши", "виноград", "персики"
// Выведи массив в консоль и убедись, что элементы добавлены

// let fruits = ["apples", "bananas", "orange"];
// console.log(fruits);
// console.log(fruits[1]);
// fruits[1] = "kiwi";
// console.log(fruits);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits[3] = 'pears';
// fruits[4] = 'grapes';
// fruits[5] = 'peaches';
// console.log(fruits);

// ============== 2 ====================================

// Создай массив test1, который содержит результаты тестов студентов:

// 4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12

// С помощью цикла со счетчиком for выведи в консоль только те значения, которые могут быть зачтены, т.е. они должны быть больше 12, это значение должно храниться в переменной score1

// const test1 = [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12];
// console.log(test1);
// let score1 = 12;
// for (let i = 0; i < test1.length; i++) {
//  // console.log(test1[i]);
//   if (test1[i] < score1) {
//     continue;
//   }
//   console.log(test1[i]);
// }

// ============== 3 ====================================

// Создай массив test2, который содержит результаты тестов студентов:

// 17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20

// С помощью цикла со счетчиком for выведи в консоль только те значения, которые могут быть зачтены, т.е. они должны быть больше 15, это значение должно храниться в переменной score2
// const test2 = [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20];
// console.log(test2);
// let score2 = 15;
// for (let i = 0; i < test2.length; i++){
//  // console.log(test2[i]);
//   if (test2[i] < score2) {
//     continue
//   }
//   console.log(test2[i]);
// }
// ============== 4 ====================================

// Создай массив test3, который содержит результаты тестов студентов:

// 20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22

// С помощью цикла со счетчиком for выведи в консоль только те значения, которые могут быть зачтены, т.е. они должны быть больше 16, это значение должно храниться в переменной score3
// const test3 = [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22];
// console.log(test3);
// const score3 = 16;
// for (let i = 0; i < test3.length; i++){
// //  console.log(test3[i]);
//   if (test3[i] < score3) {
//     continue
//   }
//   console.log(test3[i]);
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ============== 5 ====================================

// Создай многомерный массив tests, который содержит 3 вложенных массива, с результатами трех тестов студентов:

// первый: 4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12

// второй: 17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20

// третий: 20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22

// Выведи в консоль все три вложенных массива с помощью цикла for

// const test = [
//   [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12],
//   [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20],
//   [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22],
// ];
// for (let i = 0; i < test.length; i++){
//   console.log(test[i]);
//   for (let k = 0; k < test[i].length; k++){
//     console.log(test[i][k]);
//   }
// }
// ----------------------------------------------------------------------------
// ============== 1 ===============================================

// Создай массив authors с именами авторов:

// William Shakespeare, Guy de Maupassant, Dante Alighieri, Mikhail Bulgakov, Albert Camus, Erich Maria Remarque

// С помощью методов массива, добавь в конец массива authors три элемента со значениями:

// Honore de Balzac, Miguel de Cervantes, Anton Chekhov

// а в начало массива, три элемента со значениями:

// Charles Dickens, Edgar Allan Poe, Gabriel Garcia Marquez

// Выведи обновленный массив в консоль. В комментарии после команды консоль укажи количество элементов измененного массива
// const authors = [
//   "William Shakespeare",
//   "Guy de Maupassant",
//   "Dante Alighieri",
//   "Mikhail Bulgakov",
//   "Albert Camus ",
//   "Erich Maria Remarque",
// ];
// console.log(authors);
// authors.push("Honore de Balzac", "Miguel de Cervantes", "Anton Chekhov");
// console.log(authors);
// authors.unshift("Charles Dickens", "Edgar Allan Poe", "Gabriel Garcia Marquez");
// console.log(authors);
// for (let i = 0; i < authors.length; i++) {
//   console.log(authors[i]);
// }

// ============== 2 ===============================================

// Создай массив scores с элементами:

// 12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42

// с помощью методов массива shift() и pop(), удали первые два и последние три элемента

// Выведи результат в консоль

// const scores = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];
// //for (let i = 0; i < scores.length; i++){
// console.log(scores);
// scores.shift();
// scores.shift();
// scores.pop();
// scores.pop();
// scores.pop();
// console.log(scores);

// ============== 3 ===============================================

// Создай массив results с элементами:

// 12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42

// с помощью метода splice(), удали первые два и последние три элемента, записав удаленные элементы

// в отдельные массивы removeFromStart и removeFromEnd

// Выведи в консоль все массивы
// const results = [12, 32, 15, 17, 3, 4, 98, 67, 532, 611, 7, 100, 42];
// console.log(results);
// const removeFromStart = results.splice(0, 2);
// console.log(removeFromStart);
// const removeFromEnd = results.splice(-3);
// console.log(removeFromEnd);
// console.log(results);

// // ============== 4 ===============================================

// // Создай массив partOfResults и скопируй в него элементы от 3 до 532 включительно

// // из измененного массива results из задания 3 (т.е. все задание 3 и массив results должны быть раскомментированы)
// const partOfResults = results.slice(2, 7);

// console.log(partOfResults);

// // ============== 5 ===============================================
// const doubleResults = results.slice();
// console.log(doubleResults);
// Создай массив doubleResults и скопируй в него все элементы из измененного массива results из задания 3
// ============== 6 ===============================================

// Перебери массив doubleResults из задания 5

// Четные числа из массива запиши в новый массив evenResults, а

// Нечетные - в oddResults

// В обратной последовательности в обоих случаях

// Выведи в консоль массивы evenResults и oddResults
// const evenResults = [];
// const oddResults = [];

// for (let num of doubleResults) {
//   //console.log(num);
//   if (num % 2 === 0) {
// evenResults.unshift(num)
//   } else {
//     oddResults.unshift(num)
//   }
// }
// console.log(evenResults);
// console.log(oddResults);
// ============== 7 ===============================================

// Объедините массивы oddResults и evenResults из задания 6, записав их в новый массив AllResults

// Перебери новый массив AllResults и выбери только те элементы массива, которые содержат 1 и запиши эти элементы в новый массив includesOne

// "обрати внимание, что массив includesOne должен содержать элемента с типом number, а не string!
// const AllResults = oddResults.concat(evenResults);
// console.log(AllResults);
// const includesOne = [];
// for (let num of AllResults) {
//   console.log(num);
//   if (String(num).includes(1)) {
// includesOne.push(num)
//   }
// }
// console.log(includesOne);
// 5
// ============== 1 ===========================
// +++++++++++++++++++++++++++++++++++++++++++++++++
// Напиши функцию toPassTests как FUNCTION EXPRESSION
// (функциональное выражение через переменную)
// const toPassTests = function () {
//   alert (`Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!`);
// }
// toPassTests();
// и как ARROW FUNCTION (стрелочная функция),
//  const toPassTests = () => alert(`Прежде, чем выполнить это задание у тебя должно быть сдано пять тестов!`);
// toPassTests();

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

// const checkAge = function () {
//   let age = prompt();
//   if (age != null) {
//     if (+age >= 18) {
//       alert("Here you are! You are got access!");
//     } else {
//       alert("Sorry, you can't to get access");

//     }
//   } else {
//     alert('Cancel by user!!!')
//   }
// }
// checkAge();
// let age = prompt();
// const checkAge = () => {
//   age >= 18 ? alert("Here you are! You are got access!") : alert("Sorry, you can't to get access");
// };
// checkAge();
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
// const toGetCost = function (message, pricePerWord) {
//  // console.log(message);
//  // console.log(pricePerWord);
//   const word = message.split(' ');
//  // console.log(word);
//   return word.length * pricePerWord;
// };
// const toGetCost = (message, pricePerWord) => message.split(" ").length * pricePerWord;
//   // ARROW FUNCTION
//   // тут объяви функцию как ARROW FUNCTION
//   // вызов функции
//   // используй эти консоли для проверки своего кода
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
// const logItems = function (array) {
//  // console.log(array);
//   for (let i = 0; i < array.length; i++){
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(array);

// // Вызовы функции для проверки кода
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
// const checkTheWord = function (message) {
//  // console.log(message);
//   if (message.includes('lose') || message.includes('not')) return true;
//   return false;
// }
// sole.log(checkTheWord("And lose the name of action")); // true
// ============== 6 ===========================

// Напиши функцию countTestsScore() как FUNCTION EXPRESSION,
// принимающую при вызове все аргументы в виде псевдомассива arguments,
// Функция суммирует все полученные аргументы, независимо от их количества при вызове.
// в переменную totalSum и выводит это значение в консоль
// FUNCTION EXPRESSION
// тут объяви функцию как FUNCTION EXPRESSION
//
// ============== 7 ===========================

// Напиши функцию myNewArrowFunction() как ARROW FUNCTION,
// принимающую при вызове все аргументы с помощью ...rest ,
// и выводит массив этих аргументов в консоль
// ARROW FUNCTION
// тут объяви функцию как ARROW FUNCTION
// const myNewArrowFunction = (...args) => {
//   console.log(args);
// }
// // Вызовы функции для проверки кода
// myNewArrowFunction(1, 2, 3); // укажи результат
// myNewArrowFunction(100, 200, 300, 400, 500); // укажи результат
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++"); //укажи результат;
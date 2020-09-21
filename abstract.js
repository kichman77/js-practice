

//======================================== ЦИКЛЫ =============================================================

// Цикл - управляющая конструкция в высокоуровневых языках програмирования, предназначенная для организации многократного исполнения набора инструкций.

// Тело цикла - последовательность инструкций для многократного исполнения.

//   Итерация - единичное выполнение цикла.

// Условие выхода - выражение, определяющее будет выполняться цикл или завершится.

// Счетчик - переменная, хранящая текущий номер итерации.



// ------------------------------------Цикл while -------------------------------

//   Цикл с предусловием - цикл, который выполняется пока истинно некоторое условие, указанное перед его началом.

//   Инструкция - while создает цикл, котрый выполняет блок кода пока условие проверки оценивается как true.

//   while(expression) {
//   код, тело цикла (statment)
//   }


// let counter = 0;

// while (counter < 10) {
//   console.log(`counter:` , counter);
//   counter += 1;
// }


// let clientsCounter = 18;
// const maxClients = 25;


// while (clientsCounter < maxClients) {
//   console.log(clientsCounter);
//   clientsCounter += 1;
// }


// // ============================ модуль 7 =========================

// //                         навигация по DOM

// elem.parentNode - выберет родителя элемента

// elem.childNodes - псевдомассив хранит все дочерние элементы, включая текстовые;

// elem.children - псевдомасив, хранит только дочерние узлы - элементы, соответствующие тегам;

// elem.firstChild - выберт первый дочерний элемент внутри elem, включая текстовые узлы;

// elem.firstElementChild - выберет первый дочерний узел

// elem.lastChild - выберет последний дочерний узел

// //     2 основных метода поиска по DOM

// elem.querySelector(selector)


// elem.querySelectorAll(selector)


// //      свойства

// hidden - контролируе видимость элемента

// value - текущее текстовое значение input, select, textarea

// checked - хранит состояние чекбокса

// name - указанное в HTML имя

// src - путь к Image


// Node.textContent

// elem.textContent - содержит текстовый контент(всегда текст!!!)





























// =============================== Функции обратного вызова ===================


// Функция высшего порядка - функция принимающая в качестве параметров другие функции или возвращающая функцию как результат.

// Функция обратного вызова(callback) - это функция, которая прередается другой фуннкции вкачестве аргумента и та, в свою очередь, вызывает переданную функцию.

// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);

// ----------------- абстракция --------------------------

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// const repeatLog = function (n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// };

// repeatLog(5);


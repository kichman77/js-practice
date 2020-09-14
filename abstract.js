

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
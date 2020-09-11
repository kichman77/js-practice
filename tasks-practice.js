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

// ---------------------------- создание массива ----------------------------

// let a = function (a, b, c, d, e) {
//   const array = Array.from(arguments);
//   return console.log(array);

// }
// a(1, 2, 3, 4, 5)

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




















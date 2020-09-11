// let a = function (b) {
//   console.log(a);
//   console.log(b);
// }
// a(58)

// const animals = function (str, n) {

//   let i = 0;
//   while(i < n){
//     i = i + 1;
//     console.log(`name ${str}, ${i}`);
//   }
// }
// animals('lion', 5)

// -------------------------------------------------

// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log('Logging value: ', value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// -----------------------------------------------------------

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

// const fruitsWithQuantity1 = filter(fruits, fruit => fruit.name === 'bananas');
// console.log(fruitsWithQuantity1);

// --------------------------------------------------------------------------------

// const filter = function (array, test) {
//   let worker = [];

//   for (const element of array) {
//     const badest = test(element);

//     if (!badest) {
//       worker.push(element);
//     }

//   }
//   return worker;
// };

// const community = [
// { name: 'John', salary: 200, isActiveWorker: true },
// { name: 'Derek', salary: 150, isActiveWorker: false },
// { name: 'Anna', salary: 100, isActiveWorker: true },
// { name: 'Mariia', salary: 50, isActiveWorker: false },
// { name: 'Tony', salary: 100, isActiveWorker: true },
//   ];

// const bestWorker = filter(community, element => element.salary > 100 && element.isActiveWorker)
// console.log(bestWorker);

// -------------------------------------------------------------------------------

// const counter = function () {
//   let count = 0;

//   const onIncerment = function () {
//     count++;
//     console.log(count);
//   };

//   const onDecrement = function () {
//     count--;
//     console.log(count);
//   };

//   return { onIncerment, onDecrement };
// };

// let counter1 = counter();
// counter1.onIncerment();
// counter1.onIncerment();
// counter1.onIncerment();


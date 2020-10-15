
// // ----------------------------- task - 1 -------------------------------------------

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// console.log(user);
// user.hobby = 'skydiving';
// user.premium = false;
// console.log(user);

// let keys = (Object.keys(user));
// console.log(keys);

// for (let key of keys) {
//   console.log(`${key}: ${user[key]}`);
// };

// // ---------------------------- task 2 -------------------------------------

// const countProps = function (obj) {
//   const array = Object.keys(obj);
//   // console.log(array);
//   const array2 = Object.values(obj);
//   // console.log(array2);
//    return array.length, array2.length

// };
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// ------------------ task 3 -------------------------------

// const findBestEmployee = function (employees) {
//   const array = Object.entries(employees);
//   // console.log(array);

//   let bestName = array[0][0];
//   let bestScore = array[0][1];
// //  console.log(bestName, bestScore);
//   for (let i = 1; i < array.length; i += 1) {
//    // console.log(array[i]);
//     const innerArray = array[i];
//    // console.log(innerArray);
//     let name = innerArray[0];
//    // console.log(name);
//     let score = innerArray[1];
//    // console.log(score);
//     if (bestScore < score) {
//       bestScore = score;
//       bestName = name;
//      // console.log(bestScore, bestName);
//     }
//   }
//   return bestName;
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// ------------------- task 4 -----------------------------

// const countTotalSalary = function (employees) {
//  // const arr = Object.values(employees);
//  // console.log(arr);
//   let total = 0;
//   for (let elem of Object.values(employees)) {
//     total += elem;
//   }
//   return total
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// -------------------------------- task 5 -----------------------------

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   let array = [];
//   for (let obj of arr) {
//     // console.log(obj);
//     for (let key in obj) {
//     //  console.log(key);
//       if (key === prop) {
//     //    console.log(obj[key]);
//         array.push(obj[key]);
//       }
//     }
//   }
//   return array
// };
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []

// ---------------------------- task 6 ---------------------------------

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProducts, productName) {
//  // console.log(allProducts, productName);

//   for (let obj of allProducts) {
//   // console.log(obj);
//     for (let key in obj) {
//     //  console.log(key);
//       if (obj[key] === productName) {
//        // console.log(obj.price * obj.quantity);
//         return (obj.price * obj.quantity);
//       }
//     }
//   }
// };
// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// ----------------------- task 7 ------------------------------
// //  Типов транзацкий всего два.
// //  Можно положить либо снять деньги со счета.

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };
// //  Каждая транзакция это объект со свойствами: id, type и amount
// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   //  Метод создает и возвращает объект транзакции.
//   //  Принимает сумму и тип транзакции.

//   createTransaction(amount, type) {
//     let id = this.transactions.length + 1;
//     //  console.log(id);
//     const transaction = { id: id, amount: amount, type: type };
//     return transaction;
//   },
//   //  Метод отвечающий за добавление суммы к балансу.
//   //  Принимает сумму танзакции.
//   //  Вызывает createTransaction для создания объекта транзакции
//   //  после чего добавляет его в историю транзакций

//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//     return (this.balance += amount);
//   },
//   //  Метод отвечающий за снятие суммы с баланса.
//   //  Принимает сумму танзакции.
//   //  Вызывает createTransaction для создания объекта транзакции
//   //  после чего добавляет его в историю транзакций.
//   //  Если amount больше чем текущий баланс, выводи сообщение
//   //  о том, что снятие такой суммы не возможно, недостаточно средств.
//   withdraw(amount) {
//     if (this.balance >= amount) {
//       const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//       this.transactions.push(transaction);
//       return (this.balance -= amount);
//     }
//     return "не достаточно средств";
//   },
//     // Метод возвращает текущий баланс
//   getBalance() {
//     return this.balance;
//   },
//   //  Метод ищет и возвращает объект транзации по id
//   getTransactionDetails(id) {
//     for (let elem of this.transactions) {
//       //  console.log(elem);
//       if (elem.id === id) return elem;
//     }
//     return ("такой транзакции нет");
//   },
//   //   Метод возвращает количество средств
//   //   определенного типа транзакции из всей истории транзакций
//   getTransactionTotal(type) {
//     let total = 0;
//     for (let elem of this.transactions) {
//       if (elem.type === type) {
//         total  += elem.amount;
//       }
//     }
//     return total
//   },
// };
// console.log(account.deposit(4000));
// console.log(account.balance);
// console.log(account.deposit(3000));
// console.log(account.balance);
// console.log(account.withdraw(2000));
// console.log(account.getBalance());
// console.log(account.transactions);
// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionDetails(4));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

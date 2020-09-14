// const obj = {
//   a: function () {
//     console.log(this);
//   }
// }
// obj.a()

// -------------------------------
// const hotel1 = {
//   name: 'Rixos',
//   stars: '5',
//   capasity: 300
// };

// const hotel2 = {
//   name: "Jazz",
//   stars: '5',
//   capasity: 200,
// };

// const hotel3 = {
//   name: "Dnepr",
//   stars: '2+',
//   capasity: 5000,
// };

// const grettingClients = function (userName) {
//   console.log(`Добро пожаловать!  рады приветсвовать вас в ${name} `);
// }
// grettingClients();
// //  ------- не законченный пример ---------

// -------------------------------------

// let obj, method;
// obj = {
//   go: function() { console.log(this) }
// };
// // obj.go();
// // (obj.go)();
// // (method = obj.go)();
// // (obj.go || obj.stop)();
// // console.log(obj.go || obj.stop)

// -------------------------------------------

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;

//   },
//   showStep: function() { // показывает текущую ступеньку
//     console.log(this.step);
//     return this;

//   }
// };
// // Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// // Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// ladder.up().up().up().down().showStep(); // 2

// ---------------------------------------------------
// let filmstory = [];
// const makeFilms = function (actoreName) {

//   return function (movie) {
//     console.log(`${actoreName} is plaing on film - ${movie}`);
//     filmstory.push(movie);

//   }
// }
// const fix = makeFilms("Mickey Mouse");
// const fix1 = makeFilms("Woody Woodbakker");

// fix('film');
// fix("bad mouse");
// console.log(filmstory);
// fix1('Кривой дятел!');
// fix1("Косой глаз!");
// -----------------------------------------------------------
// ============================ hw - 4 ================================
// --------------------------- task - 1 ---------------------------

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// ---------------------------- task - 2 ---------------------------------

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// console.log(this);
// invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// -----------------------------------------------------------------------

// const user = {
//   name: "Sasha",
//   age: 31,
//   phone: 80660000000,
//   email: "aa@BhxBrowser.com",
//   toShowProps() {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.phone);
//     console.log(this.email);
//   },
// };
// const user2 = {
//   name: "Kostya",
// };
// const user3 = {
//   name: "Zaharia",
//   age: 102,
//   toUpdateAge(value) {
//     return (this.age = value);
//   },
// };
// // user.toShowProps()
// const example = function (callback, val) {
//   return callback(val);
// };
// example(user.toShowProps.bind(user));
// // console.log(this);
// example(user.toShowProps.bind(user2));
// console.log(example(user3.toUpdateAge.bind(user), 20));

// ----------------------------------------------------------------

// const toGetResult = function(callback,...value){
//   return callback(...value)
// }
// function toGetSum (a,b,c){
//   return a + b + c
// }
// function toGetMultyply(x,y){
//   return x * y
// }
// toGetResult((val) => {console.log(val%5)}, 20);
// console.log(toGetResult(toGetSum, 21, 12, 2));
// // function sum (a,b) {
//   return a+b
// }
// function div (a,b) {
//   return a/b
// }
// function sub (a,b) {
//   return a-b
// }
// function mult (a,b) {
//   return a*b
// }
// function calc(a,b,operator){
//   return operator(a,b)
// }
// console.log(calc(10,21, mult));
// console.log(calc(10,21, sub));


// -----------------------------------------------------------------
// const userName = [];
// const userPhone = [];
// const userEmail = [];
// const toGetForm = function (name, phone,email,...arr) {
//   console.log(arr);
//   userName.push(name);
//   userPhone.push(phone);
//   userEmail.push(email)

// }

// toGetForm('name', 'phone', 'email', 1, 2, 3, 4, 5)
// toGetForm("Igor", 1234567890, "aa@aaaad.com", 1, 2, 3, 4, 5);

//  console.log(userName);
//  console.log(userPhone);
//  console.log(userEmail);
// ----------------------------------------------------------------



























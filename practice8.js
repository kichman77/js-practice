

// class Cats {
//   constructor(whiskers, teeth, tail, claws) {
//     this.whiskers = whiskers;
//     this.teeth = teeth;
//     this.tail = tail;
//     this.claws = claws;
//   }
//   static catsInfo() {
//     console.log(`Every one Cats has mrrrrrrr - engine `)
//   }

// }


// class Lions extends Cats {
//   constructor(whiskers, teeth, tail, claws, mane) {
//     super(whiskers, teeth, tail, claws, mane);
//     this.mane = mane;
//   }
//   get showMe() {
//     console.log("Roar");
//   }
//   set getName(name) {
//     console.log(this.name = name);
//   }
// }



// let jack = new Lions(true, true, true, true,true)
// //console.log(Jack);

// jack.showMe;
// jack.setName = 'Jack';




// ================================================================================
// ========================== HW - 5 ==============================================
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//-------------------------- task 2 ------------------------
// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo = function () {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     );
//   };
// }
// const mango = new User({
//   name: "Mango",
//   age: 2,
//   followers: 20,
// });
// mango.getInfo(); // User Mango is 2 years old and has 20 followers
// const poly = new User({
//   name: "Poly",
//   age: 3,
//   followers: 17,
// });
// poly.getInfo(); // User Poly is 3 years old and has 17 followers





// --------------------- tsk 3 -----------------

// class Storage {
//   constructor(array) {
//     this.items = array;
//   }
//   getItems() {
//     return this.items
//   }
//   addItem(item) {
//     return this.items.push(item);
//   }
//   removeItem(item) {
//     for (let i = 0; i < this.items.length; i++) {
//       if (this.items[i] === item) {
//         return this.items.splice(i, 1)
//       }
//     }
//   }
// }
// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);
// console.log(storage);
// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]



// --------------------- task 4 ----------------------


// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     this._value += str;
//     return this;
//   }
//   prepend(str) {
//     this._value = str + this._value;
//     return this;
//   }
//   pad(str) {
//     this._value = str + this._value + str;
//     return this;
//   }
// }
// const builder = new StringBuilder(".");
// builder.append("^");
// console.log(builder.value); // '.^'
// builder.prepend("^");
// console.log(builder.value); // '^.^'
// builder.pad("=");
// console.log(builder.value); // '=^.^='
// console.log(builder.pad("=").prepend("^").append("^"));

// --------------------- task 5 -------------------
// class Car {
//   static getSpecs({maxSpeed, _price, speed, isOn, distance}){
//     console.log(`maxSpeed: ${maxSpeed}, price: ${_price}, speed: ${speed}, isOn: ${isOn}, distance: ${distance} `);
//   }
// //   /*
//   // * Добавь статический метод `getSpecs(car)`,
//   // * который принимает объект-машину как параметр и выводит
//  //  * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//  //  */
//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor({maxSpeed = 0, price = 0, speed = 0, isOn = false, distance = 0}) {
//     this.maxSpeed = maxSpeed;
//     this._price = price;
//     this.speed = speed;
//     this.isOn = isOn;
//     this.distance = distance;
//   }
//   get price(){
//    return this._price
//   }
//   set price(value){
//    return this._price = value
//   }
//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */
//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this.isOn = true
//   }
//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }
//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     let newSpeed = this.speed + value;
//     if(newSpeed < this.maxSpeed) {
//       this.speed = newSpeed
//     } else {
//       console.log("Скорость превышает максимальое значение");
//     }
//   }
//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     let newSpeed = this.speed - value;
//     if(newSpeed >= 0) {
//       this.speed = newSpeed
//     } else {
//       console.log("Ты стоишь на месте");
//     }
//   }
//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if(this.isOn) {
//       this.distance += hours * this.speed
//     } else {
//       console.log("Заведи машину!");
//     }
//   }
// }
// // const car = {
// //   maxSpeed: 200,
// //   price: 2000,
// //   speed: 60,
// //   isOn: false,
// //   distance: 100
// // };
// // Car.getSpecs(car)
// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// console.log(mustang);
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);
// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();
// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
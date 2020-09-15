// const CarCreator =
//   function
//     (name = "default",
//     age = "default",
//     color = "default",
//     fuelType = "default",
//     weight = "default",
//     speed = "default" )

//   {
//   this.name = name;
//   this.age = age;
//   this.color = color;
//     this.fuelType = fuelType;
//     this.weight = weight;
//     this.speed = speed;

//     this.checkAcceleration = function () {
//     this.acceleration = this.weight * this.speed;
//   }

// };
// const ferrari = new CarCreator('Ferrari', 5, 'red', ' gas', 1200, 320);
// //console.log(ferrari);
// ferrari.checkAcceleration()
// console.log(ferrari);

// ================================================================================

// const User = function
//   (name = "default",
//   age = "default",
//   phone = "default",
//   email = "default")
// {
//   this.name = name;
//   this.age = age;
//   this.phone = phone;
//   this.email = email;

//   this.FindUser = function () {
//     console.log(this);

//   }

// }

// const user1 = new User('Harry', '30', '0981111111', 'harry@com');
// const user2 = new User('Vova', '25', '098876543', 'xvcb@.com')
// user1.FindUser()
// user2.FindUser()

// ============================================================================

// const Persone = function
//   (name,
//   height,
//   weight,
//   power,
//   skills)
// {
//   this.name = name;
//   this.height = height;
//   this.weight = weight;
//   this.power = power;
//   this.skills = skills;

// }
//напиши ветку из объектов  наследуемых от старшего к дочерним(ветка-люди/ветка-звери)
//-------- не завершенное задание ---------------

// ============================== practice ======================================

// const House = function (doors, windows , roof,color) {
//   this.ground = 50;
//   this.doors = doors;
//   this.windows = windows;
//   this.roof = roof;
//   this.silences = '';
//   this.color = color;

// }
// House.prototype.chengeColor = function (color) {
//   this.color = color;
// }
// House.prototype.chengeDoors = function (doors) {
//   // console.log(newHouse);
//   this.doors = doors;
// }
// House.prototype.chengeWindows = function (windows) {
//     this.windows = windows
// }


// const newHouse = new House(2, 10, 2, 'red');
// console.log(newHouse);

// newHouse.chengeColor('black');
// console.log(newHouse);

// newHouse.chengeDoors(4);
// console.log(newHouse);

// newHouse.chengeWindows(13);
// console.log(newHouse);

// const windows = [
//   { name: "1", count: 4 },
//   { name: "2", count: 4 },
//   { name: "3", count: 4 },
//   { name: "4", count: 4 },
// ];
// const myHouse = new House(1, windows, 1, 'black');
// console.log(myHouse);

// House.prototype.upgradeWindows = function (name, num) {
//   //thisWindows = windows;
//   console.log(this.windows);
//   for (let obj of this.windows) {
//     console.log(obj);
//     if (obj.name === name) {
//       return obj.count = num;
//     }
//   }
// }
// myHouse.upgradeWindows('1', '10');
// console.log(myHouse);
// myHouse.upgradeWindows("4", 0);
// console.log(myHouse);

// =======================================================================


// const Buquete = function (flowers = '',
//   bottles = 0,
//   octopus = 0,
//   fruits = '',
//   sweets = '',
//   vegetables = '',
//   sausages = 0)
// {
//   this.flowers = String (flowers);
//   this.bottles = bottles;
//   this.octopus = octopus;
//   this.fruits = fruits;
//   this.sweets = sweets;
//   this.vegetables = vegetables;
//   this.sausages = sausages;

//   this.isDeliver = false;
// }


// const myBuquete = new Buquete('roses', undefined, undefined, undefined, 'sugar');

// Buquete.prototype.chengeFlowers = function (value) {
//   if (!this.isDeliver) {
//     return this.flowers = value;
//     return 'Ваш заказ отправлен'

//   }
// };

// Buquete.prototype.toggleProp = function () {
//   if (this.isDeliver) return (this.isDeliver = fals);
//   if (this.isDeliver) return (this.isDeliver = true);
//   if (!this.isDeliver); return (this.isDeliver = fals);
// }

// console.log(myBuquete.chengeFlowers('pion'));

// console.log(myBuquete);

// myBuquete.isDeliver = true;
// console.log(myBuquete);

//  console.log(myBuquete.chengeFlowers("cuctuse"));
//  console.log(myBuquete);
//  myBuquete.toggleProp();
// console.log(myBuquete);

// console.log(myBuquete.chengeFlowers("cuctuse"));
// console.log(myBuquete);



const Bouquet = function (
  flowers = "",
  bottles = 0,
  octopus = 0,
  fruits = "",
  sweets = "",
  vegetables = "",
  sausages = 0,
)
{
  this.isDeliver = false;
  this.flowers = flowers;
  this.bottles = bottles;
  this.octopus = octopus;
  this.fruits = fruits;
  this.sweets = sweets;
  this.vegetables = vegetables;
  this.sausages = sausages;
};
const myBouquet = new Bouquet("roses", undefined, undefined, undefined, "sugar");
Bouquet.prototype.changeFlowers = function (value) {
  if (!this.isDeliver) {
    return (this.flowers = value);
  }
  if (!this.isDeliver) {
    return (this.flowers = value);
  };
  Bouquet.prototype.toggleProp = function () {
    if (this.isDeliver) return (this.isDeliver = false);
    if (!this.isDeliver) return (this.isDeliver = true);
  };
}
console.log(myBouquet.changeFlowers("pion"));
console.log(myBouquet);
myBouquet.isDeliver = true;
console.log(myBouquet);
console.log(myBouquet.changeFlowers("cactus"));
myBouquet.toggleProp();
console.log(myBouquet);
console.log(myBouquet.changeFlowers("cactus"));
console.log(myBouquet);
myBouquet.toggleProp();
console.log(myBouquet);




// // ================================ Функции - Конструкторы =======================
const userArray = []
const User = function (userName = `user`, userBirth, userPhone, userEmail) {
  this.name = userName;
  this.dateOfBirth = userBirth;
  this.phone = userPhone;
  this.email = userEmail;
  this.status = false;
  // ТАК УКАЗЫВАТЬ МЕТОД НЕЛЬЗЯ!!!
  // this.toShowName = function () {
  //   console.log(this.name);
  // }
}
// // А ТАК НУЖНО!!!
User.prototype.toShowName = function () {
  console.log(this.name);
}
const user1 = new User(undefined, `13.08.81`, `098123456678`, `meil@com`);
console.log(user1);
user1.toShowName()

const user2 = new User('Harry', '27.11.12', '09812345678', 'ckl@com');
console.log(user2);
user2.toShowName()
userArray.push(user1, user2);
console.log(userArray);
console.dir(User);

class NewUser {
  constructor (userName = `user`, userBirth, userPhone, userEmail) {
    this.name = userName;
    this.dateOfBirth = userBirth;
    this.phone = userPhone;
    this.email = userEmail;
  }
  toShowName() {
    console.log(this.name);
  }
}
const myNewUser = new NewUser('Harry', '27.11.12', '09812345678', 'ckl@com')
console.log(myNewUser);
myNewUser.toShowName()

// ----------------------------------------------------------------------

class Bouquet {
  constructor(flowers = "", bottles = 0, octopus = 0, fruits = "", sweets = "", vegetables = "", sausages = 0) {
    this.isDeliver = false;
    this.flowers = flowers;
    this.bottles = bottles;
    this.octopus = octopus;
    this.fruits = fruits;
    this.sweets = sweets;
    this.vegetables = vegetables;
    this.sausages = sausages;
  }
  changeFlowers(value) {
    if (!this.isDeliver) {
      return (this.flowers = value);
    }
    if (this.isDeliver) {
      return (`изменение заказа невозможно, товар в пути`);
    }
  }
  toggleProp() {
    if (this.isDeliver) return (this.isDeliver = false);
    if (!this.isDeliver) return (this.isDeliver = true);
  }
}


 const myBouquet = new Bouquet("roses", undefined, undefined, undefined, "sugar");

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


















// ================== Объекты ===============================

// let a = 1;
// const testObj = {
//   test: '123',
//   a
// };

// console.log(testObj);
// testObj.test = 'test';
// console.log(testObj);

//  delete testObj.test;
// console.log(testObj['test']);

// const obj = {
//   defaultValue: 0,
//   add: function (){
//     obj.defaultValue += 1;
//     const a = 10;
//     return a;
//   },
//   onDecrement: function () {
//     obj.defaultValue -= 1;
//   }
// }

// let incerment = obj.add;

//  incerment();
// obj.mul = function (n) {
//   console.log(obj.defaultValue);
//  return obj.defaultValue *= n

// }
// console.log(obj.mul(3));
// console.log(incerment());

// obj.add();
// obj.add();
// obj.add();
// obj.add();

// console.log(obj);

// // __________________________________________

// const obj1 = {
//   defaultValue:  0,
//   add1: function (n) {
//     console.log(obj1.defaultValue);
//    return obj1.defaultValue += n;
//   },
//   add2: function (n) {
//     console.log(obj1.defaultValue);
//    return obj1.defaultValue -= (n)
//   },
//   add3: function (n) {
//     console.log(obj1.defaultValue);
//     return obj1.defaultValue *= (n)
//   },
//   add4: function (n) {
//     console.log(obj1.defaultValue);
//      return obj1.defaultValue /= (n)
//   },
//   total: function () {
//     console.log(obj1.defaultValue);
//     return obj1.defaultValue
//   }
// }
// obj1.add1(5);
// obj1.add2(15);
// obj1.add3(2);
// obj1.add4(4)
// obj1.total()

// // ________________________________________________

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   status: 'pop'
// };

// const { name, capacity, status = 'vip' } = hotel;
// console.log(name);
// console.log(hotel);
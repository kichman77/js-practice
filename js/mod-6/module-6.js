const apples = {
  name: 'apples',
  weight: 50,
  price: 50,
}
const peaches = {
  name: 'peaches',
  weight: 70,
  price: 80,
}
const bananas = {
  name: 'bananas',
  weight: 90,
  price: 120,
}
const oranges = {
  name: 'oranges',
  weight: 75,
  price: 150,
}
const kiwi = {
  name: 'kiwi',
  weight: 45,
  price: 135,
}
const melons = {
  name: 'melons',
  weight: 60,
  price: 40,
}
const grapes = {
  name: 'grapes',
  weight: 100,
  price: 90,
}

const fruits = []
fruits.push(apples, peaches, bananas, kiwi, oranges, melons, grapes);
console.log(fruits);

// // высчитать общий вес массива объектов.

const totalWeight = function (array) {
//  // console.log(array);
//   let total = 0;
//   for (let obj of array) {
//    // console.log(obj);
//     total += obj.weight
//     //0+=50
//     //50+=70
//     //120+=90
//     //210+=45
//     //255+=75
//     //330+=60
//     //390+=100
//   }
//   return total

  // функциональный метод
 return array.reduce((total, el) => total + el.weight, 0)
}
 console.log(totalWeight(fruits));

// // получить массив имен продуктов

function toGetNames(array) {
  // let names = []
  // for (let obj of array) {
  //  //console.log(obj.name);
  //   names.push(obj.name);
  //  // console.log(names);
  // }
  // return names

  // функциональный метод
  return array.map((el) =>  el.name)
}
console.log(toGetNames(fruits));


//  // высчитать общую сумму заказа массива объекта

const toGetSum = array => {
  //   let sum = 0;
  //  // console.log(array);
  //   for (let i = 0; i < array.length; i += 1){
  //    // console.log(array[i]);
  //    // console.log(array[i].price, array[i].weight);
  //     sum += array[i].price * array[i].weight;
  //    // console.log(sum);
  //   }
  //   return sum

  // функциональный метод
  return array.reduce((sum, el) => sum + el.price * el.weight, 0);
}
console.log(toGetSum(fruits));

// // высчитать цену за яблоки

const findPriceApple = function (array, name) {
 // console.log(array);
  for (let obj of array) {
  //  console.log(obj);
    if (obj.name === name) return obj.price * obj.weight;
  }
  return 'товар не найден!'
}
console.log(findPriceApple(fruits, 'apples'));
console.log(findPriceApple(fruits, "bananas"));




const totalPrice = function (array, ...arr) {
 // console.log(array);
 // console.log(arr);
  let total = 0;
  for (let product of arr) {
    // console.log(product);
    //1 -oranges
    //2 - kiwi
    //3 - bananas
    for (let obj of array) {
    //  console.log(obj);
      if (obj.name === product) {total += obj.price * obj.weight;}
      //1.1 obj.name = apples === product = oranges
      //1.2 obj.name = peaches === product = oranges
      //1.3 obj.name = bananas === product = oranges
      //1.4 obj.name = kiwi   === product = oranges
      //1.5 obj.name = oranges === product = oranges прошла проверка!!
      //1.6 obj.name = melons === product = oranges
      //1.7 obj.name = grapes === product = oranges

      //2.1 obj.name = apples === product = kiwi
      //2.2 obj.name = peaches === product = kiwi
      //2.3 obj.name = bananas === product = kiwi
      //2.4 obj.name = kiwi === product = kiwi
      //2.5 obj.name = oranges === prodact = kiwi
      //2.6 obj.name = melons === product = kiwi
      //2.7 obj.name = grapes === product = kiwi

      //3.1 obj.name = apples === product = bananas
      //3.2 obj.name = peaches === product = bananas
      //3.3 obj.name = bananas === product = bananas
      //3.4 obj.name = kiwi === product = bananas
      //3.5 obj.name = oranges === product = bananas
      //3.6 obj.name = melons === product = bananas
      //3.7 obj.name = grapes === product = bananas
    }
  }
  return total
}
console.log("totalPrice",totalPrice(fruits, 'oranges', 'kiwi', 'bananas'));
console.log("totalPrice", totalPrice(fruits, "peaches", "melons", "grapes", "apples"));

grapes.toGetCost = function () {
  return this.price * this.weight
}
console.log(grapes.toGetCost());
function abc(callback) {
 // console.log(apples);
  //console.log(grapes);
  return callback()
}
console.log(abc(grapes.toGetCost.bind(apples)));
console.log(abc(grapes.toGetCost.bind(bananas)));

const toGetNumbers = function (...num) {
  console.log(num);// массив es6
  console.log(arguments);// псевдомассив es5
  //преобразование псевдомассива в мвссив
  const array = Array.from(arguments);
  console.log(array);
  console.dir(array);
  console.table(array);

}
toGetNumbers(7, 98, 57, 48, 39, 79);
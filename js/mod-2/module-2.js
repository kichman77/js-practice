// ============================= МАССИВЫ ================================

let str = 'abc';
let str2 = str.split('').reverse().join('-');
console.log(str2);
console.log(str === str2);

let name = `lorem ipsum dolor sit ammet`;
console.log(name.split('i'));
console.log(name.split('o'));
console.log(name.split(' '));

let arr = [1, 2, 3]
let newArr = arr.slice();

console.log(newArr === arr);

let arr1 = [1, 2, 3]
arr1.splice(1, 0, 'hello');
console.log(arr1);

// ====================================================
//1)

let styles = ["Джаз", "Блюз", "Метал","Электро","Реги"];
console.log(styles);

styles.push("Рок-н-ролл");
console.log(styles);
 let idx = (Math.round(styles.length / 2)-1);
 console.log(idx);

styles.splice(idx, 1, "Классика");
console.log(styles);

styles.unshift("Рэп", "Регги");
console.log(styles);



// ===================== ФУНКЦИИ ===============================

const fn = function (a, b, c, d) {
  console.log(a, b, c, d);
}
fn(1, 2, 3, 4);
fn();// без аргументов вернет undefined

const fn1 = function (a = 0, b = 0, c = 0, d = 0) {
  console.log(a, b, c, d);
}
fn1(1);
// ====================================================

console.log(add(1, 2, 3)) // можно использовать до объявления
function add(a, b, c) {
  return a + b + c;
}

const showMeArguments = function (...args) {
  console.log(args);
}
showMeArguments('Thor', 'Black Window', 'Ant Man');

// =============================================================

// const add1 = (...arg) => {
//   for (let el of arg) {
//     console.log(el);
//   }
// }
// add1(1, 2, 3);

// =======================================================================

// let age = 19;
// function checkAge(age) {
//     if (age > 18) {
//       console.log(true);
//     } else {
//        console.log('Родители разрешили?');
//     }
// }
// checkAge()
// //   Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// //   Сделайте два варианта функции checkAge:
// //   Используя оператор ?
// //   Используя оператор

// function checkAge1(age) {
//     if (age < 18) {
//       console.log(true);
//     } else {
//      console.log('Родители разрешили?');
//   }
// }
// checkAge1();

// --------------------------------------------------------------------------

// const type = age >= 18 ? age >= 18 : age < 18 `Родители разрешили ?`;
// console.log(type);

// age = 20;
// const type1 = age >= 18 ? 'adult' : 'child';
// console.log(type1);

// -----------------------------------------------------------------------
// #6
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

 function min(a,b) {
   if (a < b) return a
   return b
}
console.log(min(2, 5));
console.log(min(20, 5));
console.log(min(3, -1));

// #7
// а теперь максимальное число если функция принимает неограниченое к-во аргументов
const max = function (...arg) {
  console.log(...arg);
  console.log(Math.max(...arg));
}
max(12, 34, 45, 56, 67, 89);

// =+++++++++++++++++++++++++++++++++ dop ++++++++++++++++++++++++++++++++++++++++++

// let input;
// let total = 0;

// while (true) {
//   let input = prompt('Введите число');

//   if (input === null) {
//     console.log('Отменено пользователем!');
//     break;
//   }

//   input = Number(input);

//   if (isNaN(input)) {
//     alert('Было введено не число, попробуйте еще раз');
//     continue;
//   }

//   total += input;
// }

// alert(`Общая сумма чисел равна ${total}`);

// -------------------------------------------------------

// #3
// Создайте функцию repeat(str, n), которая возвращает строку, состоящую из
//  n повторений строки str. n — по умолчанию 2, str — пустая строка

const add5 = function (str, n) {
  let result = '';
  for (let i = 0; i < n; i++) {
   result+= str;
  }
  console.log(result);
}
add5('Hello world ', 2);

// #4
// здайте функцию avg() , которая будет находить среднее значение по всем своим аргументам
// (аргументы величины числовые).

const avg = function (...numbers) {
 // console.log(numbers)
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  console.log (Math.round(sum / numbers.length));
}
avg(12, 15, 97, 79, 54);

// Написати ф-ю capitalize яка буде приймати строку і
// буде вертати нову строку де кожне слово буде починатися
// з великої літери.
const capitalize = function (string) {
  let str = string.split(" ");//преобразовали строку в массив
  console.log(str);
  const arrCapitalize = [];
  for (let element of str) {
    console.log(element);
    let wordCapitalize = element[0].toUpperCase() + element.substring(1);
    arrCapitalize.push(wordCapitalize);

  }
  console.log(arrCapitalize);
  return arrCapitalize.join(" ");
};
console.log(capitalize("hello, word."));

// -------------------------------------------------------------------
// Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість голосних літер. aeiouAEIOU - рядок з голосними в англ алфавіті


const vowels = 'aeiouAEIOU'
const countVowels = function (string) {
  console.log(string);
  let arr = string.split('');
  // console.log(arr);
  let a = []
  for (let elem of arr) {
    //  console.log(elem);
    if (vowels.includes(elem)) {
      //  console.log('ok', elem);
      a.push(elem);
      // console.log(a);

    }
  }
  console.log(a);
  console.log(a.length);
}
countVowels('the quick brown fox');

// --------------------------------------------------------------

const add6 = function (a, b) {
  console.log('a :', a);
  console.log('b :', b);
  const result = a + b;
  console.log(result);
return result
}
const r1 = add6 (2, 5);
console.log(r1);
const r2 = add6 (20, 50);
console.log(r2);
const r3 = add6 (200, 500);
console.log(r3);

// ---------------------------------------------------------

const friends = ['Mango', 'Kiwi', 'Poly','Ajax'];

const numbers = [1, 2, 3, 4, 5]

const logItems = function (items) {
  for (const  item of items) {
    console.log(item);
  }
};

logItems(friends);
logItems(numbers);

const nameToFriend = 'Poly';

const findFriend = function (allFriends, name) {
  console.log('allFriends:', allFriends);
  console.log('name', name);

  for (const friend of allFriends) {
    if (name === friend) {
      return 'Нашли такого друга';
    }
  }
  return 'Не нашли';
};
const r4 = findFriend(friends, nameToFriend);
console.log(r4);
const r5 = findFriend(friends, 'Chelsy');
console.log(r5);

// -----------------------------------------------------------------

// императивный подход - спагетти код

const title = 'Top 10 benefits of React framework';
const words = title.toLowerCase().split(' ');
console.log(words);
const slug = words.join('-');
console.log(slug);

// декларативный подход - все внутри функции

const slugify = function (string) {
  const words = string.toLowerCase().split(' ');
  const slug = words.join('-');

  return slug;
}

const slug1 = slugify('Top 10 benefits of React framework');
console.log(slug1);

// объектно-ориентированный подход ООП

const obj = {
  //свойства, хранят значение
  title: 'Top 10 benefits of React framework',
  words: [],
  result: "",
  //методы объекта, изменяют значение свойств
  changeTitle() {
   return this.title = this.title.toLowerCase()
  },
  parseTitle() {
  return this.words = this.changeTitle().split(" ")
  },
  concatTitle(){
   return this.result = this.parseTitle().join("-")
  }
}
console.log(obj.concatTitle());
// --------------------------------------------------------------

const getMeEveen = function (...num) {
  //console.log(num);
  for (let i = 0; i < num.length; i += 1) {
    if (0 === num[i] % 2) {
      console.log(num[i]);
    }
    //console.log(num[i]);
  }
};
getMeEveen(1, 17, 38, 95, 42);



const numbers = function (...n) {
  for (let num of n) {
   // console.log(num);
    if (num % 2 === 0) {
     console.log(num);
   }
  }
}
numbers(57, 49, 98, 76, 23)
// --------------------------------------------------------------------------------


// //Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно
// // больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.


const isNumberInRange = function (number) {

  return number > 0 && number < 10 ? true : false;

}
console.log(isNumberInRange(7));
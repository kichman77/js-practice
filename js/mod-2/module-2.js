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

const add1 = (...arg) => {
  for (let el of arg) {
    console.log(el);
  }
}
add1(1, 2, 3);

// =======================================================================

let age = 19;
function checkAge(age) {
    if (age > 18) {
      console.log(true);
    } else {
       console.log('Родители разрешили?');
    }
}
checkAge()
//   Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
//   Сделайте два варианта функции checkAge:
//   Используя оператор ?
//   Используя оператор

function checkAge1(age) {
    if (age < 18) {
      console.log(true);
    } else {
     console.log('Родители разрешили?');
  }
}
checkAge1();
// --------------------------------------------------------------------------
const type = age >= 18 ? age >= 18 : age < 18 `Родители разрешили ?`;
console.log(type);

age = 20;
const type1 = age >= 18 ? 'adult' : 'child';
console.log(type1);

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
console.log(min(3,-1));
// #7
// а теперь максимальное число если функция принимает неограниченое к-во аргументов
const max = function (...arg) {
  console.log(...arg);
  console.log(Math.max(...arg));
}
max(12, 34, 45, 56, 67, 89);

// =+++++++++++++++++++++++++++++++++ dop ++++++++++++++++++++++++++++++++++++++++++

let input;
let total = 0;

while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    console.log('Отменено пользователем!');
    break;
  }

  input = Number(input);

  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  total += input;
}

alert(`Общая сумма чисел равна ${total}`);
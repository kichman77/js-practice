
// ======================= МАССИВЫ - продолжение ==============================
// #6
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


// #7
// а теперь максимальное число если функция принимает неограниченое к-во аргументов
// const max = function () {}

// let b = [1, 3, 15, 23, 45]
// const findeBigestNumber = function (numbers) {

//  return Math.max(...numbers)
// }

// console.log(findeBigestNumber(b));


// =========================================

// #1

// const humanCreate = function (hight, weidht, eyse, hair) {
//   return (`Human ${hight}, ${weidht}, ${eyse}, ${hair}`);
// }

// console.log(humanCreate(195, 90, 'blue', 'dark'));

// // ===================================

// #2-var
// const humanCreate2 = (hight, weidht, eyse, hair) => `Human ${hight}, ${weidht}, ${eyse}, ${hair}`;


//   console.log(humanCreate(197, 95, 'green', 'dark'));



// ==================================================
// #3

// const greeting = function (name = 'guest') {
// console.log(`Hello ${name}`)
// }
// greeting('Nik')

// 2-var
// const greeting = (name = 'guest') => console.log(`Hello ${name}`)

// greeting('Nik');

// ======================================================================

// #3
// #3
// Создайте функцию repeat(str, n), которая возвращает строку, состоящую из
//  n повторений строки str. n — по умолчанию 2, str — пустая строка

// const add = function (str, n) {
//   let result = '';
//   for (let i = 0; i < n; i++) {
//     result += str;
//   }
//   console.log(result);
// }
// add('Hello world', 3);


// ======================================================================

// #4
// здайте функцию avg() , которая будет находить среднее значение по всем своим аргументам
// (аргументы величины числовые).

// const avg = function (...numbers) {
//  // console.log(numbers)
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//   }
//   console.log (Math.round(sum / numbers.length));

// }
// avg(12, 15, 97, 79, 54);

// ================================Practice========================================

//  ==========    Function   ===================================


// const foolName = function (name) {
//   console.log(name)
// }
// foolName('Kichuk Igor');



// const toShowName = function (firstName, secondName) {
//    console.log(`${firstName} ${secondName}`);
// }
//  toShowName(`Igor` , `Kichuk `)

// function toShowName(firstName, secondName) {
//   console.log(`${firstName} ${secondName}`);
// }
// toShowName(`Igor`, `Kichuk `)


// const toShowName = (firstName, secondName) => console.log(`${firstName} ${secondName}`);

// toShowName(`Igor`, `Kichuk `)




// == == == == == == task-1 == == == == == == == ==//
// Написати ф-ю capitalize яка буде приймати строку і
// буде вертати нову строку де кожне слово буде починатися
// з великої літери.
// const capitalize = function (string) {
//   let str = string.split(" ");
//   let arrCapitalize = [];
//   for (let element of str) {
//     let wordCapitalize = element[0].toUpperCase() + element.substring(1);
//     arrCapitalize.push(wordCapitalize);
//   }
//   return arrCapitalize.join(" ");
// };
// console.log(capitalize("hello, word."));


// // == task-2 == //
// Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість голосних літер. aeiouAEIOU - рядок з голосними в англ алфавіті

// countVowels('the quick brown fox') // 5

// const vowels = 'aeiouAEIOU'
// const countVowels = function (string) {
//   console.log(string);
//   let arr = string.split('');
//   // console.log(arr);
//   let a = []
//   for (let elem of arr) {
//     // console.log(elem);
//     if (vowels.includes(elem)) {
//       // console.log('ok', elem);
//       a.push(elem);
//       // console.log(a);

//     }
//   }
//   console.log(a);
//   console.log(a.length);
// }
// countVowels('the quick brown fox');



// ===================== просмотр видео ============================

// const add = function (a, b) {
//   console.log('a :', a);
//   console.log('b :', b);



//   const result = a + b;

// return result
//    console.log(result);
// }
// const r1 = add (2, 5);
// console.log(r1);
// const r2 = add (20, 50);
// console.log(r2);
// const r3 = add (200, 500);
// console.log(r3);

// const friends = ['Mango', 'Kiwi', 'Poly','Ajax'];

// const numbers = [1, 2, 3, 4, 5]

// const logItems = function (items) {
//   for (const  item of items) {
//     console.log(item);
//   }
// };

// logItems(friends);
// logItems(numbers);

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFriend1 = 'Poly';

// const findFriend = function (allFriends, name) {
//   console.log('allFriends:', allFriends);
//   console.log('name', name);

//   for (const friend of allFriends) {
//     if (name === friend) {
//       return 'Нашли такого друга';
//     }
//   }
//   return 'Не нашли';
// };
// const r1 = findFriend(friends, 'Poly');
// console.log(r1);
// const r2 = findFriend(friends, 'Chelsy');
// console.log(r2);


// ----------------------

const title = 'Top 10 benefits of React framework';
const words = title.toLowerCase().split(' ');
const slug = words.join('-');

const slugify = function (string) {
  const words = string.toLowerCase().split(' ');
  const slug = words.join('-');

  return slug;
}

const slug1 = slugify('Top 10 benefits of React framework');
console.log(slug1);









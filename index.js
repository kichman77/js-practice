// 'use strict'
// let a;
// console.log(a);

// let b = 1;
// b = 2;
// console.log(b);

// const c = [1, 2];
// console.log(c);
// c.push(3);
// console.log(c);

// a = 1;
// b = 2;
// console.log(a + b);
// alert("hello world");

// let a = 24;
// let b = '1';
// let c = a + Number(b); 
// console.log(c);

// const name = 'Igor';
// let age = prompt ('введите ваш возраст');
// console.log(typeof age);
// // age + age;
// console.log(typeof age);
// age = Number(age)
// const message = 'hello '  + name;
// console.log(message);

// const newMessage = `my age is ${age}`
// console.log(newMessage);
// age = 30;
// console.log(typeof age);

// let answer = confirm('вам есть 18');
// console.log(answer);
// console.log(typeof answer);

// let newquestion = `вы любите js?`;
// let newAnswer =confirm (newquestion);

// let num = 10;
// let boolNum = Boolean(num);
// console.log(boolNum);
// num = 0;
// boolNum = Boolean(num);
// console.log(boolNum);
// let str = `Igor`;
// let boolstr = Boolean(str); 
// console.log(boolstr);

// str = ``;
// boolstr = Boolean(str);
// console.log(boolstr);
// str = ` `;
// boolstr = Boolean(str);
// console.log(boolstr);

// let isOpen;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolUnd = Boolean(isOpen);
// console.log(boolUnd);
// console.log(typeof boolUnd);

// isOpen = null;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolNull = Boolean(isOpen);
// console.log(boolNull);
// console.log(typeof boolNull);

// =========== 04.09.======================

// ======= сравнение если / то 
// let vova = {
//   age : 16,
//   dad: 'mehanic'
// }
// if(vova.age >= 18) {
//   alert(`Prohodi paren`);
// }else if (vova.dad === 'deputat'){ 
//   alert(`Prohodi paren`);

// }else {
//   alert('Izvini brat');
// }

// vova.age >= 18 || vova.dad === `deputat`
// ? alert('Prohodi paren')
// : alert('Izvini brat'); 


// ========= кривой пример/ требует разбора=======
// const PASSWORD = 'iLovejs'
// let promt1 = promt('Enter your name: ');

// if(promt1) {
//   promt === PASSWORD
//   ? console.log('You"re in')
//   : console.log('Wrong password!!!)
// };

// let a = 1;
// let b = 2;
// let c = 3;

// if (true) {
//   c = 4;
// }
// console.log(c);

// =========== циклы =================

// let q;

// while (q !== null && q !== '') {
//   q = prompt ( 'enter youre number: ');
//   console.log(q);
// }

// =============== for =================
// for(let i = 0; i<10; i++) {
//   console.log(i);
// }
// for (let b = 0; b<10;) {
//   console.log(++b);
// }

// let ageIgor = 39;
// let ageOleg = 27;
// const ageTotal = ageIgor + ageOleg; 
// console.log(ageTotal);


// let radius = 10;
// let PI = 3.14; 
// const S = PI *(Math.pow(radius, 2 ));
// console.log(S);



// let name = 'Igor';
// let age = 39;
// const group = 24;
// console.log(`Я ${name}, мне ${age} лет, я учусь на ${group} буткемпе!!!`)


// ============самостоятельный разбор ==========
// let b = 11;
// const a = b * 2;
// console.log(a);

// let age;
// const myAge = 39;
// age = myAge;
// console.log(age);

// let age;
// console.log(age);
// age = 14;
// console.log(age);

// ==== ошибка =====
// const d = 57;
// console.log(d);

// const d = 58;
// console.log(d);

// ======= обращай внимание на сиснтаксические ошибки ====
// const b = 1155;
// console.log(b);

// const age = 20;
// const number = 5.8;
// console.log(age);

// const war = (number + age)/2;
// console.log(war);

// const name = 'Mango';
// console.log(name);
// const user = 'Orange'
// console.log(name,user);

// let a;
// console.log(a);

// const b = null;
// console.log(typeof null);

// const c = 5;
// console.log(typeof c);

// const d = 'JavaScript is awesome!'
// console.log(typeof d);

// const e = false;
// console.log(typeof e);

// ========== alert and message ======

// const message = 'JavaScript is awesome';
// console.log(message);

// const name = 'Mango';
// console.log('My name is', name);
// alert(name);

// ========= promt and confirm =======

// const isComing = confirm('Piease confirm hotel reservation ');
// console.log(isComing);

// const hotelName = prompt('Please enter desired  hotel name: ');
// console.log(hotelName);


// const value = prompt('Please enter a number! ');
// console.log(typeof value );
// console.log(value);

const x = 5;
const y = 10;
console.log(x + y);
console.log(y - x);
console.log(y / x);
console.log(y * x);
console.log(y % x);

let valeu = 5;
valeu += 10;
console.log(valeu);


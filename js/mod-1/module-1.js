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
// // alert("hello world");

// let x = 24;
// let y = "1";
// let w = x + y;
// console.log(w); // 241-string
// let z = x + Number(y);
// console.log(z); // 25-number
// // ------------------------------------------------
// const name = "Igor";
// let age = 20;
// //  age = prompt("введите ваш возраст");
// console.log(typeof age);
// // age = +age;// первый вариант преобразования к числу
// age = Number(age); // второй вариант
// console.log(typeof age);
// const message = "hello " + name; // первый вариант подсиавления данных и переменной
// console.log(message);
// const msg = `Hello ${name}`;
// console.log(msg);

// const newMessage = `my age is ${age}`;
// // console.log(newMessage);
// age = 30;
// console.log(typeof age);

// --------------------------------------------------------

// let answer = confirm("вам есть 18?");
// console.log("answer:", answer);
// console.log(typeof answer);

// let newquestion = `вы любите js?`;
// let newAnswer = confirm(newquestion);
// console.log("newAnswer: ", newAnswer);

// ---------------------------------------------------------

// let num = 10;
// console.log(num, typeof num);

// let boolNum = Boolean(num);
// console.log(boolNum, typeof boolNum);

// num = 0;
// console.log(num, typeof num);

// boolNum = Boolean(num);
// console.log(boolNum, typeof boolNum);

// let str = `Igor`;
// console.log(str, typeof str);

// let boolstr = Boolean(str);
// console.log(boolstr, typeof boolstr);

// str = ``;
// console.log(str, typeof str);

// boolstr = Boolean(str);
// console.log(boolstr, typeof boolstr);

// str = ` `;
// console.log(str, typeof str);

// boolstr = Boolean(str);
// console.log(boolstr, typeof boolstr);

// let isOpen;
// console.log(isOpen, typeof isOpen);

// let boolUnd = Boolean(isOpen);
// console.log(boolUnd, typeof boolUnd);

// isOpen = null;
// console.log(isOpen, typeof isOpen);

// let boolNull = Boolean(isOpen);
// console.log(boolNull, typeof boolNull);
// --------------------------------------------------
// ======= сравнение если / то ======================
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
//   : alert('Izvini brat');
// ------------------------------------------------------

// const PASSWORD = 'iLovejs'
// let prompt1 = prompt('Enter your pasword: ');

// if(prompt1) {
//   prompt1 === PASSWORD ? console.log('You"re in'): console.log('Wrong password!!!');
// };
// ---------------------------------------------------------

// let a = 1;
// let b = 2;
// let c = 3;

// if (true) {
//   c = 4;
// }
// console.log(a,b,c);
// ----------------------------------------------------------
//   =========== циклы =================
// -------------- while ----------------
// let q;

// while (q !== null && q !== '') {
//   q = prompt ( 'enter youre number: ');
//   console.log(q);
// }

// =============== for =================
// for(let i = 0; i < 10; i++) {
//   console.log("i",i);
// }
// for (let b = 0; b < 10; b++) {
//   console.log("b",++b);// выводит числа через 1
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

// -------------------------------------------------------------------------


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

// const x = 5;
// const y = 10;
// console.log(x + y);
// console.log(y - x);
// console.log(y / x);
// console.log(y * x);
// console.log(y % x);

// let valeu = 5;
// valeu += 25;
// console.log(valeu);

// const valueA = '5';
// console.log(valueA);
// console.log(typeof Number(valueA));

// const valueB = 'random string';
// console.log(Number (valueB));
// console.log(typeof Number(valueB));

// console.log(Number.parseInt('5px'));
// console.log(Number.parseInt('qwrre'));

// console.log(Number.parseFloat('23.89qewgdw35'));

// const validNumber = Number('59');
// console.log(validNumber);

//  ================ пример округлений =================

// console.log("ceil", Math.ceil(1.1));
// console.log("ceil", Math.ceil(1.5));
// console.log("ceil", Math.ceil(1.9));

// console.log("floor", Math.floor(1.1));
// console.log("floor", Math.floor(1.5));
// console.log("floor", Math.floor(1.9));

// console.log("round", Math.round(1.1));
// console.log("round", Math.round(1.5));
// console.log("round", Math.round(1.9));
// let num = 1.945;
// console.log(typeof num.toFixed());
// -------------------------------------------------------
// const greeting = function (name, greet) {
//   console.log(`${greet} в наш куда-то, дорогой ${name}`);
// }
// greeting(`Mickue`, `Welcome`);
// greeting(`Donald Duck`, `Нахрен ты приперся`);
// greeting(`Vova`, `Не приезжай больше никогда`);


// const greeting2 = function (name, greet) {
//   console.log(`Hi!, my is ${name} ${greet}`);
// }
// greeting2(`Ghora`, `I glad to see you!!`)


// const greeting3 = function ( name = 'user', greet = 'Hello') {
//   console.log(`${name} ${greet}`);
// }
// greeting3();
// greeting3(`Igor`);
// greeting3(undefined, `Hi!!`);
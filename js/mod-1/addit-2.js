// ============== 1 ====================================

// объяви три переменные с именами var1, var2 и var3 соответственно

// присвой им значения: 1, 0, true

// выведи в консоль результаты сравнения:

// var1 > var2
// var1 == var3
// var1 === var3
// var1 != var3
// var2 !== var3
// var1 > var2 == var3
// var1 > var2 > var3

// напиши в комментарии после команды console.log, ответ из консоли

// объясни почему получаются такие ответы

// let var1 = 1;
// let var2 = 0;
// let var3 = true;
// console.log(var1 > var2); // true - 1 > 0;
// console.log(var1 == var3);// true - приведение типов при не строгом сравнении
// console.log(var1 === var3);//  false - сравнение типов данных
// console.log(var2 !== var3);// true - разные типы данных
// console.log(var1 > var2 == var3); // true - результат первого выражения не строго равен var3
// console.log(var1 > var2 > var3);// false - true не больше true
// console.log(undefined === null);// false
// console.log(undefined == null);// true
// console.log(undefined == false);// false
// console.log(undefined == true);// false

// ============== 2 ====================================

// объяви переменную val
// выведи ее в консоль
// присваивай ей следующие значения: "River", "Mountain", 232, true, null,
// проверь на число каждое присвоенное значение и узнай тип данных, укажи результат в комментарий после сonsole.log

// let val;
// console.log(val);
// val = "River";
// console.log(isNaN(val)); // true
// console.log(typeof val);

// val = "Mountain";
// console.log(isNaN(val)); // true
// console.log(typeof val);

// val = undefined;
// console.log(isNaN(val)); // true
// console.log(typeof val);

// // значения, которые можно привести к числу и проходят проверку на число
// val = 232;
// console.log(isNaN(val)); // false
// console.log(typeof val);

// val = true;
// console.log(isNaN(val)); // false
// console.log(typeof val);

// val = false;
// console.log(isNaN(val)); // false
// console.log(typeof val);

// val = null;
// console.log(isNaN(val)); // false
// console.log(typeof val);

// val = '2';
// console.log(isNaN(val)); // false
// console.log(typeof val);

// ============== 3 ====================================
// объяви две переменные alfa и beta со значениями 0.2 и 0.4
// запиши результат суммы этих переменных так, чтобы получилось 0.6 в переменную result
// выведи результат в консоль

// const alfa = 0.2;
// const beta = 0.4;
// let result;

// result = (alfa * 10 + beta * 10) / 10;
//  console.log(result);
// console.log(typeof result);

// result = +(alfa + beta).toFixed(1)
// console.log(result);
// console.log(typeof result);

// ============== 4 ====================================

// объяви переменную tetra
// присвой ей значения: 12px, 13.34em,
// выведи результат в консоль и укажи результат в комментарий после console.log

// let tetra = 12 + 'px';
// console.log(tetra);
// tetra = 13.34 + 'em';
// console.log(tetra);

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// ============== 5 ====================================

// выведи в консоль наибольшее и наименьшее число из указанных (2, 34, 99, 3, 22, 36, 733, 18)

// let nambers = function (...num) {
//   console.log(num);
//   let el = 0;
//   let max = Math.max(...num)
//   console.log(max);
//   let min = Math.min(...num)
//   console.log(min);

// };
// nambers(2, 34, 99, 3, 22, 36, 733, 18);

// ============== 6* ===================================

// объяви переменную random

// пусть она принимает рандомное целое число от 3 до 19 включительно

// выведи результат в консоль

// Math.random()*(max - min)+min
// let number = Math.ceil(Math.random()*(7-5)+5);
// console.log(number);

// let random = Math.ceil(Math.random() * (10 - 1) + 1);
// console.log(random);

// let num = Math.ceil(Math.random() * (15 - 3) + 3);
// console.log(num);

// let n = Math.ceil(Math.random() * (6 - 0) + 0);
// console.log(n);
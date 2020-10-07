// ------------------------ module - 1 ---------------------------

// ========================= task - 1 ==============================

// const name = "Генератор защитного поля";
// let price = 1000;
// console.log(`Выбран ${name},цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран ${name},цена за штуку ${price} кредитов`);

// ============================= task - 2 ============================

// const total = 100;
// let ordered = 50;
// if (ordered <= total) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно твоаров!");
// }
// ordered = 20;
// if (ordered <= total) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно твоаров!");
// }
// ordered = 80;
// if (ordered <= total) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно твоаров!");
// }
// ordered = 130;
// if (ordered <= total) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно твоаров!");
// }

// ======================= task - 3 ==========================
// const ADMIN_PASSWORD = "123";
// let message;
// message = prompt("Введите пожалуста пароль");
// if (ADMIN_PASSWORD === message) {
//   alert("Добро пожаловать!");
// } else if (message === null) {
//   alert("Отменено пользователем!");
// }else  {
//   alert("Доступ запрещен, неверный пароль!");
// }

// ====================== task - 4 ===========================
// const credits = 23580;
// const pricePerDroid = 3000;
// let message = Number(prompt("Введите количество дронов"));
// let tottalPrice;

// if (message === 0) {
//   alert("Отменено пользователем");
// } else if (message) {
//   tottalPrice = pricePerDroid * message;
// } if (credits < tottalPrice) {
//   alert('Недостаточно средств на счету!');
// } else if (credits > tottalPrice) {
//   alert(`'Вы купили ${message} дроидов, на счету осталось ${credits - tottalPrice} кредитов.'`);
// }
// ============================= task - 5 ==========================
// const china = "Китай"
// const chily = "Чили"
// const australia = "Австралия"
// const india = "Индия"
// const jamaica = "Ямайка"
// let delivery = prompt("Введите страну получателя");

// switch (delivery) {
//   case china:
//     console.log(`Доставка в ${delivery} будет стоить 100 кредитов`);
//     break;
//   case chily:
//     console.log(`Доставка в ${delivery} будет стоить 250 кредитов`);
//     break;
//   case australia:
//     console.log(`Доставка в ${delivery} будет стоить 170 кредитов`);
//     break;
//   case india:
//     console.log(`Доставка в ${delivery} будет стоить 80 кредитов`);
//     break;
//   case jamaica:
//     console.log(`Доставка в ${delivery} будет стоить 120 кредитов`);
//     break;
//   default: alert("В вашей стране доставка не доступна");
// }

// ====================================== task - 6 =======================

// let total = 0;
// while (true) {
//   let message = prompt("Введите число");
//   if (message === null) {
//     alert(`Общая сумма равна ${total}`);
//     break;
//   }
//   message = Number(message);
//   if (isNaN(message)) {
//     alert("Вы ввели не число")
//     continue
//   }
//   total += message;
// }
// ==========================================================================
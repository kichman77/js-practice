// =========================== Promise ===================================

// function delay(ms) {
//   return new Promise(function (reselve, reject) {
//     setTimeout(()=> {
//       reselve()
//     }, ms)
//   })

// }
// delay(3000).then((ms) => alert("выполнилось через 3 секунды"));

// ======================== Promise.race ===================================
// let ferrari = new Promise((res,rej)=> {
//   const t = 0;
//   setTimeout(() => {
//     res({ car: "ferrari", t }, t);
//   })
// })

// let lambo = new Promise((res, rej) => {
//   const t = 600;
//   setTimeout(() => {
//     res({ car: "lambo", t }, t);
//   });
// });

// let bmw = new Promise((res, rej) => {
//   const t = 600;
//   // setTimeout(() => {
//     res({ car: "bmw", t }, t);
//   // });
// });

// const firstOnFinish = Promise.race([ferrari, lambo, bmw])
// console.log(firstOnFinish);

// ========================== Promise.all =====================================

// let ferrari = new Promise((res, rej) => {
//   const t = 1100;
//   setTimeout(() => {
//     res({ car: "ferrari", t }, t);
//     console.log("1");
//   });
// });

// let lambo = new Promise((res, rej) => {
//   const t = 1600;
//   setTimeout(() => {
//     res({ car: "lambo", t }, t);
//     console.log("2");
//   });
// });

// let bmw = new Promise((res, rej) => {
//   const t = 2600;
//   setTimeout(() => {
//     // res({ car: "bmw", t }, t); - undefined
//     console.log("3");
//   });
// });

// const firstOnFinish = Promise.all([ferrari, lambo, bmw]);
// console.log(firstOnFinish);

// =============================== fech ==============================
// const getCurrentcyInfo = function (str) {
//   document.querySelector('div').innerHTML = `<h1>Loading</h1>`

//   fetch(str)
//     .then((data) => data.json())
//     // .then((data) => console.log(data))
//     .then(data => data.map(el => {
//       document.body.innerHTML += `<p><h3>Валюта ${el.ccy}</h3></p><h3>Покупка ${el.buy}</h3><p><h3>Продажа ${el.sale}</h3></p>`;
//     }))
//     .finally(() => document.querySelector('div').innerHTML = '');
// }
// getCurrentcyInfo("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");

//https://pokeapi.co/api/v2/pokemon/ - pocemon
// сделать запрос на сервер!!!!



// ==============================================================
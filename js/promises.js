// ======================= Promise ==================================

// let promise = new Promise(function (resolve, reject){
//   setTimeout(() => resolve('done'), 1000);
// })
// console.log(promise.then((res) => {
//   console.log(res);
// }));

// эмуляция ошибки!!!

// let promise1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('Whoops!!')), 1000)
// });
// console.log(promise1);

// // пустой resolve = undefined!!!!

// let promise2 = new Promise(function (resolve, reject){
//   setTimeout(() => resolve(), 1000);
// })
// console.log(promise2);

// ========================= then ==================================
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(()=> resolve(0), 1000);
// })
// promise
//   .then(data => data += 1)
//   .then(number => number * 10)
//   .then(currentCount => console.log(currentCount));

// ======================== catch ===================================

// let isDone = !true;

// let promise = new Promise((resolve, reject) => {
//   if (isDone) {

//     setTimeout(() => resolve('<h1>Resolve</h1>'), 1000);
//   } else {
//     setTimeout(() => reject(new Error('Ошибка'), 1000));

//   }
// });
// promise
//   .then(data => document.querySelector('body').innerHTML =data)
//   .catch(err => document.querySelector('body').innerHTML = err);

// ======================== finally ================================

// new Promise((res, rej) => {
//   setTimeout(() => res('result'), 2000)
// })
// .finally(() => alert('Промис завершён!!!'))
// .then(result => alert(result));

// загрузка фото по ссылке //

// function loadImage(src) {
//   return new Promise(function (resolve, reject) {
//     let img = document.createElement("img");
//     img.src = src;

//     img.onload = () => resolve(img);
//     img.onnerror = () => reject(`Ошибка загрузки img ${img}`);

//     document.body.append(img);
//   });
// }

// let promise = loadImage("https://www.nme.com/wp-content/uploads/2020/04/rick-and-morty-season-4.jpg");
// console.log(promise);

// promise.then(
//   (img) => alert(`успешная загрузка ${img.src}`),
//   (error) => alert(`ошибка загрузки ${error.message}`)
// );
// ======================= praktice ================================

// поиск user в базе данных//

// let URL = "https://jsonplaceholder.typicode.com/users";
// let user = fetch(URL)
//   .then((data) => {
//     // console.log(data);
//     if (data.status == 200) {
//       return data.json();
//     }
//   })
//   .then((json) => {
//     let user;
//     console.log(json)
//     json.find((userToFind) => {
//       if (userToFind.name == 'Ervin Howell') {
//         return user = userToFind;
//       }
//     })
//     return user
//   })
//   .then((elem) => console.log(elem))

// =========================== Promise ==============================

// function delay(ms) {
//   return new Promise(function (reselve, reject) {
//     setTimeout(()=> {
//       reselve()
//     }, ms)
//   })

// }
// delay(3000).then((ms) => alert("выполнилось через 3 секунды"));

// ======================== Promise.race ===========================

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

// ========================== Promise.all =============================

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

// =============================== fetch ==============================

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

// --------------------------------------------------------------------

const key = '17634856-dc2baf9a621a1f19c64e21778';
const url = `https://pixabay.com/api/?key=${key}&q=yellow+flowers&image_type=photo`;

function getFetch(){
 return fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    return data.hits;
  })
  .then(hits => {
    console.log(hits);
    hits.map((el) => {
      let img = document.createElement('img');
      img.src = el.previewURL;
      document.querySelector('body').insertAdjacentElement('afterbegin', img);
    })
  });
}
getFetch()

async function toGetFetch() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  data.hits.map(el => {
    let img = document.createElement('img');
    img.src = el.previewURL;
    document.querySelector('body').insertAdjacentElement('afterbegin', img);
  });
}
toGetFetch();

// ======================= Промисы ================================

// let promise = new Promise(function (resolve, reject){
//   setTimeout(() => resolve('done'), 1000);
// })
// console.log(promise);

// эмуляция ошибки!!!

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('Whoops!!')), 1000)
// });
// console.log(promise);

//пустой resolve = undefined!!!!

// let promise = new Promise(function (resolve, reject){
//   setTimeout(() => resolve(), 1000);
// })
// console.log(promise);

// ==============================then==========================
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(()=> resolve(0), 1000);
// })
// promise
//   .then(data => data += 1)
//   .then(number => number * 10)
//   .then(currentCount => console.log(currentCount));

// ==========================catch===========================

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

// ========================finally=================================

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
// ======================= praktice ==========================

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


// // преобразование коллекций в массив
// const list = document.querySelector(".list");
// console.dir(list);
// const fullList = document.querySelectorAll(".item");
// console.log(fullList);
// const array = Array.prototype.slice.call(list.children); // slice.call()
// console.log(array);
// const array2 = [...list.children]; // способ spread!!
// console.log(array2);
// const array3 = Array.from(list.children); // Array.from
// console.log(array3);
// const array4 = [];

// for (let i = 0; i < list.children.length; i++) {
//   array4.push(list.children[i]);
// }
// console.log(array4);
// fullList.__proto__ = Array.prototype;
// console.log(fullList);

// const button = document.getElementById("toggle-btn");
// button.addEventListener("click", () => {
//   list.classList.toggle("toggle-list");
// });

// list.setAttribute("data-value", "value");
// list.setAttribute("data-source", "source");

// // button.onclick = function () {
// //   alert(`произошел клик`)
// // }
// console.dir(button);

// // метод forEach
// // ["Bilbo", "Gandalf", "Nazgul"].forEach(alert)

// ===========================================================

// дата - записывается 2-мя способами - цифрой и строчный!!!!

// const date = new Date('Aug 13, 1891');
// console.log(date);

// const date = new Date(1981, 7, 13, 6, 45);
// console.log(date);

// const date = Date.now()
// console.log(date);

// setInterval(() => {
//   let currentDate = Date.now();
//   let futureDate = new Date(2020, 8, 28, 12, 8);
//   let futureDateMS = futureDate.getTime();
//   console.log(futureDate);
//   console.log(currentDate);

//   currentDate > futureDateMS ? alert("time has come") : console.log("not yet");
// }, 1000);

// ===================================================================

// 1)Таймер. Две кнопки (старт, стоп), считает выводит на экран.
// Старт нельзя нажать дважды.При нажатии дважды на стоп таймер
// останавливается, при повторном нажатии на стоп - таймер сбрасывается.

// пример!!!

// let i = 0;
// const timer1 = setInterval(() => {
//   console.log(++i + " Misisipi");
// }, 1000);
// document.addEventListener("click", () => {
//   clearInterval(timer1);
// });

// const btnStart = document.querySelector(".btn-start");
// console.log(btnStart);
// const btnStop = document.querySelector(".btn-stop");
// console.log(btnStop);
// const counter = document.querySelector('.count')
// console.log(counter);
// btnStart.addEventListener("click", () => {
//   let i = 0;
//   setInterval(() => {
//     counter.textContent = `${i++}`

//   },1000)
// });

// btnStop.addEventListener("click", () => {

// });

// закончи пример!!!

// let date = new Date('Sep 29 2020 00:00:00').getTime();
// let p = document.querySelector('#event-day');

// let currentTime = new Date().getTime();
// console.log(currentTime)
// let expirationDate = setInterval(() => {
//   let currentTime = new Date().getTime()
//   let distance = date - currentTime;
//   // console.log(distance);
//   let day = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//   let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
//   let seconds = Math.floor(distance % (1000 * 60) / (1000));
//   p.textContent = `${day}d, ${hours}h, ${minutes}m, ${seconds}s`;
//   if (distance < 0) {
//     clearInterval(expirationDate);
//     p.textContent = `Expired`;
//   }
// }, 1000);

// class PromotionTimer {
//   constructor(date) {
//     this.date = new Date(date).getTime();
//     this.p = document.querySelector('#event-day');
//   }
//   expirationDate() {
//     setInterval(() => {
//       let currentTime = new Date().getTime();
//       let distance = this.date - currentTime;
//       let day = Math.floor(distance / (1000 * 60 * 60 * 24));
//       let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//       let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
//       let seconds = Math.floor(distance % (1000 * 60) / (1000));
//       this.p.textContent = `${day}d, ${hours}h, ${minutes}m, ${seconds}s`;
//       if (distance < 0) {
//         clearInterval(this.expirationDate);
//         this.p.textContent = "Expired"
//       }
//     }, 1000);
//   }
// }
// new PromotionTimer('Oct 01 2020 00:00:00').expirationDate();

// ========================= HW-11 ================================
// вариант 1

// const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];
// const start = document.querySelector('[data-action="start"]');
// const stop = document.querySelector('[data-action="stop"]');
// const body = document.querySelector("body");
// let stoper;
// const switchColor = () => {
//   stoper = setInterval(() => {
//     let arrayElement = randomIntegerFromInterval(0, colors.length - 1);
//     //colors[2];
//     body.style.backgroundColor = colors[arrayElement];
//   }, 300);
//   start.disabled = true;
// };
// const stopSwitch = () => {
//   console.log("stopSwitch");
//   clearInterval(stoper);
//   start.disabled = false;
// };
// start.addEventListener("click", switchColor);
// stop.addEventListener("click", stopSwitch);
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

//вариант 2

// function createColor() {
//   let num1 = Math.floor(Math.random() * 255);
//   let num2 = Math.floor(Math.random() * 255);
//   let num3 = Math.floor(Math.random() * 255);
//   return `rgb(${num1},${num2},${num3})`;
// }
// let colors = createColor();
// const start = document.querySelector('[data-action="start"]');
// const stop = document.querySelector('[data-action="stop"]');
// const body = document.querySelector("body");
// let stoper;
// const switchColor = () => {
//   stoper = setInterval(() => {
//     let arrayElement = createColor();
//     body.style.backgroundColor = arrayElement;
//   }, 300);
//   start.disabled = true;
// };
// const stopSwitch = () => {
//   console.log("stopSwitch");
//   clearInterval(stoper);
//   start.disabled = false;
// };
// start.addEventListener("click", switchColor);
// stop.addEventListener("click", stopSwitch);

// ============================= Таймер ========================
// const start = document.querySelector('[data-action="start"]');
// const pause = document.querySelector('[data-action="pause"]');
// const stop = document.querySelector('[data-action="stop"]');
// const p = document.querySelector("#event-time");
// p.textContent = `00:00:00`;

// class Timer {
//   constructor() {
//     this.isActive = false;
//     this.startTime = "";
//     this.currentTime = "";
//     this.deltaTime = "";
//     this.startInt = "";
//     this.pauseTime = "";
//     this.pauseInt = "";
//   }
//   pad(value) {
//     return String(value).padStart(2, "0");
//   }
//   getHours(time) {
//     return this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   }
//   getMinutes(time) {
//     return this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   }
//   getSeconds(time) {
//     return this.pad(Math.floor((time % (1000 * 60)) / 1000));
//   }
//   updateClockFace(time) {
//     return `${this.getHours(time)}:${this.getMinutes(time)}:${this.getSeconds(time)}`;
//   }
//   start() {
//     if (this.isActive) return;
//     this.isActive = true;
//     this.startTime = Date.now();
//     console.log("start time", this.startTime);

//     this.startInt = setInterval(() => {
//       this.currentTime = Date.now();
//       console.log("current time", this.currentTime);
//       this.deltaTime = this.currentTime - this.startTime;
//       p.textContent = this.updateClockFace(this.deltaTime);
//     }, 1000);
//     console.log("isActive", this.isActive);
//     if (this.pauseTime > this.startTime) {
//       this.pauseInt = setInterval(() => {
//         console.log(this.deltaTime);
//         p.textContent = this.updateClockFace(this.deltaTime + 1000);
//       }, 1000);
//     }
//   }
//   pause() {
//     if (this.isActive) {
//       this.pauseTime = Date.now();
//       console.log(this.pauseTime);
//       clearInterval(this.startInt);
//       this.isActive = false;
//     }
//     console.log("isActive", this.isActive);
//   }
//   stop() {
//     clearInterval(this.startInt);
//     p.textContent = `00:00:00`;
//     this.isActive = false;
//     console.log("isActive", this.isActive);
//   }
// }
// const timer = new Timer();
// console.log(timer);
// start.addEventListener("click", timer.start.bind(timer));
// pause.addEventListener("click", timer.pause.bind(timer));
// stop.addEventListener("click", timer.stop.bind(timer));
// //timer.start();
// //


const user = {
  name: "Igor",
  email: "",
}
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((res) => res.json())
  .then((data) => console.log(data));
let url = "https://jsonplaceholder.typicode.com/users/";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify(user)
};
// -------------------------------------------------
fetch(url, options)
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("log1");
setTimeout(() => { console.log(200); }, 200)
setTimeout(() => {
  console.log(0);
}, 0);
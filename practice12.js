// const form = document.querySelector("form");
// console.log(form);
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   console.log(e.target[0].value);
// });

// const form1 = document.querySelector('.form1');
// form1.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log(`Hi my is ${e.target[0].value} I am from ${e.target[1].value}`);
// });
// console.log(form1);

// let input = document.querySelector(".name");
// input.addEventListener("focus", () => {
//   console.log("inpet is in focus");
// });

// let body = document.querySelector('body');
// // console.log(body);
// body.addEventListener('keypress', (e) => {
//   console.log(e.key);
// })
// let card = document.querySelector('.card');
// const cardChange = (e) => {
//   e.preventDefault();
//   e.target.nodeName === 'IMG' ?
//     e.target.src = "https://picsum.photos/id/12/200/300" :
//     e.target.nodeName === 'LI' ?
//   (e.target.style.background = 'black') :
//    e.target.nodeName === 'H3' ?
//       (e.target.textContent = 'Bye-Bye')
//       : '';
// };
// card.addEventListener('click', cardChange);
// --------------------------------------------------------------
// сделай три карточки
//1 при клике на картинку должна меняться картинка /
//2 при клике на заголовок, должен добавляться текст//
//3 приклике на кнопку, должен появится скрый текст(много текста)

// let card = document.querySelector('.card');
// console.log(card);

// let title = document.querySelector('.title');
// console.log(title);

// let text = document.querySelector('.text');
// console.log(text);

// let btn = document.querySelector('.btn');
// console.log(btn);

// ----------------------------------------------------------------
// ============================= HW-7 =============================
// -------------------------------- task - 4 ----------------------

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// {/* <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div> */}

// const counterRefs = {
//   decrementBtn: document.querySelector('[data-action="decrement"]'),
//   counterSpan: document.querySelector("#value"),
//   incrementBtn: document.querySelector('[data-action="increment"]'),
// };

// // console.log(counterRefs);
// let counterValue = 2;
// counterRefs.counterSpan.textContent = counterValue;
// counterRefs.decrementBtn.addEventListener('click', () => {
//   if (counterValue > 2 ) {
//     // console.log(counterValue);
//     counterValue -= 1;
//     // console.log(counterValue);
//     counterRefs.counterSpan.textContent = counterValue;

//   }
// });

// counterRefs.incrementBtn.addEventListener('click', () => {
//   // console.log(counterValue);

//   counterValue += 1;
//   // console.log(counterValue);
//   counterRefs.counterSpan.textContent = counterValue;
// });

// ---------------------------- task 5 ----------------------------

// Напиши скрипт который, при наборе текста в инпуте input#name -
//input(событие input), подставляет его текущее значение в span#name -
//output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// {/* < input type = "text" placeholder = "Ваше имя?" id = "name-input" />
//   <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */}

// const input = document.getElementById('name-input');
// const span = document.getElementById('name-output');
// // console.log(input);
// // console.log(span);
// input.addEventListener('input', () => {
//   // console.log(input.value);
//   span.textContent = input.value;
//   if (input.value === '') span.textContent = 'незнакомец'
// });

// ----------------------------task 6 --------------------------------

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// {/* < input
// type = "text"
// id = "validation-input"
// data - length="6"
// placeholder = "Введи 6 символов"
//   /> */}
//   Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

// #validation - input {
//   border: 3px solid #bdbdbd;
// }

// #validation - input.valid {
//   border - color: #4caf50;
// }

// #validation - input.invalid {
//   border - color: #f44336;
// }

// const valInput = document.querySelector('#validation-input');
// const pClass = document.createElement('p');
// const createAllert = (el, className, msg) => {
//   el.classList.add(className)
//   el.textContent = msg;
//   valInput.after(el);
// }
// const removeAlert = (el, className) => {
//   el.classList.remove(className);
//   el.textContent = '';
// }
// // createAllert(pClass, 'valid', 'Запонено неверно!!!');
// console.log(pClass);
// // console.dir(valInput);
// let length = Number(valInput.dataset.length);
// // console.log(length);
// // valInput.classList.add('invalid');
// valInput.addEventListener('blur', () => {
//   // console.log(valInput.value);
//   let textLength = valInput.value.length;
//   // console.log(typeof length,length, typeof textLength, textLength);
//   // console.log(length === textLength);
//   // console.log(length == textLength);
//   if (length === textLength) {
//     valInput.classList.add('valid');
//     valInput.classList.remove('invalid');
//     removeAlert(pClass, 'js-msg-invalid');
//     createAllert(pClass, 'js-msg-valid', 'Заполнено верно!!!');
//   } else {
//     valInput.classList.add('invalid')
//     valInput.classList.remove('valid')
//     removeAlert(pClass, 'js-msg-valid')
//     createAllert(pClass, 'js-msg-invalid', 'Заполнено неверно!!!');
//   }
// });

// --------------------------------------------------

// -------------------------- task 7 -------------------------

// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

//  < input id = "font-size-control" type = "range" />
// <br />
// <span id="text">Абракадабра!</span>

// const input = document.getElementById("font-size-control");
// console.log(input);
// const span = document.getElementById("text");
// console.log(span);
// input.addEventListener("input", () => {
//   // console.dir(input);
//   // console.log(input.value);
//   span.style.fontSize = input.value + "px";
// });

// -------------------------- task 8 -------------------------
// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество
// элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

/* < div id = "controls" >
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</ >

  <div id="boxes"></div> */

// let count;
// const boxRefs = {
//   div: document.getElementById("boxes"),
//   input: document.querySelector('[type="number"]'),
//   renderButton: document.querySelector('[data-action="render"]'),
//   destroyButton: document.querySelector('[data-action="destroy"]'),
// };
// console.log(boxRefs);

// boxRefs.input.addEventListener("change", () => {
//   console.log(typeof boxRefs.input.value);

//   count = boxRefs.input.value;
//   return count;
// });
// console.log(count);
// boxRefs.renderButton.addEventListener("click", () => {
//   createBoxes(count);
// });

// boxRefs.destroyButton.addEventListener("click", destroyBoxes);

// function createBoxes(amount) {
//   let size = 30;
//   const colorBox = document.createElement("div");
//   colorBox.style.width = size + "px";
//   colorBox.style.height = size + "px";

//   for (let i = 1; i <= amount; i++) {
//     console.log(i);
//     size += 10;
//     const colorBox = document.createElement("div");
//     colorBox.style.width = size + "px";
//     colorBox.style.height = size + "px";

//     let color = createRgb();
//     colorBox.style.backgroundColor = color;

//     boxRefs.div.append(colorBox);
//   }
// }

// function destroyBoxes() {
//   boxRefs.div.innerHTML = "";
//   boxRefs.input.value = "";
// }

// function createRgb() {
//   const red = Math.round(Math.random() * 255);
//   // console.log(red);
//   const green = Math.round(Math.random() * 255);
//   // console.log(green);
//   const blue = Math.round(Math.random() * 255);
//   // console.log(blue);

//   const color = `rgb(${red}, ${green}, ${blue})`;
//   return color;
// };

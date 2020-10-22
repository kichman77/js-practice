// =================================== HW-7 ===============================

// ---------------------------------task - 1 ---------------------------------
// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

let list_1 = document.querySelectorAll("#categories li.item");
//  console.log(list_1);
 console.log(`В списке ${list_1.length} категории.`);
 list_1.forEach((el, index) => {
  let h2 = document.querySelectorAll("h2");
  let li = document.querySelectorAll("li.item ul");
  console.log(`Категория: ${h2[index].textContent}`);
  console.log(`Количество элементов: ${li[index].children.length}`);
});

// -------------------------------- task 2 -------------------------------------

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const ingredientsList = document.querySelector("#ingredients");
// console.log(ingredientsList);

ingredients.map((elem) => {
  // создаем элементы
  const ingredientItem = document.createElement("li");
  // console.dir(ingredientItem);
  ingredientItem.textContent = elem;
  ingredientsList.append(ingredientItem);
  //console.log(ingredientItem);
  //  console.log(elem);
});

// --------------------------------------- task 3 ------------------------------------------
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.
// < ul id = "gallery" ></ >
//   Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const list_gallery = document.getElementById("gallery");
images.map((elem) => {
  // li
  const item_gallery = `<li><img src="${elem.url}" alt="${elem.alt}" width="480" height="280"></li>`;
  // li => ul
  list_gallery.insertAdjacentHTML("afterbegin", item_gallery);
  // console.log(list_gallery);
  //
  const galleryList = list_gallery.children[0];
  // console.log(list_gallery.children);
   galleryList.classList.add("item-gallery");

   galleryList.setAttribute("class", "item-gallery");
});
// console.log(gallery_item);
// console.dir(list_gallery);

// -------------------------------- task - 4 ----------------------

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

//  <div id="counter">
//       <button class="counter-btn" type="button" data-action="decrement">-1</button>
//       <span id="value">0</span>
//       <button class="counter-btn" type="button" data-action="increment">+1</button>
//     </div>

const counterRefs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counterSpan: document.querySelector("#value"),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

// console.log(counterRefs);
let counterValue = 2;
counterRefs.counterSpan.textContent = counterValue;
counterRefs.decrementBtn.addEventListener('click', () => {
  if (counterValue > 2 ) {
    // console.log(counterValue);
    counterValue -= 1;
    // console.log(counterValue);
    counterRefs.counterSpan.textContent = counterValue;
  }
});

counterRefs.incrementBtn.addEventListener('click', () => {
  // console.log(counterValue);
  counterValue += 1;
  // console.log(counterValue);
  counterRefs.counterSpan.textContent = counterValue;
});

// ---------------------------- task 5 ----------------------------

// Напиши скрипт который, при наборе текста в инпуте input#name -
//input(событие input), подставляет его текущее значение в span#name -
//output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// {/* < input type = "text" placeholder = "Ваше имя?" id = "name-input" />
//   <h1>Привет, <span id="name-output">незнакомец</span>!</h1> */}

const input = document.getElementById('name-input');
const span = document.getElementById('name-output');
// console.log(input);
// console.log(span);
input.addEventListener('input', () => {
  // console.log(input.value);
  span.textContent = input.value;
  if (input.value === '') span.textContent = 'незнакомец'
});

// ----------------------------task 6 --------------------------------

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

//  < input
// type = "text"
// id = "validation-input"
// data - length="6"
// placeholder = "Введи 6 символов"
//   />
//   Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.



const valInput = document.querySelector('#validation-input');
const pClass = document.createElement('p');
const createAllert = (el, className, msg) => {
  el.classList.add(className)
  el.textContent = msg;
  valInput.after(el);
}
const removeAlert = (el, className) => {
  el.classList.remove(className);
  el.textContent = '';
}
 createAllert(pClass, 'valid', 'Заполнено неверно!!!');
// console.log(pClass);
//  console.dir(valInput);
let length = Number(valInput.dataset.length);
 console.log(length);
// valInput.classList.add('invalid');
valInput.addEventListener('blur', () => {
  // console.log(valInput.value);
  let textLength = valInput.value.length;
  if (length === textLength) {
    valInput.classList.add('valid');
    valInput.classList.remove('invalid');
    removeAlert(pClass, 'js-msg-invalid');
    createAllert(pClass, 'js-msg-valid', 'Заполнено верно!!!');
  } else {
    valInput.classList.add('invalid')
    valInput.classList.remove('valid')
    removeAlert(pClass, 'js-msg-valid')
    createAllert(pClass, 'js-msg-invalid', 'Заполнено неверно!!!');
  }
});
// -------------------------- task 7 -------------------------

// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

//  < input id = "font-size-control" type = "range" />
// <br />
// <span id="text">Абракадабра!</span>

const input1 = document.getElementById("font-size-control");
console.log(input1);
const span1 = document.getElementById("text");
console.log(span1);
input1.addEventListener("input", () => {
  // console.dir(input);
  // console.log(input.value);
  span1.style.fontSize = input1.value + "px";
});

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

let count;
const boxRefs = {
  div: document.getElementById("boxes"),
  input: document.querySelector('[type="number"]'),
  renderButton: document.querySelector('[data-action="render"]'),
  destroyButton: document.querySelector('[data-action="destroy"]'),
};
console.log(boxRefs);

boxRefs.input.addEventListener("change", () => {
  console.log(typeof boxRefs.input.value);

  count = boxRefs.input.value;
  return count;
});
console.log(count);
boxRefs.renderButton.addEventListener("click", () => {
  createBoxes(count);
});

boxRefs.destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  const colorBox = document.createElement("div");
  colorBox.style.width = size + "px";
  colorBox.style.height = size + "px";

  for (let i = 1; i <= amount; i++) {
    console.log(i);
    size += 10;
    const colorBox = document.createElement("div");
    colorBox.style.width = size + "px";
    colorBox.style.height = size + "px";

    let color = createRgb();
    colorBox.style.backgroundColor = color;

    boxRefs.div.append(colorBox);
  }
}

function destroyBoxes() {
  boxRefs.div.innerHTML = "";
  boxRefs.input.value = "";
}

function createRgb() {
  const red = Math.round(Math.random() * 255);
  // console.log(red);
  const green = Math.round(Math.random() * 255);
  // console.log(green);
  const blue = Math.round(Math.random() * 255);
  // console.log(blue);

  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
};

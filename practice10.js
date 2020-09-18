// console.log(navigator);

// const elem = document.querySelector('.test');
// //elem.hidden = true;
// console.log(elem);

// const a = document.querySelector('.test1');
// console.log(a);

// ---------------------------------------------------------------
// let body = document.querySelector('body');
// let arr = ['Body', 'Sasha', 'Alex', 'Mark']
// for (let index = 0; arr.length < 10; index++){
//   const tittle = document.createElement('h3');
//   tittle.textContent = arr[tittle];
//   body.append(tittle);
// };

// let body = document.querySelector('body');
// let arr = ['Bodya', 'Sasha', 'Alex', 'Mark', 'Twen']
// for (let index = 0; index < arr.length; index++) {
//   const tittle = document.createElement('h3');
//   tittle.textContent = arr[index];
//   tittle.setAttribute('id', `${index}`)
//   // setInterval(() => {
//   // //   tittle.style.color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
//   // //   tittle.style.transform = `translate(${Math.floor(Math.random()*10)}px, ${Math.floor(Math.random()*10)}px)`
//   // // }, 500);
//   body.append(tittle);
// }
// console.log(body.innerHTML);

// =========================================================

// let body = document.querySelector("body");
// for (let index = 0; index < 5; index++) {

//   const image = document.createElement("img");
//   image.setAttribute("src", "https://picsum.photos/seed/picsum/500/300");
//   image.setAttribute("alt", "nature");
//   body.append(image);
// }
// console.log(image);

// =================================== HW-7 ===============================

// ---------------------------------task - 1 ---------------------------------

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// let list_1 = document.querySelectorAll("#categories li.item");
// console.log(`В списке ${list_1.length} категории.`);
// list_1.forEach((el, index) => {
//   let h2 = document.querySelectorAll("h2");
//   let li = document.querySelectorAll("li.item ul");
//   console.log(`Категория: ${h2[index].textContent}`);
//   console.log(`Количество элементов: ${li[index].children.length}`);
// });
// ---------------------------------------------------------------------------

// -------------------------------- task 2 -------------------------------------

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);

ingredients.forEach((elem) => {
  // создаем элементы
  const ingredientItem = document.createElement("li");
  console.dir(ingredientItem);
  ingredientItem.textContent = elem;
  ingredientsList.append(ingredientItem);
  //console.log(ingredientItem);
  console.log(elem);
});

// --------------------------------------- task 3 ------------------------------------------
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// < ul id = "gallery" ></ >
//   Используй массив объектов images для создания тегов img вложенных в li.Для создания разметки используй шаблонные строки и insertAdjacentHTML().

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
images.forEach((elem) => {
  // li
  const item_gallery = `<li><img src="${elem.url}" alt="${elem.alt}" width="480" height="280"></li>`;
  // li => ul
  list_gallery.insertAdjacentHTML("afterbegin", item_gallery);
  console.log(list_gallery);
  //
  const galleryList = list_gallery.children[0];
  console.log(list_gallery.children);
  // galleryList.classList.add("item-gallery");
  
  // galleryList.classList.add("class", "item-gallery");
});
// console.log(gallery_item);
// console.dir(list_gallery);

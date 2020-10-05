import sony_world from "./sony_world.js";
console.log(sony_world);

// const body = document.querySelector("body");
// console.dir(body);
// const section = document.querySelector(".section");
// const picture = document.querySelector("#wrapper-img");
// const beautyImage = document.getElementById("beauty");
// // picture.setAttribute("width", "320px");
// // picture.width = "450" // второй способ добавления атрибута
// // const showButn = document.querySelector('[data-action="show"]')
// const showBtn = document.getElementById("show-btn");
// // showBtn.addEventListener("click", () => {
// //   picture.classList.toggle("wrapper-img");
// // })
// // const sectionTitle = document.querySelector(".section-title");
// // sectionTitle.addEventListener("click", () => {
// //   sectionTitle.classList.toggle("section-title");
// //   console.log("ok");
// // });
// // sectionTitle.style.fontSize = ("70px")
// // sectionTitle.style.fontWeight = ("900")
// // sectionTitle.style.color = ("green")
// // sectionTitle.style.textAlign = ("center")
// const mainList = document.querySelector(".main-list");
// // console.log(mainList);
// // const mainListItem = document.querySelectorAll(".main-list-item");
// // const innerListTitle = document.querySelector(".main-list-item__title");
// // const eventList = document.querySelector("#events");
// // console.dir(eventList);
// // console.log(mainList.children.length);
// // const eventListItems = document.querySelectorAll("#events")
// //второй способ достучаться к элементу
// // const eventListItems = eventList.children;

// const methodList = `<ul>
// <li>getElementsByClassName</li>
// <li>getElementById</li>
// <li>querySelector</li>
// <li>querySelectorAll</li>
// </ul>`;
// // mainList.firstElementChild.innerHTML += methodList
// //  mainList.firstElementChild.insertAdjacentHTML("beforeend", methodList);
// //  const methodList = document.createElement("ul")
// const list = document.createElement("ul");
// const item1 = document.createElement("li");
// const item2 = document.createElement("li");
// const item3 = document.createElement("li");
// const item4 = document.createElement("li");

// item1.textContent = "getElementsByClassName";
// item2.textContent = "getElementById";
// item3.textContent = "querySelector";
// item4.textContent = "querySelectorAll";

// // list.append(item1, item2, item3, item4);
// // mainList.firstElementChild.append(list);
// // // --------------------------------------------------------------------

// const url1 = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg";
// const url2 = "https://cdn.eso.org/images/thumb300y/eso1907a.jpg";
// beautyImage.src = url1;

// showBtn.addEventListener("click", () => {
//   if (beautyImage.src === url1 && sectionTitle.style.color === "green") {
//     beautyImage.src = url2;
//     sectionTitle.style.color = "brown";
//   } else {
//     beautyImage.src = url1;
//     sectionTitle.style.color = "green";
//   }
// });
// ---------------------------------------------------

const galleryList = document.querySelector(".photo-gallery");
const overlay = document.querySelector(".js-lightbox");
const overlayImage = document.querySelector(".lightbox__image");

const cart = sony_world.map((el) => {
  // console.log(el);
  const title = document.createElement("h2");
  title.textContent = el.title;

  const picture = document.createElement("img");
  picture.setAttribute("src", el.image);
  picture.setAttribute("alt", el.category);
  picture.setAttribute("width", "450px");

  const description = document.createElement("p");
  description.textContent = el.description;

  const subtitle = document.createElement("h3");
  subtitle.innerHTML = `<span>category:</span> ${el.category}`;

  const seria = document.createElement("p");
  seria.innerHTML = `<span>seria</span>${el.seria}`;

  const photographer = document.createElement("p");
  photographer.innerHTML = `<span>photographer</span>${el.author.name}`;

  const country = document.createElement("p");
  country.innerHTML = `(${el.author.country}<span - ${el.author.city}</span>)`;

  const galleryItem = document.createElement("li");
  galleryItem.setAttribute("class", "main-item");
  galleryItem.setAttribute("class", "gallery-item");
  galleryItem.append(title, picture, description, subtitle, seria, photographer, country);
  galleryList.insertAdjacentElement("afterbegin", galleryItem);
});

galleryList.addEventListener("click", (event) => {
  console.log(event.target.src);
  if (event.target.nodeName === "IMG") {
    overlayImage.src = event.target.src;
    overlay.classList.add("is-open");
  }
});

overlay.addEventListener("click", clearOverlay);

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
   clearOverlay()
  }
});

function clearOverlay  (){
overlay.classList.remove("is-open");
overlayImage.src = "";
}
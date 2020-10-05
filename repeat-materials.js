

const body = document.querySelector("body");
console.dir(body);
const section = document.querySelector(".section");
const picture = document.querySelector("#wrapper-img");
const beautyImage = document.getElementById("beauty");
// picture.setAttribute("width", "320px");
picture.width = "450"; // второй способ добавления атрибута
const showBtn = document.querySelector('[data-action="show"]');
// const showBtn = document.getElementById("show-btn");
showBtn.addEventListener("click", () => {
  picture.classList.toggle("wrapper-img");
});
const sectionTitle = document.querySelector(".section-title");
sectionTitle.addEventListener("click", () => {
  sectionTitle.classList.toggle("section-title");
  console.log("ok");
});
sectionTitle.style.fontSize = "70px";
sectionTitle.style.fontWeight = "900";
sectionTitle.style.color = "green";
sectionTitle.style.textAlign = "center";
const mainList = document.querySelector(".main-list");
console.log(mainList);
const mainListItem = document.querySelectorAll(".main-list-item");
const innerListTitle = document.querySelector(".main-list-item__title");
const eventList = document.querySelector("#events");
console.dir(eventList);
console.log(mainList.children.length);
const eventListItems = document.querySelectorAll("#events");
// второй способ достучаться к элементу
// const eventListItems = eventList.children;

const methodList = `<ul>
<li>getElementsByClassName</li>
<li>getElementById</li>
<li>querySelector</li>
<li>querySelectorAll</li>
</ul>`;
// mainList.firstElementChild.innerHTML += methodList
//  mainList.firstElementChild.insertAdjacentHTML("beforeend", methodList);
//  const methodList = document.createElement("ul")
const list = document.createElement("ul");
const item1 = document.createElement("li");
const item2 = document.createElement("li");
const item3 = document.createElement("li");
const item4 = document.createElement("li");

item1.textContent = "getElementsByClassName";
item2.textContent = "getElementById";
item3.textContent = "querySelector";
item4.textContent = "querySelectorAll";

// list.append(item1, item2, item3, item4);
// mainList.firstElementChild.append(list);
// // --------------------------------------------------------------------

const url1 = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg";
const url2 = "https://cdn.eso.org/images/thumb300y/eso1907a.jpg";
beautyImage.src = url1;

showBtn.addEventListener("click", () => {
  if (beautyImage.src === url1 && sectionTitle.style.color === "green") {
    beautyImage.src = url2;
    sectionTitle.style.color = "brown";
  } else {
    beautyImage.src = url1;
    sectionTitle.style.color = "green";
  }
});
// ---------------------------------------------------

import sony_world from "./sony_world.js";
console.log(sony_world);

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
  picture.classList.add("gallery-img")

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
    clearOverlay();
  }
});

function clearOverlay() {
  overlay.classList.remove("is-open");
  overlayImage.src = "";
}

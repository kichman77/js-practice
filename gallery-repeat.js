import sony_world from "./sony_world.js";
console.log(sony_world);

const galleryList = document.querySelector(".photo-gallery");
const overlay = document.querySelector(".js-lightbox");
const overlayImage = document.querySelector(".lightbox__image");

const cart = sony_world.map((el, index) => {
  // console.log(el);
  const title = document.createElement("h2");
  title.textContent = el.title;

  const picture = document.createElement("img");
  picture.setAttribute("src", el.image);
  picture.setAttribute("alt", el.category);
  picture.setAttribute("width", "450px");
  picture.classList.add("gallery-img");
  picture.setAttribute("data-index", index);

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
  galleryList.append(galleryItem);
});

galleryList.addEventListener("click", (event) => {
  // console.log(event.target.src);
  if (event.target.nodeName === "IMG") {
    overlay.classList.add("is-open");
    overlayImage.src = event.target.src;
    overlayImage.dataset.index = event.target.dataset.index;
  }
  // setNewSrc();
  // currentIndex = +picture.dataset.index
  // console.dir(event.target.dataset.index);
});

overlay.addEventListener("click", clearOverlay);

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    clearOverlay();
  }
  if (event.code === "ArrowLeft") {
    arrowLeft();
  }
  if (event.code === "ArrowRight") {
    arrowRight();
  }
});

// window.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowLeft") {
//     picture.src = gallery[currentIndex - 1].image;
//   }
// });

function clearOverlay() {
  overlay.classList.remove("is-open");
  overlayImage.src = "";
}

function setNewSrc(step, index) {
  // let index = overlayImage.dataset.index
  overlayImage.dataset.index = `${index + step}`;
  overlayImage.src = sony_world[index + step].image;
  // console.log(overlayImage.src);
}

function arrowLeft() {
  let index = +overlayImage.dataset.index;
  console.log(index);
  if (index === 0) {
    setNewSrc(0, sony_world.length - 1);
    return;
  }
  setNewSrc(-1, index);
}
function arrowRight() {
  let index = +overlayImage.dataset.index;
  console.log(index);
  if (index === sony_world.length - 1) {
    setNewSrc(0, 0);
    return;
  }
  setNewSrc(1, index);
}

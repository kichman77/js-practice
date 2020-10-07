// ----------------------------- DOM -------------------------------------
// ------------------ Document Object Model ------------------------------

// let p = document.querySelectorAll('p')[1].style.background = 'green';
let p = document.querySelectorAll("p");
p[1].style.background = "blue";
// console.log(p);
p[3].style.backgroundColor = "black";
p[3].style.color = "wheat";
p[2].style.border = "3px double";
p[0].style.color = "green";
p[0].style.textTransform = "uppercase";
p[4].style.fontWeight = "900";

Array.from(p).forEach((elem) => {
  // console.log(elem)
});

let html = [...p];
html.forEach((elem) => {
  // console.log(elem)
});

// -----------------------------------------------------

//  Traversing dom
let list = document.querySelector(".list");

// // Manipulating elements
// 1. Style
document.body.style.background = "beige";
document.querySelector(".text").style.background = "green";
document.querySelector(".text").style.fontSize = "26px";

// 2. Classes
let items = document.querySelectorAll("li");
items[1].classList.add("js-hook-list");
// items[1].classList.remove('js-hook-list')
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);

// // 3. setAttribute, remoweAttibute

items[1].setAttribute("id", "js-my-list");
items[1].removeAttribute("id");
items[1].id = "new-way";

let img = document.querySelector('img');
 console.log(img);
 img.alt = 'angel'
 img.width = '250';



let h2 = document.querySelector('h2');
 console.log(h2);
 h2.innerText = 'Angel';
 h2.innerHTML += '<span> Photo</span>';
 console.log(h2.innerText);

// // 4. Creating elements

// let catImg = document.createElement('img');
// // let body = document.querySelector('body');

// catImg.setAttribute('src', 'https://loremflickr.com/640/360');
// catImg.setAttribute('alt', 'cat-image');
// catImg.getAttribute('alt');

// // catImg.src = ''
// // catImg.alt = ''
// // body.appendChild(catImg);
// // items[1].append(catImg);
// // items[1].prepend(catImg);
// // items[1].after(catImg);
// items[1].before(catImg);

// Events
// let btn = document.querySelector('button');
// btn.addEventListener('click', (event) => {
//     // console.log('Click')
//     console.log(event.target);
//     // console.log(event.type);
//     // console.log(event);
//     console.log(this)
// })
const btn = document.querySelector('#toggle-btn')
btn.addEventListener('focus', function (event) {
    console.log('Click')
    console.log(event.target);
    console.log(event);
    console.log(event.type);
    console.log(event);
    console.log(this)
})

window.addEventListener('load', (e) => {
    console.log(e);
}
);

window.addEventListener('resize', (event) => {
    console.log(event.target);
}
)

let a = document.querySelector('a')
a.addEventListener('click', (event) => {
    console.log('click')
     event.preventDefault();
}
)

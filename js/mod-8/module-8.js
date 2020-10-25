// const body = document.querySelector('body');
// const button = document.createElement('button');
// button.classList.add('btn');
// button.textContent = 'tap here';
// button.style.width = '70px';
// button.style.height = '70px';
// button.style.margin = '10px';
// button.style.backgroundColor = 'white';
// body.style.background = 'teal';
// body.append(button);

// button.addEventListener('click', () => {
//   body.style.background = 'green';
// });

// for (let i = 0; i < 10; i++) {
//   const cube = document.createElement('div');
//   cube.classList.add('cube');
//   cube.style.border = '1px solid';
//   cube.textContent = i;
//   body.append(cube);

//   cube.addEventListener('click', () => {
//     alert(cube.textContent);
//   });
// }

// window.addEventListener('scroll', () => {
//   // console.log(window.scrollY);
//   window.scrollY >= 200 && window.scrollY < 230
//     ? (body.style.background = 'teal')
//     : window.scrollY > 300 && window.scrollY < 330
//     ? (body.style.background = 'blue')
//     : '';
// });

// body.addEventListener('click', (e) => {
//   body.innerHTML += `<div class='circle' style="top:${e.clientY}px; left:${e.clientX}px"></div>`
// })

// const box = document.createElement('div');
// box.classList.add('box');
// box.textContent = 'Hello World';
// body.append(box);
// console.log(box);
// --------------------------------------------------------------

// aditional//

// const body = document.querySelector('body');
// const form = document.querySelector('form');
// const input = document.querySelector('.email');
// const card = document.querySelector('.card');
// console.log(form);
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   console.dir(e.target);
//   // console.dir(e.target.elements.password);

//   let email = e.target.elements.email;
//   let password = e.target.elements.password;
//   console.log(`Hi my is ${email.value} I am from ${password.value}`);

//   email.addEventListener('focus', e => {
//     console.log(e.target.value);
//     e.target.style.border = '3px solid green';
//     console.log('input is in focus');
//   });
// });

// // console.log(body);
// body.addEventListener('keypress', e => {
//   console.log(e.key);
// });
// const cardChange = e => {
//   e.preventDefault();
//   e.target.nodeName === 'IMG'
//     ? (e.target.src = 'https://picsum.photos/id/12/200/300')
//     : e.target.nodeName === 'DIV'
//     ? (e.target.style.background = 'black')
//     : e.target.nodeName === 'H3'
//     ? (e.target.textContent = 'Bye-Bye')
//     : '';
// };
// card.addEventListener('click', cardChange);

// ----------------------- intersection observer ---------------------------------------

import gallery from '../../data/gallery.js';
console.log(gallery);
const body = document.querySelector('body');
//console.log(body);

gallery.map(el => {
  body.innerHTML += `<img width='300' src='${el.src}' data-src='${el.data}' class ='imgs' id ='${el.id}'>`;
});

window.onload = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.isIntersecting ? (entry.target.src = entry.target.dataset.src) : '';
    });
  }, options);
  document.querySelectorAll('.imgs').forEach(el => {
    observer.observe(el);
  });
};


//  const body = document.querySelector("body");
// // console.log(body);
// for (let index = 0; index < 3; index++) {
//   const button = document.createElement("button");
//   button.classList = 'btn';
//   button.textContent = "tap here";
//   button.style.width = "70px";
//   button.style.height = "70px";
//   button.style.margin = "10px";
//   button.style.backgroundColor = "white";
//   body.style.background = "teal";
//   body.append(button);

//   // const buttonList = document.querySelectorAll('btn');
//   // const btn1 = buttonList[0];
//   // const btn1 = buttonList[1];
//   // const btn1 = buttonList[2];

// // не работающий пример!!! необходимо закончить !!!!
//   button.addEventListener("click", () => {
//     const button = document.querySelector("button");
//     body.style.background = "green";
//   });
// }
// --------------------------------------------------
const body = document.querySelector("body");


for (let i = 0; i < 10; i++) {
  const cube = document.createElement("div");
  cube.classList.add("cube");
  cube.textContent = i;
  body.append(cube);

  cube.addEventListener("click", () => {
    alert(cube.textContent);
  });
}

window.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  window.scrollY >= 200 && window.scrollY < 230 ? (body.style.background = 'teal') :
    window.scrollY > 300 && window.scrollY < 330 ?
      (body.style.background = 'blue')
      : '';
});

// body.addEventListener('click', (e) => {
//   body.innerHTML += `<div class='circle' style="top:${e.clientY}px; left:${e.clientX}px"></div>`
// })

const box = document.createElement('div');
box.classList.add('box');
box.textContent = 'Hello World'
body.append(box);
console.log(box);
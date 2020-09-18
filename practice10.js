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

let body = document.querySelector("body");
for (let index = 0; index < 5; index++) {


  const image = document.createElement("img");
  image.setAttribute("src", "https://picsum.photos/seed/picsum/500/300");
  image.setAttribute("alt", "nature");
  body.append(image);
}

console.log(image);

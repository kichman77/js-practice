
// преобразование коллекций в массив
const list = document.querySelector('.list');
console.dir(list);
const fullList = document.querySelectorAll('.item');
console.log(fullList);
const array = Array.prototype.slice.call(list.children); // slice.call()
console.log(array);
const array2 = [...list.children]; // способ spread!!
console.log(array2);
const array3 = Array.from(list.children); // Array.from
console.log(array3);
const array4 = [];

for (let i = 0; i < list.children.length; i++){
  array4.push(list.children[i]);
}
console.log(array4);
 fullList.__proto__ = Array.prototype;
console.log(fullList);

const button = document.getElementById('toggle-btn');
button.addEventListener('click', () => {
  list.classList.toggle('toggle-list');
})

list.setAttribute('data-value', 'value')
list.setAttribute('data-source', 'source')

// button.onclick = function () {
//   alert(`произошел клик`)
// }
console.dir(button);

// метод forEach
// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert)


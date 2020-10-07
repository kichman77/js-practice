// // Localstorage
// --------------------------------------------------------------

// Фщрма отзыва//
// const form = document.querySelector(".js-feedback-form");
// const textarea = document.querySelector("#exampleMessage");
// const nameInput = document.querySelector("#exampleNameInput");
// const emailInput = document.querySelector("#exampleEmailInput");
// const AddressInput = document.querySelector("#exampleAddressInput");

// const myMessages = [];

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   let userName = event.currentTarget.elements.userName.value;
//   let userEmail = event.currentTarget.elements.userEmail.value;
//   let userAddress = event.currentTarget.elements.userAddress.value;
//   let userMessage = event.currentTarget.elements.message.value;
//   console.log(userName, userEmail, userAddress, userMessage);

//   let myMesage = new UserMessage(userName, userEmail, userAddress, userMessage)
//   console.log(myMesage);

//   myMessages.push(JSON.stringify(myMesage));

//   event.currentTarget.reset()
// });
// console.log(myMessages);

// form.addEventListener("input", (event) => {

//   if (event.target.id === "exampleNameInput") {
//     localStorage.setItem("userName", event.target.value);
//     let userName = event.target.value;
//     console.log(userName);
//   }
//   if (event.target.id === "exampleEmailInput") {
//     localStorage.setItem("userEmail", event.target.value);
//     let userEmail = event.target.value;
//     console.log(userEmail);
//   }
//   if (event.target.id === "exampleAddressInput") {
//     localStorage.setItem("userAddress", event.target.value);
//     let userAddress = event.target.value;
//     console.log(userAddress);
//   }
//   if (event.target.id === "exampleMessage") {
//     localStorage.setItem("message", event.target.value);
//     let userMessage = event.target.value;
//     console.log(userMessage);
//   }

// });

// class UserMessage {
//   constructor (name, email, address, message) {
//     this.name = name;
//     this.email = email;
//     this.address = address;
//     this.message = message;
//   }
// }

// -----------------------------------------------------------
// Форма регистрации
// const signUpRefs = {
//   form: document.getElementById("js-form"),
//   inputName: document.getElementById("name"),
//   inputLogin: document.getElementById("login"),
//   inputPassword: document.getElementById("password")

// }
// console.log(signUpRefs);

// class User{
//   constructor(name,login,password) {
//     this.name = name;
//     this.login = login;
//     this.password = password;
//   }
// }

// const users = [];
// signUpRefs.form.addEventListener("submit", (e) => {
//   e.preventDefault()
//   let name = e.currentTarget.elements.name.value;
//   let login = e.currentTarget.elements.login.value;
//   let password = e.currentTarget.elements.password.value;
//   const newUser = new User(name, login, password)
//   console.log(newUser);
//   users.push(newUser)

//   e.currentTarget.reset()

// })
// console.log(users);
// ----------------------------------------------------------------
// Product Form

// const productRefs = {
//   form: document.getElementById("product"),
//   image: document.getElementById("picture"),
//   title: document.getElementById("title"),
//   description: document.getElementById("description"),
//   price: document.getElementById("price"),
//   quantity: document.getElementById("quantity"),
// };
// class Product {
//   constructor(image, title, description, price, quantity) {
//     this.image = image;
//     this.title = title;
//     this.description = description;
//     this.price = price;
//     this.quantity = quantity;
//   }
// }

// const products = [];
// productRefs.form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let img = e.currentTarget.elements.picture.value;
//   let title = e.currentTarget.elements.title.value;
//   let description = e.currentTarget.elements.description.value;
//   let price = e.currentTarget.elements.price.value;
//   let quantity = e.currentTarget.elements.quantity.value;

//   console.log(img,title,description,price,quantity);

//   const product = new Product(img, title, description, price, quantity)
//   console.log(product);
//   const JSONproduct = JSON.stringify(product);
//   console.log(JSONproduct);
//   products.push(JSONproduct)

//   e.currentTarget.reset()
//   return products
// })
// console.log(products);
// ----------------------------------------------------------------
const employeeRefs = {
  form: document.getElementById("employee"),
  firstName: document.getElementById("firstName"),
  lastName: document.getElementById("lastName"),
  age: document.getElementById("age"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
};
class Employee {
  constructor(firstName, lastName, age, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.phone = phone;
  }
}
const employees = [];
employeeRefs.form.addEventListener("submit", (e) => {
  e.preventDefault();
  let frName = e.currentTarget.elements.firstName.value;
  let lsName = e.currentTarget.elements.lastName.value;
  let age = e.currentTarget.elements.age.value;
  let email = e.currentTarget.elements.email.value;
  let phone = e.currentTarget.elements.phone.value;
  const employee = new Employee(frName, lsName, age, email, phone)
  console.log(employee);
  employees.push(JSON.stringify(employee))
  e.currentTarget.reset();
  console.log(employees);
  return employees
});
// --------------------------------------------------------------
// Localstorage (Andrey)

// let user = {
//     name: 'Sara',
//     age: 30,
//     status: 'admin',
// }
// let orders = {
//     id: 'vSFGFG2352534',
//     status: 'complete',
// }
// function mYtoSting(obj) {
//     return `${obj.name}, ${obj.age}, ${obj.status}, ${obj.adress} `
// }
// console.log((mYtoSting(user)))
// console.log(typeof user)
// JSON
// JSON.parse()
// let userToString = JSON.stringify(user);
// let userParsed = JSON.parse(userToString)
// // console.log(typeof userToString)
// console.log(typeof userParsed)
// console.log(localStorage)
// getItem: ƒ getItem()
// removeItem: ƒ removeItem()
// setItem: ƒ setItem()
// localStorage.setItem('userName', 'Vova');
// localStorage.setItem('pizza', 'Taysty');
// localStorage.setItem('avocado', 'chilly');
// let strUser = JSON.stringify(user)
// let userItemKey = localStorage.setItem('user', JSON.stringify(user))
// let ordersItemKey = localStorage.setItem('orders', JSON.stringify(orders));
// let itemfromLocalStorage = localStorage.getItem(user);
// let ordersFromLocalStorage = localStorage.getItem('orders')
// // console.log(itemfromLocalStorage)
// localStorage.removeItem('orders')
// console.log(ordersFromLocalStorage)
// localStorage.clear()
{
  /* <form class="feedback-form js-feedback-form">
<div class="five columns">
    <div>
        <label for="exampleNameInput">Your Name</label>
        <input
            name="name"
            class="u-full-width"
            type="text"
            placeholder="User name"
            id="exampleNameInput"
        />
    </div>
    <div>
        <label for="exampleMessage">Message</label>
        <textarea
            name="message"
            class="u-full-width"
            placeholder="Hi Dave …"
            id="exampleMessage"
            cols="30"
            rows="10"
        ></textarea>
    </div>
</div>
<input class="button-primary" type="submit" value="Submit" />
</form> */
}
// let form = document.querySelector('.js-feedback-form');
// let textarea = document.querySelector('textarea');
// textarea.addEventListener('input', (event) => {
//   let textMsg = event.target.value;
//   let msg = localStorage.getItem('msg');
//   if (msg !== '') {
//     localStorage.setItem('msg', textMsg);
//   }
// })
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
// console.log(event.currentTarget.elements.userEmail)
// console.log(event.currentTarget.elements.message)
// let form = event.currentTarget.elements;
// let textArea = form.message;
// let textAreaInput = textArea.value;
// console.log(textAreaInput)
// new FormData();
// console.log(new FormData())
// event.currentTarget.elements
//   let userName = event.currentTarget.elements.userName.value
//   localStorage.setItem('userName', userName);
//   console.log(userName)
//   if (localStorage.getItem('msg')) {
//     localStorage.removeItem('msg');
//   }
//   event.currentTarget.reset()
// })

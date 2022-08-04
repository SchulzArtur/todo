let getInput;
let getButton;
let newTodo;
let ulList;

const getDOMElements = () => {
  getInput = document.querySelector(".form-input");
  getButton = document.querySelector(".submit-form");
  ulList = document.querySelector(".todoList ul");
};

const addDOMEvents = () => {
  getButton.addEventListener("click", addNewTodo);
};

const addNewTodo = () => {
  newTodo = document.createElement("li");
  newTodo.textContent = getInput.value;
  ulList.appendChild(newTodo);
};

getDOMElements();
addDOMEvents();

// const addElement = (event, text) => {
//   event.preventDefault();
//   const txt = document.createElement(text);
//   document.body.appendChild(txt);
// };

// const addItemToList = document.getElementsByClassName("form - todo - list");
// addItemToList.addEventListener("submit", (event) =>
//   addElement(event, addItemToList.elements.text.value)
// );

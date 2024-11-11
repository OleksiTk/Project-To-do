let textInput = document.querySelector(".write__input");
let addButton = document.querySelector(".write__button");
let listTodo = document.querySelector(".list__to-do");
let liTodo = document.querySelector(".list__text");

addButton.addEventListener("click", AddYourToDo);

function AddYourToDo() {
  if (textInput.value == "") {
    alert("write your to do");
  } else {
    listTodo.style.display = "block";
    let li = document.createElement("li");
    li.classList.add("list__text");
    li.innerHTML = textInput.value;
    listTodo.appendChild(li);

    let cross = document.createElement("span");
    cross.classList.add("list__span");
    li.appendChild(cross);
  }
  textInput.value = "";
}

listTodo.addEventListener("click", check);

function check(e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
}

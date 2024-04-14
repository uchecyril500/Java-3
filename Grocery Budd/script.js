// let formButton = document.getElementById("buttonAdd");
// let formOne = document.getElementById("form1");
// let formTwo = document.getElementById("form2");
// formCount = 0;
// formButton.addEventListener("click", function (e) {
//   if (e.target) {
//     formCount++;
//     formOne.style.display = "flex";
//     formButton.innerText = "Add another form 🎯";
//   }
//   if (formCount === 2) {
//     formTwo.style.display = "flex";
//     formButton.style.display = "none";
//   }
// });

let todoForm = document.getElementById("todoForm");
let todoInput = document.getElementById("inputBox");
let TaskContainer = document.getElementById("recievingContainer");

let uncheckIcon = document.getElementById("unchecked");
let checkIcon = document.getElementById("checked");

let todoItems = [];
let editingSignal = -1;

todoForm.addEventListener("submit", createTodo);

// This function collects the todo from our inputs and save in the Local storage
function createTodo(event) {
  event.preventDefault();
  let todoEntered = todoInput.value;
  if (todoEntered.length == 0) {
    alert("You must a todo value");
  } else {
    if (editingSignal >= 0) {
      // Override existing todo and save it
      todoItems = todoItems.map(function (todo, index) {
        if (editingSignal === index) {
          return {
            todoInputed: todoEntered,
            checked: todo.checked,
          };
        } else {
          return {
            todoInputed: todo.todoInputed,
            checked: todo.checked,
          };
        }
      });
    } else {
      // Save a new todo item
      const todoFromUser = {
        todoInputed: todoEntered,
        checked: false,
      };
      todoItems.push(todoFromUser);
    }
    todoForm.reset();
    localStorage.setItem("todo", JSON.stringify(todoItems));
    fetchTodo();
    ShowEnteredTodo();
  }
}

// Now we create a function that will fetch those todos from the local storage
function fetchTodo() {
  if (localStorage.getItem("todo")) {
    todoItems = JSON.parse(localStorage.getItem("todo"));
  }
}
fetchTodo();

function ShowEnteredTodo() {
  TaskContainer.innerHTML = "";
  todoItems.forEach(function (eachTodos, index) {
    let printTodo = eachTodos.todoInputed;

    let todoItem = document.createElement("div");
    todoItem.classList.add("tasks");
    todoItem.setAttribute("id", `${index}`);

    let unCheck = document.createElement("i");
    unCheck.classList.add("fa-regular", "fa-circle-dot");
    unCheck.setAttribute("id", "unchecked");
    unCheck.setAttribute("data-action", "check");

    let check = document.createElement("i");
    check.classList.add("fa-solid", "fa-circle-dot");
    check.setAttribute("id", "checked");
    check.setAttribute("data-action", "check");

    let todoText = document.createElement("p");
    todoText.innerText = printTodo;
    todoText.setAttribute("data-action", "check");

    let editTodo = document.createElement("i");
    editTodo.classList.add("fa-regular", "fa-pen-to-square");
    editTodo.setAttribute("id", "edit");
    editTodo.setAttribute("data-action", "edit");

    let deleteTodo = document.createElement("i");
    deleteTodo.classList.add("fa-regular", "fa-trash-can");
    deleteTodo.setAttribute("id", "delete");
    deleteTodo.setAttribute("data-action", "delete");
    if (!eachTodos.checked) {
      todoItem.append(unCheck, todoText, editTodo, deleteTodo);
      TaskContainer.append(todoItem);
      todoText.style.textDecoration = "none";
    } else {
      todoItem.append(check, todoText, editTodo, deleteTodo);
      TaskContainer.append(todoItem);
      todoText.style.textDecoration = "line-through";
    }
  });
}

ShowEnteredTodo();

// Target element in the task container
TaskContainer.addEventListener("click", function (event) {
  let userTarget = event.target;
  let todoList = userTarget.parentElement;
  if (todoList.className !== "tasks") return;
  let filteredTodo = todoList;
  let todoItemID = Number(filteredTodo.id);
  let dataAction = userTarget.dataset.action;
  if (dataAction === "check") {
    checkMyTodo(todoItemID);
  } else if (dataAction === "edit") {
    editMyTodo(todoItemID);
  } else if (dataAction === "delete") {
    deleteMytodo(todoItemID);
  }
});

// check my todo item function
function checkMyTodo(todoID) {
  //i used the map method to loop over the array carrying out todo objects so i can modify the object (change the clicked value) and return a new array.
  todoItems = todoItems.map(function (todoObject, index) {
    if (index === todoID) {
      // if index is equal to todoID we want to return a new object
      return {
        todoInputed: todoObject.todoInputed,
        checked: !todoObject.checked,
      };
    } else {
      return {
        todoInputed: todoObject.todoInputed,
        checked: todoObject.checked,
      };
    }
  });
  ShowEnteredTodo();
}

// function to edit todos
function editMyTodo(todoItemID) {
  todoInput.value = todoItems[todoItemID].todoInputed;
  editingSignal = todoItemID;
}
editMyTodo();

// functions to delete todos
function deleteMytodo(deleteTodo) {
  todoItems = todoItems.filter(function (todo, index) {
    return index !== deleteTodo;
  });
  ShowEnteredTodo();
}

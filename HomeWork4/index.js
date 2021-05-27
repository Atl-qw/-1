
const tabsLinks = document.querySelectorAll(".tabs__link");
const tabsPanels = document.querySelectorAll(".tabs__pane");
tabsLinks.forEach((item) => {
  item.addEventListener("click", () => {
    let currentLink = item;
    let tabId = currentLink.getAttribute("href");
    let currentTab = document.querySelector(tabId);

    tabsLinks.forEach((item) => {
      item.classList.remove("tabs__link_active");
    });
    tabsPanels.forEach((item) => {
      item.classList.remove("tabs__pane_show");
    });

    currentLink.classList.add("tabs__link_active");
    currentTab.classList.add("tabs__pane_show");
  });
});

Todos = [];

let Todo = function (text, month, complited = false) {
  this.text = text;
  this.month = month;
  this.complited = complited;
  this.render = function () {
    // create li
    let todoLi = document.createElement("li");
    if (this.complited) todoLi.className = "completed";

    //create compete btn
    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = "✓";
    completeBtn.className = "success";
    todoLi.append(completeBtn);
    completeBtn.addEventListener(
      "click",
      function () {
        let todo = this;
        todo.complited = !todo.complited;
        if (todo.complited) todoLi.className = "completed";
        else {
          todoLi.className = "";
        }
      }.bind(this)
    );

    //create span
    let todoText = document.createElement("span");
    todoText.innerHTML = this.text;
    todoLi.append(todoText);

    //create delete btn
    let delBtn = document.createElement("button");
    delBtn.innerHTML = "Del";
    delBtn.className = "danger";
    todoLi.append(delBtn);
    let self = this;
    delBtn.addEventListener("click", function () {
      let liIndex = Todos.indexOf(self);
      Todos.splice(liIndex, 1);
      let parent = this.parentElement;
      parent.remove();
    });

    return todoLi;
  };
};

function getSelectedOption(sel) {
  let opt;
  for (let i = 0, len = sel.options.length; i < len; i++) {
    opt = sel.options[i];
    if (opt.selected === true) {
      break;
    }
  }
  return opt;
}

//changing filter
var todoSel = document.querySelector("#todoFilter");
todoSel.addEventListener("change", function () {
  renderAll();
});

function renderAll() {
  let todoSel = document.querySelector("#todoFilter");
  let selOption = getSelectedOption(todoSel);
  let currentTab = document.querySelector(".tabs__pane_show");
  let currentUl = currentTab.querySelector(".todolist-ul");
  
  currentUl.innerHTML = '';
  let monthTodos = Todos.filter((task) => {
    return task.month == currentTab;
  });
  let filteredTodos = monthTodos.filter((task) => {
    if (selOption.value == 'all') return true
    else if (selOption.value == 'completed') return task.complited
    else if (selOption.value == 'uncompleted') return !task.complited;
  });
  
  filteredTodos.forEach(task => {
    currentUl.append(task.render());
  });
  console.log(filteredTodos);
};

// adding a new message
let buttonAdd = document.querySelector("#addTodoBtn");
buttonAdd.addEventListener("click", function () {
  let todoInput = document.querySelector("#todoTextInput");
  let inputValue = todoInput.value;
  todoInput.value = "";
  if (!inputValue) {
    console.log("ADD TODO!!!");
    return;
  }
  let currentTab = document.querySelector(".tabs__pane_show");
  let task = new Todo(inputValue, currentTab, false);

  Todos.push(task);
  renderAll();
});

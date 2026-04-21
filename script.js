let todos = [];
let idCounter = 0;

let cardList = document.createElement("div");
let createTask = document.createElement("button");

createTask.textContent = "Press here to create a task!";

document.body.append(cardList, createTask);

createTask.addEventListener("click", () => {
  idCounter++;

  let task = {
    id: idCounter,
    taskTitle: prompt("enter title"),
    taskSubtitle: prompt("enter subtitle"),
    isCompleted: false,
  };

  todos.push(task);

  console.log(task);
  console.log(todos);

  renderTasks(todos);
});

function renderTasks(todos) {
  cardList.innerHTML = "";

  todos.forEach((todo) => {
    let taskCard = document.createElement("div");
    let taskCardTitle = document.createElement("p");
    taskCardTitle.textContent = todo.taskTitle;
    let taskCardSubTitle = document.createElement("p");
    taskCardSubTitle = todo.taskSubtitle;

    let taskCardIsCompleted = document.createElement("input");
    taskCardIsCompleted.type = "checkbox";
    taskCardIsCompleted.id = todo.id;

    let deleteCards = document.createElement("button");
    deleteCards.textContent = "Delete";

    cardList.append(taskCard);
    taskCard.append(
      taskCardTitle,
      taskCardSubTitle,
      taskCardIsCompleted,
      deleteCards,
    );
  });
}

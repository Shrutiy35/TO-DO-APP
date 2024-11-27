let todoList=[
    
];

  displayItems();
  
  function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    // validation: Check if the todo item or date is empty
    if (!todoItem || !todoDate) {
        alert("Please enter a valid todo item and a due date.");
        return; // Exit the function if validation fails
    }
     // If validation passes, add the todo item to the list
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
  }
  
  function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
      let {item, dueDate} = todoList[i];
      newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1);
        displayItems();"><i class="fa-solid fa-trash"></i></button>
      ` 
    }
    containerElement.innerHTML = newHtml;
  }
 
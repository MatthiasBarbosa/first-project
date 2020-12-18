var buttonAdd = document.querySelector("#add-todo");
console.log(buttonAdd);

buttonAdd.addEventListener ("click", function(event) {
    // Pegando o elemento ul
    var lista = document.querySelector("#todo-list");
    console.log(lista);

    // Pegando valor digitando no input
    let todo = document.querySelector("#new-todo");
    console.log(todo.value);

    // Criando li com nova todo
    var newLi = document.createElement("li");
    console.log(newLi);

    // Adicionando o valor digitado no input dentro da newLi
    newLi.textContent = todo.value;
    console.log(newLi);

    /** Adicionando newLi dentro da ul */
    lista.appendChild(newLi);
    
})
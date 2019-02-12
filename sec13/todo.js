todos = ["Buy new turtle"];
console.log("CONNECTED");

var input = prompt("What will you like to do?");

while(input !== "quit") {
    if(input === 'list') {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    input = prompt("What will you like to do? ");

}
console.log("You quit the app");

function listTodos() {
    console.log("*************");
    todos.forEach(function(todo, i) {
        console.log(i + " : " + todo);
    })
    console.log("*************");
}

function addTodo() {
    var newTodo = prompt("Add new todo");
        todos.push(newTodo);
        console.log("Added todo");
}

function deleteTodo() {
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
    console.log("Deleted todo"); 
}

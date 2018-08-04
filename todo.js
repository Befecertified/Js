//Ask user to enter keyword of action they want to perform
var action = prompt("What would you like to do?");
var Items = [];

//function to add new todo
function addTodo(){
    //ask user to enter new todo
    var newItem = prompt("Add new todo:");
    //add the todo to the end of the list
    var newTodo = Items.push(newItem);
    //get the name of the todo 
    var newTodoName = Items[newTodo - 1];
    //Print the name of the todo on console for feedback. Good for UX
    console.log(newTodoName + " Added to the list.")
}
//function to show all todos
var listTodo = function(){
    //print line above todos for good UI
    console.log("--------------");
    //Iterate through all todos
    Items.forEach(function(item){
        //get the index of each todo on the list
        var itemNum = Items.indexOf(item);
        //print out todo with index on the console
        console.log(itemNum + ": " +item);
    })
    //print line below todos for good UI
    console.log("--------------");
}
//function to delete a specific todo
function deleteTodo(){
    //Ask user for index of todo to be deleted
    var whatItem = prompt("Enter index of item to delete: ");
    //Delete the todo with specific index
    Items.splice(whatItem, 1);
    //Give feedback to user. Good for UX
    console.log("Todo Removed");
}
//Ask them for input if they didn't choose the "quit" keyword
while (action !== "quit"){
    //Check user input
    if(action === "new"){
        //Add a new todo at the "new" keyword
        addTodo();
    } else if (action === "list"){
        //List todo's if "list" keyword is typed
        listTodo();
    } else if (action === "delete"){
        //Delete todo if "delete" keyword is typed
        deleteTodo();
    }
    var action = prompt("What would you like to do?");
}







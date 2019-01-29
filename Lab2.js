//Array Of Strings
var tasks = [];
//Function
function addTask(task) {
    tasks.push(task);
    return tasks.length;
} //End Of Add Task
//Create a listAllTasks function
function listAllItems() {
    tasks.forEach(function (task) {
        console.log(task);
    });
}
//Delete Array
function deleteAllTask(task) {
    var index = tasks.indexOf(task, 0);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("Item " + task + " has been deleted");
    }
    else {
        console.log("Item not found: " + task);
    }
    return tasks.length;
}
addTask("Item1: ");
addTask("Item2: ");
addTask("Item3: ");
listAllItems();
deleteAllTask("Item2");
listAllItems();

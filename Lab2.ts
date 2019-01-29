//Array Of Strings
let tasks: Array<string> = [];

//Function
function addTask(task: string):number{

    tasks.push(task);
    return tasks.length;

}//End Of Add Task

//Create a listAllTasks function
function listAllItems() {

tasks.forEach(function(task){
    console.log(task);
})
}
//Delete Array
function deleteAllTask(task: string):number{
    let index:number = tasks.indexOf(task,0);

    if(index > -1)
    {
        tasks.splice(index, 1);
        console.log("Item " + task + " has been deleted");
    }
    else
    {
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

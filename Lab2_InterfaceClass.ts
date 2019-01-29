import {toDoInterface} from './Lab2_Interface';
 
class toDoClass implements toDoInterface{
    tasks: Array<string> = [];

         addTask(task:string):number{
        this.tasks.push(task);
        return this.tasks.length;

    }
        listAllItem() {

        tasks.forEach(function(task){
            console.log(task);
        })
        }
        //Delete Array
        deleteTask(task: string):number{
            let index:number = this.tasks.indexOf(task,0);
        
            if(index > -1)
            {
                this.tasks.splice(index, 1);
                console.log("Item " + task + " has been deleted");
            }
            else
            {
                console.log("Item not found: " + task);
            }
        
            return this.tasks.length;
        }
        
}

let testClass = new toDoClass();
testClass.addTask("Item1");
testClass.addTask("Item2");
testClass.addTask("Item3");
testClass.listAllItem();
testClass.deleteTask("Item2");
testClass.listAllItem();
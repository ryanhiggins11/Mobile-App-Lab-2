export interface toDoInterface{
    tasks:Array<string>;
    addTask(task:string):number;
    listAllItem():void;
    deleteTask(task:string):number;

}
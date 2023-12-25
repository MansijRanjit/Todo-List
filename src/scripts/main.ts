import { Task } from "./Task";
import { TaskList } from "./TaskList";

let status="all";
const taskList= new TaskList();

//Task Status handle on click
const menus= document.querySelectorAll(".navbar__menu button");

menus.forEach(btn =>{
  btn.addEventListener("click",()=>{
    document.querySelector("button.active")?.classList.remove("active");
    btn.classList.add("active");
    status=btn.id;
    
    render();
  });
});


//Create Task and add to Task List
function createTask(value:string): Task{
  const task = new Task(value);
  taskList.addTask(task);

  return task;
}

// createTask("Learn to swim");
// createTask("Learn to fly");

//Search based on searchTerm and status
function search(tasklist:TaskList,searchTerm:string=""):TaskList{
  const tasks = tasklist.list.filter(item =>{
    if(status=="completed"){      
      return item.value.toLowerCase().includes(searchTerm.toLowerCase()) && item.completed===true;
    }
    else if(status=="pending"){      
      return item.value.toLowerCase().includes(searchTerm.toLowerCase()) && item.completed===false;
    }
    else{
      return item.value.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });
  return new TaskList(tasks);
}

//Display Tasks in taskList
const taskListElement = document.querySelector(".task-list") as HTMLInputElement;

function renderList(tasks: TaskList){
  if (!taskListElement) throw new Error("Element not found");

  if(tasks.list.length==0){
    taskListElement.innerHTML=`<h2 class="noTaskMessage">You don't have any tasks</h2>`;
  }
  else{
    taskListElement.innerHTML="";
  }

  tasks.list.forEach(task => {
    const element = document.createElement("div");
    element.classList.add("task-item");

    const label = document.createElement("label");
    label.classList.add("form-control");
    
    const taskValue= document.createElement("p");
    taskValue.classList.add("task-item-value");
    taskValue.textContent=task.value;
    
    const inputField=document.createElement("input");
    inputField.setAttribute("type","checkbox");
    inputField.checked=task.completed;

    //Checkbox
    inputField.onchange = (e:Event) =>{      
      task.completed= (e.target as HTMLInputElement)?.checked;
      if(task.completed){
        taskValue.classList.add("checked");
        render();
      }else{
        taskValue.classList.remove("checked");
        render();
      }
    };
    if(task.completed){
      taskValue.classList.add("checked");
    }else{
      taskValue.classList.remove("checked");
    }

    label.appendChild(taskValue);
    label.appendChild(inputField);
    
    element.appendChild(label);
    taskListElement.appendChild(element);

  });
}
render();

function render(searchParam:string=""){
  const filteredTaskList=search(taskList,searchParam);
  renderList(filteredTaskList);
}

//Search Tasks
const searchInput = document.querySelector(".searchInput") as HTMLInputElement;

if(searchInput){
  searchInput.addEventListener("input", (e:Event) => {
    const searchParam = (e.target as HTMLInputElement)?.value;
    render(searchParam);
  });
}


//Add Tasks
const addTaskInput = document.querySelector(".addTaskInput") as HTMLInputElement;
addTaskInput?.addEventListener("keyup",e =>{
  const userTask= addTaskInput.value.trim();
  if(e.key =="Enter" && userTask){
    addTask(userTask);
  }
});

const addButton = document.querySelector(".addIcon") as HTMLInputElement;
addButton.onclick=function(){
  const userTask= addTaskInput.value.trim();
  if(userTask){
    addTask(userTask);
  }
};

function addTask(userTask:string):void{
  addTaskInput.value="";
  createTask(userTask);
  render();
}


var todos=[];

function init()
{
    var leftPaneDiv = document.createElement("div");
  var rightPaneDiv = document.createElement("div");

  
  leftPaneDiv.setAttribute("id","leftDiv");
  
  var heading = document.createElement("h1");
  heading.innerHTML = "Task List";
  leftPaneDiv.appendChild(heading);

  var subHeading = document.createElement("h3");
  subHeading.innerHTML = "add task by typing in the right and press enter, it should show task in list below";
  leftPaneDiv.appendChild(subHeading);

  rightPaneDiv.setAttribute("id","rightDiv");

  document.body.appendChild(leftPaneDiv);
  document.body.appendChild(rightPaneDiv);

      var inputToDo=document.createElement("textarea");

      inputToDo.setAttribute("placeholder","enter your tasks in the list");
       inputToDo.setAttribute("class","input");
         inputToDo.setAttribute("id","todoBox");

         rightPaneDiv.appendChild(inputToDo);

         inputToDo.addEventListener("keydown",eventHandler);
}

function eventHandler(event){

  var keyCode = event.code;
  var todoBox = document.getElementById("todoBox");

  var value = todoBox.value;

  if(keyCode === "Enter" && value !== "")
  {
    //prevent dfeault prevents the default functuonality of bringing the don the cursor while ressing enter
    event.preventDefault();
    var container = document.createElement("div");
    var taskHeading = document.createElement("p");
    var readButton = document.createElement("INPUT");
    readButton.setAttribute("type","checkbox");
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class","db");
    deleteButton.setAttribute("onclick","deletebutton(this)")


    container.appendChild(taskHeading);
    container.appendChild(readButton);
    container.appendChild(deleteButton);

    container.setAttribute("class","todoContainer")


    deleteButton.innerHTML = "delete"

    

    taskHeading.innerHTML = value;

    todos.push(value);
    //becoz local stroge stores values in string format
    localStorage.setItem("todos", JSON.stringify(todos) )

    var leftDiv = document.getElementById("leftDiv");
    leftDiv.appendChild(container);

    todoBox.value = "";

  }


}
init();

let storedToDos = localStorage.getItem("todos");
if(storedToDos!=null)
{
  //coverts the string to the array
  todos=JSON.parse(storedToDos);
}

todos.forEach(function(value)
{
var container = document.createElement("div");
container.setAttribute("class","todoContainer")
    var taskHeading = document.createElement("p");
    taskHeading.innerHTML = value;
    var readButton = document.createElement("INPUT");
    readButton.setAttribute("type","checkbox");

    var editButton=document.createElement("button");
    editButton.setAttribute("id","edit");
    editButton.setAttribute("onclick","editbtn(this)");
    editButton.innerHTML="edit"
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class","db");
    deleteButton.setAttribute("onclick","deletebutton(this)")
    deleteButton.innerHTML = "delete";
    
    


    container.appendChild(taskHeading);
    container.appendChild(readButton);
    container.appendChild(editButton);
    container.appendChild(deleteButton);
    var leftDiv = document.getElementById("leftDiv");
    leftDiv.appendChild(container);
})
   
    function deletebutton(deleteButton,stringValue) {
    
        var text = deleteButton.parentElement.firstChild.innerHTML;
        var index = todos.indexOf(text);
        todos.splice(index, 1);
    
        localStorage.clear;
        localStorage.setItem("todos", JSON.stringify(todos));
        deleteButton.parentElement.remove();

    }
 
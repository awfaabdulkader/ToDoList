let TaskInput = document.getElementById('taskInput');
let ButtonAdd = document.getElementById('btnAdd');
let TaskList = document.getElementById('taskList');
let RadioCheck = document.getElementById('radiocheck');
let List = document.getElementById('listLi');
let ButtonDelet = document.getElementById('delet');
let ButtonUpdate = document.getElementById('update');

//storage data 


let storedata;
if(localStorage.todo != null){
    storedata = JSON.parse(localStorage.todo)
}else{
    storedata=[];
}
//store data local
ButtonAdd.addEventListener('click' ,function(){
    let tasks = TaskInput.value.trim();
    if(tasks !== ''){
       // Store tasks as objects with properties
       storedata.push(tasks);
        TaskInput.value="";
        Adddatalist()
          // Store updated data in localStorage
          localStorage.setItem('todo' , JSON.stringify(storedata))
    }
})

function Adddatalist() {
    AddNewToDo= ""; // Clear existing list

    for (let i = 0; i < storedata.length; i++) {
        AddNewToDo +=`
        <div class='btnLi'>
        <input type="radio" id="radiocheck" class="testI" name="taskRadio" value="${storedata[i]}">
        <li class="listLi testI">${storedata[i]}</li>
        <i onclick=DeletElement(${i}) class="fa-solid fa-delete-left update edit testI" style="color: #020d5f;"></i>
       
        </div>
        `
               
            }
            TaskList.innerHTML = AddNewToDo;
    }
    Adddatalist()

//function delet 
function DeletElement(i){
  storedata.splice(i,1)
  localStorage.todo = JSON.stringify(storedata)
  Adddatalist()
}

document.addEventListener('DOMContentLoaded', function () {
    const done = document.getElementById('radiocheck');
    const testIElements = document.querySelectorAll('.listLi'); // Select all elements with class "testI"

    done.addEventListener('click', function () {
        if (done.checked) {
            testIElements.forEach(function (element) {
                element.style.textDecoration = "line-through";
            });
        } else {
           
                element.style.textDecoration = "none";
           
        }
    });
});

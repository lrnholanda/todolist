const weekday = document.getElementById("dia");
const month = document.getElementById("mes");
const task = document.getElementById("task-text");
const add = document.getElementById("add-button");
const box = document.getElementById("box-tasks")

const greeting = document.getElementById("greeting");

function diaAtual(){
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June',
    'July','August','September','October','November','December'];
   const dia = new Date();
   weekday.textContent = days[dia.getDay()];
   month.textContent = months[dia.getMonth()];
}

function welcome(){
    const hour = new Date().getHours();
    const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
    let welcomeText = "";
    
    if (hour < 12) welcomeText = welcomeTypes[0];
    else if (hour < 18) welcomeText = welcomeTypes[1];
    else welcomeText = welcomeTypes[2];
    
    greeting.innerHTML = welcomeText;
}

add.addEventListener("click", function(){
    const t = task.value
   //todo DIV 
   const innerBox = document.createElement('div');
   innerBox.classList.add('todo');
   box.appendChild(innerBox);
   //todo input

   const innerInput = document.createElement('input')
   innerInput.classList.add('taskInput')
   innerInput.value = t;

   const completedButton = document.createElement('button')
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add('complete_btn') 
   innerBox.appendChild(completedButton);


   innerBox.appendChild(innerInput);
   if(t.value === ""){
    return null
   }
  //delete Button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('delete_btn')
  innerBox.appendChild(deleteButton);

  task.value = ""
}


)


//////////////
diaAtual();
welcome();
/////////////

box.addEventListener('click', function(e){
    const item = e.target;

    if(item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    if (item.classList[0] === "complete_btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
})

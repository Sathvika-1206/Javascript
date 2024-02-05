const task =document.getElementById("input-box");
const list = document.getElementById("list-container");

// NO PROBLEM IS USING THOSE VALUE IT GETS UPDATED EACH AND EVERY TIME
function addTask(){
  //WE NEED TO COMPARE WITH THE TASK AND ITS VALUE AS THE DATATYPE IS NOT MENTIONED
  if(task.value === ""){
    alert("Enter a valid task");
  }
  else{
    //document.createElement creates an HTML element
    let li=document.createElement("li");
    li.innerHTML=task.value;
    // append the value to the task
    list.appendChild(li);
    // list --- li === span
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    
  }
  task.value="";
  storeData();
}

list.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    storeData();
  }
  else if(e.target.tagName=="SPAN"){
    e.target.parentElement.remove();
    storeData();
  }
},false)

function storeData(){
  //getting inpt from the inner html
  localStorage.setItem("data",list.innerHTML);
}

function showdata(){
  //giving output to the inner html
  list.innerHTML=localStorage.getItem("data");
}

showdata();
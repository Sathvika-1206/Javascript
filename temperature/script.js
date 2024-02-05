const temp=document.getElementById("temp");
const celsius=document.getElementById("celsius");
const fahrenheit=document.getElementById("fahrenheit");
const calc=document.getElementById("calc");
const res=document.getElementById("res");
let convert;

calc.addEventListener("click",function(){
  let inp=temp.value;
  inpu=Number(temp);
  // to have a fixed decimal number use .toFixed
  if(celsius.checked){
    convert=((inp)*9/5 +32).toFixed(1)+"°F";
  }
  else if(fahrenheit.checked){
    convert=((inp-32)*5/9).toFixed(1)+"°C";
  }
  else{
    alert("Select any Option");
  }
  res.textContent=convert;
})
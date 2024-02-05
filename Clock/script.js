let hrs=document.getElementById("hrs");
let min=document.getElementById("min")
let sec=document.getElementById("sec");


//Date() function creates a current time and date
// new keyword rreturns a new object
setInterval(()=>{
  let time=new Date();
hrs.innerHTML=(time.getHours()<10?"0":"")+time.getHours();
min.innerHTML=(time.getMinutes()<10?"0":"")+time.getMinutes();
sec.innerHTML=(time.getSeconds()<10?"0":"")+time.getSeconds();
},1000);

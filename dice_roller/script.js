function rollDice(){
  // we need to calucate to find the ending stop so we should use value
  const input=document.getElementById("num").value;
  const res_txt=document.getElementById("text");
  const res_img=document.getElementById("images");
  const value=[];
  const img=[];
// remember to declare the iteration variable
  for(let i=0;i<input;i++){
    const res=Math.floor(Math.random()*6)+1;
    value.push(res);
    img.push(`<img src="images/${res}.png" alt="Dice ${value}">`)
  }

  res_txt.textContent=`The values = ${value}`;
  res_img.innerHTML=img.join(" ");
}
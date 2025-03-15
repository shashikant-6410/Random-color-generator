 let btn=document.querySelector("button");
 
 btn.addEventListener("click",function(){
    let random=randomColor();
    let h1=document.querySelector("h1");
    h1.innerText=random;
    let div=document.querySelector("div");
    div.style.backgroundColor=random;

 });
function randomColor(){
let red=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);
let color= (`rgb(${red},${green},${blue})`);

 return color;
 }
 
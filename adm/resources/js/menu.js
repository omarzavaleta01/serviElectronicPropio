const menu = document.querySelector(".lateral-menu");
const menuCel=document.querySelector(".bars__menu");
const bodys = document.querySelector(".cuerpoCard");
const logos = document.querySelector(".logo");
const table= document.querySelector(".tabla");
const fa= document.querySelector(".cuerpo");
const resetea= document.getElementById('elform');
var elements = document.querySelectorAll("input[type='text'],input[type='password']");

document.querySelector(".bars__menu").addEventListener("click", animacion);
document.querySelector(".mensaje").addEventListener("click", alertas); 
document.querySelector("#can").addEventListener("click", alertas);
function animacion(){
    
    
    menuCel.classList.toggle("bars__menu-active");
    menu.classList.toggle("lateral-menu-active");
    bodys.classList.toggle("cuerpoCard-active");
    logos.classList.toggle("logo-active");
    table.classList.toggle("tabla-active");
    fa.classList.toggle("cuerpo-active");

}

function alertas(){
    
    window.alert("Se cancelo la operacón");
    resetea.reset();
}





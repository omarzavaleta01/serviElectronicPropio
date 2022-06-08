const hambuergesa= document.querySelector(".bars__menu");
const navar = document.querySelector(".nav-menu")

document.querySelector(".bars__menu").addEventListener("click", animaciones);

let uno=document.querySelector(".line1__bars-menu");
let dos=document.querySelector(".line2__bars-menu");
let tres=document.querySelector(".line3__bars-menu");
let secUno=document.querySelector(".contenidos");
let secDos=document.querySelector(".dos"); 
let secTres=document.querySelector(".ent");
function animaciones(){

    navar.classList.toggle("nav-menu-active");
    secUno.classList.toggle("activeent");
    secDos.classList.toggle("activeent");
    secTres.classList.toggle("activeent");
    uno.classList.toggle("activeline1__bars-menu");
    dos.classList.toggle("activeline2__bars-menu");
    tres.classList.toggle("activeline3__bars-menu");
}
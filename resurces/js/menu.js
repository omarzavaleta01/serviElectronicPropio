
const icono = document.querySelector(".bars-menu");
const menu = document.querySelector(".nav-menu");

document.querySelector(".bars__menu").addEventListener("click", animacioMenu); // seleccionar e elemento del html, enseguida le añadimos un evento

let line1_bars = document.querySelector(".line1__bars-menu");
let line2_bars = document.querySelector(".line2__bars-menu");
let line3_bars = document.querySelector(".line3__bars-menu");                          // seleccionar otro elemento
let cardTitle = document.querySelector(".ent");
let cards = document.querySelector(".contenidos");
let card2 = document.querySelector(".dos");
let links = document.querySelector(".nav-link");
let ln = document.querySelector(".ns");
function animacioMenu() {
    menu.classList.toggle("nav-menu-visible");
    cardTitle.classList.toggle("activeredire");
    cards.classList.toggle("activeredire");
    card2.classList.toggle("activedos");
    links.classList.toggle("activenav-link");
    ln.classList.toggle("activens");
    line1_bars.classList.toggle("activeline1__bars-menu");
    line2_bars.classList.toggle("activeline2__bars-menu");
    line3_bars.classList.toggle("activeline3__bars-menu");



}
const botonMenu=document.querySelector(".boton-menu");
const navLinks=document.querySelector(".nav-links");

botonMenu.addEventListener("click",()=>{
    navLinks.classList.toggle("menu-abierto");
})
const botonMenu=document.querySelector(".boton-menu");
const navLinks=document.querySelector(".nav-links");
const nav=document.querySelector(".nav");
const header=document.querySelector(".header");
const posicionActualNav=nav.offsetTop;

botonMenu.addEventListener("click",()=>{
    navLinks.classList.toggle("menu-abierto");
})
window.addEventListener("scroll",()=>{
    const navDebeFijarse=window.scrollY>=posicionActualNav;
    nav.classList.toggle("nav-fijo",navDebeFijarse);
    if(navDebeFijarse){
        header.style.paddingBottom=`${nav.offsetHeight}px`
    }else{
        header.style.paddingBottom="";
    }
});
const navDesplegable = document.getElementById("navDesplegable");
const menuButton = document.getElementById("menuButton");
let menuDesplegado = false;

menuButton.addEventListener("click", () => {
    if(menuDesplegado){
        menuButton.style.rotate = "0deg";
        navDesplegable.style.display = "none";
        navDesplegable.setAttribute("reverse","true");
        setTimeout(()=> {
            navDesplegable.style.display = "flex";
        }, 1);
        setTimeout(() => {
            navDesplegable.style.display = "none";
        }, 300);
        menuDesplegado = false;
    }else{
        navDesplegable.removeAttribute("reverse");
        menuButton.style.rotate = "90deg";
        navDesplegable.style.display = "flex";
        menuDesplegado = true;
    }
    
})
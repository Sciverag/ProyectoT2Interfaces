const botonValencia = document.getElementById("botonValencia");
const botonSidney = document.getElementById("botonSidney");
const botonLondres = document.getElementById("botonLondres");
const formReserva = document.getElementById("formReserva");

botonValencia.addEventListener("click", () => {
    botonValencia.setAttribute("seleccionado","");
    botonSidney.removeAttribute("seleccionado");
    botonLondres.removeAttribute("seleccionado");

    formReserva.style.display = "block";
})

botonSidney.addEventListener("click", () => {
    botonValencia.removeAttribute("seleccionado");
    botonSidney.setAttribute("seleccionado","");
    botonLondres.removeAttribute("seleccionado");

    formReserva.style.display = "block";
})

botonLondres.addEventListener("click", () => {
    botonValencia.removeAttribute("seleccionado");
    botonSidney.removeAttribute("seleccionado");
    botonLondres.setAttribute("seleccionado","");

    formReserva.style.display = "block";
})
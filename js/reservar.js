const botonValencia = document.getElementById("botonValencia");
const botonSidney = document.getElementById("botonSidney");
const botonLondres = document.getElementById("botonLondres");
const formReserva = document.getElementById("formReserva");
const placeContainer = document.getElementById("placeContainer");
const userContainer = document.getElementById("userContainer");
const confirmarReserva = document.getElementById("confirmarReserva");
const days = document.querySelectorAll(".calendar .day");
const form = document.getElementById("reservation-form");
const successMessage = document.getElementById("success-message");

botonValencia.addEventListener("click", () => {
  botonValencia.setAttribute("seleccionado", "");
  botonSidney.removeAttribute("seleccionado");
  botonLondres.removeAttribute("seleccionado");

  formReserva.style.display = "block";
})

botonSidney.addEventListener("click", () => {
  botonValencia.removeAttribute("seleccionado");
  botonSidney.setAttribute("seleccionado", "");
  botonLondres.removeAttribute("seleccionado");

  formReserva.style.display = "block";
})

botonLondres.addEventListener("click", () => {
  botonValencia.removeAttribute("seleccionado");
  botonSidney.removeAttribute("seleccionado");
  botonLondres.setAttribute("seleccionado", "");

  formReserva.style.display = "block";
})

confirmarReserva.addEventListener("click", () => {
  formReserva.style.display = "none";
  placeContainer.style.display = "none";
  userContainer.style.display = "block";
})




days.forEach((day) => {
  day.addEventListener("click", function () {
    if (!day.classList.contains("header") && day.textContent.trim() !== "") {
      days.forEach((d) => d.classList.remove("selected"));
      day.classList.add("selected");
    }
  });
});





form.addEventListener("submit", function (event) {
  event.preventDefault();

  const privacyChecked = document.getElementById("privacidad").checked;
  if (!privacyChecked) {
    alert("Debes aceptar las políticas de privacidad para continuar.");
    return;
  }

  successMessage.style.display = "block";

  setTimeout(() => {
    successMessage.style.display = "none";
    window.location.href = "index.html";
  }, 3000);
});


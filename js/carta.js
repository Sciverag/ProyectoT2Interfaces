const botonEntrantes = document.getElementById("botonEntrantes");
const botonPrincipales = document.getElementById("botonPrincipales");
const botonPostres = document.getElementById("botonPostres");
const botonBebidas = document.getElementById("botonBebidas");
const entrantes = document.getElementById("entrantes");
const principales = document.getElementById("principales");
const postres = document.getElementById("postres");
const bebidas = document.getElementById("bebidas");

botonEntrantes.addEventListener("click", () => {
    entrantes.style.display = "grid";
    principales.style.display = "none";
    postres.style.display = "none";
    bebidas.style.display = "none";
})

botonPrincipales.addEventListener("click", () => {
    entrantes.style.display = "none";
    principales.style.display = "grid";
    postres.style.display = "none";
    bebidas.style.display = "none";
})

botonPostres.addEventListener("click", () => {
    entrantes.style.display = "none";
    principales.style.display = "none";
    postres.style.display = "grid";
    bebidas.style.display = "none";
})

botonBebidas.addEventListener("click", () => {
    entrantes.style.display = "none";
    principales.style.display = "none";
    postres.style.display = "none";
    bebidas.style.display = "grid";
})
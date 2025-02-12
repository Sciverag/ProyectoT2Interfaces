const valenciaSection = document.getElementById("valenciaSection");
const sidneySection = document.getElementById("sidneySection");
const londresSection = document.getElementById("londresSection");
const infoRestaurante = document.getElementById("infoRestaurante");

valenciaSection.addEventListener("mouseover", () => {
    infoRestaurante.innerText = "La gastronomía valenciana son los alimentos, las técnicas y la demás tradición culinaria de la Comunidad Valenciana, situada en el este de España, a orillas del Mediterráneo. Como tal, es parte integral de la dieta mediterránea, e incluye aceite de oliva, multitud de frutas y verduras, así como productos del mar.";
})

sidneySection.addEventListener("mouseover", () => {
    infoRestaurante.innerText = "Entre los platos más tradicionales de Australia que se pueden saborear en Sydney, hay que señalar algunas recetas cuya base son el pescado o la carne, como por ejemplo el filete con ostras, el South Sea fish (pescado al limón), las tortitas de cordero con manzana o el cordero rehogado."
})

londresSection.addEventListener("mouseover", () => {
    infoRestaurante.innerText = "La cocina británica se caracteriza por tener sabores muy intensos y utilizar condimentos de muy variada índole, lo cual puede entenderse si se tiene en cuenta su estrecha relación con países asiáticos: hay muchos rasgos de la cocina de esta región del globo en la comida inglesa."
})
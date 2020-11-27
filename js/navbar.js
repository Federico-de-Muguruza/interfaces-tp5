let dropdown = document.querySelector("#dropdown");

dropdown.addEventListener("click", mostrarMenuOculto);

function mostrarMenuOculto() {
    let menu_oculto = document.querySelector("#menu-oculto");

    console.log(menu_oculto);
    menu_oculto.classList.toggle("d-none");
}
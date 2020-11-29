document.querySelector("#nav-dropdown-fuera").addEventListener("click", function () {
    let menu_oculto = document.querySelector("#nav-menu-oculto-fuera");
    menu_oculto.classList.toggle("menu-oculto");
    menu_oculto.classList.toggle("existente");
})

document.querySelector(".nav-fuera").addEventListener("click", function () {
    window.location = "../html/index.html";
})

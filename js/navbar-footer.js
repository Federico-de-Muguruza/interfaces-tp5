let containerNavDentro = document.querySelector(".contenedor-nav-dentro");
if (containerNavDentro)
    fetch("../html/navbar-dentro.html").then(function (r) {
        r.text().then(function (html) {
            containerNavDentro.innerHTML = html;
        })
    })

let containerNavFuera = document.querySelector(".contenedor-nav-fuera");
if (containerNavFuera)
    fetch("../html/navbar-fuera.html").then(function (r) {
        r.text().then(function (html) {
            containerNavFuera.innerHTML = html;

            //________________________funcionalidad navbar fuera_________________________

            document.querySelector("#nav-dropdown-fuera").addEventListener("click", function () {
                let menu_oculto = document.querySelector("#nav-menu-oculto-fuera");
                menu_oculto.classList.toggle("existente");
            })

            document.querySelector(".nav-fuera").addEventListener("click", function () {
                window.location = "../html/index.html";
            })

        })
    })

//contenedor-general

let containerFoot = document.querySelector(".contenedor-footer");
if (containerFoot)
    fetch("../html/footer.html").then(function (r) {
        r.text().then(function (html) {
            containerFoot.innerHTML = html;
        })
    })

let containerMusic = document.querySelector(".contenedor-reproductor");
if (containerMusic)
    fetch("../html/reproductor.html").then(function (r) {
        r.text().then(function (html) {
            containerMusic.innerHTML = html;
        })
    })


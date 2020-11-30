let containerNavDentro = document.querySelector(".contenedor-nav-dentro");
if (containerNavDentro)
    fetch("../html/navbar-dentro.html").then(function (r) {
        r.text().then(function (html) {
            containerNavDentro.innerHTML = html;

            //________________________funcionalidad navbar dentro_________________________
            let notificaciones = document.querySelector("#btn-nav-menu-oculto-dentro-notificaciones");
            let perfil = document.querySelector("#btn-nav-menu-oculto-dentro-perfil");
            let menu_oculto_perfil = document.querySelector("#nav-menu-oculto-dentro-perfil");
            let menu_oculto_notificaciones = document.querySelector("#nav-menu-oculto-dentro-notificaciones");

            notificaciones.addEventListener("click", function () {
                menu_oculto_notificaciones.classList.toggle("menu-oculto");
                menu_oculto_notificaciones.classList.toggle("existente");

                menu_oculto_perfil.classList.remove("existente");
                menu_oculto_perfil.classList.add("menu-oculto");
            })

            perfil.addEventListener("click", function () {
                menu_oculto_perfil.classList.toggle("menu-oculto");
                menu_oculto_perfil.classList.toggle("existente");

                menu_oculto_notificaciones.classList.add("menu-oculto");
                menu_oculto_notificaciones.classList.remove("existente");
            })

            document.querySelector(".nav-home").addEventListener("click", function () {
                window.location = "../html/inicio-registrado.html";
            })
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


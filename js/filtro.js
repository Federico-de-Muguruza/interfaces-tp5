let title = document.querySelector("#title");
let box_option_genero = document.querySelector("#box-option-genero");
let box_option_tipo = document.querySelector("#box-option-tipo");
let box_option_idioma = document.querySelector("#box-option-idioma");
let box_option_fecha = document.querySelector("#box-option-fecha");
let box_option_duracion = document.querySelector("#box-option-duracion");

box_option_duracion.addEventListener("click", mostrarDuracion);

function mostrarDuracion() {
    quitarPadding();

    title.innerHTML = "Duración";

    let ocultar = document.querySelectorAll("#ocultar");

    for (let i = 0; i < ocultar.length; i++) {
        ocultar[i].classList.toggle("d-none");
    }

    let duracion = document.querySelector("#box-duracion");

    duracion.classList.toggle("d-none");

    if (title.innerHTML == "Duración") {
        document.querySelector("#btn-cancelar").addEventListener("click", () => {
            for (let i = 0; i < ocultar.length; i++) {
                ocultar[i].classList.remove("d-none");
            }
            duracion.classList.add("d-none");
            title.innerHTML = "Filtrar por";
            agregarPadding();
        })
        document.querySelector("#btn-aplicar").addEventListener("click", () => {
            for (let i = 0; i < ocultar.length; i++) {
                ocultar[i].classList.remove("d-none");
            }
            duracion.classList.add("d-none");
            title.innerHTML = "Filtrar por";
            agregarPadding();
        })  
    }   
}

box_option_fecha.addEventListener("click", mostrarFecha);

function quitarPadding() {
    box_option_idioma.style.padding = 0;
    box_option_fecha.style.padding = 0;
    box_option_genero.style.padding = 0;
    box_option_tipo.style.padding = 0;
    box_option_duracion.style.padding = 0;
}

function agregarPadding() {
    box_option_idioma.style.padding = 10;
    box_option_fecha.style.padding = 10;
    box_option_genero.style.padding = 10;
    box_option_tipo.style.padding = 10;
    box_option_duracion.style.padding = 10;
}

function mostrarFecha() {

    quitarPadding();

    title.innerHTML = "Fecha";

    let ocultar = document.querySelectorAll("#ocultar");

    for (let i = 0; i < ocultar.length; i++) {
        ocultar[i].classList.toggle("d-none");
    }

    let fecha = document.querySelector("#fecha");

    fecha.classList.toggle("d-none");

    if (title.innerHTML == "Fecha") {
        document.querySelector("#btn-cancelar").addEventListener("click", () => {
            for (let i = 0; i < ocultar.length; i++) {
                ocultar[i].classList.remove("d-none");
            }
            fecha.classList.add("d-none");
            title.innerHTML = "Filtrar por";
            agregarPadding();
        })
        document.querySelector("#btn-aplicar").addEventListener("click", () => {
            for (let i = 0; i < ocultar.length; i++) {
                ocultar[i].classList.remove("d-none");
            }
            fecha.classList.add("d-none");
            title.innerHTML = "Filtrar por";
            agregarPadding();
        })  
    }   
}

box_option_idioma.addEventListener("click", mostrarIdiomas);

function mostrarIdiomas() {

    quitarPadding();

    title.innerHTML = "Idioma";

    let ocultar = document.querySelectorAll("#ocultar");

    for (let i = 0; i < ocultar.length; i++) {
        ocultar[i].classList.toggle("d-none");
    }

    let box_idiomas = document.querySelector("#box-idiomas");

    box_idiomas.classList.toggle("d-none");

    if (title.innerHTML == "Idioma") {
        document.querySelector("#btn-cancelar").addEventListener("click", () => {
            for (let i = 0; i < ocultar.length; i++) {
                ocultar[i].classList.remove("d-none");
            }
            box_idiomas.classList.add("d-none");
            title.innerHTML = "Filtrar por";
            agregarPadding();
        })
        document.querySelector("#btn-aplicar").addEventListener("click", () => {
            for (let i = 0; i < ocultar.length; i++) {
                ocultar[i].classList.remove("d-none");
            }
            box_idiomas.classList.add("d-none");
            title.innerHTML = "Filtrar por";
            agregarPadding();
        })  
    }  
}

box_option_tipo.addEventListener("click", mostrarTipos);

function mostrarTipos() {

    quitarPadding();

    title.innerHTML = "Tipo";

    let ocultar = document.querySelectorAll("#ocultar");

    for (let i = 0; i < ocultar.length; i++) {
        ocultar[i].classList.toggle("d-none");
    }

    let box_tipos = document.querySelector("#box-tipos");

    box_tipos.classList.toggle("d-none");

    if (title.innerHTML == "Tipo") {
        document.querySelector("#btn-cancelar").addEventListener("click", () => {
            for (let i = 0; i < ocultar.length; i++) {
                ocultar[i].classList.remove("d-none");
            }
            box_tipos.classList.add("d-none");
            title.innerHTML = "Filtrar por";
            agregarPadding();
        })
        document.querySelector("#btn-aplicar").addEventListener("click", () => {
            for (let i = 0; i < ocultar.length; i++) {
                ocultar[i].classList.remove("d-none");
            }
            box_tipos.classList.add("d-none");
            title.innerHTML = "Filtrar por";
            agregarPadding();
        })  
    }
}

box_option_genero.addEventListener("click", mostrarGeneros);

function mostrarGeneros() {

    quitarPadding();

    title.innerHTML = "Género";

    let ocultar = document.querySelectorAll("#ocultar");

    for (let i = 0; i < ocultar.length; i++) {
        ocultar[i].classList.toggle("d-none");
    }

    let box_generos = document.querySelector("#box-generos");

    box_generos.classList.toggle("d-none");

    if (title.innerHTML == "Género") {
        document.querySelector("#btn-cancelar").addEventListener("click", () => {
            for (let i = 0; i < ocultar.length; i++) {
                ocultar[i].classList.remove("d-none");
            }
            box_generos.classList.add("d-none");
            title.innerHTML = "Filtrar por";
            agregarPadding();
        })
        document.querySelector("#btn-aplicar").addEventListener("click", () => {
            for (let i = 0; i < ocultar.length; i++) {
                ocultar[i].classList.remove("d-none");
            }
            box_generos.classList.add("d-none");
            title.innerHTML = "Filtrar por";
            agregarPadding();
        })  
    }
}


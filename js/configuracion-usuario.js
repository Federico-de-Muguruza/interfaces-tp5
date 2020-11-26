let container = document.querySelector(".container-secundario");
if(container)
fetch("../html/menu-configuracion.html").then(function(r){
    r.text().then(function(html) {
        container.innerHTML = html;
    })
})

let botonesAbrir = document.querySelectorAll(".btn-toggle-perfil");
if(botonesAbrir) {
    botonesAbrir.forEach( elem => {
        console.log(elem);
        elem.addEventListener("click", function (e)  {
            // elem.classList.add("inexistente");
            e.preventDefault();
            let idDiv = elem.getAttribute("for");
            let elemModif = document.querySelector(`#${idDiv} form`);
            elemModif.classList.toggle("inexistente");
            let btnEdit = document.querySelector(`#${idDiv} .btn-abrir-perfil`);
            btnEdit.classList.toggle("inexistente");
        }
    )
})
}

let pagMenuConfig = document.querySelector(".resto");
if (pagMenuConfig){
    fetch("../html/configuracion-perfil.html").then(function(r){
        r.text().then(function(html) {
            pagMenuConfig.innerHTML = html;
            pagMenuConfig.classList.add("inexistente");
        })
    })
}
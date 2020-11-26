let container = document.querySelector(".container-secundario");
fetch("../menu-configuracion.html").then(function(r){
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
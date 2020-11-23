let container = document.querySelector(".container-secundario");
fetch("../menu-configuracion.html").then(function(r){
    r.text().then(function(html) {
        container.innerHTML = html;
    })
})


let containerNavDentro = document.querySelector(".contenedor-nav-dentro");
if(containerNavDentro)
fetch("../html/navbar-dentro.html").then(function(r){
    r.text().then(function(html) {
        containerNavDentro.innerHTML = html;
    })
})

let containerNavFuera = document.querySelector(".contenedor-nav-fuera");
if(containerNavFuera)
fetch("../html/navbar-fuera.html").then(function(r){
    r.text().then(function(html) {
        containerNavFuera.innerHTML = html;
    })
})

//contenedor-general

let containerFoot = document.querySelector(".contenedor-footer");
if(containerFoot)
fetch("../html/footer.html").then(function(r){
    r.text().then(function(html) {
        containerFoot.innerHTML = html;
    })
})
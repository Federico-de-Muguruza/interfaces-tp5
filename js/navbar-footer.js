let containerNav = document.querySelector(".contenedor-nav");
if(containerNav)
fetch("../navbar.html").then(function(r){
    r.text().then(function(html) {
        containerNav.innerHTML = html;
    })
})

let containerFoot = document.querySelector(".contenedor-footer");
if(containerFoot)
fetch("../footer.html").then(function(r){
    r.text().then(function(html) {
        containerFoot.innerHTML = html;
    })
})
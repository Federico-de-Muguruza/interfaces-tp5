let container = document.querySelector(".container-partial");
let links = document.querySelectorAll("a");
links.forEach( elem => {
    elem.onclick = (e) => {
        e.preventDefault();
        urlData = elem.getAttribute("href");
        fetch(urlData)
        .then(function(r){
        r.text().then(function(html) {
            container.innerHTML = html;
        })
        })
    }
})

// fetch('../configuracion-perfil.html')
//  .then(function(r){
//  r.text().then(function(html) {
//     container.innerHTML = html;
//  })
//  })

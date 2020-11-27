let dropdown = document.querySelector("#dropdown");
console.log("hli");
if(dropdown){
    dropdown.onclick = () => {
        let menu_oculto = document.querySelector("#menu-oculto");

        console.log(menu_oculto);
        menu_oculto.classList.toggle("menu-oculto");
    }
}

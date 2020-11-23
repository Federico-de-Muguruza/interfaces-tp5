let heart = document.querySelector("#heart-no-fav");

heart.addEventListener("click", () => {
    addFav(heart);
});

function addFav(heart){
    heart.classList.toggle("d-none");
    let heart_fav = document.querySelector("#heart-fav");
    heart_fav.classList.toggle("d-none");

    heart_fav.addEventListener("click", () => {
        removeFav(heart, heart_fav);
    })
}

function removeFav(heart, heart_fav) {
    heart.classList.remove("d-none");
    heart_fav.classList.add("d-none");
}

let btn_publicar = document.querySelector("#btn-publicar");

btn_publicar.addEventListener("click", publicar);

function publicar() {
    let comment = document.querySelector("#comment");
    let comment_section = document.querySelector(".other-comments");

    if (comment.value != '') {
        let box_comment = crearComponente("div");
        box_comment.classList.add("box-comment");

        let name = crearComponente("p");
        name.innerHTML = "Federico";

        let date = crearComponente("p");
        date.classList.add("fecha");
        dateObj = new Date();
        let dia = dateObj.getDate();
        let mes = dateObj.getMonth() + 1;
        let anio = dateObj.getFullYear();
        date.innerHTML = dia + "/" + mes + "/" + anio;

        let btnEditar = crearComponente("button");
        btnEditar.classList.add("btn-success");
        btnEditar.classList.add("bottom-btn");
        btnEditar.classList.add("btn");
        btnEditar.classList.add("btn-md");
       
        let textButton = crearComponente("span");
        textButton.innerHTML = "Editar";

        btnEditar.appendChild(textButton);

        let commentText = crearComponente("p");
        commentText.innerHTML = comment.value;
        box_comment.appendChild(name);
        box_comment.appendChild(date);
        box_comment.appendChild(commentText);
        box_comment.appendChild(btnEditar);
        
        comment_section.appendChild(box_comment);

        box_comment.style.background = "#" + 666;

        let your_comment = document.querySelector(".your-comment");
        your_comment.remove();

        btnEditar.addEventListener("click", editar);

    }
}

function editar() {
    console.log("Hacer editado.");
}

function crearComponente(component) {
    return document.createElement(component);
}
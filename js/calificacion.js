let heart = document.querySelector("#heart-no-fav");

let contador = 0;

let one_star = document.querySelector("#one-star");
let two_stars = document.querySelector("#two-stars");
let three_stars = document.querySelector("#three-stars");
let four_stars = document.querySelector("#four-stars");
let five_stars = document.querySelector("#five-stars");

let stars = [one_star, two_stars, three_stars, four_stars, five_stars];
// let stars_aux = [];

calificar(one_star, two_stars, three_stars, four_stars, five_stars);

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


function calificar(one_star, two_stars, three_stars, four_stars, five_stars) {
    
    one_star.addEventListener("click", () => {
        pintarEstrellas(1, stars);
    })
    
    two_stars.addEventListener("click", () => {
        pintarEstrellas(2, stars);
    })

    three_stars.addEventListener("click", () => {
        pintarEstrellas(3, stars);
    })

    four_stars.addEventListener("click", () => {
        pintarEstrellas(4, stars);
    })

    five_stars.addEventListener("click", () => {
        pintarEstrellas(5, stars);
    })
}

function pintarEstrellas(count, stars) {
    btn_publicar.classList.remove("d-none");
    for (let i = 0; i < 5; i++) {
        stars[i].classList.remove("checked");
    }

    for (let i = 0; i < count; i++) {
        stars[i].classList.add("checked");
        // stars_aux.push(i);
    }
    contador = count;
}


btn_publicar.addEventListener("click", () => {
    publicar(contador, stars);
});

// stars_aux.addEventListener("change", () => {
//     btn_publicar.classList.remove("d-none");
// })

function publicar(contador, stars) {
    let comment = document.querySelector("#comment");
    let comment_section = document.querySelector(".other-comments");

    // if (comment.value != '') {

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

        let box_stars = crearComponente("div");
        box_stars.classList.add("stars");

        let aux = [];
        
        for (let i = 0; i < stars.length; i++) {
            star = crearComponente("span");
            star.classList.add("fa");
            star.classList.add("fa-star");
            box_stars.appendChild(star);
            aux.push(star);
        }
        for (let j = 0; j < contador; j++) {
            console.log(contador);
            aux[j].classList.add("checked");
        }

        btnEditar.appendChild(textButton);
        
        let commentText = crearComponente("p");
        commentText.innerHTML = comment.value;
        box_comment.appendChild(name);
        box_comment.appendChild(date);
        box_comment.appendChild(box_stars);
        box_comment.appendChild(commentText);
        box_comment.appendChild(btnEditar);
        
        comment_section.appendChild(box_comment);

        box_comment.style.background = "#" + 666;

        let your_comment = document.querySelector(".your-comment");
        your_comment.remove();

        btnEditar.addEventListener("click", editar);

    // }
}

function editar() {
    console.log("Hacer editado.");
}

function crearComponente(component) {
    return document.createElement(component);
}
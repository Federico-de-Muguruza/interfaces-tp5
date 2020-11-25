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

let sound = document.querySelector("#sound-on");

sound.addEventListener("click", () => {
    removeSound(sound);
});

function removeSound(sound){
    sound.classList.toggle("d-none");
    let soundOff = document.querySelector("#sound-off");
    soundOff.classList.toggle("d-none");

    soundOff.addEventListener("click", () => {
        addSound(sound, soundOff);
    })
}

function addSound(sound, soundOff) {
    sound.classList.remove("d-none");
    soundOff.classList.add("d-none");
}

let next = document.querySelector("#next");

let back = document.querySelector("#back");

let temas = ["La Danza", "El temazo", "Otro tema"];

let i = 0;

let titulo = document.querySelector("#reproductor-titulo");

next.addEventListener("click", siguiente);

back.addEventListener("click", anterior);

function siguiente() {
    if (i + 1 < temas.length) {
        titulo.innerHTML = temas[i + 1];
        i += 1;
    } else {
        titulo.innerHTML = temas[0];
        i = 0;
    }

}

function anterior() {
    if (i - 1 >= 0) {
        titulo.innerHTML = temas[i - 1];
        i -= 1;
    } else {
        titulo.innerHTML = temas[temas.length - 1];
        i = temas.length - 1;
    }
}

let pause = document.querySelector("#reproductor-pause");

pause.addEventListener("click", () => {
    pausar(pause);
});

function pausar(pause){
    pause.classList.toggle("d-none");
    let play = document.querySelector("#reproductor-play");
    play.classList.toggle("d-none");

    play.addEventListener("click", () => {
        reproducir(pause, play);
    })
}

function reproducir(pause, play) {
    pause.classList.remove("d-none");
    play.classList.add("d-none");
}


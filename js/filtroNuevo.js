"use strict"

document.addEventListener("DOMContentLoaded", () => {
    filtrado();
})

function filtrado() {
    let mayorQue = document.querySelector("#mayorQue");

    let inputMayorQue = document.querySelector("#inputMayorQue");

    mayorQue.innerHTML = verificarMinutos(mayorQue, inputMayorQue);

    inputMayorQue.addEventListener("change", () => {
        mayorQue.innerHTML = verificarMinutos(mayorQue, inputMayorQue);
    })

    let menorQue = document.querySelector("#menorQue");

    let inputMenorQue = document.querySelector("#inputMenorQue");

    menorQue.innerHTML = verificarMinutos(menorQue, inputMenorQue);

    inputMenorQue.addEventListener("change", () => {
        menorQue.innerHTML = verificarMinutos(menorQue, inputMenorQue);
    })
}

function verificarMinutos(valor, input) {
    if (input.value != 1) {
        valor.innerHTML = input.value + " minutos";
    } else {
        valor.innerHTML = input.value + " minuto";
    }
    return valor.innerHTML;
}
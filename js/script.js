let options = ["burger", "pancake", "cupcake", "pretzel", "pizza"];
let slots = [0, 0, 0];
let randomNumber;
let monedasActuales = 10; // quantitat inicial ha de ser random amb minim de 10 monedes

window.onload = inici;

function inici() {
    monedasIniciales();
    actualizaMonedas(monedasActuales);
    document.querySelector("#lanzar").onclick = tiroTres;
    for (let k = 0; k < 3; k++) {
        document.querySelectorAll(".boton")[k].onclick = function () { tiroUno(k) };
    }
    document.querySelector("#cruz").onclick = cerrarMensaje;
}

function monedasIniciales() {
    do {
        monedasActuales = Math.floor(Math.random() * 16);  // Número aleatori entre 0 i 15
    } while (monedasActuales < 10); // si el numero és inferior a 10 genera un altre random
}

function newSlot(k) {
    do {
        randomNumber = Math.floor(Math.random() * options.length);
    } while (randomNumber == slots[k])  //random number para slots no puede salir dos veces el mismo numero
    document.querySelectorAll(".ventana")[k].innerHTML =
        `<img src="img/${options[randomNumber]}.png">`;
    slots[k] = randomNumber;
    actualizaMonedas(monedasActuales)
}

function tiroUno(k) { //intentar sacar el if  y meterlo en la funcion newSlot // si meto el if else en newSlot me repite el mensaje de else (no tienes dinero 3 veces)
    if (monedasActuales > 0) {
        audio("unTir");
        monedasActuales--
        newSlot(k);
        comprobarResultado();
    }
}

function tiroTres() {
    if (monedasActuales > 0) {
        audio("lanzar")
        monedasActuales--
        for (let k = 0; k < 3; k++) {
            newSlot(k);
        }
        comprobarResultado();
    }
}

function actualizaMonedas(monedasActuales) {
    document.querySelector("#dinero").innerHTML = // muestra valor actual de monedas
        `${monedasActuales}<span class="euros">€</span>`
    document.querySelector("#monedas").innerHTML = ``;
    for (let k = 0; k < monedasActuales; k++) {
        document.querySelector("#monedas").innerHTML +=  // muestra monedas actuales
            `<img src="img/moneda.png">`;
    }
}

function premiRandom() {
    do {
        randomPremi = Math.floor(Math.random() * 11);
    } while (randomPremi == 0); // si el numero és 0 genera un altre random  
}

function comprobarResultado() {
    if (slots[0] == slots[1] && slots[1] == slots[2]) {
        premiRandom();
        monedasActuales += randomPremi;
        mensajeGanar(randomPremi)
    } else {
        if(monedasActuales<=0){
            mensajePerder();
        }
    }
}

function mensajePerder() {
    audio("final");
    document.querySelector("#velo").style.display = "flex";
    document.querySelector("#mensaje").innerHTML = "Te has creado sin crédito";
}

function mensajeGanar(randomPremi) {
    audio("ganar");
    document.querySelector("#velo").style.display = "flex";
    document.querySelector("#mensaje").innerHTML = `Has ganado ${randomPremi}€`;
    document.querySelector("#mensaje").innerHTML += `<div id = "monedero"></div>`
    for (let k = 0; k < randomPremi; k++) {
        document.querySelector("#monedero").innerHTML +=  // muestra monedas actuales
            `<img src="img/moneda.png">`;
    }
}

function cerrarMensaje() {
    document.querySelector("#velo").style.display = "none";
    actualizaMonedas(monedasActuales);
}

function audio(nom){
    document.querySelector(`#so_${nom}`).play();
}
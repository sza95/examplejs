function sumar() {
    //Recibir los datos
    let numeroU = parseInt(document.getElementById("nUno").value);
    let numeroD = parseInt(document.getElementById("nDos").value);
    //Procesar los datos
    let resultado = parseInt(numeroU + numeroD);
    //Entregar o mostrar los datos
    document.getElementById("resulOperacion").innerHTML = resultado;
}

function dividir() {
    //Recibir los datos
    let numeroU = parseInt(document.getElementById("nUno").value);
    let numeroD = parseInt(document.getElementById("nDos").value);
    //Procesar los datos
    let resultado = parseInt(numeroU / numeroD);
    //Entregar o mostrar los datos
    document.getElementById("resulOperacion").innerHTML = resultado;
}

function multiplicar() {
    //Recibir los datos
    let numeroU = parseInt(document.getElementById("nUno").value);
    let numeroD = parseInt(document.getElementById("nDos").value);
    //Procesar los datos
    let resultado = parseInt(numeroU * numeroD);
    //Entregar o mostrar los datos
    document.getElementById("resulOperacion").innerHTML = resultado;
}

function areatriangulo() {
    //Recibir los datos
    let numeroU = parseInt(document.getElementById("nUno").value);
    let numeroD = parseInt(document.getElementById("nDos").value);
    //Procesar los datos
    let resultado = parseInt((numeroU * numeroD) / 2);
    //Entregar o mostrar los datos
    document.getElementById("resulOperacion").innerHTML = resultado;
}

function areacirculo() {
    //Recibir los datos
    let numeroU = parseInt(document.getElementById("nUno").value);
    //let numeroD = parseInt(document.getElementById("nDos").value);
    //Procesar los datos
    let resultado = parseFloat((Math.PI*numeroU*numeroU));
    //Entregar o mostrar los datos
    document.getElementById("resulOperacion").innerHTML = resultado;
}
function mostrarMensaje() {
    let edad = parseInt(document.getElementById('edad').value);

    //if (edad >= 18) {
    //    mensaje = "Eres mayor de edad"
    //} else {
    //    mensaje = "Eres menor de edad"
    //}

    //If con operador terniario
    let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad"

    alert(mensaje);
    //document.write(mensaje)
}

function mostrarMensajeDos() {
    let edadP = parseInt(document.getElementById('edadP').value);
    let estaturaP = parseFloat(document.getElementById('estaturaP').value);
    let pesoP = parseInt(document.getElementById('pesoP').value);

    const parametroEdad = 80
    const parametroEstatura = 1.40
    const parametroPeso = 70
    let mensajeDecision = ""

    //If anidado
    // if (edadP <= parametroEdad) {
    //     if (estaturaP >= parametroEstatura) {
    //         if (pesoP == parametroPeso) {
    //             mensajeDecision = "Apto para realizar el deporte"
    //         } else {
    //             mensajeDecision = "No es apto. Peso no válido"
    //         }
    //     } else {
    //         mensajeDecision = "No es apto. Altura no válida"
    //     }
    // } else {
    //     mensajeDecision = "No es apto. Edad no válida"
    // }

    //If con operador lógico AND(&&)

    if (edadP <= parametroEdad && estaturaP >= parametroEstatura && pesoP == parametroPeso) {
        mensajeDecision = "Apto para realizar el deporte"
    } else {
        mensajeDecision = "No apto para realizar el deporte"
    }

    //If con operador lógico OR(||)

    if (edadP <= parametroEdad || estaturaP >= parametroEstatura || pesoP == parametroPeso) {
        mensajeDecision = "Apto para realizar el deporte"
    } else {
        mensajeDecision = "No apto para realizar el deporte"
    }

    alert(mensajeDecision)
}

function mostrarMensajeTres() {
    let productName = document.getElementById('ProductName').value
    let price = 0

    const product_one = 'A'
    const product_two = 'B'
    const product_three = 'C'
    const message = 'Invalid Product!!'

    /*if (productName.toUpperCase() == product_one) {
        price = 2000
    } else {                          
        if (productName.toUpperCase() == product_two) {
            price = 2200
        } else {
            if (productName.toUpperCase() == product_three) {
                price = 1800
            } else {
                alert(message.toUpperCase())
            }
        }
    }

    alert(price)*/


    switch (productName.toUpperCase()) {
        case product_one:
            price = 20000
            break;
        case product_two:
            price = 22000
            break;
        case product_three:
            price = 18000
            break;
        default:
            alert(message.toUpperCase())
            break;
    }

    alert(Intl.NumberFormat().format(price))



}

//function prenderApagar(interruptor) 

let prenderApagar = interruptor =>{

    let pic 

    /*if (interruptor == 0) {
        alert('OFF')
    } else {
        alert('ON')
    }*/

    let mensaje = (interruptor == 0) ? "OFF" : "ON"

    alert(mensaje)

}
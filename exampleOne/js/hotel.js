let hotel = ()=> {

    let cantidadPersonas = document.getElementById('cantidadHuesped').value
    let cantidadDias = document.getElementById('cantidadDias').value
    let subtotal = 0
    let total = 0
    let tafifa = 0
    

    const tarifaIndividual = 2500
    const tarifaDoble = 4600
    const tarifaFamiliar = 5200
    const IVA = (19/100)

    if (cantidadPersonas == 1) {
        subtotal = (tarifaIndividual * cantidadDias)
        total = (subtotal+(subtotal*IVA))
        tarifa = (total-(total*(5/100)))
    } else {
        if (cantidadPersonas == 2) {
            subtotal = (tarifaDoble * cantidadDias)
            total = (subtotal+(subtotal*IVA))
            tarifa = (total-(total*(9/100)))
        } else {
            if (cantidadPersonas >= 3) {
                subtotal = (tarifaFamiliar * cantidadDias)
                total = (subtotal+(subtotal*IVA))
                tarifa = (total-(total*(15/100)))
            }
        }
    }

    let mensaje = ('Precio sin IVA: ' + subtotal + '\nPrecio con IVA: ' + total + '\nTotal Tarifa con descuento: ' + tarifa)

    alert(mensaje)




}
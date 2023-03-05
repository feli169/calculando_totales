const calcular = () =>{
    cantidad = document.querySelector('#cantidad')
    const precio = 400000
    total = cantidad .value * precio

    document.querySelector('#res-cantidad').innerHTML = cantidad .value                    
    document.querySelector('#res-total').innerHTML = total

    mues = document.querySelector('#muestra')
    cambio_color = document.querySelector('#res-color')
    cambio_color.style.color = mues.value
}
function multaDetran() {
    let estrada = parseFloat(velM.value)
    let condutor = parseFloat(velC.value)

    if(condutor <= estrada){
        alert('sem multa')
    } else if(condutor > estrada && condutor <= ((estrada*0.2) + estrada)){
        alert('multa leve')
    } else if(condutor > (estrada*0.2)){
        alert('multa grave')
    }
}

btnCalcular.addEventListener('click', multaDetran)
function descobrir(){
    let numero = document.getElementById('numero').value

    if(numero % 2 !== 0){
        resultado = imparPar.innerHTML = `O numero ${numero} é impar`
        return
    }else{
        resultado = imparPar.innerHTML =`O numero ${numero} é par`
        return
    }

}    

btnCalcular.addEventListener('click', descobrir)
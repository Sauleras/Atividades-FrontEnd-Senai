
function laco() {
    resultado = ''
    for (let i = 1; i <= 20; i++) {
        resultado += i+'<br>'
    }
    numeros.innerHTML = resultado
}

btnMostrar.addEventListener("click", laco)
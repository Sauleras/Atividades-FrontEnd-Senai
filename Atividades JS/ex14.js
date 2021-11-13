function quantNomes() {
    let n = nome.value
    let v = numero.value
    let resultado = ''

    for (let i = 0; i < v; i++) {
        resultado += ' | ' + n 
    }
    repeticao.innerHTML = resultado
}

btnMostrar.addEventListener('click', quantNomes)
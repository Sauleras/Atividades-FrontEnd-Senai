function fazenda() {
    let coelhos = parseFloat(quantidade.value)
    let anos = parseFloat(numero.value)
    let resultado = ''
    let resultado2 = ''

    for (let i = 1; i <= anos; i++) {
        coelhos *= 7
        resultado = coelhos
        
        repeticao.innerHTML += `${i}º ano: ${resultado}` + '<br>'
    }
    if (anos < 3) {
        repeticao.innerHTML = `Declare um ano maior que 3`
    }
}

btnMostrar.addEventListener('click', fazenda)
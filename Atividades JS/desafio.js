function caixa() {
    let dinheiro = parseFloat(nota.value)

    if (dinheiro == 0 || isNaN(dinheiro)) {
        alert('informe o valor de saque corretamente')
        return
    }

    if (dinheiro % 10 !== 0) {
        alert('valor invalido para notas disponiveis(10,50,100)')
        return
    }

    let n100 = Math.floor(dinheiro / 100)
    let resto = (dinheiro % 100)
    let n50 = Math.floor(resto / 50)
    resto = (resto % 50)
    let n10 = Math.floor(resto / 10)

    if (n100 > 0) {
        saque100.innerHTML = `Notas de R$ 100: ${n100}`
    }

    if (n50 > 0) {
        saque50.innerHTML = `Notas de R$ 50: ${n50}`
    }

    if (n10 > 0) {
        saque10.innerHTML = `Notas de R$ 10: ${n10}`
    }
}

btnCalcular.addEventListener('click', caixa)
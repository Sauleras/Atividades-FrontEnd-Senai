function numeroPerfeito() {
    
    let perfeito = Number(numero.value);

    let divisores = `Divisores do ${perfeito} : 1`;
    let soma = 1;

    for (let i = 2; i <= perfeito / 2; i++) {
        if (perfeito % i == 0) {
            divisores += `, ${i}`;
            soma += i;
        }
    }
    divisores += `. (Soma: ${soma})`
    repeticao.textContent = divisores;

    if (perfeito == soma) {
        repeticao.textContent = `${divisores}. Logo, É um número Perfeito`;
    } else {
        repeticao.textContent = `${divisores}. Logo, Não é um número perfeito`;
    }
}

btnMostrar.addEventListener('click', numeroPerfeito)
function semestre() {
    let a = document.querySelectorAll(".aluno")
    let n = document.querySelectorAll(".nota")
    let resultado = ''

    for (let i = 0; i <= 5; i++) {
        if (n[i].textContent < 60) {
            resultado = `${a[i].textContent}, nota F<br>`
            repeticao.innerHTML += resultado
        } else if (n[i].textContent < 70) {
            resultado = `${a[i].textContent}, nota D<br>`
            repeticao.innerHTML += resultado
        } else if (n[i].textContent < 80) {
            resultado = `${a[i].textContent}, nota C<br>`
            repeticao.innerHTML += resultado
        } else if (n[i].textContent < 90) {
            resultado = `${a[i].textContent}, nota B<br>`
            repeticao.innerHTML += resultado
        } else if (n[i].textContent <= 100) {
            resultado = `${a[i].textContent}, nota A<br>`
            repeticao.innerHTML += resultado
        }
    }
}

btnMostrar.addEventListener('click', semestre)
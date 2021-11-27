var erros = []
const VALOR_SORTEADO = parseInt(Math.random() * 60 + 1)
const CHANCES = 6

setInterval(() => {
    animateCSS('#apostar', 'flipInX'); //botao
    animateCSS('.fa-heartbeat', 'swing'); //icone dos erros
    animateCSS('.fa-exclamation-circle', 'bounce'); //icone das chances
    animateCSS('.fa-concierge-bell', 'wobble'); //icone das tentativas
}, 5000)

document.querySelector('#jogar').style = 'display: none'

function apostarNumero() {
    let inserir = document.getElementById('numero').value
    let numChances = CHANCES
    
    if (inserir <= 0 || inserir > 60) {
        saidaDica.innerHTML = `<h4 class="alert alert-success">Informe um numero valido de 1 a 60</h4>`
        document.getElementById('numero').value = ''
        document.getElementById('numero').focus()
    }
    
    if (inserir == VALOR_SORTEADO) {
        saidaDica.innerHTML = `<h4 class="alert alert-success">Você ganhou! O numero sorteado é ${VALOR_SORTEADO}</h4>`
        document.querySelector('#apostar').style = 'display: none'
        document.querySelector('#jogar').style = 'display: '
        document.getElementById('numero').value = ''
        document.getElementById('numero').focus()
    } else if (inserir != VALOR_SORTEADO & inserir < 60 & inserir > 0){
        erros.push(inserir)
        numChances -= erros.length
        saidaErro.innerHTML = `<h4 class="alert alert-danger">${erros.length}</h4>`
        saidaChance.innerHTML = `<h4 class="alert alert-primary">${numChances}</h4>`
        let dica = inserir < VALOR_SORTEADO ? "maior" : "menor"
        saidaDica.innerHTML = `<h4 class="alert alert-success">Tente um numero ${dica} que ${inserir}</h4>`
        document.getElementById('numero').value = ''
        document.getElementById('numero').focus()
    }  

    if (numChances == 0) {
        alert('Suas chances acabaram')
        saidaDica.innerHTML = `<h4 class="alert alert-success">GAME OVER!! O numero sorteado era ${VALOR_SORTEADO}</h4>`
        document.querySelector('#apostar').style = 'display: none'
        document.querySelector('#jogar').style = 'display: '
        document.getElementById('numero').value = ''
        document.getElementById('numero').focus()
    }

    console.log(VALOR_SORTEADO)

}

function restart() {
    window.location.reload()
}

apostar.addEventListener('click', apostarNumero)
jogar.addEventListener('click', restart)


/**
 * 1 - Declarar um array de escopo global de erros var erros = []
 * 2 - Gerar um numero aleatório entre 1 e 60 (criar uma constante com o nome de VALOR_SORTEADO) Math.random()*60+1
 * 3 - Declarar o limite de chances (uma constante CHANCES = 6)
 *
 * 4 - Criar uma funcao chamada apostarNumero()
 * 4.1 - Verificar se o numero é menor ou igual a zero ou numero > que 60, caso for mostrar "Informe um número válido"

 * 4.2 - Verificar se o número digitado pelo usuario (a aposta) é igual ao VALOR_SORTEADO, se for mostrar
 * "Parabéns! Você acertou!"
 * 4.2.1 - Ocultar o botao apostar e mostrar um botão chamado Jogar Novamente (criar esse botão)
 * 4.2.2 - Mostrar no saidaDica "Parabéns! O número sorteado é: VALOR_SORTEADO"
 * 4.2.3 - Se o usuario apertar o botao jogar novamente a acao sera window.reload()
 *
 * 4.3 - Caso o valor digitado for diferente do VALOR_SORTEADO
 * 4.3.1 -  Verificar Se o valor digitado ja existe no array de erros, se ja existir mostrar
 * "Você já apostou o número X. Tente outro!!!"
 *
 * 4.4 - Caso o valor nao exista no array de erros, adicionar o valor ao array erros (usar o push)
 * 4.4.1 - criar uma variavel let numErros para guardar a quantidade de erros erros.length
 * 4.4.2 - criar uma variavel let numChances para guardar o CHANCES - numErros
 * 4.4.3 - mostrar na tela no id=saidaErro o numero de erros e todo o conteudo do array erros.join()
 * 4.4.4 - mostrar na tela no id=saidaChance o numero de chances que restam
 *
 * 4.5 -  Verificar se o numero de chances (numChances) for igual a zero
 * 4.5.1 - mostrar na tela "Suas chances acabaram!"
 * 4.5.2 - Ocultar o botao apostar e mostrar um botão chamado Jogar Novamente (criar esse botão)
 * 4.5.3 - Mostrar no saidaDica "GAME OVER! O número sorteado é VALOR_SORTEADO"
 *
 * 4.6 - Caso o o numero de chances (numChances) for diferente de zero (MONTAR AS DICAS)
 * 4.6.1 - Verificar se o numero digitado é menor que o sorteado, caso sim armazenar um texto
 * em uma varivavel chamado let dica="menor", caso contrario armazenar o dica="maior"
 * let dica = numero.value < VALOR_SORTEADO ? "menor" : "maior"
 * 4.6.2 - Mostrar na tela no campo saidaDica o Texto " Tente um número ${dica} que o VALOR_SORTEADO"
 *
 * 4.7 -  Sempre que o usuario apostar limpar o campo e apontar o foco para ele
 */
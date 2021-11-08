function calcularTotalPagar() {
    //DECLARANDO AS VARIAVEIS
    var frmPesoKg = parseFloat(precokg.value);
    var frmPesoPrato = parseFloat(pesop.value);
    var calculo;

    //VERIFICACAO CAMPOS

    if (frmPesoKg <= 0 || isNaN(frmPesoKg)) {
        alert("Favor preencha corretamente o campo!")
        precokg.focus() // direciono o foco do cursor para o campo id=precokg
        return
    }

    if (frmPesoPrato <= 0 || isNaN(frmPesoPrato)) {
        alert("Favor preencha corretamente o campo!")
        pesop.focus() // direciono o foco do cursor para o campo id=pesop
        return
    }

    //calculo do total a pagar
    calculo = frmPesoKg * frmPesoPrato

    //div onde o resultado vai aparecer
    totalPagar.innerHTML = `
        <p>R$ ${calculo.toFixed(2)}</p>
    `
}

//adicionando um evento de click ao botao id=btnCalcular onde ele chama a function calcularTotalPagar
btnCalcular.addEventListener('click', calcularTotalPagar)

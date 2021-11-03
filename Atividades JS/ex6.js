var frmModelo;
var frmValor= parseInt();
var divMostrar;

//Botao cadastrar add evento
btnCadastrar.addEventListener('click', function(){
    frmModelo = modelo.value 
    frmValor = valor.value
    divMostrar = document.getElementById('mostrarCadastro')
    alert('Simulação em processamento!')
   
    divMostrar.innerHTML = `
        <div>Modelo: <strong>${frmModelo}</strong></div>
        <div>Valor: <strong>${frmValor}</strong></div>
        <div>Valor da entrada: <strong>${frmValor/2}</strong></div>
        <div>60 Parcelas no valor de R$: <strong>${((((frmValor/2)/60)*0.70)+((frmValor/2)/60)).toFixed(2)}</strong></div>
  `
    
})
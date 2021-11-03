var frmNome;
var frmEmail;
var frmSenha;
var divMostrar;
//Botao cadastrar add evento
btnCadastrar.addEventListener('click', function(){
    frmNome = nome.value
    frmEmail = email.value
    frmSenha = senha.value

    divMostrar = document.getElementById('mostrarCadastro')

    divMostrar.innerHTML =
    `<div>
        <p>Nome: ${frmNome}</p>
    </div>
    <div> 
        <p>E-mail: ${frmEmail}</p>
    </div>
    <div> 
        <p>Senha: ${frmSenha}</p>
    </div>`    
    
})

// console.log(frmNome, frmSenha, frmEmail)
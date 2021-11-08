

function promo() {
    let x = parseFloat(valor.value)
    let y = parseFloat(quantidade.value)
    let prod = nome.value

    if(y >= 2){
        soma = x + x*0.4
        totalPagar.innerHTML = `
        <p>O valor do produto ${prod} com desconto é R$ ${soma}</p>
        `
        return
    }else{
        soma = x
        totalPagar.innerHTML = `
        <p>O valor do produto ${prod} é R$ ${soma}</p>
        `
        return
    }

}

btnCalcular.addEventListener('click', promo)
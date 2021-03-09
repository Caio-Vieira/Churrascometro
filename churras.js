let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calculo() {

    if(inputAdultos.value == "" && inputCriancas.value == "" && inputDuracao.value == ""){
        alert ("Digite os dados necessários para o cálculo.")
        let result = document.getElementById('resultado')
        result.style.display = "none"
    } 

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qntcarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas)
    let qntcerveja = cervejaPP(duracao) * adultos 
    let qntrefri = refriPP(duracao) * adultos + (refriPP(duracao)/2 * criancas)

    resultado.innerHTML = `<p>${qntcarne/1000} Kg de Carne</p>` 
    resultado.innerHTML += `<p>${Math.ceil(qntcerveja/1000)} Litros de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntrefri/2000)} garrafa(s) de Refrigerante</p>`
}

function carnePP(duracao) {
    if (duracao >= 6 ){
        return 650
    }
    else{
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6 ){
        return 2000
    }
    else{
        return 1200
    }
}

function refriPP(duracao) {
    if (duracao >= 6 ){
        return 1500
    }
    else{
        return 1000
    }
}
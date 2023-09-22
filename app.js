'use strict'

const cepInput = document.getElementById('cep')
const buscar = document.getElementById('buscar')

async function pegarEndereco (cep){
     const url = `https://viacep.com.br/ws/${cep}/json/`
     const response = await fetch(url)
     const endereco = await response.json()
     console.log(url)
     return endereco
}

async function preencherCampos(){
    const rua = document.getElementById('rua')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')
    
    const cepInfo = await pegarEndereco(cepInput.value)

    rua.value = cepInfo.logradouro
    cidade.value = cepInfo.localidade
    estado.value = cepInfo.uf
}

buscar.addEventListener('click', preencherCampos)
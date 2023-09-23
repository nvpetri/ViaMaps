'use strict'

const cepInput = document.getElementById('cep')
const buscar = document.getElementById('buscar')

async function pegarEndereco(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const endereco = await response.json()
    console.log(url)
    return endereco
}

async function preencherCampos() {
    const rua = document.getElementById('rua')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')

    const cepInfo = await pegarEndereco(cepInput.value)

    rua.value = cepInfo.logradouro
    cidade.value = cepInfo.localidade
    estado.value = cepInfo.uf
}

async function mudarLocalizacao() {

    const cepInfo = await pegarEndereco(cepInput.value)

    const rua = cepInfo.logradouro
    const cidade = cepInfo.localidade
    const estado = cepInfo.uf

    const localizacao = document.getElementById('iframe').src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAeVRmm_pxeTiNMChEeLFAJxC8nR-X6Mj4&q=" + rua + "," + cidade + "+" + estado
    console.log(localizacao)
}
buscar.addEventListener('click', preencherCampos)
buscar.addEventListener('click', mudarLocalizacao)

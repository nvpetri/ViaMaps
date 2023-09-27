'use strict'

const cepInput = document.getElementById('cep')
const buscar = document.getElementById('buscar')
const enderecoButton = document.getElementById('mostrarEndereco')
const climaButton = document.getElementById('mostrarClima')
const escolhaOpcao = document.getElementById('escolhaOpcao')

async function pegarEndereco(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const endereco = await response.json()
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

    if (enderecoButton.checked) {
        const localizacao = document.getElementById('iframe').src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAeVRmm_pxeTiNMChEeLFAJxC8nR-X6Mj4&q=" + rua + "," + cidade + "+" + estado
    } else {
        document.getElementById('iframe').src = ""
    }
}

async function mostrarClima(){
    const cidade = document.getElementById('cidade').value
    const estado = document.getElementById('estado').value
}

buscar.addEventListener('click', function () {
    const mostrarEndereco = enderecoButton.checked;
    const mostrarClima = climaButton.checked;

    escolhaOpcao.style.display = 'block';

    document.getElementById('confirmarOpcao').addEventListener('click', function () {
        if (mostrarEndereco) {
            mudarLocalizacao()
            preencherCampos()
        }

        if (mostrarClima) {
            mostrarInformacoesClima()
        }

        escolhaOpcao.style.display = 'none'
    })
})
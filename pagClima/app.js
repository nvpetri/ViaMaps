'use strict'


const searchButton = document.getElementById('searchButton')
const cityInput = document.getElementById('cityInput')
const weatherInfo = document.getElementById('weatherInfo')

searchButton.addEventListener('click', function () {
    const cidade = cityInput.value
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=dd0771563bdf95c8cbb055a772568db0&units=metric`

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name
            const temperature = data.main.temp
            const weatherDescription = data.weather[0].description

            weatherInfo.innerHTML = `Clima em ${cityName}: ${temperature}°C, ${weatherDescription}`
        })
        .catch(error => {
            console.error('Erro na solicitação à API:', error)
            weatherInfo.innerHTML = 'Erro ao buscar informações de clima.'
        })
})
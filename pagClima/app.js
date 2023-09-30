'use strict'

const searchButton = document.getElementById('searchButton')
const cityInput = document.getElementById('cityInput')
const weatherInfo = document.getElementById('weatherInfo')
const img = document.getElementById('img')

searchButton.addEventListener('click', function() {
    const cidade = cityInput.value
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=dd0771563bdf95c8cbb055a772568db0&units=metric`

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name
            const temperature = data.main.temp
            const weatherDescription = data.weather[0].main
            const country = data.sys.country

            if (country !== "BR") {
                weatherInfo.innerHTML = 'Infelizmente o sistema não conseguiu identificar a cidade'
            } else {
                if (weatherDescription == "Clouds") {
                    const weatherDescription = "Nublado"
                    weatherInfo.innerHTML = `Clima em ${cityName}: ${temperature}°C, ${weatherDescription}`
                    img.src = `./icons/clouds.png`

                } else if (weatherDescription == "Clear") {
                    const weatherDescription = "Limpo"
                    weatherInfo.innerHTML = `Clima em ${cityName}: ${temperature}°C, ${weatherDescription}`
                    img.src = `./icons/clear.png`

                } else if (weatherDescription == "Rain") {
                    const weatherDescription = "Chuva"
                    weatherInfo.innerHTML = `Clima em ${cityName}: ${temperature}°C, ${weatherDescription}`
                    img.src = `./icons/rain.png`

                } else if (weatherDescription == "Drizzle") {
                    const weatherDescription = "Garoa"
                    weatherInfo.innerHTML = `Clima em ${cityName}: ${temperature}°C, ${weatherDescription}`
                    img.src = `./icons/drizz.png`

                } else if (weatherDescription == "Thunderstorm") {
                    const weatherDescription = "Tempestade"
                    weatherInfo.innerHTML = `Clima em ${cityName}: ${temperature}°C, ${weatherDescription}`
                    img.src = `./icons/thunder.png`

                } else if (weatherDescription == "Mist") {
                    const weatherDescription = "Neblina"
                    weatherInfo.innerHTML = `Clima em ${cityName}: ${temperature}°C, ${weatherDescription}`
                    img.src = `./icons/mist.png`

                } else if (weatherDescription == "Fog") {
                    const weatherDescription = "Névoa"
                    weatherInfo.innerHTML = `Clima em ${cityName}: ${temperature}°C, ${weatherDescription}`
                    img.src = `./icons/fog.png`

                }
            }

        })
        .catch(error => {
            console.error('Erro na solicitação à API:', error)
            weatherInfo.innerHTML = 'Erro ao buscar informações de clima.'
        })
})
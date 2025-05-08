    const apiKey ="5ce945bc96f7afd9de48163f9a5bfafc";
    const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox =  document.querySelector(".search input")
    const searchBtn =  document.querySelector(".search button")
    const weatherIcon =document.querySelector(".weathericon")

    async function cheakWeather(city){
        const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
        let data = await responce.json()
        console.log(data);
        

        if(responce.status == 404){
            document.querySelector(".error").style.display = "block"
            document.querySelector(".weather").style.display = "none"
        }
        else {
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
            document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = 'images/clouds.png'
            }
            else if(data.weather[0].main == 'Clear')
            weatherIcon.src = 'images/clear.png'

            else if(data.weather[0].main == 'Rain')
            weatherIcon.src = 'images/rain.png'

            else if(data.weather[0].main == 'Drizzle')
            weatherIcon.src = 'images/drizzle.png'

            else if(data.weather[0].main == 'Snow')
            weatherIcon.src = 'images/snow.png'

            else if(data.weather[0].main == 'Mist')
            weatherIcon.src = 'images/mist.png'

            document.querySelector(".weather").style.display = "block"
            document.querySelector(".error").style.display = "none"

        }          
    }

searchBtn.addEventListener('click', () => {
    result = searchBox.value
    cheakWeather(result)
    searchBox.value = ""
})    


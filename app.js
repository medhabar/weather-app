const apiKey = "1c110b7132d9cf9860af13322f406e2c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serachBox = document.querySelector(".search input");
const serachBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".no-entry").style.display = "none";

        serachBox.value = "";   
    }

    else if(serachBox.value == ""){
        document.querySelector(".no-entry").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "none";

    }

    else{
        document.querySelector(".city").innerHTML = data.name;

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main = "Clouds"){
            weatherIcon.src = "./assests/clouds.png"
        }
        else if(data.weather[0].main = "Rain"){
            weatherIcon.src = "./assests/rain.png"
        }
        else if(data.weather[0].main = "Drizzle"){
            weatherIcon.src = "./assests/drizzle.png"
        }
        else if(data.weather[0].main = "Mist"){
            weatherIcon.src = "./assests/mist.png"
        }
        else if(data.weather[0].main = "Snow"){
            weatherIcon.src = "./assests/snow.png"
        }
        
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";
        document.querySelector(".no-entry").style.display = "none";
``
        serachBox.value = "";   
    }

    
}

serachBtn.addEventListener("click", () => {
    let city = serachBox.value.toLowerCase();
    checkWeather(serachBox.value);
})

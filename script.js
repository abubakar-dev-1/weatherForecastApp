const key = "b49ef507de812f231d5e05f7ba93a718"
let api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let input = document.querySelector(".search input")
let searchimg = document.querySelector(".search img")

async function weatherFetch(city)
{
    let data = await fetch(api +city+ `&appid=${key}`)
    let info = await data.json()

    console.log(info)
    document.querySelector(".city").innerHTML = info.name 
    document.querySelector(".temp").innerHTML = Math.round(info.main.temp) + "°C"
    document.getElementById("humidity").innerHTML = info.main.humidity + "%"
    document.getElementById("wind").innerHTML = info.wind.speed + " km/h"
    let Weather = info.weather[0].main
    if(Weather=="Smoke"){
        document.querySelector(".weatherPic").src = "images/mist.png"
    }
    else if(Weather=="Clouds"){
        document.querySelector(".weatherPic").src = "images/clouds.png"
    }
    else if(Weather=="Rain"){
        document.querySelector(".weatherPic").src = "images/rain.png"
    }
    else if(Weather=="Drizzle"){
        document.querySelector(".weatherPic").src = "images/drizzle.png"
    }
    else if(Weather=="Snow"){
        document.querySelector(".weatherPic").src = "images/snow.png"
    }
    else{
        document.querySelector(".weatherPic").src = "images/clear.png"
    }
}
weatherFetch("Pakistan")
searchimg.addEventListener("click" ,()=>{
    weatherFetch(input.value)
})

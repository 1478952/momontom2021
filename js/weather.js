
const API_KEY = "d0b34e67524f08be8232d719e14d9e59";

function onGeoOk(position){
    const Lat = position.coords.latitude;
    const Lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lon}&appid=${API_KEY}`
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector(".weather span:first-child");
        const city = document.querySelector(".weather span:last-child");
        city.innerText = data.name; 
        weather.innerText = data.weather[0].main;
    });
}

function geoError(){
    alert("위치를 찾을 수 없습니다.")
}


navigator.geolocation.getCurrentPosition(onGeoOk,geoError)

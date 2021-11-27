const fishURL =    "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=3e5fc40d3932e762ff13a8c9ee95bbb8";
const sodaURL =    "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=3e5fc40d3932e762ff13a8c9ee95bbb8";
const prestonURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=3e5fc40d3932e762ff13a8c9ee95bbb8";
const cityName = document.title;
let choosenURL
if (cityName == "Preston"){
    choosenURL = prestonURL;
}
else if (cityName == "Soda Springs") {
    choosenURL = sodaURL;
}

else if (cityName == "Fish Haven") {
    choosenURL = fishURL;
}

let image = document.querySelector('.weather-image'); 
let weather = document.querySelector('.weather');
let currently = document.querySelector('.currently');
let high = document.querySelector('.high');
let windchill = document.querySelector('.wind-chill');
let windspeed = document.querySelector('.wind-speed');
let humidity = document.querySelector('.humidity');


fetch(choosenURL)
    .then((response) => response.json())
    
    .then((jsObject) => {

    //console.table(jsObject);
           
    let imgicon = jsObject.weather[0].icon;
    //console.log(image);
    image.setAttribute('src', "https://openweathermap.org/img/w/" + imgicon +'.png');
    
    weather.textContent =jsObject.weather[0].description;
    currently.textContent = jsObject.main.temp + " °F";
    high.textContent = jsObject.main.temp_max + " °F";
    windchill.textContent = jsObject.wind.deg + " °F";
    windspeed.textContent = jsObject.wind.speed;
    humidity.textContent = jsObject.main.humidity;
    });



const fishforecast =    "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=3e5fc40d3932e762ff13a8c9ee95bbb8";
const sodaforecast =    "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=3e5fc40d3932e762ff13a8c9ee95bbb8";
const prestonforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=3e5fc40d3932e762ff13a8c9ee95bbb8";
const thisplace = document.title;
let choosenforecast;
if (thisplace == "Preston"){
    choosenforecast = prestonforecast;
}
else if (thisplace == "Soda Springs") {
    choosenforecast = sodaforecast;
}

else if (thisplace == "Fish Haven") {
    choosenforecast = fishforecast;
}
let main_div = document.querySelector(".five_day");
let x = 0;

const daysOfWeek = ["Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"];

let date = new Date;
let wday = date.getDay();
//console.log(wday);

fetch(choosenforecast)
    .then((response) => response.json())
    .then(jsonObject => {
        //console.log(jsonObject); //console log passed
        for (let i = 0; i < jsonObject.list.length; i++ ) {
           //console.log(jsonObject.list[i].dt_txt); //dt text passed
            if (jsonObject.list[i].dt_txt.indexOf("18:00:00") !== -1) {
                //console.log("True") True printed
                let temp = jsonObject.list[i].main.temp;
                let icon = "https://openweathermap.org/img/w/" + jsonObject.list[i].weather[0].icon + ".png";
                
                let f_image = document.createElement("img");
                let temp_string = document.createElement('p');
                let day_string = document.createElement("h4");
                let f_div = document.createElement("div");
                
                temp_string.textContent = temp + " °F";
                f_image.setAttribute('src', icon);
                


                x += 1;
                let f_day = wday + x;
                if (f_day > 6){
                    f_day -= daysOfWeek.length;
                }
                day_string.textContent = daysOfWeek[f_day];
                
                f_div.appendChild(day_string);
                f_div.appendChild(f_image);
                f_div.appendChild(temp_string);
                

                main_div.appendChild(f_div);
                
                //console.log(f_day);
            }
            
        }
    });
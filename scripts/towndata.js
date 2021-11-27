const town_name = document.title

let tdURL = "https://byui-cit230.github.io/weather/data/towndata.json";
let upcoming_events = document.querySelector(".upcoming-events")
fetch(tdURL)
.then(response=> response.json())
.then(JSobject =>{
    for (let i = 0; i < JSobject.towns.length; i++ ){
        if (JSobject.towns[i].name == town_name){
            let tdevent1 = document.createElement("i");
            let tdevent2 = document.createElement("i");
            let tdevent3 = document.createElement("i");

            tdevent1.textContent = JSobject.towns[i].events[0]
            upcoming_events.appendChild(tdevent1);

            tdevent2.textContent = JSobject.towns[i].events[1]
            upcoming_events.appendChild(tdevent2);

            tdevent3.textContent = JSobject.towns[i].events[2]
            upcoming_events.appendChild(tdevent3);
        }
    }
})
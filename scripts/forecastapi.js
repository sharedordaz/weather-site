const prestonURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=3e5fc40d3932e762ff13a8c9ee95bbb8";

fetch(prestonURL)
    .then((response) => response.json())
    .then(jsonObject => {
        console.table(jsonObject);
    })
let today = new Date();
let day = today.getDay();
let sign = document.querySelector(".pancakes");
if (day == 5){
    sign.style.display = 'flex';
}
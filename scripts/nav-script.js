let menu_icon = document.querySelector(".menu");
let menu = document.querySelectorAll("ul a li");
//console.log(menu);
menu_icon.addEventListener("click", show_menu)

function show_menu() {
    menu.forEach( item => {
        if (item.className === ""){
            item.className = "display-menu";
    }
    else{
        item.className = "";
    }

    });
}

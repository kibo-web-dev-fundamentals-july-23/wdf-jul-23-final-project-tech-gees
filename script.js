var counter=1;
let timer = setInterval(function(){
    document.getElementById("radio" + counter).checked=true;
        counter++;
        if(counter > 4){
            counter = 1;
        }
    },5000);

    document.addEventListener("DOMContentLoaded", function() {
        // JavaScript for toggling the menu
        const menuToggle = document.querySelector(".menu-toggle");
        const menu = document.querySelector(".menu");

        menuToggle.addEventListener("click", () => {
            console.log("Button clicked");
            menu.classList.toggle("active");
        });
    });

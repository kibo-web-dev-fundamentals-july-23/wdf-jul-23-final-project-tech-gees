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

    // Get a reference to the refresh button
const refreshButton = document.getElementById("refresh-button");

// Add a click event listener to the button
refreshButton.addEventListener("click", function() {
    // Reload the current page
    location.reload();
});

const toggleButton = document.getElementById("toggle-view");
const viewIcon = document.getElementById("view-icon");
const gridView = document.querySelector(".grid-view");
const listView = document.querySelector(".list-view");

let isGridView = true;

toggleButton.addEventListener("click", function () {
    if (isGridView) {
        // Switch to list view
        gridView.style.display = "none";
        listView.style.display = "block";
        viewIcon.classList.remove("fa-th-large");
        viewIcon.classList.add("fa-list");
    } else {
        // Switch to grid view
        gridView.style.display = "grid";
        listView.style.display = "none";
        viewIcon.classList.remove("fa-list");
        viewIcon.classList.add("fa-th-large");
    }

    // Toggle the view state
    isGridView = !isGridView;
});

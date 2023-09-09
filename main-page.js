// for the hamburger

// Get references to the menu elements
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

// Function to toggle the menu when the hamburger is clicked
menuToggle.addEventListener("click", function() {
    menu.classList.toggle("active"); // Toggle the "active" class on the menu
});


const textarea = document.getElementById('myTextarea');

textarea.addEventListener('input', function () {
    this.style.height = 'auto';  // Reset the height to auto
    this.style.height = (this.scrollHeight) + 'px';  // Set the height to match the content
});

// This code will automatically adjust the height of the textarea as you type, increasing it to fit the content while keeping the width fixed at 300 pixels.

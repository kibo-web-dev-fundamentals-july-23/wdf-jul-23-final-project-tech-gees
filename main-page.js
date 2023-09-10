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

// // This code will automatically adjust the height of the textarea as you type, increasing it to fit the content while keeping the width fixed at 300 pixels.

// Get references to the input-box and text-area
const inputBox = document.querySelector(".input-box");
const textArea = document.querySelector(".text-area");

// Add a click event listener to the input-box
inputBox.addEventListener("click", function () {
    // Toggle the visibility of input-box and text-area
    inputBox.style.display = "none";
    textArea.style.display = "block";

    // Focus on the text area for user input
    document.getElementById("myTextarea").focus();
});

// Add a blur event listener to the text area
document.getElementById("myTextarea").addEventListener("blur", function () {
    // Toggle the visibility of text-area and input-box
    inputBox.style.display = "block";
    textArea.style.display = "none";
});


// This code will automatically adjust the height of the textarea as you type, increasing it to fit the content while keeping the width fixed at 300 pixels.

// buttons in the text box
const boldButton = document.getElementById("bold-button");
const italicButton = document.getElementById("italic-button");
const strikethroughButton = document.getElementById("strikethrough-button");
const editableText = document.querySelector(".editable-text");

boldButton.addEventListener("click", () => {
  document.execCommand("bold", false, null);
});

italicButton.addEventListener("click", () => {
  document.execCommand("italic", false, null);
});

strikethroughButton.addEventListener("click", () => {
  document.execCommand("strikethrough", false, null);
});

const starButton = document.getElementById("star-button");
let isStarred = false;

starButton.addEventListener("click", () => {
  isStarred = !isStarred; // Toggle the starred state

  if (isStarred) {
    starButton.classList.add("starred"); // Add the "starred" class
  } else {
    starButton.classList.remove("starred"); // Remove the "starred" class
  }
});

// list of notes

const noteContainer = document.getElementById("note-container");

function addNote(title, content) {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("note-title");
  titleDiv.textContent = title;

  const contentDiv = document.createElement("div");
  contentDiv.textContent = content.substring(0, content.indexOf(".") + 1); // Display the first sentence.

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("note-date");
  dateDiv.textContent = new Date().toLocaleString(); // Display the current date and time.

  noteDiv.appendChild(titleDiv);
  noteDiv.appendChild(contentDiv);
  noteDiv.appendChild(dateDiv);

  // Insert the new note at the top of the container.
  noteContainer.insertBefore(noteDiv, noteContainer.firstChild);
}

// Example usage:
addNote("Note 1 Title", "This is the content of Note 1. It's a sample note.");
addNote("Note 2 Title", "This is the content of Note 2. Another example note.");
addNote("Note 3 Title", "This is the content of Note 3. It's a sample note.");
addNote("Note 4 Title", "This is the content of Note 4. Another example note.");
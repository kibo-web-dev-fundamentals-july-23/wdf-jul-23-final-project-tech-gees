// THIS IS FOR THE HAMBURGER...

// Get references to the menu elements
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
// Get the search results container
const searchResults = document.querySelector(".search-results");
const textContainer = document.querySelector(".text-container")

// Function to toggle the menu when the hamburger is clicked
menuToggle.addEventListener("click", function() {
    menu.classList.toggle("active"); // Toggle the "active" class on the menu
});

menuToggle.addEventListener("click", function() {
  console.log("Hamburger clicked!"); // Add this line
  menu.classList.toggle("active");
});

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});

// THIS IS FOR THE REFRESH BUTTON...

// Get a reference to the refresh button
const refreshButton = document.getElementById("refresh-button");

// Add a click event listener to the button
refreshButton.addEventListener("click", function () {
    // Use the location object to reload the page
    location.reload();
});



// THIS IS FOR THE TEXT AREA...
const textarea = document.getElementById('myTextarea');

textarea.addEventListener('input', function () {
    this.style.height = 'auto';  // Reset the height to auto
    this.style.height = (this.scrollHeight) + 'px';  // Set the height to match the content
});


// Function to open the note in an editable text box
function openNoteInEditableTextBox(title, content) {
  titleInput.value = title;
  contentTextarea.value = content;
  textArea.style.display = "block";
  inputBox.style.display = "none";
}

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
    document.getElementById("text-area").focus();
});

// Add a blur event listener to the text area
document.getElementById("text-area").addEventListener("blur", function () {
    // Toggle the visibility of text-area and input-box
    inputBox.style.display = "block";
    textArea.style.display = "none";
});

// Add a click event listener to the document
document.addEventListener("click", function (event) {
    // Check if the click event target is not inside the text container
    if (!textContainer.contains(event.target)) {
        // Clicked outside the text container, hide the text area and show the input box
        textArea.style.display = "none";
        inputBox.style.display = "block";
    }
});


// THIS IS FOR THE ICONS INSIDE THE TEXT AREA...

// buttons in the text box
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

// Select the elements
const titleInput = document.getElementById("title");
const contentTextarea = document.getElementById("myTextarea");
const saveButton = document.getElementById("saveButton");
const noOutput = document.getElementById("no-output")

// Add event listener to the save button
saveButton.addEventListener("click", function() {
    const title = titleInput.value;
    const content = contentTextarea.value;

    if (title && content) {
        addNote(title, content);
        // Clear the input fields after adding the note
        titleInput.value = "";
        contentTextarea.value = "";
        textArea.style.display = "none"
        inputBox.style.display ="block"
    } else {
      noOutput.style.display = "block"
      textContainer.style.marginTop = "10px"
      textArea.style.display = "none"
      inputBox.style.display ="block"

      noOutput.textContent = "Please Enter A Title and Text To Save"
    }
});
let notes =[]
function addNote(title, content) {
    const note = {
      title: title,
      content: content
    };
    noteContainer.style.display = "block"
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("notes");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("note-title");
    titleDiv.textContent = title;

    const contentDiv = document.createElement("div");
    // contentDiv.textContent = content.substring(0, content.indexOf(".") + 1); // Display the first sentence.
    contentDiv.textContent = content;

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("note-date");
    dateDiv.textContent = new Date().toLocaleString(); // Display the current date and time.

    noteDiv.appendChild(titleDiv);
    noteDiv.appendChild(contentDiv);
    noteDiv.appendChild(dateDiv);

    // Insert the new note at the top of the container.
    noteContainer.insertBefore(noteDiv, noteContainer.firstChild);

    notes.push(note)
}

// FOR THE SEARCH FUNCTION...

// Function to perform the search
function searchNotes() {
  // Get the search input value
  const searchInput = document.getElementById("searchInput").value.toLowerCase();

  // Filter the notes based on the search input
  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchInput));

  // Clear any previous results or error messages
  searchResults.innerHTML = "";

  if (filteredNotes.length === 0) {
      // No matching notes found, display an error message
      noteContainer.style.display ="none"
      searchResults.innerHTML = "<h3>No matching notes found.</h3>";

  } else {
      // Display the matching notes
      noteContainer.style.display = "none"
      searchResults.style.display = "block"
      filteredNotes.forEach(note => {
          const noteDiv = document.createElement("div");
          noteDiv.classList.add("note");
          // const firstSentence = getFirstSentence(note.content);
          noteDiv.innerHTML = `<h3>${note.title}</h3><p>${note.content}</p>`;
          searchResults.appendChild(noteDiv);
  })
}
}

// Add an event listener for the search icon click event
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", searchNotes);

// Add an event listener for the Enter key press event
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
      searchNotes();
  }
});

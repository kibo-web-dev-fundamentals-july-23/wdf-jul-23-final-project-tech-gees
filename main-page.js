// THIS IS FOR THE HAMBURGER...

// Get references to the menu elements
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
// Get the search results container
const searchResults = document.querySelector(".search-results");
const textContainer = document.querySelector(".text-container")
const noOutput = document.getElementById("no-output")

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

// // This code will automatically adjust the height of the textarea as you type, increasing it to fit the content while keeping the width fixed at 300 pixels.

// Get references to the input-box and text-area
const inputBox = document.querySelector(".input-box");
const textArea = document.querySelector(".text-area");

// Add a click event listener to the input-box
inputBox.addEventListener("click", function () {
    // Toggle the visibility of input-box and text-area
    noOutput.style.display = "none";
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
const editableText = document.querySelector(".editable-text");
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
      const header = document.querySelector('header');
      header.style.marginBottom = '10px';
      setTimeout(function () {
        noOutput.style.display = "none";
    }, 15000);
    }

});


let notes =[]
function addNote(title, content) {
    const note = {
      title: title,
      content: content
    };


    noteContainer.style.display = "block";
    const noteDiv = document.createElement("div");
    // noteContainer.appendChild(noteDiv);
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

    // new part

     // Add a click event listener to open the note using an editable text box
      noteDiv.addEventListener("click", function () {
        openNoteInEditableTextBox(title, content);
      });

      // Add a delete icon to the note div at the top right corner
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("material-icons", "delete-icon");
      deleteIcon.textContent = "delete";
      console.log("delete icon created")
      deleteIcon.addEventListener("click", function () {
          deleteNoteAndMoveToTrash(noteContainer, note);
      });


      // Append the delete icon to the noteDiv
      noteDiv.appendChild(deleteIcon);
      noteDiv.appendChild(titleDiv);
      noteDiv.appendChild(contentDiv);
      noteDiv.appendChild(dateDiv);


  // Insert the new note at the top of the container.
  noteContainer.appendChild(noteDiv);
  noteContainer.insertBefore(noteDiv, noteContainer.firstChild);

  notes.push(note)
}

// Function to open the note in an editable text box
function openNoteInEditableTextBox(title, content) {
  titleInput.value = title;
  contentTextarea.value = content;
  textArea.style.display = "block";
  inputBox.style.display = "none";
}

// function to delete note and move to trash
function deleteNoteAndMoveToTrash(noteDiv, note) {
  // Remove the note from the UI
  noteDiv.remove();

  // Remove the note from the notes array
  const noteIndex = notes.indexOf(note);
  if (noteIndex !== -1) {
      notes.splice(noteIndex, 1);
  }

  // Create a new div for the deleted note in the trash menu
  const trashNoteDiv = document.createElement("div");
  trashNoteDiv.classList.add("trash-note");

  // Create elements to display the deleted note's title and content
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("note-title");
  titleDiv.textContent = note.title;

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("note-content");
  contentDiv.textContent = note.content;

  // Append the title and content to the trash note
  trashNoteDiv.appendChild(titleDiv);
  trashNoteDiv.appendChild(contentDiv);

  // Append the trash note to the trash container
  const trash = document.getElementById("trash");
  trash.appendChild(trashNoteDiv);
  trashNoteDiv.style.display = "none";
}

// function displayTrashNoteContainer()

// // display the trashed notes
// trash.addEventListener("click", function(){
//   displayTrashNoteContainer()
// })

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
      setTimeout(function () {
        searchResults.style.display = "none";
    }, 15000);
  } else {
      // Display the matching notes
      noteContainer.style.display = "none"
      searchResults.style.display = "block"
      filteredNotes.forEach(note => {
          const noteDiv = document.createElement("div");
          noteDiv.classList.add("note");
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
searchInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      searchNotes();
  }
});
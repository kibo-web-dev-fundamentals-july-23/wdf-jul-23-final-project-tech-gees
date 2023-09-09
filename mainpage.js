// screen 2

// steps to implement

// functionality of hamburger when toggled

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// hamburger is the name of the button, menu show is another class with css display: block
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// collect search input (title) from the user and use it to filter through the list of notes title

const searchInput = document.querySelector('.search');
const searchButton = document.querySelector('.search-button');
const noteList = document.querySelector('.note-list');
const errorDiv = document.querySelector('.error');

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const notes = noteList.querySelectorAll('.note'); // Assuming each note has a class of 'note'

    // Initially, assume at least one note is found
    let found = true;

    // Loop through notes and check if the title matches the search term
    notes.forEach((note) => {
        const title = note.querySelector('.note-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
        }
    });

    // Show/hide the error message based on search results
    notes.forEach((note) => {
        if (note.style.display === 'block') {
            found = true;
        }
    });

    if (!found) {
        errorDiv.style.display = 'block';
    } else {
        errorDiv.style.display = 'none';
    }
}

// the text box for new content when clicked should expand


// new notes without a title cannot be saved, when save button is clicked it should display an error message
// the font button should have various font styles such as bold, italics, strikethrough, checkbox
// when the save button is clicked it saves the note using the list format
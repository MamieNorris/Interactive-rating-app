let userNote = document.getElementById('user-note');
const button = document.getElementById('submit-button');
const ratingContainer = document.getElementById('rating-container');
const thanksContainer = document.getElementById('thanks-container');
let note = 0;

function storeRating(self) {
    const ratingContainer = document.getElementById(self);
    note = ratingContainer.innerText;
}

function displayRating() {
    userNote.innerText = note;
    displayMainContainers();
}

function displayMainContainers() {
    thanksContainer.style.display = 'flex';
    ratingContainer.style.display = 'none';
}
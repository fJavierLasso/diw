// Add click event listener to each table cell
const firstWordCells = document.querySelectorAll('.title-table .first-words');
const lastWordCells = document.querySelectorAll('.title-table .last-words');
const titlePreview = document.querySelector('#title-preview');

// Select two random cells by default
const randomFirstWordCell = firstWordCells[Math.floor(Math.random() * firstWordCells.length)];
randomFirstWordCell.classList.add('selected');
const randomLastWordCell = lastWordCells[Math.floor(Math.random() * lastWordCells.length)];
randomLastWordCell.classList.add('selected');
titlePreview.innerText = `${randomFirstWordCell.innerText} ${randomLastWordCell.innerText}`;


firstWordCells.forEach(firstWordCell => {
    firstWordCell.addEventListener('click', () => {
        // Remove any previously selected first word cells
        firstWordCells.forEach(cell => cell.classList.remove('selected'));

        // Add selected class to clicked cell
        firstWordCell.classList.add('selected');

        // Get selected first word
        const selectedFirstWord = firstWordCell.innerText;

        // Check if a second word has been selected, and update title preview if so
        const selectedLastWord = document.querySelector('.title-table .last-words.selected');
        if (selectedLastWord) {
            titlePreview.innerText = `${selectedFirstWord} ${selectedLastWord.innerText}`;
        }
    });
});

lastWordCells.forEach(lastWordCell => {
    lastWordCell.addEventListener('click', () => {
        // Remove any previously selected last word cells
        lastWordCells.forEach(cell => cell.classList.remove('selected'));

        // Add selected class to clicked cell
        lastWordCell.classList.add('selected');

        // Get selected last word
        const selectedLastWord = lastWordCell.innerText;

        // Check if a first word has been selected, and update title preview if so
        const selectedFirstWord = document.querySelector('.title-table .first-words.selected');
        if (selectedFirstWord) {
            titlePreview.innerText = `${selectedFirstWord.innerText} ${selectedLastWord}`;
        }
    });
});


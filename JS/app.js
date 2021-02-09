// => Constructor for the object book
function book(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;

}

// -> Display prototype for object book
function display() {

}


// -> Submit event listner for the 'addForm'

let addForm = document.getElementById('addForm');
addForm.addEventListener('submit', addBook); // It'll call addBook method upon the events occurance.

// -> Add method to display prototype.

function addBook(e) {
    e.preventDefault(); // It'll prevent the page from refreshing upon submission, as that's the default behavior upon page submission.
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    // let genre = document.getElementById('genre').value;
    // let genre = document.getElementById('genreOption').value;
    let book1 = new book(name, author, "Fiction");
    console.log(book1);
}
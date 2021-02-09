// => Constructor for the object book
function book(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;

}

// -> Display Constructor to display book list on the table.
function display() {

}

// -> Adding methods to display prototype
display.prototype.clear = function() {
    let addForm = document.getElementById('addForm');
    addForm.reset(); // Will clear the form after submission.
}

display.prototype.add = function(book1) {
    // Populating the table rows on front end.
    let tableBody = document.getElementById('tableBody');
    bookListHTMLString = `
    <tr>
        <th scope="row">1</th>
        <td>${book1.name}</td>
        <td>${book1.genre}</td>
        <td>${book1.author}</td>
    </tr>`;

    tableBody.innerHTML += bookListHTMLString;

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

    let display1 = new display();
    display1.add(book1);
    display1.clear();
}
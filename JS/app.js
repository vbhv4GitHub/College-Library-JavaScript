/*
TODO: 
#1. Store all the data in the localStorage.
#2. Delete/Issue - book option button with every book on the list.
#3. Add a scrollbar to the view.

*/

// => Constructor for the object book
function book(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;

}

// -> Display Constructor to display book list on the table.
function displayBooks() {

}

// -> Adding methods to display prototype
displayBooks.prototype.clear = function () {
    let addForm = document.getElementById('addForm');
    addForm.reset(); // Will clear the form after submission.
}

displayBooks.prototype.add = function (book1) {
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

displayBooks.prototype.validate = function (book1) {
    if (book1.name.length < 3 || book1.author.length < 3 || book1.genre.length < 3) {
        return false;
    }
    else {
        return true;
    }
}

displayBooks.prototype.show = function (type, message) {
    let showMessage = document.getElementById('message');
    showMessage.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong> Alert:</strong> ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;

    // Hiding the alert pop up after 3 seconds.
    setTimeout( function() {
        showMessage.innerHTML = ``;
    }, 3000);
}


// -> Submit event listner for the 'addForm'

let addForm = document.getElementById('addForm');
addForm.addEventListener('submit', addBook); // It'll call addBook method upon the events occurance.

// -> Add method to display prototype.

function addBook(e) {
    e.preventDefault(); // It'll prevent the page from refreshing upon submission, as that's the default behavior upon page submission.
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let genre = document.getElementById('genre').value;
    let book1 = new book(name, author, genre);
    console.log(book1);
    
    // => The below block of code will add the added book to table(list) and clear the previous data from our addBook form.
    let display1 = new displayBooks();
    if(display1.validate(book1)) {
        display1.add(book1);
        display1.clear();
        display1.show('success', "The book was added to the library successfuly.");
    }
    else {
        // Display an error message.
        display1.show('danger', "Please enter valid informations and try again!!!");
    }

}
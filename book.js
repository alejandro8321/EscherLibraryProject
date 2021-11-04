//stores book objects
let myLibrary = [];
let index = 0;

//Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    if(this.read === true){
        this.read = false;
    }
    else{
        this.read = true;
    }
}



//displays the form when addBook btn is clicked
function showForm() {
    let form = document.getElementById("newBookForm");
    
    if(form.style.display === "none"){
        form.style.display = "block";
    }
    else{
        form.style.display = "none";
    }
}


function handleForm() {
    let bookTitle = document.getElementById("titlein").value;
    let bookAuthor = document.getElementById("authorin").value;
    let bookPages = document.getElementById("pagesin").value;
    let bookRead = document.getElementById("readin").checked;

    tempBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(tempBook);

    //hide the newBookForm
    document.getElementById("newBookForm").style.display = "none";

    addTableRow(tempBook);


}

//adds a book to the table
function addTableRow(book) {
    let table = document.getElementById("book-table");
    
    //create row and associate to book's index in library
    let newRow = document.createElement("tr");
    newRow.setAttribute("data-index", index);
    newRow.setAttribute("class", "book-row");
    index += 1;
    
    //create table cells
    let titleCell = document.createElement("td");
    let authorCell = document.createElement("td");
    let pagesCell = document.createElement("td");
    let readCell = document.createElement("td");
    titleCell.innerText = book.title;
    authorCell.innerText = book.author;
    pagesCell.innerText = book.pages;
    readCell.innerText = book.read;

    //create delete book button
    let buttonCell = document.createElement("td");
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-danger");
    button.setAttribute("onclick", "deleteBook(this)");
    button.innerText = "Delete";
    buttonCell.appendChild(button);

    //create toggle read button
    let toggleCell = document.createElement("td");
    let toggleBtn = document.createElement("button");
    toggleBtn.setAttribute("type", "button");
    toggleBtn.setAttribute("class", "btn btn-warning");
    toggleBtn.setAttribute("onclick", "toggleStatus(this)");
    toggleBtn.innerText = "Toggle Read";
    toggleCell.appendChild(toggleBtn);


    //add row to table using DOM manipulation
    newRow.appendChild(titleCell);
    newRow.appendChild(authorCell);
    newRow.appendChild(pagesCell);
    newRow.appendChild(readCell);
    newRow.appendChild(buttonCell);
    newRow.appendChild(toggleCell);

    table.appendChild(newRow);


}

//removes a book from the table and array
function deleteBook(book){

    //get row index
    let i = book.parentNode.parentNode.dataset.index;

    alert("Deleting book: " + i);

    //get node collection
    let library = document.getElementsByClassName("book-row");

    alert("num tr tags: " + library.length);

    for(let j = i; j < library.length; j++){
        library[j].setAttribute("data-index", j-1);
        //alert(j-1);
    }

    //delete book from library array
    myLibrary.splice(i, 1);  

    //remove the book(row) from the document
    book.parentNode.parentNode.remove();
    
    index -= 1;

    alert("Book Deleted!");
}


function toggleStatus(book){
    /*
    alert("library size: " + myLibrary.length);

    //get row index for book
    let i = book.parentNode.parentNode.dataset.index;

    alert(i);

    //toggle book obj read variable
    myLibrary[i].toggleRead();

    //alert user of the new status of book
    alert("Read status is now: " + myLibrary[i].read);

    //display the read status in the table
    book.parentNode.previousSibling.previousSibling.innerText = myLibrary[i].read;*/
}

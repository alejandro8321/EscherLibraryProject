//stores book objects
let myLibrary = [];

//Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//adds book objects to library array
function addBook(Book) {
    myLibrary.push(Book);
}


//populates table with some initial values (i.e. static) DELETE ME
let tempBook = new Book("The Hobbit", "J.R.R Tolkien", 300, true);
addBook(tempBook);
tempBook = new Book("Green Eggs & Ham", "Dr.Seuss", 30, false);
addBook(tempBook);
//alert(myLibrary[0].author);




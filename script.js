const container = document.querySelector('.container');
const title = document.querySelector('.cards1');
const author = document.querySelector('.cards2');
const pages = document.querySelector('.cards3');
const read = document.querySelector('.cards4');
const deleteB = document.querySelector('.delete')
const form = document.querySelector('#form')

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // the constructor...
};


//Creates book and pushes to array from original constructor 
Book.prototype.createBook = function () {
    let newBook = this.title + " " + this.author + " " + this.pages + " " + this.read;

    myLibrary.push(newBook);
    console.log(newBook);
    return;
};

form.addEventListener("submit",  (event) => {
    event.preventDefault();
    
    let titleInput = document.querySelector("#titleInput").value;
    let authorInput = document.querySelector("#authorInput").value;
    let pagesInput = document.querySelector("#pagesInput").value;
    let readInput = document.querySelector("#readInput").value;

    //adding ',' for the split so multipe words can be entered
    let book =  new Book(titleInput + ',',authorInput + ',',pagesInput + ',',readInput);
    book.createBook();
    displayBook();
    form.reset();
    // myLibrary = [];
});


//loop through array length, split each book in the array into words after the , and add each word to appropriate heading with appropriate class
function displayBook() {
    //loop through array length, split each book in the array into words after the , and add each word to appropriate heading with appropriate class
    const titleCreate = document.createElement("span");
    const authorCreate = document.createElement("span");
    const pageCreate = document.createElement("span");
    const readCreate = document.createElement("span");
    const deleteButton = document.createElement("button");
    for (i = 0; i < myLibrary.length; i++) {
        
        word = myLibrary[i].split(",")
        console.log(word);


        
        titleCreate.className = `cards`;
        titleCreate.textContent = word[0];
       


        
        authorCreate.className = `cards`;
        authorCreate.textContent = word[1];
       

        
        pageCreate.className = `cards`;
        pageCreate.textContent = word[2];
        

        
        readCreate.className = `cards end`;
        readCreate.textContent = word[3];
        

        
        deleteButton.textContent = 'Delete';
        deleteButton.classList = 'deleteButton cards';
        
        }
        title.appendChild(titleCreate);
        author.appendChild(authorCreate);
        pages.appendChild(pageCreate);
        read.appendChild(readCreate);
        deleteB.appendChild(deleteButton);
};





// book1 = new Book(`title1 still Title1,`, "author1,", "pages1,", "read1")
// book2 = new Book("title2,", "author2,", "pages2,", "read2,")
// book1.createBook();
// book2.createBook();


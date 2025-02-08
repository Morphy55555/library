const container = document.querySelector('.container');

const title = document.querySelector('.cards1');
const author = document.querySelector('.cards2');
const pages = document.querySelector('.cards3');
const read = document.querySelector('.cards4');

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

    //adding , after each input so multipe words can be entered for the split 
    let book =  new Book(titleInput + ',',authorInput + ',',pagesInput + ',',readInput);
    book.createBook();
    displayBook();
    form.reset();
    myLibrary = [];
});


//loop through array length, split each book in the array into words after the , and add each word to appropriate heading with appropriate class
function displayBook() {
    //loop through array length, split each book in the array into words after the , and add each word to appropriate heading with appropriate class
    for (i = 0; i < myLibrary.length; i++) {

        word = myLibrary[i].split(",")
        console.log(word);


        const titleCreate = document.createElement("span");
        titleCreate.className = `cards + titleCard${i + 1}`;
        //add classname 1 and upwards for cards
        titleCreate.textContent = word[0];
        title.appendChild(titleCreate);


        const authorCreate = document.createElement("span");
        authorCreate.className = `cards + authorCard${i + 1}`;
        authorCreate.textContent = word[1];
        author.appendChild(authorCreate);

        const pageCreate = document.createElement("span");
        pageCreate.className = `cards + authorCard${i + 1}`;
        pageCreate.textContent = word[2];
        pages.appendChild(pageCreate);

        const readCreate = document.createElement("span");
        readCreate.className = `cards + authorCard${i + 1}`;
        readCreate.textContent = word[3];
        read.appendChild(readCreate);

    }
};





// book1 = new Book(`title1 still Title1,`, "author1,", "pages1,", "read1")
// book2 = new Book("title2,", "author2,", "pages2,", "read2,")
// book1.createBook();
// book2.createBook();



displayBook();

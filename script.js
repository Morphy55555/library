const container = document.querySelector('.container');
const title = document.querySelector('.cards1');
const author = document.querySelector('.cards2');
const pages = document.querySelector('.cards3');
const read = document.querySelector('.cards4');
const deleteB = document.querySelector('.delete');
const form = document.querySelector('#form');




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
});



function displayBook() {
    //loop through array length, split each into words after the , and add each word to appropriate heading with appropriate class
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

        //Setting the data-index to to correspond to each 'book' based of the array index number, (myLibrary.Length)
        titleCreate.setAttribute('data-index', myLibrary.length);

        authorCreate.className = `cards author`;
        authorCreate.textContent = word[1];
        authorCreate.setAttribute('data-index', myLibrary.length);

        pageCreate.className = `cards page`;
        pageCreate.textContent = word[2];
        pageCreate.setAttribute('data-index', myLibrary.length);

        readCreate.className = `cards read`;
        readCreate.textContent = word[3];
        if (word[3] === ' Unread') {
            readCreate.style.color = 'red';
        };
        readCreate.setAttribute('data-index', myLibrary.length);
    
        deleteButton.textContent = 'Delete';
        deleteButton.classList = 'deleteButton cards';
        deleteButton.setAttribute('data-index', myLibrary.length);
        
        }
        title.appendChild(titleCreate);
        author.appendChild(authorCreate);
        pages.appendChild(pageCreate);
        read.appendChild(readCreate);
        deleteB.appendChild(deleteButton);
};

deleteB.addEventListener('click', (e) => {
    //on click we're getting the index of that delete button and thus the row it's on, selecting all data-index attributes with that index number, then a foreach loop to go through the node list and delete them all
    const index = e.target.getAttribute('data-index');
    const bookIndex = document.querySelectorAll(`[data-index="${index}"]`);
    myLibrary.splice(index - 1, 1);
    console.log(index);

    bookIndex.forEach(index => {
        index.remove();
    });

});


//Functionality for 'read' to be changed to 'not-read' and vice versa
read.addEventListener('click', (e) => {
    const readNodeList = document.querySelectorAll('.read');
    const index = e.target.getAttribute('data-index');
    if (readNodeList[index -1].innerHTML === " Read") {
        readNodeList[index -1].innerHTML = " Unread";
        readNodeList[index -1].style.color = 'red';
    } else if (readNodeList[index-1].innerHTML === " Unread") {
        readNodeList[index-1].innerHTML = " Read"
        readNodeList[index -1].style.color = 'green';
    };
    
});

let defaultBook = new Book(`The Hitchhiker’s Guide to the Galaxy,`, "Douglas Adam's,", "208,", "Read");
defaultBook.createBook();
displayBook();





// book2 = new Book("title2,", "author2,", "pages2,", "read2,")
// book1.createBook();
// book2.createBook();

// displayBook();
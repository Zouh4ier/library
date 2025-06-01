const myLibrary=[];



function book(title, author, pages,read){
    this.id=crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}


function addBookToLibrary(title,author,pages,read){
    const newBook= new book(title,author,pages,read)
    myLibrary.push(newBook);
}

addBookToLibrary("thile","shshs",20,"readyes");
addBookToLibrary("thile","shshs",20,"readyes");
addBookToLibrary("thile","shshs",20,"readyes");
addBookToLibrary("thile","shshs",20,"readyes");

const cardContainer=document.querySelector(".cards-container");



function displayBook(){

    for(let i of myLibrary){
        const card=document.createElement("div");
        card.classList.add("card")
        const list=document.createElement("ul");
        const title=document.createElement("li");
        const author=document.createElement("li");
        const pages=document.createElement("li");
        const read=document.createElement("li");

        title.textContent="Title : "+i.title;
        author.textContent='Author : '+i.author;
        pages.textContent="Pages : "+i.pages;
        read.textContent="read : "+i.read;

        list.appendChild(title);
        list.appendChild(author);
        list.appendChild(pages);
        list.appendChild(read);
        card.appendChild(list);
        cardContainer.appendChild(card);
    }

}

displayBook();

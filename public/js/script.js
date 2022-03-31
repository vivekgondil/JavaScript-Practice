class Books {
    constructor(
        name, pages,
    ) {
        this.name = name;
        this.currentPage = 0;
        this.pages = pages;
    }
    nextPage() {
        this.currentPage++;
    }
}

const book1 = new Books("Rich Dad, Poor Dad", 250);
const book2 = new Books("Rich Dad, Poor Dad2", 250);
const book3 = new Books("Rich Dad, Poor Dad3", 250);
const book4 = new Books("Rich Dad, Poor Dad4", 250);
const book5 = new Books("Rich Dad, Poor Dad5", 250);


const books = [book1, book2, book3, book4, book5]
let html = "";
books.forEach(book => {
    html = html + `<li>${book.name}</li>`
})

document.getElementById("app").innerHTML = html
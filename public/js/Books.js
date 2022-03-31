export default class Books {
    constructor(
        name, pages,
    ) {
        this.name = name;
        this.currentPage = 0;
        this.pages = pages;
    }
    nextPage() {
        this.currentPage = this.currentPage++;
    }
}
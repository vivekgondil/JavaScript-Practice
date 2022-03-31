const nav = document.createElement("ul");
nav.classList.add("navbar");

let navelements = ["Home", "About", "Register", "Search", "Contact"]

navelements.forEach((navElement) => {
    let link = document.createElement("a");
    link.setAttribute("href", "#")
    link.innerHTML = navElement;
    const li = document.createElement("li")
    li.append(link);
    nav.append(li)
})
const app = document.getElementById("app");
app.append(nav);

let nodeListLi = document.querySelectorAll("li")
nodeListLi.forEach((li) => {
    li.style = "color: red"
    li.style = "background: lightblue"
})
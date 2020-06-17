const textBox = document.getElementById("text-box");
const addBtn = document.getElementById("add-button");
const searchBtn = document.getElementById("search-button");
const listItems = document.getElementById("list-items");
const close = document.getElementsByClassName("close");

addBtn.addEventListener('click', addListItem);
searchBtn.addEventListener('click', Search);

function addListItem() {
    const li = document.createElement("li");
    let listContent = document.createTextNode(textBox.value);
    if (textBox.value === '') {
        alert("You must write something!");
    }
    else {
        li.appendChild(listContent);

        let span = document.createElement("span");
        span.classList.add("close");
        let x = document.createTextNode("x");
        span.appendChild(x);
        li.appendChild(span);

        listItems.appendChild(li);

        span.addEventListener('click', deleteItem);
        li.addEventListener('click', completeTask);
    }
}

function Search() {
    const searchString = textBox.value.toLowerCase();
    let toDos = Array.from(document.getElementsByTagName("li"));
    if (searchString === '') {
        alert("Search query cannot be blank");
    }
    else {
        const searchResults = toDos.filter(item => {
            return (
                item.innerText.toLowerCase().includes(searchString)
            );
        });
        displayResults(searchResults);
    }
}

function displayResults(arr) {
    if (arr.length < 1) {
        let div = document.createElement("div");
        div.innerText = "No results for this query";
        div.classList.add("search-results");
        let header = document.querySelector("header");
        header.appendChild(div);
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            let div = document.createElement("div");
            div.innerText = arr[i].innerText;
            div.classList.add("search-results");
            let header = document.querySelector("header");
            header.appendChild(div);
        }
    }
}

function completeTask() {
    this.classList.toggle("checked");
}

function deleteItem() {
    const closedTask = this.parentNode;
    closedTask.style.display = "none";
}

//style search results divs !!
//fix position of close button !!
//alternating colour for li or spaces; fix bottom border issue !!
//responsive for large screens, have smaller container !!

//hide (or delete) search results on click a close button
//x should not show in search results
//if text box is empty, add and search button should not work !!
//confirm from user before deleting tasks.
//on click close button,clear text box
//when no tasks are added, a page indicating this should be displayed
const btn = document.querySelector(".submitButton");
const titleInput = document.querySelector(".title");
const nameInput = document.querySelector(".name");
const pagesInput = document.querySelector(".pages");
const container = document.querySelector(".container");

const title = ["Atomic Habits", "Sapiens: A Brief History of Humankind", "The Alchemist", "Ikigai: The Japanese Secret to a Long and Happy Life"];
const author = ["James Clear", "Yuval Noah Harari", "Paulo Coelho", "Héctor García, Francesc Miralles"];
const pages = [320, 464, 208,208];

const deletebtn = document.querySelector(".delete");

var table = document.querySelector("table");

function Book(title, name, pages){
    this.title = title;
    this.name = name;
    this.pages = pages;

    this.details = function(){
        console.log(this.name, " ", this.title, " ", this.pages, " ");
    };
}


btn.addEventListener("click",()=>{
    var count = 3;
    const nameValue = nameInput.value;
    const titleValue = titleInput.value;
    const pagesValue  = pagesInput.value;
    
    title.push(titleValue);
    author.push(nameValue);
    pages.push(pagesValue);

    var row = table.insertRow(-1);
    row.style.textAlign = "center";
    row.style.fontWeight = 400;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = titleValue;
    cell2.innerHTML = nameValue;
    cell3.innerHTML = pagesValue;
    cell4.innerHTML = `<input type="checkbox" name="read"></input>`;
    cell5.innerHTML = `<button class="delete">Delete</button>`;
    
    table.appendChild(row);
})


document.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        const row = event.target.closest("tr");
        row.remove();
    }
});

const input = document.getElementById("input");
const btn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const form = document.getElementById("form");

const todos = [];
let todoText = "";

input.addEventListener("change" , (e)=> {
    todoText = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(todoText === ""){
        alert("Cannot add empty string");
        return ;
    }
    todos.push(todoText);
    input.value = "";
    list.innerHTML = "";
    for(let i =0 ;i < todos.length ; i++){
        const liTag = document.createElement("li");
        liTag.innerText = todos[i];
        list.appendChild(liTag);
    }
})

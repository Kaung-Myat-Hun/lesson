const input = document.getElementById("input");
const btn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const form = document.getElementById("form");

let todos = [];
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
    loopRenderFunction();
})

const deleteTodo = (li) => {
    const filtered = todos.filter((item) => {
        return item !== li.srcElement.innerText
    })
    todos = filtered
    loopRenderFunction();
}

const loopRenderFunction = () => {
    list.innerHTML = "";
    for(let i =0 ;i < todos.length ; i++){
        const liTag = document.createElement("li");
        liTag.onclick = deleteTodo;
        liTag.innerText = todos[i];
        list.appendChild(liTag);
    }
}
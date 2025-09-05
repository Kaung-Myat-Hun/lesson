const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");
const logoutBtn = document.getElementById("logout");
const status = document.getElementById("status");
let usernameValue = "";
let passwordValue = "";

const userNameFunction = (event) => {
    usernameValue = event.target.value;
}
const passwordFunction = (event) => {
    passwordValue = event.target.value;
}

username.addEventListener("change", userNameFunction)
password.addEventListener("change", passwordFunction)

const loginFunction = () => {
    if(usernameValue === "" ){
        alert("Username cannot be empty")
        return ;
    }
    if(passwordValue === ""){
        alert("Password cannnot be empty")
        return ;
    }
    if(usernameValue !== 'bate'){
        alert("Username is wrong")
        return ;
    }
    if(passwordValue !== "thar"){
        alert("Password is wrong")
        return ;
    }
    // location.href="welcome.html"
    loginBtn.style.display= "none";
    logoutBtn.style.display="block";
    status.style = "background-color: green; color: white;"
    status.innerText = "Welcome back " + usernameValue + " " + passwordValue
}

loginBtn.addEventListener("click", loginFunction);

const logoutFunction =() => {
    loginBtn.style.display="block";
    logoutBtn.style.display="none";
    status.style ="";
    status.innerText = "Hello"
}

logoutBtn.addEventListener("click", logoutFunction);



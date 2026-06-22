const form=document.getElementById("loginForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(email==="" || password===""){
    alert("Fill all fields");
    return;
}

localStorage.setItem("user",email);

window.location="index.html";
});
let email=document.getElementById('email')
let password=document.getElementById('password')
let submit=document.getElementById('submit-btn')
let login=document.getElementById('login')
let logout=document.getElementById('logout')

function submitInput(){
    // submit.addEventListener('click',()=>{
localStorage.setItem("email", email.value)
localStorage.setItem("password", password.value)
}

let isLoggedIn =localStorage.getItem("email") || localStorage.getItem("password");
    
if(login && logout){
     login.style.display = isLoggedIn ? "none" :"block";
     logout.style.display = isLoggedIn ? "block" : "none";
}

function logout_fun(){
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href='./mainform.html'
}
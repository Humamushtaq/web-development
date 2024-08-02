let email=document.getElementById('email')
let password=document.getElementById('password')
let submit=document.getElementById('submit-btn')
let login=document.getElementById('login')
let logout=document.getElementById('logout')
if(submit){
submit.addEventListener('click',()=>{
localStorage.setItem('email', email.value)
localStorage.setItem('password', password.value)
})
}

if(localStorage.getItem('email') && localStorage.getItem('password')){
    if(login && logout){
     login.style.display='none'
     logout.style.display='block'
}
}
else{
    if(login && logout){
    login.style.display='block'
    logout.style.display='none'
}
}
function logout_fun(){
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href='./mainform.html'
}
let string="";
let buttons= document.querySelectorAll('.btn');
Array.from(buttons).forEach((buttons)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string=dtring + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})
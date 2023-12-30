let formEl=document.getElementById('formId')
let newEl=document.getElementById('new');
let confirmEl=document.getElementById('confirm')

let newErrorEl=document.getElementById('newError');
let confirmErrorEl=document.getElementById('confirmError');

newEl.addEventListener('blur',function(event){
    if(event.target.value===""){
        newErrorEl.textContent="Required*"
        newErrorEl.classList.add('error-msg')
    }
    else{
        newErrorEl.textContent=""
    }
})

confirmEl.addEventListener('blur',function(event){
    if(event.target.value===""){
        confirmErrorEl.textContent="Required*"
    }
    else if(event.target.value!==newEl.value){
        confirmErrorEl.textContent="Password must be same"
    }
    else{
        confirmErrorEl.textContent=""
    }
})

formEl.addEventListener('submit',function(event){
    event.preventDefault()
})
import {addUser} from './main.js'

let resetForm = document.querySelector('#resetForm'),
    mailInput = document.querySelector('.input-mail'),
    checkboxInput = document.querySelector('.imput__checkbox'),
    checkImputMessage = document.querySelector('.imput__check'),
    passwordInput = document.querySelector('.input-pass');

//#region validation patterns

function validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

//#endregion

function getSignUpFormValues(event){
    event.preventDefault();

    const mail = resetForm.querySelector('[name="mail"]'),
        pass = resetForm.querySelector('[name="pass"]');

    const values = {
        mail: mail.value,
        pass: pass.value
    }    

    validator(resetForm, values);
}

resetForm.addEventListener('submit', getSignUpFormValues);

function validator(form, object){
    let mailValue = mailInput.value,
        passValue = passwordInput.value,
        formInputs = form.querySelectorAll('.input'),
        NullImputs = Array.from(formInputs).filter(input => input.value === ''); 

    formInputs.forEach(function (input) {
        if (input.value === ''){
            input.classList.add('_error');
        }
        else{ 
            input.classList.remove('_error');
        }
    });

    checkImputMessage.classList.remove('_ok');

    if(NullImputs.length !== 0){
        checkImputMessage.innerText = '!!! not all fields are filled:';
        checkImputMessage.classList.add('_visible');
        return false;
    }
    else{
        checkImputMessage.classList.remove('_visible');
        
    }
    
    if(!validateEmail(mailValue)){
        mailInput.classList.add('_error');
        checkImputMessage.classList.add('_visible');
        checkImputMessage.innerText = '!!! mail not valid:';
        return false;
    }
    else{
        mailInput.classList.remove('_error');      
        checkImputMessage.classList.remove('_visible');
    }

    if(!checkboxInput.checked){
        checkboxInput.classList.add('_error');      
        return false; 
    }
    else{
        checkboxInput.classList.remove('_error');
    }

    addUser(object.mail, object.pass);
    mailInput.value = '';
    passwordInput.value = '';
    checkImputMessage.classList.add('_ok');
    checkImputMessage.innerText = 'Registrarion successful:';
};
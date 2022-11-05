let siqninForm = document.querySelector('#signinForm'),
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

    const mail = siqninForm.querySelector('[name="mail"]'),
        pass = siqninForm.querySelector('[name="pass"]');

    const values = {
        mail: mail.value,
        pass: pass.value
    }    

    validator(siqninForm, values);
}

siqninForm.addEventListener('submit', getSignUpFormValues);

function validator(form, object){
    let mailValue = mailInput.value,
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
        checkImputMessage.innerText = 'Not all fields are filled:';
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

    $.get("https://localhost:7180/Admin/GetToMail?mail=" + object.mail,{
    }).done(function(data) {

        if(object.mail === data.email){
            checkImputMessage.classList.remove('_visible');
            checkImputMessage.classList.remove('_ok');
            if(object.pass !== data.password){
                checkImputMessage.classList.remove('_ok');
                checkImputMessage.classList.add('_visible');
                checkImputMessage.innerText = 'Password incorect:';
            }
            else{              
                mailInput.value = '';
                passwordInput.value = '';
                checkImputMessage.classList.remove('_visible');
                checkImputMessage.classList.add('_ok');
                checkImputMessage.innerText = 'Login successful:';
            }
        }
        else{
            checkImputMessage.classList.add('_visible');
            checkImputMessage.innerText = 'Mail incorect:';
        }
    });
    
};
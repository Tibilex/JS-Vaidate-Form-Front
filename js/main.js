/*
const signInBtn = document.querySelector('#signin'),
    signUpBtn = document.querySelector('#signup'),
    resetBtn = document.querySelector('#reset');



document.addEventListener('click', (event) => {
    const type = event.target.dataset.type;
    const mail = document.querySelector(".input-mail").value;
    const pass = document.querySelector(".input-pass").value;
    

    if (type === 'submit'){
        addUser(mail, pass);
    }
     
   })
*/
export function addUser(mail, pass){
    $.post("https://localhost:7180/Admin/Add",
    {
        email: mail,
        password: pass,       
    }).done(function(data){
        alert("Successfully Added!");
    });
};

export function GetUser(mail){
    $.get("https://localhost:7180/Admin/GetToMail?mail=" + mail,{

    }).done(function(data) {
        alert("Successfully Get");
    });
}
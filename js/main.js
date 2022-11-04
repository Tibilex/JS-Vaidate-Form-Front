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
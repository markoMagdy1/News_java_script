/// form validation 
var userName=document.getElementById("userName");
var userNameValidationMessage=document.getElementById("userNameValidationMessage");

var email=document.getElementById("email");
var emailValidationMessage=document.getElementById("emailValidationMessage");

var submit=document.getElementById("submit");     
var form=document.getElementById("form");
var hasError=false;


function nameValidation(){
    if(userName.value.length <4){
        userNameValidationMessage.style.display="block";
        hasError=true;
    }
    else{
        userNameValidationMessage.style.display="none";
        hasError=false;
    }
}
function emailValidation(){
    if(email.value.includes("@"))
    {
      emailValidationMessage.style.display="none";
      hasError=false;
    }else{
      emailValidationMessage.style.display="block";
      hasError=true;
    }
}

userName.addEventListener("input",nameValidation);
email.addEventListener("input",emailValidation);

submit.addEventListener("click",function(e){
    nameValidation();
    emailValidation();
    if(hasError){
        e.preventDefault();
        console.log("has error");

    }else{
        console.log("tureeeee");

    }
});
 



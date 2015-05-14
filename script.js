/**
 * tinhtooaung
 * script.js
 */
if(document.getElementById){
    window.onload = function(){
        removeErrors();
        document.getElementsByTagName("form")[0].setAttribute("novalidate", "");
    }
}

function validateForm() {
    var isValid = false;
    var errors = [];
    removeErrors();
    var name  = document.forms["contactForm"]["name"].value;
    if (name == null || name == "") {
        errors.push("Name is required");
        document.getElementById("name").classList.add('input-error')
    }

    var email  = document.forms["contactForm"]["email"].value;
    if (email == null || email == "") {
        errors.push("Email is required");
        document.getElementById("email").classList.add('input-error')
    }

    var subject  = document.forms["contactForm"]["subject"].value;
    if (subject == null || subject == "") {
        errors.push("Subject is required");
        document.getElementById("subject").classList.add('input-error')
    }

    var message  = document.forms["contactForm"]["message"].value;
    if (message == null || message == "") {
        errors.push("Message is required");
        document.getElementById("message").classList.add('input-error')
    }

    if(!isValid){
        showErrors(errors)
    }
    return isValid
}

function showErrors(errors){
    document.getElementsByClassName('form-errors')[0].style.display = 'block';
    var errorsContainer = document.getElementById('form-errors-containter');
    for(var i = 0; i < errors.length; i++){
        var errorLi = document.createElement("li");
        errorLi.appendChild(document.createTextNode(errors[i]));
        errorsContainer.appendChild(errorLi)
    }
}

function removeErrors(){
    document.getElementsByClassName('form-errors')[0].style.display = 'none';
    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++){
        inputs[i].classList.remove('input-error');
    }
    document.getElementsByTagName("textarea")[0].classList.remove('input-error');
    var errorsContainer = document.getElementById('form-errors-containter');
    while (errorsContainer.firstChild) {
        errorsContainer.removeChild(errorsContainer.firstChild);
    }
}

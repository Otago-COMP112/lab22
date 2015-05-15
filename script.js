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
    var isValid = true;
    var errors = [];
    removeErrors();
    var name  = document.forms["contactForm"]["name"].value;
    if (name == null || name == "") {
        isValid = false
        errors.push("Name is required");
        document.getElementById("labelName").classList.add('input-error')
    }

    var email  = document.forms["contactForm"]["email"].value;
    if (email == null || email == "") {
        isValid = false
        errors.push("Email is required");
        document.getElementById("labelEmail").classList.add('input-error')
    }else if(!validateEmail(email)){
        isValid = false
        errors.push("Invalid email address");
        document.getElementById("labelEmail").classList.add('input-error')
    }

    var subject  = document.forms["contactForm"]["subject"].value;
    if (subject == null || subject == "") {
        isValid = false
        errors.push("Subject is required");
        document.getElementById("labelSubject").classList.add('input-error')
    }

    var message  = document.forms["contactForm"]["message"].value;
    if (message == null || message == "") {
        isValid = false
        errors.push("Message is required");
        document.getElementById("labelMessage").classList.add('input-error')
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
    var labels = document.getElementsByTagName("label");
    for(var i = 0; i < labels.length; i++){
        labels[i].classList.remove('input-error');
    }
    document.getElementsByTagName("textarea")[0].classList.remove('input-error');
    var errorsContainer = document.getElementById('form-errors-containter');
    while (errorsContainer.firstChild) {
        errorsContainer.removeChild(errorsContainer.firstChild);
    }
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

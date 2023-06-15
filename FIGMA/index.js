const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();

    if(firstname.value == ''){
        error(firstname,"First Name cannot be empty");
    }
    if(lastname.value == ''){
        error(lastname,"Last Name cannot be empty");
    }
    if(email.value == ''){
        error(email,"Looks like this is not an email");
    }
    if(password.value == ''){
        error(password,"Password cannot be empty");
    }

})



function error(element,message){
    element.style.border = "2px solid #FF7979";
    const parent = element.parentElement;
    const span = parent.querySelector('span');
    const parenticon = element.parentElement;
    const warning = parenticon.querySelector('i');
    warning.style.visibility = "visible"
    span.textContent = message;
    span.style.visibility = "visible";
    
};
    



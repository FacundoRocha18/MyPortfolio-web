/* let name = document.getElementById('name')
, email = document.getElementById('email')
, message = document.getElementById('message');

let errorMessage = 'Failed to send, please check that you introduced all your data.';
let successMessage = 'Message succesfully submited. Thank you for contacting me, i will answer as soon as posible.';


function sendMessage( name, email, message ) {
    
} */

let fields = {};

/* Object values asignation */
document.addEventListener('DOMContentLoaded', function(){
    fields.completeName = document.getElementById('name');
    fields.emailAddress = document.getElementById('email');
    fields.message = document.getElementById('message');

})

/* checking that the fields value is not null or undefined and returning if the value length is greater than 0*/
function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;

    return (value.length > 0);
}


/* checking if the value is an email address */
function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

/*  */
function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
}

function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.completeName, isNotEmpty);
    valid &= fieldValidation(fields.emailAddress, isNotEmpty);
    valid &= fieldValidation(fields.message, isNotEmpty);
   
    return valid;
}

class User {
    constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
    }
}

function sendContact() {
    
    if(isValid()){
        let usr = new User(completeName.value, emailAddress.value, message.value);

        alert(`${usr.name} thanks for contacting me.`);

    } else {
        alert('There was an error.')
    }
}



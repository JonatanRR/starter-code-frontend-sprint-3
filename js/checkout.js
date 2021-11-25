// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var userName = document.querySelector('.name');
var email = document.querySelector('.email');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');
var errorPhone = document.getElementById('errorPhone');
var errorEmail = document.getElementById('errorEmail');
// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    
    
    console.log(hasNumber(userName.value));
    console.log(userName.value.length < 3);
    if (hasNumber(userName.value) || userName.value.length < 3) {
        userName.style.borderColor = 'red';
        errorName.style.display = 'block';
    }
    if (!isNaN(phone.value) || phone.value.length < 3) {
        phone.style.borderColor = 'red';
        errorPhone.style.display = 'block';
    }
    var passwordPattern = /^[0-9a-zA-Z]+$/;
    if (password.value !== passwordPattern || password.value.length < 3) {
        password.style.borderColor = 'red';
        errorPassword.style.display = 'block';
    }
    if (!validEmail(email)) {
        email.style.borderColor = 'red';
        errorEmail.style.display = 'block';
    }
}
function hasNumber(myString) {
    return /\d/.test(myString);
}
function validEmail(e) {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(e).search (filter) != -1;
}

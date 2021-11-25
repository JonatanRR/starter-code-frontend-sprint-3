// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var userName = document.querySelector('.name');
var email = document.querySelector('.email');
var input = document.querySelector('input')

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');
var errorPhone = document.getElementById('errorPhone');

// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    
    var namePattern = /^[A-Za-z]+$/;
    if (userName.value !== namePattern || userName.value === null || userName.value.length < 3) {
        userName.style.borderColor = 'red';
        console.log(errorName);
    }
    if (!isNaN(phone.value) || phone.value === null) {
        phone.style.borderColor = 'red';
        console.log(errorPhone);
    }
    var passwordPattern = /^[0-9a-zA-Z]+$/;
    if (password.value !== passwordPattern || password.value === null) {
        password.style.borderColor = 'red';
        console.log(errorPassword);
    }
    var emailPattern= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailPattern.test(email) || email === "") {
        email.style.borderColor = 'red';
        console.log("Please, introduce a valid email");
    }

}
const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const phone = document.getElementById('phone');
const country = document.getElementById('country');

form.addEventListener('submit', e => {
    e.preventDefault(); 
    
    if(checkInputs()) {
        alert("Form successfully submitted!");
    }
});

function checkInputs() {
    let isValid = true;

    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    const phoneValue = phone.value.trim();
    const countryValue = country.value;

    if(fullNameValue === '') {
        setErrorFor(fullName, 'Full Name cannot be empty');
        isValid = false;
    } else {
        setSuccessFor(fullName);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
        isValid = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
        isValid = false;
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
        isValid = false;
    } else if (passwordValue.length < 6) {
        setErrorFor(password, 'Password must be at least 6 characters');
        isValid = false;
    } else {
        setSuccessFor(password);
    }

    if(confirmPasswordValue === '') {
        setErrorFor(confirmPassword, 'Confirm Password cannot be blank');
        isValid = false;
    } else if(passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, 'Passwords do not match');
        isValid = false;
    } else {
        setSuccessFor(confirmPassword);
    }

    if(phoneValue === '') {
        setErrorFor(phone, 'Phone number cannot be blank');
        isValid = false;
    } else if (phoneValue.length < 10 || isNaN(phoneValue)) {
        setErrorFor(phone, 'Phone must be numbers & min 10 digits');
        isValid = false;
    } else {
        setSuccessFor(phone);
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    const genderContainer = document.querySelector('.radio-group').parentElement;
    if(!gender) {
        genderContainer.className = 'input-control error';
        genderContainer.querySelector('small').innerText = 'Select a gender';
        isValid = false;
    } else {
        genderContainer.className = 'input-control success';
    }

    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    const hobbyContainer = document.querySelector('.checkbox-group').parentElement;
    if(hobbies.length === 0) {
        hobbyContainer.className = 'input-control error';
        hobbyContainer.querySelector('small').innerText = 'Select at least one hobby';
        isValid = false;
    } else {
        hobbyContainer.className = 'input-control success';
    }

    if(countryValue === '') {
        setErrorFor(country, 'Please select a country');
        isValid = false;
    } else {
        setSuccessFor(country);
    }

    return isValid;
}

function setErrorFor(input, message) {
    const inputControl = input.parentElement;
    const small = inputControl.querySelector('small');
    inputControl.className = 'input-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const inputControl = input.parentElement;
    inputControl.className = 'input-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
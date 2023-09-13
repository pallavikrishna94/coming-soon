const submit = document.querySelector(".button");
const error = document.querySelector(".error-message");
const success = document.querySelector(".subscribed");
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    const inputValue = input.value.trim();

    console.log(inputValue); 

    if (!isEmail(inputValue)) {
        error.style.display = "block";
        success.style.display = "none";
    } else {
        error.style.display = "none";
        success.style.display = "block";
    }
};

function isValidEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
};

function isEmail(input) {
    const isValid = isValidEmail(input);

    console.log({isValid});

    return isValid
};
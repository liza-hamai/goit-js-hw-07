const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", submitFunction);

function submitFunction(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return console.log("All form fields must be filled in");
    };

    const formData = {
        email : email.trim(),
        password : password.trim(),
    };

    console.log(formData);

    form.reset();
} 
 
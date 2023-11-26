const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const form = document.getElementById("connect-form");
const select = document.getElementById("contact-kind");
const os = document.getElementById("operating-system");
const employees = document.getElementById("num-of-employees");

const validLength = (input, min) => {
    //debugger;
    if (input.value.trim().length > min) {
        input.parentElement.classList.remove("invalid");
    }
    else
    {
        input.parentElement.classList.add("invalid");
    }
}

const validateEmail = (email) => {
    const re = /\w+@\w+\.\w+/;
    if (re.test(email.value.trim())){
        email.parentElement.classList.remove("invalid");
    } else {
        email.parentElement.classList.add("invalid");
    }
}

const handleSelect = (selectElement) => {
    const selectedValue = selectElement.value;

    if (selectedValue == "business") {
        employees.parentElement.classList.remove("hidden");
        os.parentElement.classList.add("hidden");
    } else if (selectedValue == "technical") {
        employees.parentElement.classList.add("hidden");
        os.parentElement.classList.remove("hidden");
    }

}

select.addEventListener("change", () => handleSelect(select));

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validLength(firstName, 3);
    //debugger;
    validLength(lastName, 3);
    validateEmail(email);
    validLength(os, 1);
    validLength(employees, 0);
})

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const form = document.getElementById("connect-form");
const select = document.getElementById("contact-kind");
const jobTitle = document.getElementById("job-title");
const companyWebsite = document.getElementById("company-website");
const codingLanguage = document.getElementById("coding-language");
const message = document.getElementById("message");

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

const validateSelection = (selection) => {
    //debugger;
    if (selection.value === "default") {
        selection.parentElement.classList.add("invalid");
    }
    else
    {
        selection.parentElement.classList.remove("invalid");
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

const validateWebsite = (url) => {
    const re = /https?\:\/\/.+\..+/;
    if (re.test(url.value.trim())){
        url.parentElement.classList.remove("invalid");
    } else {
        url.parentElement.classList.add("invalid");
    }
}

const handleSelect = (selectElement) => {
    const selectedValue = selectElement.value;

    if (selectedValue == "TalkCode") {
        codingLanguage.parentElement.classList.remove("hidden");
        jobTitle.parentElement.classList.add("hidden");
        companyWebsite.parentElement.classList.add("hidden");
    } else if (selectedValue == "JobOpportunity") {
        codingLanguage.parentElement.classList.add("hidden");
        jobTitle.parentElement.classList.remove("hidden");
        companyWebsite.parentElement.classList.remove("hidden");
    }

}

select.addEventListener("change", () => handleSelect(select));

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validLength(firstName, 3);
    //debugger;
    validLength(lastName, 3);
    validateEmail(email);
    validLength(jobTitle, 1);
    validateSelection(codingLanguage);
    validateWebsite(companyWebsite);
    validLength(message, 10);
})

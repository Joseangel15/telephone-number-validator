const button = document.getElementById('check-btn');
const input = document.getElementById('user-input');
const result = document.getElementById('results-div');
const clearBtn = document.getElementById('clear-btn');

const phoneValidator = () => {
    if (input.value === '') {
        return alert("Please provide a phone number");
    }

    const phoneRegex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    console.log(input.value)

    if (phoneRegex.test(input.value)) {
        console.log("Valid phone number");
        result.textContent = "Valid US number: " + input.value;
    } else {
        result.textContent = "Invalid US number: " + input.value;
    }

};

const clearButton = () => {
    input.value = '';
    result.innerText = '';
}

button.addEventListener('click', phoneValidator);
clearBtn.addEventListener('click', clearButton);


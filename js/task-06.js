const input = document.querySelector("#validation-input");
const inputLength = document.querySelector('input[data-length = "6"]');

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length !== )
    input.style = "border-color: #f44336";
};
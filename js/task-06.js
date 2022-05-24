
const input = document.querySelector('#validation-input');
const inputValue = input.dataset.length;
const validColor = input.classList;

input.addEventListener('blur', isEnoughSymbols);

function isEnoughSymbols (value) {
    if (Number(input.value.length) === Number(inputValue)){
        validColor.add('valid');
        validColor.remove('invalid');
    } else {
        validColor.add('invalid');
        validColor.remove('valid');
    }
}


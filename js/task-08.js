const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const dataForm = {
        mail,
        password,
    };

    if (form.email.value === "" || form.password.value === ""){
        alert('Все поля должны быть заполнены')
    } else {
        console.log(dataForm);
        form.reset();
    }
};
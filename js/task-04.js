const counterValue = {
    value: 0,
    increment(value) {
        this.value += 1;
    },
    decrement(value) {
        this.value -= 1;
    },
};

const valueEl = document.querySelector('#value');
const btnEl = document.querySelectorAll('button');

btnEl[1].addEventListener('click', () => {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
});

btnEl[0].addEventListener('click', () => {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
});

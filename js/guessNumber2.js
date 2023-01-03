const minimum = document.querySelector('#minimum');
const maximum = document.querySelector('#maximum');
const guess = document.querySelector('#guess');
const chose = document.querySelector('#chose');
const result = document.querySelector('#result');

const HIDDEN_CLASSNAME = 'hidden';

function submitClick() {
    event.preventDefault();
    const minNum = parseInt(minimum.value);
    const maxNum = parseInt(maximum.value);
    if (maxNum <= minNum) {
        chose.innerText = 'Minimum number is greater than (or equal to) maximum number !'.toUpperCase();
        chose.classList.remove(HIDDEN_CLASSNAME);
    } else {
        const guessNum = parseInt(guess.value);
        if (guessNum > maxNum || guessNum < minNum) {
            chose.innerText = 'Your number is greater than maximum number or less than minimum number'.toUpperCase();
        } else {
            const randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
            if (guessNum !== randomNumber) {
                chose.innerText = `Your number is ${guessNum}, The machine number is ${randomNumber}`;
                result.innerText = `You Lost !`;
            } else {
                chose.innerText = `Your number is ${guessNum}, The machine number is ${randomNumber}`;
                result.innerText = `You Won !`;
            }
        }
    }
}
document.querySelector('button').addEventListener('click', submitClick);

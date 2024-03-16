const character = 'abcdefghijklmnopqrstuvwxyz1234567890_ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let randomNumber;
let result = '';
function passWordGenerator() {
    const cipher = prompt('몇자리의 비밀번호를 원하시나요?');
    for (let i = 0; i < cipher; i++) {
        randomNumber = Math.floor(Math.random() * character.length);
        result = result + character[randomNumber];
        console.log(character[randomNumber], randomNumber);
    }
    document.querySelector('p').innerHTML = result;
}
document.querySelector('button').addEventListener('click', passWordGenerator);

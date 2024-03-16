let randomNumber;
function numberGenerator() {
    let cipher = prompt('몇자리 숫자를 원하시나요?', '');
    let result = '';
    if (isNaN(parseInt(cipher))) {
        alert('숫자만 입력해주세요.');
    } else {
        for (let i = 0; i < cipher; i++) {
            randomNumber = Math.floor(Math.random() * 10);
            result = result + randomNumber;
        }
        document.querySelector('p').innerText = result;
    }
}

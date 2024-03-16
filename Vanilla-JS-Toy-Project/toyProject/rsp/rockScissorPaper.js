const rsp = ['가위', '바위', '보'];
let random, randomRSP, user;
function userScissor() {
    user = rsp[0];
    random = Math.floor(Math.random() * 3);
    bot = rsp[random];
    document.querySelector('#user').className = 'scissor';
    if (random === 0) {
        document.querySelector('#bot').className = 'scissor';
        document.querySelector('#result').innerText = 'End in a tie';
    } else if (random === 1) {
        document.querySelector('#bot').className = '';
        document.querySelector('#result').innerText = 'You lose';
    } else {
        document.querySelector('#bot').className = 'paper';
        document.querySelector('#result').innerText = 'You Win !';
    }
}
function userRock() {
    user = rsp[1];
    random = Math.floor(Math.random() * 3);
    bot = rsp[random];
    document.querySelector('#user').className = '';
    if (random === 1) {
        document.querySelector('#bot').className = '';
        document.querySelector('#result').innerText = 'End in a tie';
    } else if (random === 2) {
        document.querySelector('#bot').className = 'paper';
        document.querySelector('#result').innerText = 'You lose';
    } else {
        document.querySelector('#bot').className = 'scissor';
        document.querySelector('#result').innerText = 'You Win !';
    }
}
function userPaper() {
    user = rsp[2];
    random = Math.floor(Math.random() * 3);
    bot = rsp[random];
    document.querySelector('#user').className = 'paper';
    if (random === 2) {
        document.querySelector('#bot').className = 'paper';
        document.querySelector('#result').innerText = 'End in a tie';
    } else if (random === 0) {
        document.querySelector('#bot').className = 'scissor';
        document.querySelector('#result').innerText = 'You lose';
    } else {
        document.querySelector('#bot').className = '';
        document.querySelector('#result').innerText = 'You Win !';
    }
}
document.querySelector('.userScissor').addEventListener('click', userScissor);
document.querySelector('.userRock').addEventListener('click', userRock);
document.querySelector('.userPaper').addEventListener('click', userPaper);

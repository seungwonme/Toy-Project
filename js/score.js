const player1 = document.querySelectorAll('span')[0];
const player2 = document.querySelectorAll('span')[1];
let player1Score = 0;
let player2Score = 0;
const scoreLimit = document.querySelector('input');
const player1win = document.querySelectorAll('button')[0];
const player2win = document.querySelectorAll('button')[1];
const reset = document.querySelectorAll('button')[2];

player1win.addEventListener('click', () => {
    if (player2Score < scoreLimit.value) {
        if (player1Score < scoreLimit.value) {
            player1Score++;
            player1.innerText = player1Score;
            if (player1Score == scoreLimit.value) {
                player1.style.color = 'green';
                player2.style.color = 'red';
            }
        }
    }
});
player2win.addEventListener('click', () => {
    if (player1Score < scoreLimit.value) {
        if (player2Score < scoreLimit.value) {
            player2Score++;
            player2.innerText = player2Score;
            if (player2Score == scoreLimit.value) {
                player2.style.color = 'green';
                player1.style.color = 'red';
            }
        }
    }
});
reset.addEventListener('click', () => {
    scoreLimit.value = '';
    player1.innerText = '0';
    player2.innerText = '0';
    player2.style.color = 'black';
    player1.style.color = 'black';
});

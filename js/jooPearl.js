let i = 0;
function pearlPatience(params) {
    i = i + 1;
    if (i < 5) {
        const pearlMove = [{ transform: 'translateX(-150px)' }, { transform: 'translateX(-160px)' }, { transform: 'translateX(-140px)' }];
        const pearlTiming = {
            duration: 500,
            iterations: 1,
            // 반복횟수
        };
        document.querySelector('#notAngry').addEventListener('click', () => {
            document.querySelector('#notAngry').animate(pearlMove, pearlTiming);
        });
    } else if (i === 5) {
        document.querySelector('#angry').classList = '';
        document.querySelector('#notAngry').classList = 'viewImg';
    }
}
document.querySelector('#notAngry').addEventListener('click', pearlPatience);

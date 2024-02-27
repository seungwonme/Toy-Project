const h1 = document.getElementsByTagName('h1')[0];
const button = document.getElementsByTagName('button')[0];
const makeRandomColor = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    if ((red + green + blue) < 100) {
        h1.style.color = "#fff"
    } else {
        h1.style.color = '#000'
    }
    return `rgb(${red},${green},${blue})`;    
}
button.addEventListener('click',function () {
    const rgb = makeRandomColor()
    h1.innerText = rgb;
    document.body.style.backgroundColor = rgb;
});


/* 정해진 색상 랜덤하게
const button = document.querySelector('button');
const colors = ['#FFE75E', '#FEB72B', '#899857', '#527318', '#1C226B', '#3E31AE', '#4AA9AF', '#D1FFFA', '#BFD8B8', '#E7EAB5', '#D3504A'];
let left, right;
function background() {
    left = Math.floor(Math.random() * colors.length);
    right = Math.floor(Math.random() * colors.length);
    while (left === right) {
        left = Math.floor(Math.random() * colors.length);
        right = Math.floor(Math.random() * colors.length);
    }
    document.body.style = `background: linear-gradient(0.25turn,${colors[left]}, ${colors[right]});`;
}
button.addEventListener('click', background);

 */
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

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

const images = ["0.jpeg","1.jpeg","2.jpeg","3.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${chosenImage}`;

document.body.appendChild(backgroundImage)
// body의 제일 마지막에 삽입 prepend를 사용하면 제일 앞
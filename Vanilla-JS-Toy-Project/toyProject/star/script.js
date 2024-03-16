const scaleSlider = document.getElementById("scale-slider");
const rotationSlider = document.getElementById("rotation-slider");
const star = document.getElementById("star");

scaleSlider.addEventListener("input", function () {
  star.style.transform = `scale(${this.value}) rotate(${rotationSlider.value}deg)`;
});

rotationSlider.addEventListener("input", function () {
  star.style.transform = `rotate(${this.value}deg) scale(${scaleSlider.value})`;
});

var containers = document.querySelectorAll(".container");
var overlays = document.querySelectorAll(".overlay");

containers.forEach(function (container, index) {
	container.addEventListener("mousemove", function (e) {
		var x = e.offsetX;
		var y = e.offsetY;
		var rotateY = (-1 / 5) * x + 20;
		var rotateX = (4 / 30) * y - 20;
		container.style.transform = `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
	});

	container.addEventListener("mouseout", function () {
		overlays[index].style.backgroundPosition = "100%";
		container.style =
			"transform: perspective(350px) rotateX(0deg) rotateY(0deg);";
	});

	overlays[index].addEventListener("mousemove", function (e) {
		var x = e.offsetX;
		var y = e.offsetY;
		overlays[index].style.backgroundPosition = `${x / 5 + y / 5}%`;
	});
});

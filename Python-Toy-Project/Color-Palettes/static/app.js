const form = document.getElementById("form");
const container = document.getElementById("container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getColors();
});

createColorBoxes(["#FF5959", "#4C9A2A", "#005F99"], container);

function getColors() {
  const query = form.elements.query.value;
  if (!query) {
    alert("Explain color that you want to generate");
    return;
  }
  fetch("/palette", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      query: query,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        container.innerHTML = "";
        createColorBoxes(data.colors, container);
      }
    });
}

function createColorBoxes(colors, parent) {
  for (const color of colors) {
    const div = document.createElement("div");

    div.classList.add("color");
    div.style.backgroundColor = color;
    div.style.width = `calc(100% / ${colors.length})`;

    div.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
    });

    const span = document.createElement("span");
    span.textContent = color;
    const textColor = getBrightness(color) > 128 ? "black" : "white";
    span.style.color = textColor;

    div.appendChild(span);
    parent.appendChild(div);
  }
}

function getBrightness(color) {
  // 색상 코드에서 RGB 값을 추출합니다.
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // ITU-R BT.709 표준에 따른 밝기 계산
  return r * 0.2126 + g * 0.7152 + b * 0.0722;
}

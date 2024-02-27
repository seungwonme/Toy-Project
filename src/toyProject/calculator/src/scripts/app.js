const input = document.querySelector("input");
const result = document.querySelector("#result");
const history = document.querySelector("#history > ul");

let value = "";

input.addEventListener("input", () => {
  input.value = input.value
    .replace(/[^0-9/%*+=.-]/g, "")
    .replace(/(\..*)\./g, "$1");
  // https://hianna.tistory.com/413
  value = input.value;
  resizeValue();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const li = document.createElement("li");
    li.innerHTML = value;

    result.innerHTML = "";
    value = "";
    input.value = "";

    history.append(li);
  }
});

// FIXME: 성능 이슈
function resizeValue() {
  if (value.length > 40) {
    result.style.fontSize = "2rem";
  } else {
    result.style.fontSize = "4rem";
  }
  if (value.length > 160) {
    result.innerHTML = value.toString().slice(0, 159) + "..";
  } else {
    result.innerHTML = value;
  }
}

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");
const del = document.getElementById("del");

one.addEventListener("click", () => {
  value = input.value + "1";
  input.value = value;
  result.innerHTML = input.value;
  resizeValue();
});
two.addEventListener("click", () => {
  value = input.value + "2";
  input.value = value;
  result.innerHTML = input.value;
  resizeValue();
});
three.addEventListener("click", () => {
  value = input.value + "3";
  input.value = value;
  result.innerHTML = input.value;
  resizeValue();
});
four.addEventListener("click", () => {
  value = input.value + "4";
  input.value = value;
  result.innerHTML = input.value;
  resizeValue();
});
five.addEventListener("click", () => {
  value = input.value + "5";
  input.value = value;
  result.innerHTML = input.value;
  resizeValue();
});
six.addEventListener("click", () => {
  value = input.value + "6";
  input.value = value;
  result.innerHTML = input.value;
  resizeValue();
});
seven.addEventListener("click", () => {
  value = input.value + "7";
  input.value = value;
  result.innerHTML = input.value;
  resizeValue();
});
eight.addEventListener("click", () => {
  value = input.value + "8";
  input.value = value;
  result.innerHTML = input.value;
  resizeValue();
});
nine.addEventListener("click", () => {
  value = input.value + "9";
  input.value = value;
  result.innerHTML = input.value;
  resizeValue();
});
zero.addEventListener("click", () => {
  value = input.value + "0";
  input.value = value;
  result.innerHTML = input.value;
  resizeValue();
});
dot.addEventListener("click", () => {
  value = input.value + ".";
  input.value = value;
  result.innerHTML = input.value;
  resizeValue();
});
del.addEventListener("click", () => {
  value = input.value.slice(0, -1);
  input.value = value;
  result.innerHTML = input.value;
  resizeValue();
});

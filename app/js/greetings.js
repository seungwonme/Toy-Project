const loginInput = document.querySelector("#loginForm input")
const loginForm = document.querySelector("#loginForm")
const greeting =  document.querySelector("h1")
/* 관습적으로 string만 포함된 변수는 대문자로 표기한다. 반복되는 string -> variable
또한 string에 오타가 날 경우 알아차리기 힘들고 variable name이 오타가 나면 error가 보기 더 편해진다. string의 경우 error가 나면 알기 어려음 */
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

const savedUserName = localStorage.getItem(USERNAME_KEY)

function onLoginSubmit(event) {
    // 브라우저의 기본동작 막아줌 -> 새로고침 막아줌
    event.preventDefault()
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const userName = loginInput.value
    localStorage.setItem(USERNAME_KEY,userName)
    // localStorage.getItem("username") -> "seungwon"
    // localStorage.removeItem("username")
    paintGreeting(userName)
}
function paintGreeting(username) {
    // 반복되는 명령어 함수로 묶어줌
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

if (savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",onLoginSubmit)
} else {
    paintGreeting(savedUserName)
}







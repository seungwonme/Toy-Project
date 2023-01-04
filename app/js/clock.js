const clock = document.querySelector("h2#clock")

function getClock() {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2,"0")
    const minutes = String(now.getMinutes()).padStart(2,"0")
    const seconds = String(now.getSeconds()).padStart(2,"0")
    /* 이 작업을 .padStart(2,"0") mathod가 대신 해줌 pad -> padding 2글자가 안되면 앞에 0 붙여줌 Start 대신 End 사용하면 뒤에 
    if (`${minutes}`.length === 1) {
        minutes = "0" + now.getMinutes()
    } */
    clock.innerText = `${hours}:${minutes}:${seconds}`
}
getClock()
// setInverval 로는 ms 뒤에 실행 후 반복이기 때문에 로드되고 바로 실행되게끔
setInterval(getClock,1000)
// setTimeout(function,ms) ms 뒤 function 한 번 실행 

const timer = document.querySelector('h2');
const dDay = new Date("November 25, 2023, 0:00:00").getTime();

function count() {
    const now = new Date().getTime();
    const gap = dDay - now;
    const day = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor(gap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(gap % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(gap % (1000 * 60) / 1000);

    timer.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}
count();
setInterval(count, 1000);

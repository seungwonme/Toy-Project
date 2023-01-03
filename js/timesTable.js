// 9단까지 자동생성
for (let i = 2; i <= 9; i++) {
    document.write('<table>');
    document.write('<tr><th>' + i + '단' + '</th></tr>');
    for (let j = 1; j <= 9; j++) {
        document.write('<tr><td>' + `${i}x${j} =` + i * j + '</td></tr>');
    }
    document.write('</table>');
}
// 특정 구구단 생성
const num = prompt('몇단?', '');
document.write('<table>');
document.write(`<tr><th>${num}단</th></tr>`);
for (let k = 1; k <= 9; k++) {
    document.write(`<tr><td>${num}x${k}= ${num * k}</td></tr>`);
}
document.write('</table>');

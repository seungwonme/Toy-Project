const numberOfPeople = prompt('총 인원수를 알려주세요.', '');
const numberOfColumn = prompt('한 줄마다 앉는 인원수를 알려주세요.', '');
if (numberOfPeople % numberOfColumn === 0) {
    let numberOfRow = numberOfPeople / numberOfColumn;
    document.write('<table>');
    for (let i = 1; i <= numberOfRow; i++) {
        document.write('<tr>');
        for (let j = 1; j <= numberOfColumn; j++) {
            document.write('<td>Person</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
} else {
    let numberOfRow = parseInt(numberOfPeople / numberOfColumn) + 1;
    document.write('<table>');
    for (let i = 1; i < numberOfRow; i++) {
        document.write('<tr>');
        for (let j = 1; j <= numberOfColumn; j++) {
            document.write('<td>Person</td>');
        }
        document.write('</tr>');
    }
    // last row
    const peopleOfLastRow = numberOfPeople % numberOfColumn;
    document.write('<tr>');
    for (let k = 1; k <= peopleOfLastRow; k++) {
        document.write('<td>Person</td>');
    }
    for (let l = 1; l <= numberOfColumn - peopleOfLastRow; l++) {
        document.write('<td></td>');
    }
    document.write('</tr></table>');
}

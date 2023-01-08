// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.getElementById('container')
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div')
    const newImg = document.createElement('img')
    const label = document.createElement('span')
    newImg.src = `${baseUrl}${i}.png`
    newImg.style.display = 'block'
    label.innerText = `#${i}`;
    pokemon.style.display = 'inline-block'
    pokemon.style.textAlign = 'center'
    container.appendChild(pokemon)
    pokemon.appendChild(newImg)
    pokemon.appendChild(label)
}
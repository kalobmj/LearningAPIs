// pokemon api

// https://pokeapi.co/api/v2/{endpoint}/
const URL = 'https://pokeapi.co/api/v2/pokemon/'

const search = document.getElementById('search')
const card = document.getElementById('card')

async function fetchPokemon() {
    let searchValue = search.value.toLowerCase();

    if (searchValue === "") searchValue = 'bulbasaur'

    try {
        const response = await fetch(URL + searchValue)

        if (!response.ok) {
            throw new Error('Pokemon Not Found!')
        }
        const data = await response.json();
        // name, types, sprites.front_shiny
        console.log(data)
        console.log(data.cries.latest)
        console.log(data.stats)

        const pokemonObj = {
            name: data.name,
            types: data.types.map(t => t.type.name).join(", "),
            img: data.sprites.front_shiny,
            cries: data.cries.latest,
            stats: data.stats,
            moves: data.moves,
            pokedexNumber: data.id
        }
        renderCard(pokemonObj)

        console.log("pokemon", pokemonObj)
    } catch (error) {
        console.log(error.message)
    }
}

function renderCard({name, types, img, cries, stats, moves, pokedexNumber}) {

    const baseStats = stats.map(stat => {
        return `<p>${stat.stat.name}: ${stat.base_stat}</p>`
    }).join("")

    const randomMove = moves[Math.floor(Math.random() * moves.length)].move.name

    card.innerHTML = `
        <h3>No. ${pokedexNumber}</h3>
        <h1>${name}</h1>
        <p>Favorite move: ${randomMove}</p>
        <img id='search-image' style={} src="${img}" alt="${name}"/>
        <audio id='pokemon-cry' controls src='${cries}'></audio>
        <p>Types: ${types}</p>
        <p>base stats:</p>
        ${baseStats}
        `
}
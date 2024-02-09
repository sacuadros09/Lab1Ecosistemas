let pokeData

async function getApi(pokeid) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/${pokeid}")
    const data = await response.json()
    Pokemons(data)
}


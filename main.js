const pokemonList = document.getElementById("pokemonList") //const (constante) no permite cambiar la variable

async function fetchPokemonData(pokemonId){
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`) 
        //"https://pokeapi.co/api/v2/pokemon/"+pokemonId
        const data = await response.json() //json debe ir con await, es un proceso asincrono
        console.log(data)
        return data    
    } catch (error) {
        console.error(error)
        return false
    }
}

function displayPokemon(pokemon){
    const pokemonCard = document.createElement("div")
    pokemonCard.classList.add("pokemon-card")
    console.log(pokemon.sprites.front_shiny)
    pokemonCard.innerHTML = `
        <img src="${pokemon.sprites.front_shiny}"alt="Iamgen de ${pokemon.name}">
        <h3>${pokemon.name}</h3>
        <h2>${pokemon.id}</h2>
    `
    pokemonList.appendChild(pokemonCard)
}

async function loadPokedex(){
    for(let i=1; i<=52; i++){
    const pokemon = await fetchPokemonData(i)
    console.log(pokemon)
    displayPokemon(pokemon)
}   
}
loadPokedex()

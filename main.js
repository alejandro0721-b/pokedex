const pokemonList = document.getElementById("pokemonList") //const (constante) no permite cambiar la variable
const pokemonDetail = document.getElementById("pokemonDetail")
const backToPkedex = document.getElementById("backToPkedex")
const pokemonInfo = document.getElementById("pokemonInfo")


async function fetchPokemonData(pokemonId){
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`) 
        //"https://pokeapi.co/api/v2/pokemon/"+pokemonId
        const data = await response.json() //json debe ir con await, es un proceso asincrono
        return data    
    } catch (error) {
        console.error(error)
        return false
    }
}

function displayPokemon(pokemon){
    const pokemonCard = document.createElement("div")
    pokemonCard.classList.add("pokemon-card")
    // console.log(pokemon.sprites.front_shiny)
    pokemonCard.innerHTML = `
        <img src="${pokemon.sprites.front_shiny}"alt="Iamgen de ${pokemon.name}">
        <h3>${pokemon.name}</h3>
        <h2>${pokemon.id}</h2>
    `
    pokemonCard.addEventListener("click",()=>showpokemonDetail(pokemon)) //cuando se da click muestra en la consola la información del Pokemon
    pokemonList.appendChild(pokemonCard)
}

function showpokemonDetail(pokemon){
    pokemonList.style.display = "none"
    pokemonDetail.style.display = "flex"
    //------condigo apra obtener los stats-------
    console.log(pokemon.stats)
   //-------codigo para obtener los tipos---------
    let stats = " "
   for(let i=0;i<pokemon.stats.length;i++){
    stats = stats + pokemon.stats[i].stat.name +": " + pokemon.stats[i].base_stat  + "<br>" //Recorre los stats para mostrar el nombre del stat y el valor del stat
   }
    let types = " "
    for(let i=0;i<pokemon.types.length;i++){
        types = types + pokemon.types[i].type.name + "<br><br>" //recorre el vector de los tipos de pokemon en la consola y los muestra en el html
    }
    //------codigo para mostrar en el HTML-----
    pokemonInfo.classList.add(`${pokemon.types[0].type.name}`)
    pokemonInfo.innerHTML=`
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} </h2>
    <p>${types}</p>
    <p>${stats}</p>
    `
}

backToPkedex.addEventListener("click",()=>{ //Boton de volver a la pokedex
    pokemonList.style.display = "grid"
    pokemonDetail.style.display = "none"
})
async function loadPokedex(){
    for(let i=1; i<=52; i++){
    const pokemon = await fetchPokemonData(i)
    displayPokemon(pokemon)
}   
}
loadPokedex()

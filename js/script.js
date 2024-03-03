
const button = document.getElementById('get-pokemon')

const select = document.getElementById('pokemon-select')

const pokemon = document.querySelector('.pokemon')

const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

button.addEventListener('click', function () {
	const PokemonSeleccion = select.value

	getPokemon(PokemonSeleccion)
})

function getPokemon(pokemonName) {
	const endpoint = baseURL + pokemonName

	fetch(endpoint)
		.then((res) => res.json())
		.then((data) => {
			const pokemon = {
				name: data.name,
				image: data.sprites.front_default,
				types: data.types.map((typeObj) => typeObj.type.name),
				weight: data.weight,
				height: 7,
			}
			renderPokemon(pokemon)
		})
		.catch((err) => alert(`Error al encontrar el pokemon "${pokemonName}"`))
}

function renderPokemon(pokemonDetails) {
	console.log(pokemonDetails)
	pokemon.innerHTML = ''

	pokemon.innerHTML += `
    <h2 class="pokemon__title">${pokemonDetails.name}</h2>

		<ul class="pokemon__types">
			${pokemonDetails.types
				.map((type) => `<li class="pokemon__type ${type}">${type}</li>`)
				.join('')}	
		</ul>

    <img class="pokemon__image" src="${
			pokemonDetails.image
		}" alt="pokemonDetails.name}" />
    <ul class="pokemon__details">
      <li><b>Peso:</b> ${pokemonDetails.weight}</li>
      <li><b>Altura:</b> ${pokemonDetails.height}</li>
    </ul>
  `
}
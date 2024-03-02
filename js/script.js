
const pokemon=document.getElementById('pokemon-select');
const boton=document.getElementById('get-pokemon');
const contenedorResultado=document.getElementById("resultado");
const url='https://pokeapi.co/api/v2/pokemon/';
//`document.getElementById('pokemon-select').value`




boton.addEventListener('click',function(){
    if ( pokemon.value==='bulbasaur'){

    fetch (url+'bulbasaur')
        .then((response) => {
          if(!response.ok) {
            throw new Error ("Error. No se puede acceder"); 
          }
          return response.json();
        })
        .then((data)=>{
            data.results.forEach(element => {   
                const contenedorDiv = document.createElement ("div"); 
                const nombrePokemon = document.createElement ("li");
                nombrePokemon.innerText = `${element.name}`;
                contenedorDiv.appendChild(nombrePokemon);
            });
            



           contenedorResultado.innerHTML=(`${data.name}`);
           contenedorResultado.innerHTML=(`${data.width}`);
           contenedorResultado.innerHTML=(`${data.height}`);
        
        })
    }



});


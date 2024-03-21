import { useEffect, useState } from "react";
import ElementListPokemon from "../components/elementListPokemon";


export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])

  function removePokemon(pokemonId) {
    let pokemons = Object.entries(JSON.parse(localStorage.getItem('pokedex')))
    // Remove the given pokemon from the pokedex
    let newPokemons = pokemons.filter((pokemon) => {
      return pokemon.id != pokemonId
    })
    savePokedex(newPokemons)
  }
  
  /**
   * Load it into the pokemons state from the localstorage
   */
  function loadPokedex() {
    // check if localstorage exists
    if (localStorage.getItem('pokedex')) {
      // Load pokedex
      setPokemons(JSON.parse(localStorage.getItem('pokedex')))
      console.log(pokemons)
    }
  }
  
  /**
   * Save the pokedex into localstorage
   */
  function savePokedex(pokemons) {
    localStorage.setItem('pokedex', JSON.stringify(pokemons))
  }

  // Retrieves pokemons from localstorage

  useEffect(() => {
    (async () => {
      loadPokedex()
    })();
  }, [localStorage]);

  localStorage.setItem("pokemons", JSON.stringify(pokemons));

  return (
    <div className='App-main'>
      <h1>POKEDEX</h1>
      <h1 className='mt-5 mb-3'>Bienvenue sur le Pokedex !!!</h1>
      <div className='container mb-5'>
        {Object.values(pokemons).map((pokemon) => {
          return <ElementListPokemon
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            image={pokemon.sprites.front_default}
          />
        })}
      </div>
    </div>
  );
}

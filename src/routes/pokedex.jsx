import { useEffect, useState } from "react";
import ElementListPokemon from "../components/elementListPokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([])

  const deleteFromPokedex = (id) => {
    let currentData = JSON.parse(localStorage.getItem('pokedex'))

    if (currentData && currentData[id]) {
      delete currentData[id]

      localStorage.setItem("pokedex", JSON.stringify(currentData))
      setPokemons(currentData)
    }
  }

  useEffect(() => {
    (async () => {
      setPokemons(JSON.parse(localStorage.getItem('pokedex')));
    })();
  }, []);

  return (
    <div className='App-main'>
      <h1 className="my-5">POKEDEX</h1>
      <div className='container mb-5'>
        {Object.values(pokemons).map((pokemon) => {
          return <ElementListPokemon
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            image={pokemon.sprites.front_default}
            pokedex={deleteFromPokedex}
          />
        })}
      </div>
    </div>
  );
}

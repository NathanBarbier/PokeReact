import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ElementListPokemon from "../components/elementListPokemon";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${page * 20}&limit=20`);
      console.log(data)
      const promises = Object.values(data.results).map((pokemon) => getPokemon(pokemon));
      const pokemonData = await Promise.all(promises);
      console.log(pokemonData)
      setPokemons(pokemonData)
    })();
  }, [page]);

  async function getPokemon(pokemon) {
    const { data } = await axios.get(pokemon.url);
    return data;
  }

  return (
    <div className='App-main'>
      <h1 className='mt-5 mb-3'>Bienvenue sur le Pokedex !!!</h1>
      <div className='container mb-5 content'>
        {Object.values(pokemons).map((pokemon) => {
          return <ElementListPokemon
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            image={pokemon.sprites.front_default}
          />
        })}
      </div>
      <div className="container w-50 mb-5">
        <div className='row'>
          <div className="col-lg-6 mt-2">
            <button className='my-btn' onClick={() => { page > 0 && setPage(page - 1) }}>Précédent</button>
          </div>
          <div className="col-lg-6 mt-2">
            <button className='my-btn' onClick={() => { setPage(page + 1) }}>Suivant</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ElementListPokemon from "../components/elementListPokemon";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
      const promises = Object.values(data.results).map((pokemon) => getPokemon(pokemon));
      const pokemonData = await Promise.all(promises);
      setPokemons(pokemonData)
    })();
  }, [page]);

  async function getPokemon(pokemon) {
    const { data } = await axios.get(pokemon.url);
    console.log(data)
    return data;
  }

  const filterPokemon = async (e) => {
    let value = e.currentTarget.value
    if (value == null || value == "") {
      console.log("YA RIEN")
      setPage(1);
      setFilter(false)
      return
    }

    let pokemonData = [];

    if(filter == false) {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000`);
      const promises = Object.values(data.results).map((pokemon) => getPokemon(pokemon));
      pokemonData = await Promise.all(promises);

      await setPokemons(pokemonData.filter((pokemon) => {
        console.log(pokemon.id)
        return pokemon.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      }))

      setFilter(true)
    }
    setPokemons(pokemons.filter((pokemon) => {
      console.log(pokemon.id)
      return pokemon.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }))
  }

  return (
    <div className='App-main'>
      <h1 className='mt-5 mb-3'>Bienvenue sur la liste des Pokemon !!!</h1>
      <input type="text" name='text' onChange={filterPokemon} />
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

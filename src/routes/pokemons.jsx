import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ElementListPokemon from "../components/elementListPokemon";

export default function Pokemons() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [maxPage, setMaxPage] = useState(27);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302`);
      const promises = Object.values(data.results).map((pokemon) => getPokemon(pokemon));
      const pokemonData = await Promise.all(promises);
      setAllPokemons(pokemonData)
    })();
  }, []);

  useEffect(() => {
    let filteredPokemon = allPokemons.filter((p) => {
      return p.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    })
 
    setMaxPage(Math.ceil(filteredPokemon.length / 50))

    setPokemons(
      Object.values(filteredPokemon).slice((page - 1) * 50, page * 50)
    )


  }, [page, allPokemons, filter])

  async function getPokemon(pokemon) {
    const { data } = await axios.get(pokemon.url);
    return data;
  }

  return (
    <div className='App-main'>
      <h1 className='mt-5 mb-3'>Bienvenue sur la liste des Pokemon !!!</h1>
      <input type="text" name='text' onChange={(e) => setFilter(e.currentTarget.value)} />
      <div className='container mb-5'>
        {pokemons.map((pokemon) => {
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
            <button className='my-btn' onClick={() => { page <= 1 ? setPage(maxPage) : setPage(page - 1) }}>Précédent</button>
          </div>
          <div className="col-lg-6 mt-2">
            <button className='my-btn' onClick={() => { page >= maxPage ? setPage(1) : setPage(page + 1) }}>Suivant</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ElementListPokemon from "../components/elementListPokemon";
import { Link } from 'react-router-dom';

export default function Pokemons() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [maxPage, setMaxPage] = useState(27);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302`);
      setAllPokemons(data.results);
    })();
  }, []);

  useEffect(() => {
    let filteredPokemon = allPokemons.filter((p) => {
      return p.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    })
 
    setMaxPage(Math.ceil(filteredPokemon.length / 50))

    let paginatedPokemon = Object.values(filteredPokemon).slice((page - 1) * 50, page * 50)

    getPokemons(paginatedPokemon);

  }, [page, allPokemons, filter])

  async function getPokemons(paginatedPokemon) {
    const promises = paginatedPokemon.map(async (pokemon) => await axios.get(pokemon.url));
    const pokemonData = await Promise.all(promises);
    setPokemons(pokemonData)
  }

  return (
    <div className='App-main'>
      <h1 className='mt-5 mb-3'>Bienvenue sur la liste des Pokemon !!!</h1>
      <div className="row w-75 my-auto my-5">
        <div className="col-6">
          <input placeholder='Filtrer les Pokemon' type="text" name='text' onChange={(e) => setFilter(e.currentTarget.value)} />
        </div>
        <div className="col-6">
          <Link to="/pokedex">
            <button className="btn btn-info"> Voir ton Pokedex </button>
          </Link> 
        </div>
      </div>
      
      <div className='container mb-5'>   

        {pokemons?.map((pokemon) => {
          return <ElementListPokemon
            key={pokemon.data.id}
            pokemon={pokemon.data}
          />
        })}
      </div>
      <div className="container w-50 mb-5">
        <div className='row'>
          <div className="col-lg-6 mt-2">
            <a href='#' className='my-btn' onClick={() => { page <= 1 ? setPage(maxPage) : setPage(page - 1) }}>Précédent</a>
          </div>
          <div className="col-lg-6 mt-2">
            <a href='#' className='my-btn' onClick={() => { page >= maxPage ? setPage(1) : setPage(page + 1) }}>Suivant</a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import ElementListPokemon from "../components/elementListPokemon";
import { Link } from "react-router-dom";

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

  const clearPokedex = () => {
    localStorage.clear()

    setPokemons([]);
  }

  useEffect(() => {
    (async () => {
      setPokemons(JSON.parse(localStorage.getItem('pokedex')));
    })();
  }, []);

  return (
    <div className='App-main'>
      <h1 className="my-5">POKEDEX</h1>
      <div className="row w-50">
        <div className="col-6">
          <Link to="/">
            <button className="btn btn-info">Retourner à la liste des Pokemon</button>
          </Link>
        </div>
        <div className="col-6">
          <button className="btn btn-danger" onClick={() => clearPokedex()}>
            Supprimer le pokedex
          </button>
        </div>

      </div>
      <div className='container mb-5'>
        {Object.values(pokemons)?.map((pokemon) => {
          return <ElementListPokemon
            key={pokemon.id}
            pokemon={pokemon}
            pokedex={deleteFromPokedex}
          />
        })}
      </div>
    </div>
  );
}

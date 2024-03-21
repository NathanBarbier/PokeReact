import { useLoaderData } from "react-router-dom";

export async function loader() {
    const pokemons = await getPokemons();
    return { pokemons };
}

export async function getPokemons() {
  return null;
}

export default function Pokemons() {
    const pokemons = useLoaderData();

    return (
      <div>
        <h1>Bienvenue sur le Pokedex !!!</h1>
        {/* TODO */}
        
        {/* RECUPERER LES 20 PREMIERS POKEMONS AVEC L'API */}
        
        {/* Pour chaque pokemon (loop), afficher le composant PokemonLine */}
        
        {/* En bas de page ajouter une pagination pour les 20 prochains pokemons 
            Au click émettre une requête de récupération vers l'api
        */}
      </div>
    );
}

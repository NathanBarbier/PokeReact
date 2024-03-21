/* eslint-disable no-restricted-globals */

import { Form, useLoaderData } from "react-router-dom";

export default function Pokemons() {

  const { contact } = useLoaderData();

  return (
    <div id="pokemons">
        {/* TODO */}


        {/* RECUPERER LES 20 PREMIERS POKEMONS AVEC L'API */}

        {/* Pour chaque pokemon (loop), afficher le composant PokemonLine */}

        {/* En bas de page ajouter une pagination pour les 20 prochains pokemons 
            Au click émettre une requête de récupération vers l'api
        */}
    </div>
  );
}
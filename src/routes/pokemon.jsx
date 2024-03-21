import { useParams } from "react-router";
import { useState, useEffect } from "react";

const Pokemon = () => {
    /**
     * Fetch :
     * - nom
     * - numéro
     * - type(s)
     * - images
     * - bouton ajouter au pokémen
     * 
     * GET https://pokeapi.co/api/v2/pokemon/{id or name}/ (name, id, types, sprites (images))
     * 
     * 
     * 
     */


    // Retrieve pokemon id from URL
    const { pokemonId } = useParams();

    const [pokemon, setPokemon] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            const newData = await response.json();
            setPokemon(newData);
        };
    
        fetchData();
    }, [pokemonId]);


    // const pokemon = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    console.log(pokemon)

    // to implement 
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1>DETAIL POKEMON</h1>

            {/* call api vers les details du pokemon */}

            {/* Afficher une carte pokemon avec tous les détails nécessaires */}
            
      </div>
    );
}

export default Pokemon;
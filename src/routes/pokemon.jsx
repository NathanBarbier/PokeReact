import axios from "axios";

export async function getPokemon() {

    /**
     * Fetch :
     * - nom
     * - numéro
     * - type(s)
     * - images
     * - bouton ajouter au pokémen
     */

    const pokemon = axios.get("")

    // to implement 
    return null;
}

export default function Pokemon() {

    return (
        <div>
            <h1>Details du pokemon</h1>

            {/* call api vers les details du pokemon */}

            {/* Afficher une carte pokemon avec tous les détails nécessaires */}
        </div>
    );
}

import { useLoaderData } from "react-router-dom";

export async function loader() {
  const pokedex = await getPokedex();
  return { pokedex };
}

export async function getPokedex() {
  return null;
}

export default function Pokedex() {
  const pokemons = useLoaderData();

  return (
    <div id="pokedex">
        {/* TODO */}

        {/* CHARGER LE LOCAL STORAGE */}

        {/* FOR CHAQUE POKEMON */}
    </div>
  );
}
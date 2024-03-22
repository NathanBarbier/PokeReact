import Types from './Types'
import { Link } from 'react-router-dom'

const ElementListPokemon = ({ pokemon, pokedex }) => {

    const addToPokedex = () => {
        let currentData = JSON.parse(localStorage.getItem('pokedex'));

        if (currentData && currentData[pokemon.id]) {
            alert('le pokemon est déjà dans le pokedex')
            return
        }

        if(currentData == null) {
            currentData = {}
        }

        currentData[pokemon.id] = pokemon

        localStorage.setItem('pokedex', JSON.stringify(currentData));

        alert('le pokemon a été ajouté au pokedex')
    };

    return (
        <div className='row mt-1 m-auto'>
            <div className='col-10'>
                <Link
                    to={`/pokemon/${pokemon.id}`}
                    className='row mt-1 width-row m-auto'
                    style={{ textDecoration: ' none', color: 'white' }}
                >
                    <div className='col-3 col-lg-2'>
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                        />
                    </div>
                    <div className='col-1 col-lg-2 my-auto'>{pokemon.id}</div>
                    <div className='col-5 col-lg-5 my-auto' style={{ textTransform: "Capitalize" }}>{pokemon.name}</div>
                    <div className='col-3 my-auto'>
                        <div className='row'>
                            {pokemon.types.map((t, id) => {
                                return <Types key={id} type={t.type.name} />
                            })}
                        </div>
                    </div>
                </Link>
            </div>
            {
                pokedex ?
                    <div className='col-2 my-auto text-center'>
                        <button onClick={() => pokedex(pokemon.id)} className='btn btn-outline-danger'>Supprimer</button>
                    </div> :
                    <div className='col-2 my-auto text-center'>
                        <button onClick={() => addToPokedex()} className='btn btn-outline-success'>Ajouter</button>
                    </div>
            }
        </div>
    )
}

export default ElementListPokemon

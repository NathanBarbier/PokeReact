import Types from './Types'
import { Link } from 'react-router-dom'

const ElementListPokemon = ({ id, name, types, image }) => {
    return (
        <Link 
            to={`/pokemon/${id}`}
            className='row mt-1 width-row m-auto'
            style={{ textDecoration: ' none', color: 'white' }}
        >
            <div className='col-3 col-lg-2'>
                <img
                    src={image}
                    alt={name}
                />
            </div>
            <div className='col-1 col-lg-2 my-auto'>{id}</div>
            <div className='col-4 col-lg-5 my-auto' style={{ textTransform: "Capitalize" }}>{name}</div>
            <div className='col-3 my-auto'>
                <div className='row'>
                    {types.map((t, id) => {
                        return <Types key={id} type={t.type.name} />
                    })}
                </div>
            </div>
        </Link>
    )
}

export default ElementListPokemon

import types from '../data/types'

const Types = ({ type }) => {
    console.log(types, type)
    const color = types.find((t) => t.nom === type).couleur

    return (
        <div className='col-xl-6'>
            <div className='type' style={{ background: color }}>
                {type}
            </div>
        </div>
    )
}

export default Types

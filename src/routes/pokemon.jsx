import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

const Pokemon = () => {
    const { pokemonId } = useParams();

    const [pokemon, setPokemon] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
            setPokemon(data);
        };
    
        fetchData();
    }, []);

    const addToPokedex = () => {
        const currentData = JSON.parse(localStorage.getItem('pokedex'));

        if (currentData && currentData[pokemon.id]) {
            alert('le pokemon est déjà dans le pokedex')
            return
        }

        currentData[pokemon.id] = pokemon

        localStorage.setItem('pokedex', JSON.stringify(currentData));

        alert('le pokemon a été ajouté au pokedex')
    };

    return (
        <Container style={{marginInline: 'auto', alignItems: 'center', justifyContent: 'center'}}>
            <Row>
                <h1 style={{ marginInline: 'auto', textAlign: 'center', marginTop: '50px' }}>
                    DETAIL POKEMON
                </h1>
                <hr style={{width: '50%', textAlign: 'center', marginInline: 'auto'}}/>
            </Row>

            <Row>
                <Card style={{ marginInline: 'auto', width: '40vw', height: '500px', marginTop: '50px' }}>
                <Row style={{justifyContent: 'center'}}>
                    <img src={pokemon.sprites?.front_default} style={{width: '200px'}} />
                </Row>
                <Card.Body>
                    <Card.Title style={{textAlign: 'center'}}>
                        <h3>{pokemon.name}</h3>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{pokemon.id}</Card.Subtitle> 
                    <Card.Text style={{textAlign: 'center'}}>
                    <hr/>
                    <h3>Types</h3>
                    <ul style={{textAlign: 'center', justifyContent: 'center', marginTop: '25px'}}>
                        {pokemon.types?.map((item, index) => (
                            <li key={index}>{item.type.name}</li>
                        ))}
                    </ul>
                    </Card.Text>
                    <Button onClick={() => addToPokedex(pokemon)} variant="outline-success" style={{marginTop: '25px', width: '50%', textAlign: 'center', marginInline: 'auto'}}>
                        Ajouter au pokédex
                    </Button>
                </Card.Body>
                </Card>
            </Row>
        </Container>    
    );
}

export default Pokemon;

import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Types from "../components/Types";
import { Link } from "react-router-dom";

const Pokemon = () => {
    const { pokemonId } = useParams();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1)
            setPokemon(data);
        };

        fetchData();
    }, []);

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
        <Container style={{ marginInline: 'auto', alignItems: 'center', justifyContent: 'center' }}>
            <Row>
                <h1 style={{ marginInline: 'auto', textAlign: 'center', marginTop: '50px' }}>
                    DETAIL POKEMON
                </h1>
                <hr style={{ width: '50%', textAlign: 'center', marginInline: 'auto' }} />
            </Row>

            <Row>
                <Card style={{ marginInline: 'auto', width: '40vw', height: '500px', marginTop: '50px' }}>
                    <Row style={{ justifyContent: 'center' }}>
                        <img src={pokemon.sprites?.front_default} style={{ width: '200px' }} />
                    </Row>
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>
                            <h3>{pokemon.name}</h3>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{pokemon.id}</Card.Subtitle>
                        <hr />
                        <Card.Text style={{ textAlign: 'center' }}>
                            <span className="titre">Types</span>

                            <span className="w-50 row mx-auto mt-4">
                                {pokemon.types?.map((t, id) => {
                                    return <Types key={id} type={t.type.name} />
                                })}
                            </span>
                        </Card.Text>
                        <div className="row">
                            <div className="col-6">
                                <Button onClick={() => addToPokedex(pokemon)} variant="outline-success">
                                    Ajouter au pokédex
                                </Button>
                            </div>
                            <div className="col-6">
                                <Link to="/">
                                    <button className="btn btn-outline-info">Retourner à la liste</button>
                                </Link>
                            </div>
                        </div>

                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}

export default Pokemon;

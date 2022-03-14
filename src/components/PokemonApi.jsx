import React, { useState } from "react";

const PokemonApi = () => {

    let [pokemonList, setPokemonList] = useState([])

    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1126")
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setPokemonList(response.results)
            })
    }

    return (
        <>
            <button className="btn btn-secondary mt-5" onClick={getPokemon}>Fetch Pokemon</button>
            <ul className="mt-4">
                {
                    pokemonList.map((pokemon, index) => {
                        return (
                            <li key={index}>{pokemon.name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default PokemonApi
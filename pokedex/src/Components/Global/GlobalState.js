import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import axios from "axios";

const GlobalState = (props) => {
    const [capturar, setCapturar] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [usuarioPokemon, setDetailsPokemon] = useState("")
    const [pokemonUnico, setPokemonUnico] = useState("")
    const [arrayPokemonUnico,setArrayPokemonUnico] = useState([]) 


    const renderizarPokemon = async () => {
        const respApi = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`)
        const StoragePokemon = []
        for (let i = 0; i < respApi.data.results.length; i++) {
            if (i == 0 && pokemons.length != 0) {
                return
            }
            const respApi2 = await axios.get(respApi.data.results[i].url)
            StoragePokemon.push(respApi2.data)
        }
        await setPokemons(StoragePokemon)
    }
    const addPokemon = (id) => {
        const ids = capturar.map((id) => {
            return id.id
        })
        if (ids.includes(id) || capturar.length >= 6) {
            return
        }
        const pokemonsAtualizado = pokemons.filter((item) => {
            return item.id != id
        })
        setPokemons(pokemonsAtualizado)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resposta) => {
                setCapturar([...capturar, resposta.data])
            })
    }

    const detailsPokemon = (id) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resposta) => {
                setPokemonUnico(resposta.data)
                setArrayPokemonUnico([resposta.data])
                console.log(resposta)
            })
    }
    const excluirPokemon = (pokemon) => {
        const novaPokedex = capturar.filter((item) => {
            return item.id != pokemon.id
        })
        setCapturar(novaPokedex)
        setPokemons([...pokemons, pokemon])
    }

    const values = {
        capturar,
        setCapturar,
        renderizarPokemon,
        setPokemons,
        pokemons,
        addPokemon,
        excluirPokemon,
        detailsPokemon,
        pokemonUnico,
        setPokemonUnico,
        arrayPokemonUnico,
    }
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState

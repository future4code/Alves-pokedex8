import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import axios from "axios";

const GlobalState = (props) => {
    const [capturar, setCapturar] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [usuarioPokemon, setDetailsPokemon] = useState("")
    const [pokemonUnico, setPokemonUnico] = useState("")


    const renderizarPokemon = async () => {
        const respApi = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=60`)
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
        const ids = capturar.map((id) => {
            return id.id
        })        
        if (ids.includes(id)) {
            return console.log("teste")
        }
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resposta) => {
                setPokemonUnico([resposta.data])
            })
    }
    const excluirPokemon = (id) => {
        const novaPokedex = capturar.filter((item) => {
            return item.id != id
        })
        setCapturar(novaPokedex)
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
        setPokemonUnico
    }
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
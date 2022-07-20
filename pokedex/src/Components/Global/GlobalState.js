import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import axios from "axios";

const GlobalState = (props) => {
    const [capturar, setCapturar] = useState([])
    const [pokemons, setPokemons] = useState([])


    const renderizarPokemon = async () => {
        const respApi = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`)
        const StoragePokemon = []
        for (let i = 0; i < respApi.data.results.length; i++) {
            if (i == 0 && pokemons.length != 0) {
                return
            }
            const respApi2 = await axios.get(respApi.data.results[i].url)
            StoragePokemon.push(respApi2.data)
        }
        await setPokemons(StoragePokemon)
        // await setIsLoading(false)
    }


    const addPokemon = (id) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resposta) => {
                setCapturar(...capturar,[resposta.data])
            })
    }

    const values = {
        capturar,
        setCapturar,
        renderizarPokemon,
        setPokemons,
        pokemons,
        addPokemon,
    }
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
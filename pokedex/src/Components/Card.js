import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios"

const MainContainer = styled.div`
height:100vh;
width:100vw;
`
const Header = styled.header`
height:10%;
background-color:white;
display:flex;
justify-content:space-evenly;
align-items:center;
`
const BotaoPokedex = styled.button`
border: 0px;
`
const CardPokemon = styled.div`
background-color:white;
padding:20px;
margin:20px;
`
function Card() {
    const [pokemons, setPokemons] = useState("")
    const [pokemonPromises, setPromisesPokemon] = useState([])
    const [habPokemons, setHabPokemon] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const goToPokedex = () => {
        navigate("/MyPokemons")
    }

    const renderizarPokemon = async () => {
        const respApi = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`)
        const teste = []
        for (let i = 0; i < respApi.data.results.length; i++) {
            if (i == 0 && pokemonPromises.length != 0) {
                return
            }
            const respApi2 = await axios.get(respApi.data.results[i].url)
            teste.push(respApi2.data)
            // console.log(respApi2.data)
            console.log(teste)
        }
        await setPromisesPokemon(teste)
        await setIsLoading(false)
    }

    console.log(pokemonPromises)
    useEffect(() => {
        renderizarPokemon()
    }, [])

    const teste2 = pokemonPromises && pokemonPromises.map((pokemon) => {
        return <CardPokemon>
            {pokemon.name}
            {pokemon.types.map((tipo) => {
                return <div> {tipo.type.name}</div>
            })}
            <img src={pokemon.sprites.front_default}/>
        </CardPokemon>
    })
    return (
        <MainContainer>
            <Header>
                <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" width={200} />
                <BotaoPokedex onClick={goToPokedex}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDdGf-hzKxuQKMOBEkDzXIzHX07zD9eZPJhu7RH-GseJhmzNI6Yow080XZP5OfEWVybA&usqp=CAU" width={80} /></BotaoPokedex>
            </Header>
            CARD PRINCIPAL/PAGINA PRINCIPAL
            <div>
                {teste2}
            </div>
        </MainContainer>
    );
}

export default Card;
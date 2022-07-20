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
const ContainerCard = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
`
const CardPokemon = styled.div`
display:flex;
justify-content:space-between;
`
const Container1 = styled.div`
`
const Container2 = styled.div`
/* display:flex; */
/* justify-content:space-between; */
`
const ContainerTipo = styled.div`
display:flex;
padding-right:10%;
`
const Container3 = styled.div`
display:flex;
`
const Container4 = styled.div`
padding-top:1%;
`
const Container5 = styled.div`
background-color:white;
/* height:24vh; */
width:29%;
padding:1%;
margin:1%;
`
const ContainerBotao = styled.div`
display:flex;
justify-content:space-between;
`
const BotaoCapturar = styled.button`
padding:3%;
background:black;
color:white;
`
const BotaoDetalhes = styled.button`
padding:3%;
background:black;
color:white;
`
const Titulo = styled.div`
color:white;
display:flex;
justify-content:center;
align-items:center;
padding:1%;
`
function Card() {
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [capturar, setCapturar] = useState([])
    const navigate = useNavigate()
    const goToPokedex = () => {
        navigate("/MyPokemons")
    }

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
        await setIsLoading(false)
    }

    console.log(pokemons)
    useEffect(() => {
        renderizarPokemon()
    }, [])

    const addPokemon = () => {
        // renderizarP
    }

    const RenderizarCard = pokemons && pokemons.map((pokemon) => {
        return <Container5>
            <CardPokemon>
                <Container1>
                    <Container4>
                        <h2>
                            #{pokemon.id}
                            <br />
                            {pokemon.name.toUpperCase()}
                        </h2>
                        <Container3>
                            {pokemon.types.map((tipo) => {
                                return <ContainerTipo> <h4>{tipo.type.name.toUpperCase()}</h4></ContainerTipo>
                            })}
                        </Container3>
                    </Container4>
                </Container1>
                <Container2>
                    <img src={pokemon.sprites.front_default} width="200" />
                </Container2>
            </CardPokemon>
            <ContainerBotao>
                <BotaoDetalhes>Detalhes</BotaoDetalhes>
                <BotaoCapturar>Capturar</BotaoCapturar>
            </ContainerBotao>
        </Container5>
    })
    return (
        <MainContainer>
            <Header>
                <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" width={200} />
                <BotaoPokedex onClick={goToPokedex}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDdGf-hzKxuQKMOBEkDzXIzHX07zD9eZPJhu7RH-GseJhmzNI6Yow080XZP5OfEWVybA&usqp=CAU" width={80} /></BotaoPokedex>
            </Header>
            <Titulo>
                <h1>
                    POKÉMONS
                </h1>
            </Titulo>
            <ContainerCard>
                {RenderizarCard}
            </ContainerCard>
        </MainContainer>
    );
}

export default Card;
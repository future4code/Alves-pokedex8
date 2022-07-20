import { useNavigate } from "react-router-dom"
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components"
import axios from "axios"
import GlobalContext from "./Global/GlobalContext";

const MainContainer = styled.div`
height:100vh;
width:100vw;
`
const Header = styled.header`
height:10%;
width:100%;
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
@media (min-width : 320px) and (max-width : 480px) {
background-color:#27282c;
display:flex;
flex-direction:column;
width:94%;
padding:1%;
margin:1%;
}
`
const Container10 = styled.div`
`
const CardPokemon = styled.div`
display:flex;
`
const Container1 = styled.div`
background-color:white;
display:flex;
justify-content:space-between;
width:100%;
@media (min-width : 320px) and (max-width : 480px) {
    background-color:beige;
    width:98%;
}
`
const Container2 = styled.div`
@media (min-width : 320px) and (max-width : 480px) {
    width:100%;
}
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
width:29%;
padding:1%;
margin:1%;
@media (min-width : 320px) and (max-width : 480px) {
background-color:#27282c;
width:100%;
display:flex;
flex-direction:column;
padding:1%;
margin:1%;
}
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
const Imagem = styled.img`
width:200px;
overflow:hidden;
`
const InputCentralizado = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

function Card() {
    const navigate = useNavigate()
    const [nomePokemon, setNomePokemon] = useState("")
    const goToPokedex = () => {
        navigate("/MyPokemons")
    }

    const { renderizarPokemon, pokemons, addPokemon } = useContext(GlobalContext)
    console.log(pokemons)
    useEffect(() => {
        renderizarPokemon()
    }, [])


    const RenderizarCard = pokemons && pokemons.filter((parametro) => {
        return parametro.name.includes(nomePokemon.toLowerCase())
    }).map((pokemon) => {
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
                    <Container2>
                        <Imagem src={pokemon.sprites.front_default} />
                    </Container2>
                </Container1>
            </CardPokemon>
            <ContainerBotao>
                <BotaoDetalhes>Detalhes</BotaoDetalhes>
                <BotaoCapturar onClick={() => addPokemon(pokemon.id)}>Capturar</BotaoCapturar>
            </ContainerBotao>
        </Container5>
    })
    const onChangeNome = (event) => {
        setNomePokemon(event.target.value)
    }
    return (
        <MainContainer>
            <Header>
                <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" width={200} />
                <BotaoPokedex onClick={goToPokedex}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDdGf-hzKxuQKMOBEkDzXIzHX07zD9eZPJhu7RH-GseJhmzNI6Yow080XZP5OfEWVybA&usqp=CAU" width={80} /></BotaoPokedex>
            </Header>
            <Titulo>
                <h1>
                    Todos os Pokémons
                </h1>
            </Titulo>
            <InputCentralizado>
                <input
                    placeholder="Filtrar Pokémon"
                    value={nomePokemon}
                    onChange={onChangeNome}
                />
            </InputCentralizado>
            <ContainerCard>
                {RenderizarCard}
            </ContainerCard>
        </MainContainer>
    );
}

export default Card;
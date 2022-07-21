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
margin:1%;
}
@media (min-width : 481px) and (max-width : 1250px) {
background-color:#27282c;
display:flex;
flex-direction:column;
width:94%;
margin:1%;
}
`
const CardPokemon = styled.div`
display:flex;
`
const ContainerMainInfo = styled.div`
display:flex;
justify-content:space-between;
width:100%;
@media (min-width : 320px) and (max-width : 480px) {
    width:98%;
}
@media (min-width : 481px) and (max-width : 1250px) {
    width:98%;
}
`
const ContainerImgPoke = styled.div`
`
const ContainerTipo = styled.div`
display:flex;
padding-right:10%;
`
const ContainerType = styled.div`
display:flex;
`
const ContainerInfo = styled.div`
margin:3%;
`
const MainCard = styled.div`
width:29%;
padding:1%;
margin:1%;
border-radius:20px;
/* box-shadow:0 0 1em white; */
@media (min-width : 320px) and (max-width : 480px) {
width:100%;
display:flex;
flex-direction:column;
padding:1%;
margin:1%;
}
@media (min-width : 481px) and (max-width : 1250px) {
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
margin:1%;
border:none;
width:25%;
font-weight:900;
background:white;
color:black;
border-radius:20px;
`
const BotaoDetalhes = styled.button`
padding:3%;
border:none;
border-radius:20px;
font-size:1.2rem;
color:white;
text-decoration: underline;
`
const Titulo = styled.div`
color:white;
display:flex;
justify-content:center;
align-items:center;
padding:1%;
`
const Imagem = styled.img`
width:200px; /* DUVIDA PARA SETAR IMG A DIREITA FIXED/ABSOLUT */
overflow:hidden;
`
const InputCentralizado = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const Input = styled.input`
padding:10px;
`

function Card() {
    const navigate = useNavigate()
    const [nomePokemon, setNomePokemon] = useState("")
    const goToPokedex = () => {
        navigate("/MyPokemons")
    }
    const goToDetails = () => {
        navigate("/Details")
    }
    const { renderizarPokemon, pokemons, addPokemon, detailsPokemon, pokemonUnico } = useContext(GlobalContext)
    console.log(pokemons)
    useEffect(() => {
        renderizarPokemon()
    }, [])
    const detalhesFuncao = () => {
        goToDetails();
        detailsPokemon()
    }

    const RenderizarCard = pokemons && pokemons.filter((parametro) => {
        return parametro.name.includes(nomePokemon.toLowerCase())
    }).map((pokemon) => {
        const type = pokemon.types[0].type.name
        const color = {
            poison: '#AD61AE',
            grass: '#70B873',
            fire: '#F44900',
            flying: '#6892B0',
            water: '#33A4F5',
            bug: '#316520',
            normal: '#8A8A8A',
            dark: '#5C5365',
            dragon: '#0A6CBF',
            electric: '#F4D23B',
            fairy: '#EC8FE6',
            fighting: '#CE4069',
            ghost: '#5269AC',
            ground: '#D97745',
            ice: '#74CEC0',
            psychic: '#F67176',
            rock: '#C7B78B',
            steel: '#BBBBBB',
        }[type]
        console.log(pokemon.types[0].type.name)
        return <MainCard style={{ backgroundColor: `${color}` }}>
            <CardPokemon>
                <ContainerMainInfo >
                    <ContainerInfo >
                        <h2>
                            #{pokemon.id}
                            <br />
                            {pokemon.name.toUpperCase()}
                        </h2>
                        <ContainerType >
                            {pokemon.types.map((tipo) => {
                                return <ContainerTipo > <h4>{tipo.type.name.toUpperCase()}</h4></ContainerTipo>
                            })}
                        </ContainerType>
                    </ContainerInfo>
                    <ContainerImgPoke >
                        <Imagem src={pokemon.sprites.other["official-artwork"].front_default} />
                    </ContainerImgPoke>
                </ContainerMainInfo>
            </CardPokemon>
            <ContainerBotao>
                <BotaoDetalhes onClick={() => detailsPokemon(pokemon.id)} style={{ backgroundColor: `${color}` }}>Detalhes</BotaoDetalhes>
                <BotaoCapturar onClick={() => addPokemon(pokemon.id)}>Capturar!</BotaoCapturar>
            </ContainerBotao>
        </MainCard>
    })
    const onChangeNome = (event) => {
        setNomePokemon(event.target.value)
    }
    console.log(pokemonUnico)
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
                <Input
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
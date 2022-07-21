import { useNavigate } from "react-router-dom"
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components"
import axios from "axios"
import GlobalContext from "./Global/GlobalContext";
import poison from "../img/poison.png"
import normal from "../img/normal.png"
import grass from "../img/grass.png"
import fire from "../img/fire.png"
import flying from "../img/flying.png"
import water from "../img/water.png"
import bug from "../img/bug.png"
import dark from "../img/dark.png"
import dragon from "../img/dragon.png"
import electric from "../img/electric.png"
import fairy from "../img/fairy.png"
import fighting from "../img/fighting.png"
import ghost from "../img/ghost.png"
import ground from "../img/ground.png"
import ice from "../img/ice.png"
import psychic from "../img/psychic.png"
import rock from "../img/rock.png"
import steel from "../img/steel.png"

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
border-radius: 8px;
    width: 8%;
    font-size: 25px;
    font-weight: 700;
    color: white;
    background-color: #70C3FF;
    padding: 12px 1px 12px 1px;
    :hover{
       color: #FAC705;
    }
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

const ContainerType = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
width: 99px;
background: ${props => props.color};
margin: 10px 0px;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
`

const ContainerTypes = styled.div`
display: block;
`


const IconImage = styled.img`
width: 20px;
height: 20px;
padding-right: 10px;
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
background-color: ${props => props.color};
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
        }
        const backColor = {
            poison: '#87516E',
            grass: '#7CF07B',
            fire: '#F97862',
            flying: '#2EE5E6',
            water: '#0050CD',
            bug: '#307033',
            normal: '#666666',
            dark: '#203A61',
            dragon: '#C2A636',
            electric: '#FEF032',
            fairy: '#FF54AF',
            fighting: '#B57649',
            ghost: '#743142',
            ground: '#E99E23',
            ice: '#BFF7FF',
            psychic: '#BF2BF9',
            rock: '#6F6459',
            steel: '#76868E',
        }
        const icon = {
            poison:  poison ,
            grass:  grass ,
            fire:  fire ,
            flying:  flying ,
            water:  water ,
            bug:  bug ,
            normal:  normal ,
            dark:  dark ,
            dragon:  dragon ,
            electric:  electric ,
            fairy:  fairy ,
            fighting: fighting ,
            ghost: ghost ,
            ground: ground ,
            ice:  ice ,
            psychic:  psychic ,
            rock:  rock ,
            steel:  steel ,
        }
        return <MainCard style={{ backgroundColor: `${backColor[type]}` }}>
            <CardPokemon>
                <ContainerMainInfo >
                    <ContainerInfo >
                        <h2>
                            #{pokemon.id}
                            <br />
                            {pokemon.name.toUpperCase()}
                        </h2>
                        <ContainerTypes>
                            {pokemon.types.map((tipo) => {
                                return <ContainerType key={tipo.type.name} color={color[tipo.type.name]}>
                                    <IconImage src={icon[tipo.type.name]}></IconImage>
                                    <h4 >{tipo.type.name.charAt(0).toUpperCase() + tipo.type.name.slice(1)}</h4>
                                </ContainerType>
                            })}
                        </ContainerTypes>
                    </ContainerInfo>
                    <ContainerImgPoke >
                        <Imagem src={pokemon.sprites.other["official-artwork"].front_default} />
                    </ContainerImgPoke>
                </ContainerMainInfo>
            </CardPokemon>
            <ContainerBotao>

                <BotaoDetalhes onClick={() => detailsPokemon(pokemon.id)} color={color[type]}>Detalhes</BotaoDetalhes>
                <BotaoCapturar onClick={() => addPokemon(pokemon.id)}>Capturar</BotaoCapturar>

                <BotaoDetalhes onClick={() => detailsPokemon(pokemon.id)} style={{ backgroundColor: `${color}` }}>Detalhes</BotaoDetalhes>
                <BotaoCapturar onClick={() => addPokemon(pokemon.id)}>Capturar!</BotaoCapturar>

            </ContainerBotao>
        </MainCard >
    })
    const onChangeNome = (event) => {
        setNomePokemon(event.target.value)
    }
    return (
        <MainContainer>
            <Header>
                <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" width={200} />
                <BotaoPokedex onClick={goToPokedex}>Pokédex</BotaoPokedex>
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
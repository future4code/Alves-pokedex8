import { useNavigate } from "react-router-dom"
import React, { useContext } from "react"
import styled from "styled-components"
import GlobalContext from "./Global/GlobalContext"
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


const Header = styled.header`
height:10%;
background-color:white;
display:flex;
justify-content:space-evenly;
align-items:center;
`
const BotaoPokedex = styled.button`
border: 0px;
background:white;
`
const TextoHome = styled.h3`
      text-decoration: underline;
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
const ContainerInfo = styled.div`
margin:3%;
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
const ContainerImgPoke = styled.div`
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
const ContainerCard = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
`
const Titulo = styled.div`
color:white;
display:flex;
justify-content:center;
align-items:center;
padding:1%;
`
const ContainerBotao = styled.div`
display:flex;
justify-content:space-between;
`
const BotaoDetalhes = styled.button`
padding:3%;
border:none;
border-radius:20px;
font-size:1.2rem;
color:white;
text-decoration: underline;
background-color: ${props => props.color};
`
const BotaoCapturar = styled.button`
padding:3%;
background:black;
color:white;
border-radius:20px;
`
function MeusPokemons() {
    const { capturar, excluirPokemon } = useContext(GlobalContext)

    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    const goToDetails = () => {
        navigate("/Details")
    }

    const meusPokemons = capturar && capturar.map((pokemon) => {
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
                <ContainerMainInfo>
                    <ContainerInfo>
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
                    <ContainerImgPoke>
                        <img src={pokemon.sprites.other["official-artwork"].front_default} width="200" />
                    </ContainerImgPoke>
                </ContainerMainInfo>
            </CardPokemon>
            <ContainerBotao>
                <BotaoDetalhes color={color[type]} onClick={goToDetails}>Detalhes</BotaoDetalhes>
                <BotaoCapturar onClick={() => excluirPokemon(pokemon.id)}>Excluir</BotaoCapturar>
            </ContainerBotao>
        </MainCard>
    })
    return (
        <div>
            <Header>
                <BotaoPokedex onClick={goToHome}> <TextoHome>Voltar Para a home</TextoHome></BotaoPokedex>
                <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" width={200} />
            </Header>
            <Titulo>
                <h1>
                    Meus Pokémons
                </h1>
            </Titulo>
            <ContainerCard>
                {meusPokemons}
            </ContainerCard>
        </div>
    );
}

export default MeusPokemons;
import { useNavigate } from "react-router-dom"
import React, { useContext } from "react"
import styled from "styled-components"
import { keyframes } from 'styled-components'
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

const Imagem = styled.img`
width: 70%;
`
const CardImage1 = styled.div`
width: 240px;
height: 240px;
background-color: #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;
`
const CardImages = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`
const CardMoves = styled.div`
display: flex;
flex-direction: column;
background-color: white;
border-radius: 8px;
text-align: left;
padding: 20px;
width: 50vh;
`
const IdTitle = styled.p`
padding: 0px;
font-size: 1rem;
`
const TitleDetails = styled.h1`
color:white;
margin: 9px 30px;
display:flex;
align-items:center;
justify-content:center;
`
const MoveTitle = styled.div`
display: inline-block;
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
padding: 8px;
margin: 20px 0px;
`
const CardBaseStatus = styled.div`
background-color: white;
border-radius: 8px;
text-align: left;
padding: 20px;
width: 60vh;
`
const StatsContainer = styled.div`
margin: 20px;
`
const ContainerTypes = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
`
const ContainerType = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
width: 99px;
background: ${props => props.color};
margin: 10px 10px 10px 0px;
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
`
const IconImage = styled.img`
width: 20px;
height: 20px;
padding-right: 10px;
`
const ContainerNameType = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 5px 8px;
width: 99px;
margin: 10px 0px;
`
const ContainerNameTypeMoves = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
const CardName = styled.div`
color: white;
text-align: left;
display:flex;
`
const ContainerImg = styled.div`
padding-left:80%;
`
const CardPrincipal = styled.div`
display: flex;
background-color: green;
width:100%;
height: 663px;
justify-content: space-around;
border-radius: 8px;
padding: 20px;
`
const Container = styled.div`
width: 95%;
margin: auto;
text-align: center;
align-items: center;
`
const Stats = styled.div`
width: 100%;
background-color: #ddd;
border-radius: 8px;
`

const StatsBar = styled.div`
text-align: right;
padding-top: 10px;
padding-bottom: 10px; 
color: white;
width: ${props => props.stat}%;
background-color: orange;
border-radius: 8px;
`

const MainPageContainer = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const Header = styled.header`
height:10%;
background-color:white;
display:flex;
justify-content:space-evenly;
align-items:center;
`
const BotaoPokedex = styled.button`
border: none;
background:white;
`
const TextoHome = styled.h3`
      text-decoration: underline;
`

function DetalhePokemon() {
    const { pokemons } = useContext(GlobalContext)
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    const goToPokedex = () => {
        navigate("/MyPokemons")
    }
    const { pokemonUnico } = useContext(GlobalContext)

    const renderizarDetalhes = pokemonUnico && pokemonUnico.map((pokemon) => {
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
        }[type]
        const icon = {
            poison: poison,
            grass: grass,
            fire: fire,
            flying: flying,
            water: water,
            bug: bug,
            normal: normal,
            dark: dark,
            dragon: dragon,
            electric: electric,
            fairy: fairy,
            fighting: fighting,
            ghost: ghost,
            ground: ground,
            ice: ice,
            psychic: psychic,
            rock: rock,
            steel: steel,
        }
        const moves = []
        for (let i = 0; i < 4; i++) {
            moves.push(<MoveTitle><h4>{pokemon.moves[i].move.name.toUpperCase()}</h4></MoveTitle>)
        }
        return <Container>
            < CardPrincipal >
                <CardImages>
                    <CardImage1>
                        <Imagem src={pokemon.sprites.other.home.front_default} />
                    </CardImage1>
                    <CardImage1>
                        <Imagem src={pokemon.sprites.other.home.front_shiny} />
                    </CardImage1>
                </CardImages>
                <CardBaseStatus>
                    <h3>Base Stats</h3>
                    {pokemon.stats.map((status) => {
                        return <StatsContainer>
                            <p>{status.stat.name.toUpperCase()}: {status.base_stat}</p>
                            <Stats><StatsBar stat={status.base_stat}></StatsBar></Stats>
                        </StatsContainer>
                    })}
                </CardBaseStatus>
                <ContainerNameTypeMoves>
                    <ContainerNameType>
                        < CardName >
                            <div>
                                <IdTitle>#{pokemon.id}</IdTitle>
                                <h2>{pokemon.name.toUpperCase()}</h2>
                            </div>
                            <ContainerImg>
                                <img src={pokemon.sprites.other["official-artwork"].front_default} width={100} />
                            </ContainerImg>
                        </ CardName >
                        <ContainerTypes>
                            {pokemon.types.map((tipo) => {
                                return <ContainerType key={tipo.type.name} color={color[tipo.type.name]}>
                                    <IconImage src={icon[tipo.type.name]}></IconImage>
                                    <h4>{tipo.type.name.charAt(0).toUpperCase() + tipo.type.name.slice(1)}</h4>
                                </ContainerType>

                            })}
                        </ContainerTypes>
                    </ContainerNameType>
                    <CardMoves>
                        <h3>Moves</h3>
                        {moves}
                    </CardMoves>
                </ContainerNameTypeMoves>
            </ CardPrincipal >
        </Container>
    })
    return (
        <div>
            <Header>
                <BotaoPokedex onClick={goToHome}> <TextoHome>Voltar Para a home</TextoHome></BotaoPokedex>
                <BotaoPokedex onClick={goToPokedex}> <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" width={200} /></BotaoPokedex>
                <BotaoPokedex onClick={goToHome}> <TextoHome>Excluir da Pokédex</TextoHome></BotaoPokedex>
            </Header>
            <TitleDetails>Detalhes</TitleDetails>
            <MainPageContainer>
                {renderizarDetalhes}
            </MainPageContainer>
        </div>
    );
}

export default DetalhePokemon;
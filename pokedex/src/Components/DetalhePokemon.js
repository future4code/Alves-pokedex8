import { useNavigate } from "react-router-dom"
import React, { useContext } from "react"
import styled from "styled-components"
import GlobalContext from "./Global/GlobalContext"

const Imagem = styled.img`
width: 60%;
`
const CardImage2 = styled.div`
`
const CardImage1 = styled.div`

`
const CardImages = styled.div`

`
const CardMoves = styled.div`

`
const CardBaseStatus = styled.div`
background-color: white;
`
const CardTypeName = styled.div`

`
const CardName = styled.div`
background-color: white;

`
const CardPrincipal = styled.div`
display: flex;
background-color: green;
position: absolute;
width: 1389.14px;
height: 663px;
justify-content: center;

`
const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
text-align: center;
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
        const moves = []
        for (let i = 0; i < 4; i++) {
            moves.push(<p>{pokemon.moves[i].move.name}</p>)
        }
        return <Container>
            < CardPrincipal >
            < CardName >
            <h2>
                #{pokemon.id}
                <br />
                {pokemon.name.toUpperCase()}
            </h2>
            </ CardName >
            <CardTypeName>
                {pokemon.types.map((tipo) => {
                    return <div><h4>{tipo.type.name.toUpperCase()}</h4></div>
                })}
            </CardTypeName>
            <CardMoves>
                {moves}
            </CardMoves>
            <CardBaseStatus>
                {pokemon.stats.map((status) => {
                    return <div>
                        <p>Base Stats</p>
                        <p>{status.stat.name.toUpperCase()}:{status.base_stat}</p>
                    </div>
                })}
            </CardBaseStatus>
            <CardImages>
                <CardImage1>
                    <p>Normal:</p>
                    <Imagem src={pokemon.sprites.other.home.front_default} />
                </CardImage1>
                <CardImage2>
                    <p>Shiny:</p>
                    <Imagem src={pokemon.sprites.other.home.front_shiny} />
                </CardImage2>
            </CardImages>
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
            <h1>Detalhes</h1>
            <div>
                {renderizarDetalhes}
            </div>
        </div>
    );
}

export default DetalhePokemon;
import { useNavigate } from "react-router-dom"
import React, { useContext } from "react"
import styled from "styled-components"
import GlobalContext from "./Global/GlobalContext"

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
        for (let i = 0; i < 5; i++) {
            moves.push(<p>{pokemon.moves[i].move.name}</p>)
        }
        return <div>
            <h2>
                #{pokemon.id}
                <br />
                {pokemon.name.toUpperCase()}
            </h2>
            <div>
                {pokemon.types.map((tipo) => {
                    return <div><h4>{tipo.type.name.toUpperCase()}</h4></div>
                })}
            </div>
            <div>
                {moves}
            </div>
            <div>
                {pokemon.stats.map((status) => {
                    return <div>
                        <p>{status.stat.name.toUpperCase()}:{status.base_stat}</p>
                    </div>
                })}
            </div>
            <div>
                <div>
                    <p>Normal:</p>
                    <img src={pokemon.sprites.other.home.front_default} />
                </div>
                <div>
                    <p>Shiny:</p>
                    <img src={pokemon.sprites.other.home.front_shiny} />
                </div>
            </div>
        </div>
    })
    console.log(pokemonUnico)
    return (
        <div>
            <Header>
                <BotaoPokedex onClick={goToHome}> <TextoHome>Voltar Para a home</TextoHome></BotaoPokedex>
                <BotaoPokedex onClick={goToPokedex}> <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" width={200} /></BotaoPokedex>
                <BotaoPokedex onClick={goToHome}> <TextoHome>Excluir da Pokédex</TextoHome></BotaoPokedex>
            </Header>
            <div>
                {renderizarDetalhes}
            </div>
        </div>
    );
}

export default DetalhePokemon;
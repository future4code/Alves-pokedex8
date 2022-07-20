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
border: 0px;
`
const TextoHome = styled.h3`
      text-decoration: underline;
`
const CardPokemon = styled.div`
`
const Container1 = styled.div`
`
const Container4 = styled.div`
padding-top:1%;
`
const Container3 = styled.div`
display:flex;
`
const ContainerTipo = styled.div`
display:flex;
padding-right:10%;
`
const Container2 = styled.div`
/* display:flex; */
/* justify-content:space-between; */
`
const Container5 = styled.div`
background-color:white;
/* height:24vh; */
width:29%;
padding:1%;
margin:1%;
`
function MeusPokemons() {
    const { capturar } = useContext(GlobalContext)

    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    const goToDetails = () => {
        navigate("/Details")
    }

    const meusPokemons = capturar && capturar.map((pokemon) => {
        return <CardPokemon>
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
    })
    return (
        <div>
            <Header>
                <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" width={200} />
                <BotaoPokedex onClick={goToHome}> <TextoHome>Voltar Para a home</TextoHome></BotaoPokedex>
            </Header>
            SEUS POKEMONS CAPTURADOS(POKEDEX)
            {meusPokemons}
            <button onClick={goToDetails}>Detalhes</button>
        </div>
    );
}

export default MeusPokemons;
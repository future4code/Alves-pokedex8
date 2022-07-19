import { useNavigate } from "react-router-dom"
import React from "react"
import styled from "styled-components"

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

function MeusPokemons() {

    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    const goToDetails = () => {
        navigate("/Details")
    }
    return (
        <div>
            <Header>
                <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" width={200} />
                <BotaoPokedex onClick={goToHome}> <TextoHome>Voltar Para a home</TextoHome></BotaoPokedex>
            </Header>
            SEUS POKEMONS CAPTURADOS(POKEDEX)
            <button onClick={goToDetails}>Detalhes</button>
        </div>
    );
}

export default MeusPokemons;
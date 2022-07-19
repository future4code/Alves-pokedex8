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

function DetalhePokemon() {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    const goToPokedex = () => {
        navigate("/MyPokemons")
    }


    return (
        <div>
            <Header>
                <BotaoPokedex onClick={goToHome}> <TextoHome>Voltar Para a home</TextoHome></BotaoPokedex>
                <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" width={200} />
                <BotaoPokedex onClick={goToHome}> <TextoHome>Excluir da Pokédex</TextoHome></BotaoPokedex>
            </Header>
            DETALHE Pokemon
        </div>
    );
}

export default DetalhePokemon;
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
                </Container1>
                <Container2>
                    <img src={pokemon.sprites.front_default} width="200" />
                </Container2>
                <div>
                    <button onClick={goToDetails}>Detalhes</button>
                    <button onClick={() => excluirPokemon(pokemon.id)}>Excluir</button>
                </div>
            </CardPokemon>
        </Container5>
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
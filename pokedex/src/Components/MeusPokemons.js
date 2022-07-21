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
display:flex;
`
const ContainerTipo = styled.div`
display:flex;
padding-right:10%;
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
        }[type]
        return <MainCard style={{ backgroundColor: `${color}` }}>
            <CardPokemon>
                <ContainerMainInfo>
                    <ContainerInfo>
                        <h2>
                            #{pokemon.id}
                            <br />
                            {pokemon.name.toUpperCase()}
                        </h2>
                        <ContainerType>
                            {pokemon.types.map((tipo) => {
                                return <ContainerTipo> <h4>{tipo.type.name.toUpperCase()}</h4></ContainerTipo>
                            })}
                        </ContainerType>
                    </ContainerInfo>
                    <ContainerImgPoke>
                        <img src={pokemon.sprites.front_default} width="200" />
                    </ContainerImgPoke>
                </ContainerMainInfo>
            </CardPokemon>
            <ContainerBotao>
                <BotaoDetalhes style={{ backgroundColor: `${color}` }} onClick={goToDetails}>Detalhes</BotaoDetalhes>
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
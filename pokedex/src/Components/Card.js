import { useNavigate } from "react-router-dom"
import React from "react"
import styled from "styled-components"

const MainContainer = styled.div`
height:100vh;
width:100vw;
`
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

function Card() {
    const navigate = useNavigate()
    const goToPokedex = () => {
        navigate("/MyPokemons")
    }

    return (
        <MainContainer>
            <Header>
                    <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" width={200} />
                    <BotaoPokedex onClick={goToPokedex}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDdGf-hzKxuQKMOBEkDzXIzHX07zD9eZPJhu7RH-GseJhmzNI6Yow080XZP5OfEWVybA&usqp=CAU" width={80} /></BotaoPokedex>
            </Header>
            CARD PRINCIPAL/PAGINA PRINCIPAL
        </MainContainer>
    );
}

export default Card;
import { useNavigate } from "react-router-dom"
import React from "react"

function Card() {
    const navigate = useNavigate()
    const goToPokedex = () => {
        navigate("/MyPokemons")
    }

    return (
        <div>
            CARD PRINCIPAL/PAGINA PRINCIPAL
            <button onClick={goToPokedex}>AAAAAAAA</button>
        </div>
    );
}

export default Card;
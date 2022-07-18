import { useNavigate } from "react-router-dom"
import React from "react"

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
            SEUS POKEMONS CAPTURADOS(POKEDEX)
            <button onClick={goToHome}>Voltar para inicio</button>
            <button onClick={goToDetails}>Detalhes</button>
        </div>
    );
}

export default MeusPokemons;
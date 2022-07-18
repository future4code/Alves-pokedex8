import { useNavigate } from "react-router-dom"
import React from "react"


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
            <button onClick={goToHome}>Voltar para inicio</button>
            <button onClick={goToPokedex}>Ver seus pokemons</button>
            DETALHE Pokemon
        </div>
    );
}

export default DetalhePokemon;
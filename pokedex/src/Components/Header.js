import React from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components";

function Header() {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate("/")
    }
    return (
        <div>
            <header>
                <button onClick={goToHome}>IMAGEM POKEMON</button>
            </header>
        </div>
    );
}

export default Header;

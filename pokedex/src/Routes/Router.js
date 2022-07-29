import { BrowserRouter, Route, Routes } from "react-router-dom"
import Card from "../Components/Card"
import DetalhePokemon from "../Components/DetalhePokemon"
import MeusPokemons from "../Components/MeusPokemons"


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Card />} />
                <Route path="MyPokemons" element={<MeusPokemons />} />
                <Route path="Details" element={<DetalhePokemon />} />
            </Routes>
        </BrowserRouter>
    )
}
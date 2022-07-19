// import React from "react";
// function APIPokemon() {
//     const fetchPokemon = () => {
//         const getPokemonUrl = id => `https://pokeapi.co/api/vw/pokemon/${id}`
//         const pokemonPromises = []
//         for (let i = 1; i <= 20; i++) {
//             pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
//         }
//         Promise.all(pokemonPromises)
//             .then(pokemons => {
//                 console.log(pokemons)
//             })
//     }
// }
// fetchPokemon()
// export default APIPokemon;
import React from 'react'
import Description from "./Description"
import EvolutionChain from './EvolutionChain'
import Moves from "./Moves"

const PokemonProfile = () => {
    var currentUrl = window.location.href;
    var splitUrl = currentUrl.split("pokemon/")
    var pokemonUrlIndex = splitUrl[1];

    return (
        <div className="container" key={pokemonUrlIndex}>
        {
            (pokemonUrlIndex !== "") ? (
                <div> 
                    <Description descURL={pokemonUrlIndex} />
                    <hr/>
                    <Moves movesURL={pokemonUrlIndex} />
                    <hr/>
                    <EvolutionChain evURL={pokemonUrlIndex} />
                </div>
            ) : (
                <h5 className="text-info">Please wait until the pokemons load...</h5>
            )
        }
        </div>
    )
}

export default PokemonProfile

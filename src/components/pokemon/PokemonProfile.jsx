import React from 'react'
import {useParams} from 'react-router-dom'
import Description from "./Description"
import EvolutionChain from './EvolutionChain'
import Moves from "./Moves"

const PokemonProfile = () => {

    const { pokeIndex } = useParams();

    return (
        <div className="container" key={pokeIndex}>
        {
            (pokeIndex !== "") ? (
                <div> 
                    <Description descURL={pokeIndex} />
                    <hr/>
                    <Moves movesURL={pokeIndex} />
                    <hr/>
                    <EvolutionChain evURL={pokeIndex} />
                </div>
            ) : (
                <h5 className="text-info">Please wait until the pokemons load...</h5>
            )
        }
        </div>
    )
}

export default PokemonProfile

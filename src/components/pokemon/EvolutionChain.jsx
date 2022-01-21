import React, {useState, useEffect} from 'react'
import axios from 'axios'

const EvolutionChain = (props) => {

    const [evolutionChain, setEvolutionChain] = useState([])

    //SPECIES AND EVOLUTION CHAIN
    const fnEvo = () => {
        const speciesURL= `https://pokeapi.co/api/v2/pokemon-species/${props.evURL}`;
        axios.get(speciesURL)
        .then(response => {
            const evcURL = response.data.evolution_chain.url;
            axios.get(evcURL)
            .then(response => {
                //console.log(response);
                var poke = response.data.chain;
                setEvolutionChain([response.data.chain.species.name]);
                for(let i=0; i<5; i++){
                    if(poke.evolves_to.length >= 1){
                        let eChain = poke.evolves_to[0].species.name;
                        setEvolutionChain((prev) => {
                            return [...prev, eChain]
                        });
                        poke = poke.evolves_to[0];
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })

        })
        .catch(function(err) {
            console.log(err);
        })
    }

    useEffect(() => {
        fnEvo();
    },[])

    return (
        <>
            <div className="container my-3">
                <h5>Evolution Chain</h5>
                {
                    (evolutionChain.length === 0) ? (
                        <h6 className="text-info">Please wait until the evolution chain loads...</h6>
                    ) : (
                        evolutionChain.map(function(poke, idx){
                            return <span className="bg-light d-inline-block rounded p-2 m-1 fs-6 border border-grey" key={idx}> {poke} </span>
                        })
                    )
                }
            </div>
        </>
    )
}

export default EvolutionChain

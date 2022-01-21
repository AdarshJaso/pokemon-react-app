import React, {useState, useEffect} from 'react';
import axios from "axios";
import PokemonCard from './PokemonCard';

const PokemonList = () => {

    const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")

    const [pokeInfo, setPokeInfo] = useState([]) 

    pokeInfo.sort(function(a, b){
        return a.pokeIndex - b.pokeIndex;
    });

     function fetchAllPokemons(){
         axios.get(loadMore)
        .then(response => {
            setLoadMore(response.data.next);
              function storePokeInfo(result){
                   result.forEach(pokemon => {
                    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                    .then(response => {
                            setPokeInfo(prevObj => [...prevObj, {
                                pokeName: response.data.name,
                                pokeIndex: response.data.id,
                                pokeImgUrl: response.data.sprites.back_default,
                            }])

                        })
                    .catch(function(err){
                        console.log(err);
                    })
                });
            }
            storePokeInfo(response.data.results);
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    useEffect(() => {
        fetchAllPokemons();
    },[])
        
    return (
        <>
            <div className="row m-5">
            {
                (pokeInfo.length === 0) ? (
                    <h4 className="text-info">Please wait until the pokemons load...</h4>
                ) : (
                    pokeInfo.map((pokemon)=> {
                        return <PokemonCard pokeName={pokemon.pokeName} pokeImgUrl={pokemon.pokeImgUrl} pokeIndex={pokemon.pokeIndex} key={pokemon.pokeIndex} />
                    })
                    
                )
            }
            </div>
            <div className="text-center m-5">
                <button onClick={fetchAllPokemons} className="btn btn-secondary">Load more</button>
            </div>
            
        </>
    )
}

export default PokemonList

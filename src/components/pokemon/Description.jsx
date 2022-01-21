import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Description = (props) => {

    const [description, setDescription] = useState([])

    const [baseStats, setBaseStats] = useState([])

    //DESCRIPTION
    const fnDesc = () => {

        const descriptionURL= `https://pokeapi.co/api/v2/pokemon/${props.descURL}`;

        axios.get(descriptionURL)
        .then(response => {
            var abilitiesArray = [], typeArray = [];

            //ABILITIES
            response.data.abilities.map(function(poke){
                return abilitiesArray.push(poke.ability.name);
            })
            const abilities= abilitiesArray.join(", ").toString();

            //TYPES
            response.data.types.map(function(poke){
                return typeArray.push(poke.type.name);
            })
            const type= typeArray.join(", ").toString();

            //STATS
            var statsss = [];
            response.data.stats.map(function(poke){
                return statsss.push({[poke.stat.name]: poke.base_stat});
            })
            setBaseStats(statsss);

            setDescription({
                name: response.data.name,
                img: response.data.sprites.other.home.front_shiny,
                weight: (response.data.weight*0.1).toFixed(2),
                height: (response.data.height*0.1).toFixed(2),
                abilities: abilities,
                type: type,
            })
        })
        .catch(function(err) {
            console.log(err);
        })
    }
    useEffect(() => {
        fnDesc();
    }, [])

    return (
        <>
        <div>
            <h4 className="text-center my-3 text-uppercase">{description.name}</h4>
            <div className="row text m-auto">
                <div className="offset-md-2 col-md-4 bg-light p-5 rounded-3 d-flex justify-content-center align-items-center">
                {
                    (!description.img) ? (
                        <h6 className="text-info">loading...</h6>
                    ) : (
                        <img className="img-fluid" src={description.img} alt={description.name}/>
                    )
                }
                    
                </div>
                <div className="col-md-4 offset-md-1">
                    <h5>Info</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fw-bold">
                            <span className="h6">Weight:</span><br/>
                            <span className="h6">Height:</span> <br/>
                            <span className="h6">Abilities:</span><br/>
                            <span className="h6">Type:</span><br/>
                        </div>
                        <div className="text-end">
                            <span>{description.weight} kg</span><br/>
                            <span>{description.height} m</span><br/>
                            <span className="text-capitalize">{description.abilities}</span><br/>
                            <span className="text-capitalize">{description.type}</span><br/>
                        </div>
                    </div>
                    <hr/>
                    <h5>Base Stats</h5>
                    <div className="row justify-content-between align-items-center">
                        <div className="fw-bold col-6">
                            {
                                baseStats.map(function(poke){
                                   return <span className="h6 text-capitalize" key={Object.keys(poke)}>{Object.keys(poke)} <br/></span> 
                                })
                            }
                        </div>
                        <div className="text-end col-6">
                            {
                                baseStats.map(function(poke){
                                   return <span className="progress mb-2" key={Object.keys(poke)}><span className="progress-bar" role="progressbar" style={{width: Object.values(poke) + '%'}} aria-valuenow={Object.values(poke)} aria-valuemin="0" aria-valuemax="100">{Object.values(poke)}</span></span>
                                })
                            }
                        </div>
                    </div>
                </div>  
                              
            </div>
        </div>
        </>
    )
}

export default Description

import React from 'react';
import {NavLink} from "react-router-dom";

const PokemonCard = (props) => {

    return (
        <>
            <div className="col-md-2 p-2" key={props.pokeIndex}>
                <div className="text-center shadow-sm p-3 border-0 pokemon-card position-relative">
                    <span className="position-absolute text-dark bg-light p-2 top-0 end-0" style={{"fontSize": "smaller", borderBottomLeftRadius: "10px", fontWeight: "500"}}>#{props.pokeIndex}</span><br/>
                    <img className="w-auto" src={props.pokeImgUrl} alt={props.pokeName} style={{width:"100%"}} />
                    <h6 className="" style={{listStyle: "none", textTransform: "uppercase"}}>{props.pokeName}</h6>
                    <NavLink to={"/pokemon/" + props.pokeIndex} exact="true" className="btn btn-sm small">
                        View
                    </NavLink>
                </div>                            
            </div>
        </>
    )
}

export default PokemonCard
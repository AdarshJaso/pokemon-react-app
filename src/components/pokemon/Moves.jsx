import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Moves = (props) => {
    
    const [moves, setMoves] = useState([])

    //MOVES
    const fnMoves = () => {
        const movesURL= `https://pokeapi.co/api/v2/pokemon/${props.movesURL}`;
        axios.get(movesURL)
        .then(response => {
            const dataMoves = response.data.moves;
            dataMoves.forEach((pokeM) => {
                setMoves(moves => [...moves, pokeM.move.name])
            });
        })
        .catch(function(err) {
            console.log(err);
        })
    }

    useEffect(() => {
        fnMoves();
    }, [])

    return (
        <>
            <div className="container my-3">
            <h5>Moves</h5>
            {
                (moves.length === 0) ? (
                    <h6 className="text-info">Please wait until the pokemon moves loads...</h6>
                ) : (
                    moves.map(function(d, id){
                        return <span className="bg-light d-inline-block rounded p-2 m-1 fs-6 border border-grey" key={id}> {d} </span>
                    })
                )
            }
            </div>
        </>
    )
}

export default Moves

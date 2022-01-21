import React from 'react'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header style={{height: "80px"}} className="d-flex justify-content-between align-items-center px-5 text-white">
                    <span>
                        <NavLink className="text-white text-decoration-none" exact="true" to="/pokemon">POKEMON REACT APP</NavLink>
                    </span>
                <div className="d-flex justify-content-start gap-3">
                    <span>
                        <NavLink className="text-white text-decoration-none" exact="true" to="/pokemon">Home</NavLink>
                    </span>
                    <span>
                        <a className="text-white text-decoration-none" target="_blank" href="https://github.com/adarshjaso">Github</a>
                    </span>
                </div>
            </header>

        </>
    )
}

export default Header

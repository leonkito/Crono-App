import React from "react";
import { Link } from 'react-router-dom'
const Header = () =>{

    return(
        <>
            <div className="header">
                <h1>Tempos e Métodos</h1>
            </div>
            <div className="nav-bar">
                <li><Link to="/cadastro">CADASTRO</Link></li>
                <li><Link to="/">VISUALIZAR</Link></li>
                <li>DASHBOARD</li>
            </div>
        </>
    )
}
export default Header;
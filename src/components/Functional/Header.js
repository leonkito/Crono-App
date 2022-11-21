import React from "react";
import { Link } from 'react-router-dom'
const Header = () =>{
  return(
      <div className="header">
        <h1>Tempos&nbsp;e Métodos</h1>
        <li><Link to="/">CADASTRO</Link></li>
        <li><Link to="/visualizar">VISUALIZAR</Link></li>
        <li>DASHBOARD</li>
      </div>
  )
}

export default Header;
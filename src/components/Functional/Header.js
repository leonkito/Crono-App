import React from "react";
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <h1>Tempos&nbsp;e Métodos</h1>
            <div className="nav">
                <div className="rotas" onClick={() => navigate("/")}>Cadastro</div>
                <div className="rotas" onClick={() => navigate("/dashboard")}>Dashboard</div>
                <div className="rotas" onClick={() => navigate("/estrutura")}>Estrutura</div>
            </div>
        </div>
    )
}

export default Header;
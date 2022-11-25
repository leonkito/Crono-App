import React, { useState } from "react";
const Informacoes = ({handleChange, state}) => {
  const[show,setShow] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(show === true ? false : true)
  }

  return (
    <div className="form-holder">
      <p className="title">Informações Cronoanálise</p>
      {show && (
      <form onSubmit={handleSubmit}>
        <div className="group-form">
          <div className="input-box">
            <label htmlFor='codigo'>Código:</label> 
            <input
              type="text"
              className="input-form"
              name="codigo"
              id="codigo"
              value={state.codigo}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="revisao">Revisão:</label>
            <input
              type="number"
              className="input-form"
              name="revisao"
              id="revisao"
              value={state.revisao}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="cronoanalista">Cronoanalista:</label>
            <input
              type="text"
              className="input-form"
              name="cronoanalista"
              id="cronoanalista"
              value={state.cronoanalista}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="centroTrabalho">Centro de Trabalho:</label>
            <input
              type="text"
              className="input-form"
              name="centroTrabalho"
              id="centroTrabalho"
              onChange={handleChange}
              value={state.centroTrabalho}
            />
          </div>
          <div className="input-box">
            <label>Turno:</label>
              <select value={state.turno} className="input-form" name="turno" onChange={handleChange}>
                <option value="1 turno">1° Turno</option>
                <option value="2 turno">2° Turno</option>
                <option value="3 turno">3° Turno</option>
                <option value="normal">Normal</option>
              </select>
          </div>
          <div className="input-box">
            <label htmlFor="data">Data:</label>
            <input
              type="text"
              className="input-form"
              name="data"
              id="data"
              value={state.data}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="sided group-form">
        <div className="input-box">
          <label>Operação:</label>
          <div>
            <div>
              <input
                type="radio"
                value='01 - Preparação de Máteria-Prima'
                name="operacao"
                onChange={handleChange}
                checked={state.operacao === '01 - Preparação de Máteria-Prima'}
              /> 01 - Preparação de Máteria-Prima
            </div>
            <div>
              <input
                type="radio"
                value='02 - Mistura'
                name="operacao"
                onChange={handleChange}
                checked={state.operacao === '02 - Mistura'}
              /> 02 - Mistura
            </div>
            <div>
              <input
                type="radio"
                value='03 - Envase'
                name="operacao"
                onChange={handleChange}
                checked={state.operacao === '03 - Envase'}
              /> 03 - Envase
            </div>
            <div>
              <input
                type="radio"
                value='04 - Embalagem e Acondicionamento'
                name="operacao"
                onChange={handleChange}
                checked={state.operacao === '04 - Embalagem e Acondicionamento'}
              /> 04 - Embalagem e Acondicionamento
            </div>
            <div>
              <input
                type="radio"
                value='05 - Setup e Limpeza'
                name="operacao"
                onChange={handleChange}
                checked={state.operacao === '05 - Setup e Limpeza'}
              /> 05 - Setup e Limpeza
            </div>
          </div>
        </div>
        <div className="full input-box">
          <label htmlFor="observacao">Observação:</label>
          <textarea
            type="text"
            className="input-form"
            name="observacao"
            id="observacao"
            value={state.observacao}
            onChange={handleChange}
          />
        </div>
        </div>

      </form>
      )}
      <div className="center">
        <button className="submit-button small-btn" onClick={() =>setShow(show=== true ? false : true)}>{show ? 'Salvar' : 'Editar'}</button>
      </div>
    </div>
  )
}

export default Informacoes
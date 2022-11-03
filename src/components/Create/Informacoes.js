import React, { useState } from "react";
const Informacoes = ({handleChange, state}) => {
  const[show,setShow] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(show === true ? false : true)
  }

  return (
    <div className="form-holder">
      <p className="title">INFORMAÇÕES GERAIS</p>
      {show && (
      <form onSubmit={handleSubmit}>
          <label> 
            Código: 
            <input
            type="text"
            placeholder="Código do Produto"
            value={state.codigo}
            className="input-form"
            name="codigo"
            onChange={handleChange}
            />
          </label>
          <label>
          Operação:
            <select value={state.operacao} className="input-form" name="operacao" onChange={handleChange}>
              <option value="01 - Preparação de Máteria-Prima">01 - Preparação de Máteria-Prima</option>
              <option value="02 - Mistura">02 - Mistura</option>
              <option value="03 - Envase">03 - Envase</option>
              <option value="04 - Embalagem e Acondicionamento">04 - Embalagem e Acondicionamento</option>
              <option value="05 - Setup e Limpeza">05 - Setup e Limpeza</option>
            </select>
          </label>
          <label>
          Turno:
          <select value={state.turno} className="input-form" name="turno" onChange={handleChange}>
            <option value="01">1° Turno</option>
            <option value="02">2° Turno</option>
            <option value="03">3° Turno</option>
            <option value="04">Normal</option>
          </select>
          </label>
          <label> 
          Cronoanalista: 
          <input
          type="text"
          placeholder="Cronoanalista"
          value={state.cronoanalista}
          className="input-form"
          name="cronoanalista"
          onChange={handleChange}
          />
          </label>
          <label> 
          Centro de Trabalho: 
            <input
            type="text"
            placeholder="Centro de Trabalho"
            value={state.centroTrabalho}
            className="input-form"
            name="centroTrabalho"
            onChange={handleChange}
          />
          </label>
          <label> 
          Data:
            <input
            type="text"
            placeholder="Data"
            value={state.data}
            className="input-form"
            name="data"
            onChange={handleChange}
          />
          </label>
          <label> 
          Revisão:
            <input
            type="number"
            placeholder="N° da revisão"
            value={state.revisao}
            className="input-form"
            name="revisao"
            onChange={handleChange}
          />
          </label>
          <label> 
          Observação:
            <input
            type="text"
            placeholder="Observação"
            value={state.observacao}
            className="input-form"
            name="observacao"
            onChange={handleChange}
          />
          </label>
      </form>
      )}
        <button className="submit-button small-btn" onClick={() =>setShow(show=== true ? false : true)}>{show ? 'Salvar' : 'Editar'}</button>
    </div>
  )
}

export default Informacoes
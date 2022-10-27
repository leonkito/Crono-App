import React, { useState } from "react";
// import databaseConfig from './databaseConfig';
// import { ref, set } from "firebase/database";

const Informacoes = () => {
  const[{codigo, operacao, revisao, turno, cronoanalista, centroTrabalho, data, observacao}, setState] = useState({
    codigo:'',
    operacao:'01 - Preparação de Máteria-Prima',
    revisao:'',
    turno:'',
    cronoanalista:'',
    centroTrabalho:'',
    data:'',
    observacao:'',
  })
  // const[{concessao, tempoNormal, tempoBasico}] = useState({
  //   concessao:'',
  //   tempoNormal:'',
  //   tempoBasico:''
  // })
  const[show,setShow] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const timeRef = ref(databaseConfig, `tempos/${codigo}/${operacao}/${revisao}`)
    // set(timeRef,{
    //   cronoanalista : cronoanalista,
    //   data: data,
    //   observacao:observacao
    // })
    setShow(show === true ? false : true)
    // TODO add on edit mode to change in database only what has been changed in the forms, cause set changes all the reference if nothing else is especified 
  }

  const handleChange = ({target:{name, value}})=>{
    setState(prevState =>({...prevState, [name]:value}));
  }

  return (
    <div className="form-holder">
      <h1 className="title">INFORMAÇÕES GERAIS</h1>
      {show ? (
      <form onSubmit={handleSubmit}>
        <div className="input-holder">
          <label> 
            Código: 
            <input
            type="text"
            placeholder="Código do Produto"
            value={codigo}
            className="input-form"
            name="codigo"
            onChange={handleChange}
            />
          </label>
        </div>
        <div className="input-holder">
          <label>
          Operação:
            <select value={operacao} className="input-form" name="operacao" onChange={handleChange}>
              <option value="01 - Preparação de Máteria-Prima">01 - Preparação de Máteria-Prima</option>
              <option value="02 - Mistura">02 - Mistura</option>
              <option value="03 - Envase">03 - Envase</option>
              <option value="04 - Embalagem e Acondicionamento">04 - Embalagem e Acondicionamento</option>
              <option value="05 - Setup e Limpeza">05 - Setup e Limpeza</option>
            </select>
          </label>
        </div>
        <div className="input-holder">
          <label>
          Turno:
          <select value={turno} className="input-form" name="turno" onChange={handleChange}>
            <option value="01">1° Turno</option>
            <option value="02">2° Turno</option>
            <option value="03">3° Turno</option>
            <option value="04">Normal</option>
          </select>
          </label>
        </div>
        <div className="input-holder">
          <label> 
          Cronoanalista: 
          <input
          type="text"
          placeholder="Cronoanalista"
          value={cronoanalista}
          className="input-form"
          name="cronoanalista"
          onChange={handleChange}
          />
          </label>
        </div>
        <div className="input-holder">
          <label> 
          Centro de Trabalho: 
            <input
            type="text"
            placeholder="Centro de Trabalho"
            value={centroTrabalho}
            className="input-form"
            name="centroTrabalho"
            onChange={handleChange}
          />
          </label>
        </div>
        <div className="input-holder">
          <label> 
          Data:
            <input
            type="text"
            placeholder="Data"
            value={data}
            className="input-form"
            name="data"
            onChange={handleChange}
          />
          </label>
        </div>
        <div className="input-holder">
          <label> 
          Revisão:
            <input
            type="text"
            placeholder="N° da revisão"
            value={revisao}
            className="input-form"
            name="revisao"
            onChange={handleChange}
          />
          </label>
        </div>
        <div className="input-holder">
          <label> 
          Observação:
            <input
            type="text"
            placeholder="Observação"
            value={observacao}
            className="input-form"
            name="observacao"
            onChange={handleChange}
          />
          </label>
        </div>
        <input className="submit-button" type="submit" value="Salvar" />
      </form>
      ) : (
            <button className="submit-button" onClick={() =>setShow(show=== true ? false : true)}>Editar</button>
        )}
    </div>
  )
}

export default Informacoes
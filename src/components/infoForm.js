import React, { useState } from "react";

const InfoForm = () => {
    const[{codigo,operacao,turno,cronoanalista,revisao,centro_trabalho,data,observacao,concessao,tempo_normal_total,tempo_basico_total}, setState] = useState({codigo:'',operacao:'',turno:'',cronoanalista:'',revisao:'',centro_trabalho:'',data:'',observacao:'',concessao:'',tempo_normal_total:'',tempo_basico_total:''})
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = ({target:{name,value}})=>{
        setState(prevState =>({...prevState,[name]:value}));
    }
 
return (
  <div className="form-holder">
    <h1 className="title">INFORMAÇÕES GERAIS</h1>
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
          <select value={operacao} className="input-form"name="operacao" onChange={handleChange}>
          <option value="01">01 - Preparação de Máteria-Prima</option>
          <option value="02">02 - Mistura</option>
          <option value="03">03 - Envase</option>
          <option value="04">04 - Embalagem e Acondicionamento</option>
          <option value="05">05 - Setup e Limpeza</option>
          </select>
        </label>
      </div>
      <div className="input-holder">
        <label>
        Turno:
        <select value={turno} className="input-form"name="turno" onChange={handleChange}>
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
          value={centro_trabalho}
          className="input-form"
          name="centro_trabalho"
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
      <input className="submit-button"type="submit" value="Submit" />
    </form>
  </div>
  );
}

export default InfoForm
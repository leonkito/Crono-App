import databaseConfig from './databaseConfig';
import React, {useState} from "react";
import {ref,  onValue} from "firebase/database";
const GetInfo = () =>{
  // const [data,setData] = useState('')
  const[{codigo, operacao, revisao},setState] = useState({
    codigo:'',
    operacao:'01 - Preparação de Máteria-Prima',
    revisao:'',
  })
  const[cronoanalista,setCronoanalista] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault();
    const timeRef = ref(databaseConfig, `tempos/${codigo}/${operacao}/${revisao}`);
    onValue(timeRef, (snapshot) => {
      const def = snapshot.val();
      setCronoanalista(def.cronoanalista);
    });
  }

  const handleChange = ({target:{name, value}})=>{
    setState(prevState =>({...prevState, [name]:value}));
  }
  return(
  <div className="form-holder">  
    <h1 className="title">Buscar Informações</h1>
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
      <input className="submit-button" type="submit" value="Salvar" />
    </form>
    <div>{cronoanalista}</div>
  </div>
  )
}

export default GetInfo

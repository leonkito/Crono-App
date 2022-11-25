import databaseConfig from '../Functional/databaseConfig';
import React, {useState} from "react";
import {ref,  onValue} from "firebase/database";
const GetInfo = () =>{
  // const [data,setData] = useState('')
  const[{codigo, operacao, revisao},setState] = useState({
    codigo:'',
    operacao:'01 - Preparação de Máteria-Prima',
    revisao:'',
  })
  const[info,setInfo] = useState(<p>nothing to display</p>)
  const[els,setEls] = useState(<p>nothing to display</p>)
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (codigo !=='' && revisao !== ''){
    const timeRef = ref(databaseConfig, `tempos/${codigo}/${operacao}/${revisao}`);
    onValue(timeRef, (snapshot) => {
      const def = snapshot.val();
      console.log(def)
      if (def !== null){
        const dis = (
          <>
            <div className="group-form" key="abc">
              <div className="input-box">
                <label>Cronoanalista:</label>
                <input
                  readOnly
                  disabled="disabled"
                  value={def.cronoanalista}
                  className="input-form"
                />
              </div>
              <div className="input-box">
                <label>Tempo Básico:</label>
                <input
                  readOnly
                  disabled="disabled"
                  value={def.tempoBasico}
                  className="input-form"
                />
              </div>

              <div className="input-box">
                <label>Concessão:</label>
                <input
                  readOnly
                  disabled="disabled"
                  value={def.concessao}
                  className="input-form"
                />
              </div>
              <div className="input-box">
                <label>Tempo normal:</label>
                <input
                  readOnly
                  disabled="disabled"
                  value={def.tempoNormal}
                  className="input-form"
                />
              </div>
            </div>
            <div className="input-box">
              <label>Observação:</label>
              <textarea
                readOnly
                disabled="disabled"
                value={def.observacao}
                className="input-form"
              />
            </div>
          </>
        )
        setInfo(dis)
        Object.entries(def).forEach(([key, val]) => {
          if(isNaN(key) === false){
            console.log(`element: ${key}`)
            console.log(val)
            const divsq = (
            <>{
            Object.entries(val).map(([key,val]) =>{ 
              return(<p>`${key}: ${val}`</p>)
            })}
            </>)
            // TODO need to go for every element and display the values as a table.
              setEls((prevState =>({...prevState, divsq})))
          }});
      }
    });
  } else {
    console.log("info missing")
  }
}


  const handleChange = ({target:{name, value}})=>{
    setState(prevState =>({...prevState, [name]:value}));
  }
  return(
    <>
    <div className="form-holder">  
      <h1 className="title">Buscar Informações</h1>
      <div className="start group-form">
        <div className="input-box">
          <label htmlFor='codigo'>Código:</label> 
          <input
            type="text"
            className="input-form"
            name="codigo"
            id="codigo"
            value={codigo}
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
            value={revisao}
            onChange={handleChange}
          />
        </div>
      </div>
        <div className="input-box">
          <label>Operação:</label>
          <div className="group-form">
            <div>
              <input
                type="radio"
                value='01 - Preparação de Máteria-Prima'
                name="operacao"
                onChange={handleChange}
                checked={operacao === '01 - Preparação de Máteria-Prima'}
              /> 01 - Preparação de Máteria-Prima
            </div>
            <div>
              <input
                type="radio"
                value='02 - Mistura'
                name="operacao"
                onChange={handleChange}
                checked={operacao === '02 - Mistura'}
              /> 02 - Mistura
            </div>
            <div>
              <input
                type="radio"
                value='03 - Envase'
                name="operacao"
                onChange={handleChange}
                checked={operacao === '03 - Envase'}
              /> 03 - Envase
            </div>
            <div>
              <input
                type="radio"
                value='04 - Embalagem e Acondicionamento'
                name="operacao"
                onChange={handleChange}
                checked={operacao === '04 - Embalagem e Acondicionamento'}
              /> 04 - Embalagem e Acondicionamento
            </div>
            <div>
              <input
                type="radio"
                value='05 - Setup e Limpeza'
                name="operacao"
                onChange={handleChange}
                checked={operacao === '05 - Setup e Limpeza'}
              /> 05 - Setup e Limpeza
            </div>
          </div>
        </div>
        <div className="center">
          <button className="submit-button small-btn" onClick={handleSubmit}>Buscar</button>
        </div>
  </div>
      {info}
      {els}

  </>
  )
}

export default GetInfo

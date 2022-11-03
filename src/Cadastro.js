import React, { useState } from "react";
import Informacoes from './components/Create/Informacoes';
// import Tempos from './components/Create/Tempos'
import Elemento from './components/Create/Elemento';
import Divider from './components/Functional/Divider';

const Cadastro = () => {
  const[state, setState] = useState({
    codigo:'',
    operacao:'',
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

  const[times,setTimes] = useState(1);
  const handleClick=()=>{
    setTimes(times+1)
  }

  const handleChange = ({target:{name, value}})=>{
    setState(prevState =>({...prevState, [name]:value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const timeRef = ref(databaseConfig, `tempos/${codigo}/${operacao}/${revisao}`)
    // set(timeRef,{
    //   cronoanalista : cronoanalista,
    //   data: data,
    //   observacao:observacao
    // })
    // TODO add on edit mode to change in database only what has been changed in the forms, cause set changes all the reference if nothing else is especified 
  }

  return (
    <div className="main">
    <Informacoes handleChange={handleChange} state={state}/>
      <div className="form-holder">
          <h1 className="title">Elementos</h1>
          <form>
            {[...Array(times)].map((e, i) =>
              <>
                <Divider>{`Elemento ${i+1}`}</Divider>
                <Elemento key={i}/>
              </>
            )}
            </form>
            <button className="submit-button medium-btn" onClick={handleClick}>Adicionar Elemento</button>
            <button className="submit-button small-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Cadastro;

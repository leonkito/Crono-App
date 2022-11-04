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
  const[element,setElement] = useState([[{
    id:0, 
    elemento:'',
    ritmo:100,
    frequencia:1,
    fadiga:14.9,
    tempoControle:0,
    tempoNormal:0,
    tempoBase:0,
  }],])
  // const[{concessao, tempoNormal, tempoBasico}] = useState({
  //   concessao:'',
  //   tempoNormal:'',
  //   tempoBasico:''
  // })

  const[times,setTimes] = useState(1);
  const handleClick=()=>{
    setTimes(times+1)
    const tempElement = [{
      id:times,
      elemento:'',
      ritmo:100,
      frequencia:1,
      fadiga:14.9,
      tempoControle:0,
      tempoNormal:0,
      tempoBase:0,
      tempoCiclos:[''],
    }]
  setElement(current => [...current, tempElement]);
    console.log(element[0][0])
  }

  const handleChange = ({target:{name, value}})=>{
    setState(prevState =>({...prevState, [name]:value}));
  }

  const handleElement = (e)=>{
    // setElement(prevState =>({...prevState, element[0][0].[name]:value}));

    let temp = element[0][0]
    temp[e.target.name] = e.target.value;
    setElement(prevState =>({...prevState,temp}))
  };

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
                <Elemento handleElement={handleElement} key={i} element={element[i][0]}/>
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

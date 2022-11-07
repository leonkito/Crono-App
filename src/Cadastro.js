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
  const[element,setElement] = useState([{
    elemento:'',
    ritmo:100,
    frequencia:1,
    fadiga:14.9,
    tempoControle:0,
    tempoNormal:0,
    tempoBase:0,
    time:[""],
  }])
  // const[{concessao, tempoNormal, tempoBasico}] = useState({
  //   concessao:'',
  //   tempoNormal:'',
  //   tempoBasico:''
  // })

  const[times,setTimes] = useState(1);
  const addElement =()=>{
    setTimes(times+1)
    let newElement = {
      elemento:'',
      ritmo:100,
      frequencia:1,
      fadiga:14.9,
      tempoControle:0,
      tempoNormal:0,
      tempoBase:0,
      time:[""],
    }
    setElement ([...element,newElement])
    console.log(element[0])
  }

  const handleChange = ({target:{name, value}})=>{
    setState(prevState =>({...prevState, [name]:value}));
  }

  const handleElementChange = (index, event)=>{
    let data = [...element];
    data[index][event.target.name] = event.target.value;
    setElement(data)
  }

  const handleTime = (index,event,i) =>{
    let data = [...element];
    data[index][event.target.name][i] = event.target.value;
    setElement(data)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(element[0])
  }

  // useEffect(function() {
  //   const id = setInterval(function log() {
  //     const sum = Object.values(time).reduce((accumulator, value) => {
  //       return accumulator + Number(value);
  //     }, 0);
  //     const tm = Math.round((sum/(Object.values(time).length)) * 100) / 100;
  //     const tn = Math.round((tm*(element.ritmo/100)) * 100) / 100;
  //     const tb = Math.round(((tn/element.frequencia)*(1+(element.fadiga/100))) * 100) / 100;
  //     setElement(prevState =>({...prevState,element.tempoControle:Number(tm), element.tempoNormal:Number(tn), element.tempoBase:Number(tb)}))
  //   }, 300);
  //   return function() {
  //     clearInterval(id);
  //   }
  // }, [time, element.fadiga, element.ritmo, element.frequencia]);
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
    // const timeRef = ref(databaseConfig, `tempos/${codigo}/${operacao}/${revisao}`)
    // set(timeRef,{
    //   cronoanalista : cronoanalista,
    //   data: data,
    //   observacao:observacao
    // })
    // TODO add on edit mode to change in database only what has been changed in the forms, cause set changes all the reference if nothing else is especified 
  // }
  const[ciclos,setCiclos] = useState(10);

  const handleCiclos = (e) => {
    e.preventDefault();
    setCiclos(ciclos+10)
  }
  return (
    <div className="main">
      <Informacoes handleChange={handleChange} state={state}/>
      <div className="form-holder">
        <h1 className="title">Elementos</h1>
        <form>
          {element.map((elements,index)=>
          <div key={`d${index}`}>
            <Divider>{`Elemento ${index+1}`}</Divider>
            <Elemento element={elements} handleElementChange={event => handleElementChange(index, event)}/>
            <label>Ciclos:
            <div className="input-time-holder">
              {[...Array(ciclos)].map((e, i) =><input key={`t${i}`} placeholder={`t${i+1}`} name="time" value={elements.time[i]|| ""} onChange={event => handleTime(index, event,i)} className="input-time-form"></input>)}
            </div>
            <button className="submit-button small-btn" onClick={handleCiclos}>+ Tempos</button>
            </label>    
          </div>
          )}
        </form>
        <button className="submit-button medium-btn" onClick={addElement}>Adicionar Elemento</button>
        <button className="submit-button medium-btn" onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
}

export default Cadastro;

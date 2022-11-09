import React, { useState,useEffect } from "react";
import Informacoes from './components/Create/Informacoes';
import {ref, set } from "firebase/database";
// import Tempos from './components/Create/Tempos'
import Elemento from './components/Create/Elemento';
import Divider from './components/Functional/Divider';
import databaseConfig from './components/Functional/databaseConfig';

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
    concessao:5,
    tempoNormal:'',
    tempoBasico:''
  })
  const[element,setElement] = useState([{
    elemento:'',
    ritmo:100,
    frequencia:1,
    fadiga:10,
    tempoControle:0,
    tempoNormal:0,
    tempoBase:0,
    time:[""],
  }])

  const addElement =()=>{
    let newElement = {
      elemento:'',
      ritmo:100,
      frequencia:1,
      fadiga:10,
      tempoControle:0,
      tempoNormal:0,
      tempoBase:0,
      time:[""],
    }
    setElement ([...element,newElement])
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
    let timeRef = ref(databaseConfig, `tempos/${state.codigo}/${state.operacao}/${state.revisao}`)
    set(timeRef,{
      cronoanalista : state.cronoanalista,
      data: state.data,
      observacao: state.observacao,
      concessao: state.concessao,
      tempoNormal: state.tempoNormal,
      tempoBasico: state.tempoBasico,
    })
    element.forEach((elements,index)=>{
      timeRef = ref(databaseConfig, `tempos/${state.codigo}/${state.operacao}/${state.revisao}/${index}`)
      set(timeRef,{
      descricao: elements.elemento,
      ritmo: elements.ritmo,
      frequencia: elements.frequencia,
      fadiga: elements.fadiga,
      tempoControle: elements.tempoControle,
      tempoNormal: elements.tempoNormal,
      TempoBase: elements.tempoBase,
      Ciclos: elements.time,
      })})
    // TODO add on edit mode to change in database only what has been changed in the forms, cause set changes all the reference if nothing else is especified 
  }
  useEffect(function() {
    const id = setInterval(function log() {
      let data =[...element];
      let sumTb = 0;
      let sumTn = 0;
      element.forEach((elements,index)=>{
        const sum = Object.values(elements.time).reduce((accumulator, value) => {
          return accumulator + Number(value);
        }, 0)
        const tm = Math.round((sum/(Object.values(elements.time).length)) * 100) / 100;
        const tn = Math.round((tm*(elements.ritmo/100)) * 100) / 100;
        const tb = Math.round(((tn/elements.frequencia)*(1+(elements.fadiga/100))) * 100) / 100;
        data[index].tempoBase = tb;
        data[index].tempoControle = tm;
        data[index].tempoNormal = tn;
        sumTb = sumTb + tb;
      })
      setElement(data)
      sumTn = sumTb*(1+(state.concessao/100))
      setState(prevState =>({...prevState, tempoBasico:(Math.round((sumTb) * 100) / 100), tempoNormal:(Math.round((sumTn) * 100) / 100)}))
    }, 500);
    return function() {
      clearInterval(id);
    }
  }, [element,state.concessao]);

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
      </div>
      <div className="form-holder">
          <h1 className="title">Tempo Padrão</h1>
          <div className="input-times-holder">
            <label> 
            Tempo Base Total: 
            <input
            type="number"
            readOnly
            disabled="disabled"
            value={state.tempoBasico}
            className="input-percentage-form"
            />
          </label>
          <label> 
            Tempo Normal Total: 
            <input
            type="number"
            readOnly
            disabled="disabled"
            value={state.tempoNormal}
            className="input-percentage-form"
            />
          </label>
            <label> 
            Concessão(%): 
            <input
            type="number"
            name="concessao"
            value={state.concessao}
            onChange={handleChange}
            className="input-percentage-form"
            />
          </label>
          </div>
          <button className="submit-button medium-btn" onClick={handleSubmit}>submit</button>
          </div>
    </div>
  );
}

export default Cadastro;

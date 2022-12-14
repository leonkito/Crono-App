import React, { useState, useEffect} from "react";

const Elemento = () => {
  const[state, setState] = useState({
    element:'',
    ritmo:100,
    frequencia:1,
    fadiga:14.9,
    tempoControle:0,
    tempoNormal:0,
    tempoBase:0,
  });
  // const[show,setShow] = useState(true);
  const[time,setTime] = useState([""]);
  const[ciclos,setCiclos] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = ({target:{name,value}})=>{
    setState(prevState =>({...prevState,[name]:value}));
  }

  const handleTime = ({target:{name,value}})=>{
      setTime(prevState =>({...prevState,[name]:value}));      
  }

  useEffect(function() {
    const id = setInterval(function log() {
      const sum = Object.values(time).reduce((accumulator, value) => {
        return accumulator + Number(value);
      }, 0);
      const tm = Number(Math.round((sum/(Object.values(time).length)) * 100) / 100);
      const tn = Number(Math.round((tm*(state.ritmo/100)) * 100) / 100);
      const tb = Math.round(((tn/state.frequencia)*(1+(state.fadiga/100))) * 100) / 100;
      setState(prevState =>({...prevState,tempoControle:Number(tm), tempoNormal:Number(tn), tempoBase:Number(tb)}))
    }, 300);
    return function() {
      clearInterval(id);
    }
  }, [time, state.fadiga, state.ritmo, state.frequencia]);
  // useEffect roda apenas quando o objeto ou variavel muda, conforme [time]

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-holder">
        <label> 
          Descrição da Tarefa: 
          <input
          type="text"
          placeholder="Elemento"
          value={state.element}
          className="input-form"
          name="element"
          onChange={handleChange}
          />
        </label>
      </div>
      <label>Ciclos:
      <div className="input-time-holder">
        {[...Array(ciclos)].map((e, i) =><input placeholder={`t${i+1}`} name={i} key={i} type="number" value={time[i]} onChange={handleTime} className="input-time-form"></input>)}
      </div>
      <button className="submit-button small-btn" onClick={() =>{setCiclos(ciclos+10)}}>+ Tempos</button>
      </label>      
      <div className="input-times-holder">
        <label> 
          Ritmo(em %): 
          <input
          type="number"
          placeholder="Ritmo"
          value={state.ritmo}
          className="input-percentage-form"
          name="ritmo"
          onChange={handleChange}
          />
        </label>
        <label> 
          Frequência: 
          <input
          type="number"
          placeholder="Frequência"
          value={state.frequencia}
          className="input-percentage-form"
          name="frequencia"
          onChange={handleChange}
          />
        </label>
        <label> 
          Fadiga(em %): 
          <input
            type="number"
            placeholder="Fadiga"
            value={state.fadiga}
            className="input-percentage-form"
            name="fadiga"
            onChange={handleChange}
          />
        </label>
        <label> 
          Tempo Médio: 
          <input
          type="number"
          readOnly
          disabled="disabled"
          value={state.tempoControle}
          className="input-percentage-form"
          />
        </label>
        <label> 
          Tempo Normal: 
          <input
          type="number"
          readOnly
          disabled="disabled"
          value={state.tempoNormal}
          className="input-percentage-form"
          />
        </label>
        <label> 
          Tempo Base: 
          <input
          type="number"
          readOnly
          disabled="disabled"
          value={state.tempoBase}
          className="input-percentage-form"
          />
        </label>
      </div>
      </form>
  );
}

export default Elemento
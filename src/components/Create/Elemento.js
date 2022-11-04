import React, { useState, useEffect} from "react";

const Elemento = ({handleElement, element}) => {
  // const[show,setShow] = useState(true);
  const[time,setTime] = useState([""]);
  const[ciclos,setCiclos] = useState(10);

  const handleTime = ({target:{name,value}})=>{
      setTime(prevState =>({...prevState,[name]:value}));      
  }

  useEffect(function() {
    const id = setInterval(function log() {
      const sum = Object.values(time).reduce((accumulator, value) => {
        return accumulator + Number(value);
      }, 0);
      const tm = Number(Math.round((sum/(Object.values(time).length)) * 100) / 100);
      const tn = Number(Math.round((tm*(element.ritmo/100)) * 100) / 100);
      const tb = Math.round(((tn/element.frequencia)*(1+(element.fadiga/100))) * 100) / 100;
      // setState(prevState =>({...prevState,tempoControle:Number(tm), tempoNormal:Number(tn), tempoBase:Number(tb),tempoCiclos:time}))
    }, 300);
    return function() {
      clearInterval(id);
    }
  }, [time, element.fadiga, element.ritmo, element.frequencia]);
  // useEffect roda apenas quando o objeto ou variavel muda, conforme [time]

  return (
    <>
      <div className="input-holder">
        <label> 
          Descrição da Tarefa: 
          <input
          type="text"
          placeholder="Elemento"
          value={element.elemento}
          className="input-form"
          name="elemento"
          onChange={handleElement}
          />
        </label>
      </div>
      <label>Ciclos:
      <div className="input-time-holder">
        {[...Array(ciclos)].map((e, i) =><input placeholder={`t${i+1}`} name={i} key={i} type="number" value={time[i] || ''} onChange={handleTime} className="input-time-form"></input>)}
      </div>
      <button className="submit-button small-btn" onClick={() =>{setCiclos(ciclos+10)}}>+ Tempos</button>
      </label>      
      <div className="input-times-holder">
        <label> 
          Ritmo(em %): 
          <input
          type="number"
          placeholder="Ritmo"
          value={element.ritmo}
          className="input-percentage-form"
          name="ritmo"
          onChange={handleElement}
          />
        </label>
        <label> 
          Frequência: 
          <input
          type="number"
          placeholder="Frequência"
          value={element.frequencia}
          className="input-percentage-form"
          name="frequencia"
          onChange={handleElement}
          />
        </label>
        <label> 
          Fadiga(em %): 
          <input
            type="number"
            placeholder="Fadiga"
            value={element.fadiga}
            className="input-percentage-form"
            name="fadiga"
            onChange={handleElement}
          />
        </label>
        <label> 
          Tempo Médio: 
          <input
          type="number"
          readOnly
          disabled="disabled"
          value={element.tempoControle}
          className="input-percentage-form"
          />
        </label>
        <label> 
          Tempo Normal: 
          <input
          type="number"
          readOnly
          disabled="disabled"
          value={element.tempoNormal}
          className="input-percentage-form"
          />
        </label>
        <label> 
          Tempo Base: 
          <input
          type="number"
          readOnly
          disabled="disabled"
          value={element.tempoBase}
          className="input-percentage-form"
          />
        </label>
      </div>
      </>
  );
}

export default Elemento
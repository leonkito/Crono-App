import React, { useState, useEffect} from "react";

const Elemento = () => {
  const[{element, ritmo,frequencia,fadiga}, setState] = useState({
    element:'',
    ritmo:100,
    frequencia:1,
    fadiga:14.9
  });
  const[show,setShow] = useState(true);
  const[time,setTime] = useState([""]);
  const[ciclos,setCiclos] = useState(5);
  const[tempoControle,setTempoControle] = useState(0);
  const[tempoNormal,setTempoNormal] = useState(0);
  const[tempoBase,setTempoBase] = useState(0);

  
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
      const tm = Math.round((sum/(Object.values(time).length)) * 100) / 100;
      const tn = Math.round((tm/(ritmo/100)) * 100) / 100;
      const tb = Math.round(((tn/frequencia)*(1+(fadiga/100))) * 100) / 100;
      setTempoControle(tm);
      setTempoNormal(tn);
      setTempoBase(tb)
    }, 300);
    return function() {
      clearInterval(id);
    }
  }, [time, fadiga, ritmo, frequencia]);
  // useEffect roda apenas quando o objeto ou variavel muda, conforme [time]

  return (
    <form onSubmit={handleSubmit}>
      {show ? (
      <>
      <div className="input-holder">
        <label> 
          Descrição da Tarefa: 
          <input
          type="text"
          placeholder="Elemento"
          value={element}
          className="input-form"
          name="element"
          onChange={handleChange}
          />
        </label>
      </div>
      <label>Ciclos:
      <div className="input-time-holder">
        {[...Array(ciclos)].map((e, i) =><input placeholder={`t${i+1}`}name={i} key={i} type="number" value={time[i]} onChange={handleTime} className="input-time-form"></input>)}
      </div>
      <button className="submit-button" onClick={() =>{setCiclos(ciclos+5)}}>+ Tempos</button>
      </label>
      <div className="input-percentage-holder">
        <label> 
          Ritmo(em %): 
          <input
          type="number"
          placeholder="Ritmo"
          value={ritmo}
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
          value={frequencia}
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
          value={fadiga}
          className="input-percentage-form"
          name="fadiga"
          onChange={handleChange}
          />
        </label>
      </div>
      <div className="input-percentage-holder">
        <label> 
          Tempo Médio: 
          <input
          type="number"
          readOnly
          value={tempoControle}
          className="input-percentage-form"
          />
        </label>
        <label> 
          Tempo Normal: 
          <input
          type="number"
          readOnly
          value={tempoNormal}
          className="input-percentage-form"
          />
        </label>
        <label> 
          Tempo Base: 
          <input
          type="number"
          readOnly
          value={tempoBase}
          className="input-percentage-form"
          />
        </label>
      </div>
      </>
      ) : (
      <button className="submit-button" onClick={()=>{setShow(show === true ? false : true)}}>Novo Elemento</button>
      )}
      </form>
  );
}

export default Elemento
import React, { useState, useEffect} from "react";

const Element = () => {
  const[{element, ritmo,frequencia,fadiga}, setState] = useState({element:'',ritmo:100,frequencia:1,fadiga:14.9});
  const[time,setTime] = useState([""]);
  const[ciclos,setCiclos] = useState(5);
  const[tempoControle,setTempoControle] = useState("");
  const[tempoNormal,setTempoNormal] = useState("");
  const[tempoBase,setTempoBase] = useState("");
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
      const media=sum/(Object.values(time).length);
      setTempoControle(media);
      const tn = media/(ritmo/100)
      const tb = (tn/frequencia)*(1+(fadiga/100))
      setTempoNormal(tn);
      setTempoBase(tb)
    }, 1500);
    return function() {
      clearInterval(id);
    }
  }, [time, fadiga, ritmo, frequencia]);
  // useEffect roda apenas quando o objeto ou variavel muda, conforme [time]

  const handleCiclos = () =>{
    setCiclos(ciclos+5)
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button className="submit-button" onClick={handleCiclos}>+ Tempos</button>
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
  
    </form>
  );
}

export default Element
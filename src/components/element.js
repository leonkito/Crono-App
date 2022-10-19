import React, { useState, useEffect} from "react";


const Element = () => {
  const[{element}, setState] = useState({element:''});
  const[time,setTime] = useState([""]);
  const[ciclos,setCiclos] = useState(5);
  const[tempoControle,settempoControle] = useState("");
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
      settempoControle(sum)
    }, 2000);
    return function() {
      clearInterval(id);
    }
  }, [time]);
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
        {[...Array(ciclos)].map((e, i) =><input name={i} key={i} type="number" value={time[i]} onChange={handleTime} className="input-time-form"></input>)}
      </div>
      <div>{tempoControle}</div>
      <button className="double-button submit-button" onClick={handleCiclos}>Adicionar mais ciclos</button>
      </label>      
    </form>
  );
}

export default Element
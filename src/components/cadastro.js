import React,{ useState, setState} from "react";
import Element from './element';

const Cadastro = () => {
  const[times,setTimes] = useState(1);
  const handleClick=()=>{
    setTimes(times+1)
  }
  const handleChange = ()=>{
    console.log()
  }
  return (
    <div className="form-holder">
    <h1 className="title">Elementos</h1>
      {[...Array(times)].map((e, i) => <>
        <h2>Elemento {i+1}</h2>
        <Element key={i} onChange={handleChange}/>
        </>
          )}
      <button className="submit-button" onClick={handleClick}>Novo Elemento</button>
    </div>
  );
}

export default Cadastro;

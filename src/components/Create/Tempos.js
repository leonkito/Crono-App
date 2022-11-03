import React,{ useState} from "react";
import Elemento from './Elemento';
import Divider from '../Functional/Divider';

const Tempos = () => {
  const[times,setTimes] = useState(1);
  const handleClick=()=>{
    setTimes(times+1)
  }

  const handleChange = ()=>{
    console.log()
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
    <div className="form-holder">
        <h1 className="title">Elementos</h1>
          {[...Array(times)].map((e, i) =>
            <>
              <Divider>{`Elemento ${i+1}`}</Divider>
              <Elemento key={i} onChange={handleChange}/>
            </>
          )}
          <button className="submit-button medium-btn" onClick={handleClick}>Adicionar Elemento</button>
          <button className="submit-button medium-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Tempos;
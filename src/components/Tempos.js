import React,{ useState} from "react";
import Elemento from './Elemento';
import Divider from './Divider';

const Tempos = () => {
  const[show,setShow] = useState([true])
  const[times,setTimes] = useState(1);
  const handleClick=()=>{
    setTimes(times+1)
    setShow(show => [...show, true])
    setShow(show[times-1] = false)
  }
  const handleChange = ()=>{
    console.log()
  }

  return (
    <div className="form-holder">
    <h1 className="title">Elementos</h1>
      {[...Array(times)].map((e, i) =>
      show ? (
      <>
        <Divider>{`Elemento ${i+1}`}</Divider>
        <Elemento key={i} onChange={handleChange}/>
      </>
      ):(
      <Divider>{`Elemento ${i+1}`}</Divider>
      ))}
      <button className="submit-button" onClick={handleClick}>Novo Elemento</button>
    </div>
  );
}

export default Tempos;

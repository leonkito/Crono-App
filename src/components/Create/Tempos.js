import React,{ useState} from "react";
import Elemento from './Elemento';
import Divider from '../Functional/Divider';

const Tempos = () => {
  // const[show,setShow] = useState([true])
  const[times,setTimes] = useState(1);
  const handleClick=()=>{
    setTimes(times+1)
    // const temp = show.slice();
    // temp.push(true);
    // temp[times-1] = false;
    // setShow(temp)
  }

  const handleChange = ()=>{
    console.log()
  }

  // const showAll=()=>{
  //   const temp = show.map((e) => true)
  //   setShow(temp)
  // }

  return (
    <div className="form-holder">
    <h1 className="title">Elementos</h1>
      {[...Array(times)].map((e, i) =>
      // show[i] ? (
        <>
          <Divider>{`Elemento ${i+1}`}</Divider>
          <Elemento key={i} onChange={handleChange}/>
        </>
      // ):(
      // <Divider>{`Elemento ${i+1}`}</Divider>
      // )
      )}
      {/* <button className="submit-button" onClick={showAll}>show All</button> */}
      <button className="submit-button medium-btn" onClick={handleClick}>Adicionar Elemento</button>
    </div>
  );
}

export default Tempos;

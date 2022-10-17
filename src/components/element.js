import React, { useState } from "react";
import database from './config';
import { ref, set } from "firebase/database";

const Element = () => {
    const[{id,element}, setState] = useState({id:1,element:''})
    
    const handleSubmit = (e) => {
      e.preventDefault();
      set(ref(database, 'tempos/'+ 30133), {
        id : id,
        element: element,
        //preciso passar o id como props
      });
      alert('Information submitted')
    }
    const handleChange = ({target:{name,value}})=>{
      setState(prevState =>({...prevState,[name]:value}));
    }

return (

    <form onSubmit={handleSubmit}>
      <div className="input-holder">
        <label> 
          Descrição da Tarefa {id}: 
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
      <input className="submit-button"type="submit" value="Submit" />
    </form>
  );
}

export default Element
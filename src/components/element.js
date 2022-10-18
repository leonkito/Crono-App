import React, { useState, useEffect, setState} from "react";


const Element = (props) => {
  const[{element}, setState] = useState({element:''})

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // React.useEffect(() => {
  //   if (props.onChange) {
  //     props.onChange(element)
  //   }
  // })
  const handleChange = ({target:{name,value}})=>{
    setState(prevState =>({...prevState,[name]:value}));
    props.onChange();
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
    </form>
  );
}

export default Element
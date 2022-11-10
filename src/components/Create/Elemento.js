import React from "react";

const Elemento = ({handleElementChange, element}) => {
  return (
    <>
      <div className="input-holder">
        <label>
          Descrição da Tarefa:
          <input
          type="text"
          value={element.elemento}
          className="input-form"
          name="elemento"
          id='elemento'
          onChange={handleElementChange}
          />
        </label>
      </div>
  
      <div className="input-times-holder">
        <label> 
          Ritmo(%): 
          <input
          type="number"
          value={element.ritmo}
          className="input-percentage-form"
          name="ritmo"
          onChange={handleElementChange}
          />
        </label>
        <label> 
          Frequência: 
          <input
          type="number"
          value={element.frequencia}
          className="input-percentage-form"
          name="frequencia"
          onChange={handleElementChange}
          />
        </label>
        <label> 
          Fadiga(%): 
          <input
            type="number"
            value={element.fadiga}
            className="input-percentage-form"
            name="fadiga"
            onChange={handleElementChange}
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
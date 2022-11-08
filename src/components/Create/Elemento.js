import React from "react";

const Elemento = ({handleElementChange, element}) => {
  return (
    <>
      <div className="input-holder">
        <label> 
          Descrição da Tarefa: 
          <input
          type="text"
          placeholder="Elemento"
          value={element.elemento}
          className="input-form"
          name="elemento"
          onChange={handleElementChange}
          />
        </label>
      </div>
  
      <div className="input-times-holder">
        <label> 
          Ritmo(%): 
          <input
          type="number"
          placeholder="Ritmo"
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
          placeholder="Frequência"
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
            placeholder="Fadiga"
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
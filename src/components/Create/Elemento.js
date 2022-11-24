import React from "react";

const Elemento = ({handleElementChange, element}) => {
  return (
    <>
      <div className="input-box">
        <label htmlFor="elemento">Descrição da Tarefa:</label>
        <textarea
          type="text"
          value={element.elemento}
          className="input-form"
          name="elemento"
          id='elemento'
          onChange={handleElementChange}
        />
      </div>
      <div className="group-form">
        <div className="input-box">
          <label htmlFor="ritmo">Ritmo(%):</label>
          <input
            type="number"
            value={element.ritmo}
            className="input-form"
            name="ritmo"
            id="ritmo"
            onChange={handleElementChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="frequencia">Frequência:</label>
          <input
            type="number"
            value={element.frequencia}
            className="input-form"
            name="frequencia"
            id="frequencia"
            onChange={handleElementChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="fadiga">Fadiga(%):</label>
          <input
            type="number"
            value={element.fadiga}
            className="input-form"
            name="fadiga"
            id="fadiga"
            onChange={handleElementChange}
          />
        </div>
        <div className="input-box">
          <label>Tempo Médio:</label>
          <input
            readOnly
            disabled="disabled"
            value={element.tempoControle}
            className="input-form"
          />
        </div>
        <div className="input-box">
          <label>Tempo Normal:</label>
          <input
            readOnly
            disabled="disabled"
            value={element.tempoNormal}
            className="input-form"
          />
        </div>
        <div className="input-box">
          <label>Tempo Base:</label>
          <input
            readOnly
            disabled="disabled"
            value={element.tempoBase}
            className="input-form"
          />
        </div>
      </div>
    </>
  );
}

export default Elemento
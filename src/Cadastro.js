import React, { useState,useEffect } from "react";
import Informacoes from './components/Create/Informacoes';
import {ref, set } from "firebase/database";
// import Tempos from './components/Create/Tempos'
import Elemento from './components/Create/Elemento';
import Divider from './components/Functional/Divider';
import databaseConfig from './components/Functional/databaseConfig';

const Cadastro = () => {
  const[state, setState] = useState({
    codigo:'',
    operacao:'',
    revisao:'',
    turno:'1 turno',
    cronoanalista:'',
    centroTrabalho:'',
    data:'',
    observacao:'',
    concessao:5,
    tempoNormal:'',
    tempoBasico:''
  })
  const[element,setElement] = useState([{
    elemento:'',
    ritmo:100,
    frequencia:1,
    fadiga:10,
    tempoControle:0,
    tempoNormal:0,
    tempoBase:0,
    ciclos:10,
    time:[""],
  }])

  const addElement =()=>{
    let newElement = {
      elemento:'',
      ritmo:100,
      frequencia:1,
      fadiga:10,
      tempoControle:0,
      tempoNormal:0,
      tempoBase:0,
      ciclos:10,
      time:[""],
    }
    setElement ([...element,newElement])
  }
  const removeElement = () =>{
    let newElement  = [...element]
    newElement.pop()
    setElement(newElement)
  }
  const handleChange = ({target:{name, value}})=>{
    setState(prevState =>({...prevState, [name]:value}));
  }

  const handleElementChange = (index, event)=>{
    let data = [...element];
    data[index][event.target.name] = event.target.value;
    setElement(data)
  }

  const handleTime = (index,event,i) =>{
    let data = [...element];
    data[index][event.target.name][i] = event.target.value;
    setElement(data)
  }
  const handleSubmit = () => {
    if (state.codigo !== '' && state.operacao !== '' && state.revisao !== ''){
      let timeRef = ref(databaseConfig, `tempos/${state.codigo}/${state.operacao}/${state.revisao}`)
      set(timeRef,{
        cronoanalista : state.cronoanalista,
        data: state.data,
        observacao: state.observacao,
        concessao: state.concessao,
        tempoNormal: state.tempoNormal,
        tempoBasico: state.tempoBasico,
      })
      element.forEach((elements,index)=>{
        if (elements.elemento !== '' && elements.tempoBase !== ''){
          timeRef = ref(databaseConfig, `tempos/${state.codigo}/${state.operacao}/${state.revisao}/elemento ${index +1}`)
          set(timeRef,{
            descricao: elements.elemento,
            ritmo: elements.ritmo,
            frequencia: elements.frequencia,
            fadiga: elements.fadiga,
            tempoControle: elements.tempoControle,
            tempoNormal: elements.tempoNormal,
            TempoBase: elements.tempoBase,
            Ciclos: elements.time,
          })
          console.log(`elemento ${index+1} salvo`)
        }else{
          console.log(`elemento ${index+1} não salvo`)
        }
      })
      console.log('Saved')
    } else{
      console.log('info missing')
    }
  }
  useEffect(function() {
    const id = setInterval(function log() {
      let data =[...element];
      let sumTb = 0;
      let sumTn = 0;
      element.forEach((elements,index)=>{
        const sum = Object.values(elements.time).reduce((accumulator, value) => {
          return accumulator + Number(value);
        }, 0)
        const tm = Math.round((sum/(Object.values(elements.time).length)) * 100) / 100;
        const tn = Math.round((tm*(elements.ritmo/100)) * 100) / 100;
        const tb = Math.round(((tn/elements.frequencia)*(1+(elements.fadiga/100))) * 100) / 100;
        data[index].tempoBase = tb;
        data[index].tempoControle = tm;
        data[index].tempoNormal = tn;
        sumTb = sumTb + tb;
      })
      setElement(data)
      sumTn = sumTb*(1+(state.concessao/100))
      setState(prevState =>({...prevState, tempoBasico:(Math.round((sumTb) * 100) / 100), tempoNormal:(Math.round((sumTn) * 100) / 100)}))
    }, 500);
    return function() {
      clearInterval(id);
    }
  }, [element,state.concessao]);

  // const[ciclos,setCiclos] = useState(10);

  const handleCiclos = (index) => (e) => {
    e.preventDefault();
    let data = [...element];
    data[index].ciclos = data[index].ciclos + 10
    setElement(data)
  }
  return (
    <div className="main">
      <Informacoes handleChange={handleChange} state={state}/>
      <div className="form-holder">
        <h1 className="title">Elementos</h1>
          {element.map((elements,index)=>
          <div key={index}>
            <Divider>{`Elemento ${index+1}`}</Divider>
            <Elemento element={elements} handleElementChange={event => handleElementChange(index, event)}/>
            <div className="input-box">
              <label>Ciclos:</label>
              <div className="group-form-lines group-form">
                {[...Array(elements.ciclos)].map((e, i) =><input key={`t${i}`} placeholder={`t${i+1}`} name="time" value={elements.time[i]|| ""} onChange={event => handleTime(index, event,i)} className="input-form input-time-form"></input>)}
              </div>
              <div className="center">
                <button className="submit-button small-btn" onClick={handleCiclos(index)}>+ Tempos</button>
              </div>
            </div>
          </div>
          )}
        <div className="center">
        <button className="submit-button small-btn" onClick={removeElement}>Remover Elemento</button>
          <button className="submit-button small-btn" onClick={addElement}>Adicionar Elemento</button>
        </div>
      </div>
      <div className="form-holder">
        <h1 className="title">Tempo Padrão - Resumo</h1>
        <div className="space-around group-form">
          <div className="input-box">
            <label htmlFor="tem2">Tempo Base Total:</label>
            <input
              type="number"
              readOnly
              id="tem2"
              disabled="disabled"
              value={state.tempoBasico}
              className="input-form"
            />
          </div>
          <div className="input-box">
            <label htmlFor="tem1">Tempo Normal Total:</label>
            <input
              readOnly
              id="tem1"
              disabled="disabled"
              value={state.tempoNormal}
              className="input-form"
            />
          </div>
          <div className="input-box">
            <label htmlFor="con1">Concessão(%):</label>
              <input
                type="number"
                name="concessao"
                id="con1"
                value={state.concessao}
                onChange={handleChange}
                className="input-form"
              />
          </div>
        </div>
        <div className="center">
          <button className="submit-button small-btn" onClick={handleSubmit}>Salvar</button>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;

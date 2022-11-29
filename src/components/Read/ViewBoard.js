//Todo Get a picture of all the db and display all the codes registered in boxes 
//containing the op registered and the review numbers

import databaseConfig from '../Functional/databaseConfig';
import {React, useEffect, useState} from "react";
import {ref,  onValue} from "firebase/database";

const ViewBoard = () =>{
    const timeRef = ref(databaseConfig, `tempos/`);
    const[time,setTime]= useState(10)
    const[produtos,setProdutos] = useState([])
    const[selected,setSelected] = useState({
        produto:'',
        operacao: '',
        revisao:'',
    })
    const[dbData,setDbData] = useState('')

    const getData = () =>{
        onValue(timeRef, (snapshot) => {
            setDbData(snapshot.val())
            const product = [];
            Object.entries(dbData).forEach(([key,val])=>{
                let newProduct = {
                    codigo:key,
                    operacoes:[],
                }
                Object.entries(val).forEach(([key,val])=>{
                    let operacao = {
                        operacao: key,
                        revisao:[],
                    }
                    Object.entries(val).forEach(([key])=>{
                        operacao.revisao.push(key)
                    })
                    newProduct.operacoes.push(operacao)
                })
                product.push(newProduct)
            })
            setProdutos(product)
        })
        console.log(produtos)
    }
    useEffect(() => {
        getData();
      }, [time]);
    // const searchData = ()=>{

    // }
    return(
        <div className="main">
            <h1 className="title">Dashboard</h1>
            {produtos.map((produto,index)=>
                <div className="card">
                    <div key={index}>{produto.codigo}</div>
                    {produto.operacoes.map((op)=>
                        <>
                            <div>{op.operacao}</div>
                            {op.revisao.map((rev)=>
                                <div onClick={() => setSelected({...selected,produto: produto.codigo,operacao:op.operacao, revisao: rev})}>Revisão: {rev}</div>
                            )}
                        </>
                    )}
                </div>                  
            )}
            <button className="submit-button small-btn" onClick={() => setTime(time + 5)}>+ Tempos</button>
            <div>Produto: {selected.produto}</div>
            <div>Operação: {selected.operacao}</div>
            <div>Revisão: {selected.revisao}</div>
        </div>
    )
}

export default ViewBoard
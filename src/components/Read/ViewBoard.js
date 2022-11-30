//Todo Get a picture of all the db and display all the codes registered in boxes 
//containing the op registered and the review numbers

import databaseConfig from '../Functional/databaseConfig';
import {React,useEffect, useState, useMemo, useRef} from "react";
import { ref, get } from "firebase/database";

const ViewBoard = () =>{
    const dataFetchedRef = useRef(false);
    const[produtos,setProdutos] = useState([])
    const[selected,setSelected] = useState({
        produto:'',
        operacao: '',
        revisao:'',
    })
    const[dbData,setDbData] = useState('')
    const dbRef = ref(databaseConfig, `tempos/`);
    const getData = () =>{
        get(dbRef).then((snapshot) => {
            if (snapshot.exists()) {
                setDbData(snapshot.val());
                console.log('oi')
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
        })
    }
    // 

    const makeData = () =>{
        const product = [];
        console.log(dbData)
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
    }
    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        getData();
    },[]);

    useMemo(() => {
        makeData()
    }, [dbData]);
    const[panel,setPanel]=useState(<p>there is nothing here</p>)
    const searchData = ()=>{
        console.log(selected)
        const info = Object.entries(selected).map((val)=>{
                console.log('this is the key:' + val[0])
                console.log('this is the val:' + val[1])
        })

        setPanel(info)
    }
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
                                // <div onClick={() => setSelected({...selected,produto: produto.codigo,operacao:op.operacao, revisao: rev})}>Revisão: {rev}</div>
                                <div onClick={() => setSelected(dbData[produto.codigo][op.operacao][rev])}>Revisão: {rev}</div>
                            
                            )}
                        </>
                    )}
                </div>                  
            )}
            <button className="submit-button small-btn" onClick={searchData}>+ Tempos</button>
            
            <div>{panel}</div>
        </div>
    )
}

export default ViewBoard
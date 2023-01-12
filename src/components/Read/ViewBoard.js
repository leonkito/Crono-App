//Todo Get a picture of all the db and display all the codes registered in boxes 
//containing the op registered and the review numbers

import databaseConfig from '../Functional/databaseConfig';
import { React, useEffect, useState, useMemo, useRef } from "react";
import { ref, get } from "firebase/database";

const ViewBoard = () => {
    const dataFetchedRef = useRef(false);
    const [produtos, setProdutos] = useState([])
    const [selected, setSelected] = useState({
        produto: '',
        operacao: '',
        revisao: '',
    })
    const [dbData, setDbData] = useState('')
    const dbRef = ref(databaseConfig, `tempos/`);
    const getData = () => {
        get(dbRef).then((snapshot) => {
            if (snapshot.exists()) {
                setDbData(snapshot.val());
                console.log('Data retrieved from Database')
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        })
    }
    // 

    const makeData = () => {
        const product = [];
        Object.entries(dbData).forEach(([key, val]) => {
            let newProduct = {
                codigo: key,
                operacoes: [],
            }
            Object.entries(val).forEach(([key, val]) => {
                let operacao = {
                    operacao: key,
                    revisao: [],
                }
                Object.entries(val).forEach(([key]) => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (selected.produto !== ''){
         searchData()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);

    useMemo(() => {
        makeData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dbData]);
    
    const [panel, setPanel] = useState('')
    const searchData = () => {
        const info = Object.entries(selected).map((val) => {
            if (typeof val[1] !== 'object') {
                return (
                    <p>{val[0]}:{val[1]}</p>
                )
            } else {
                return (
                    <>
                        <p>{val[0]}</p>
                        {Object.entries(val[1]).map((elemento) => {
                            if (elemento[0] === 'Ciclos') {
                                return (
                                    <>
                                        {Object.entries(elemento[1]).map((tempo) => {
                                            return (
                                                <p>t{tempo[0]}: {tempo[1]}</p>
                                            )
                                        })}
                                    </>
                                )
                            } else {
                                return (
                                    <p>{elemento[0]}:{elemento[1]}</p>
                                )
                            }
                        })}
                    </>
                )
            }
        })
        setPanel(info)
    }
    const handleClick = ()=>{
        console.log(dbData)
    }
    return (
        <div className="main">
            <h1 className="title">Dashboard</h1>
            {produtos.map((produto, index) =>
                <div className="card">
                    <div key={index}>{produto.codigo}</div>
                    {produto.operacoes.map((op) =>
                        <>
                            <div>{op.operacao}</div>
                            {op.revisao.map((rev) =>
                                <div className="flexbox-sided">
                                    <div>Revisão: {rev}</div>
                                    <button className='submit-button small-btn' onClick={() => setSelected(dbData[produto.codigo][op.operacao][rev])}>Buscar</button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}
             <button className='submit-button small-btn' onClick={handleClick}>Buscar</button>
            <div>{panel}</div>
        </div>
    )
}

export default ViewBoard
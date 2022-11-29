import databaseConfig from '../Functional/databaseConfig';
import {React, useEffect, useState} from "react";
import {ref,  onValue} from "firebase/database";

const Estrutura = () =>{
    const timeRef = ref(databaseConfig, `tempos/`);
    const[time,setTime]= useState(10)
    const[produtos,setProdutos] = useState([])

    
    onValue(timeRef, (snapshot) => {
        const dbDatatemp = snapshot.val();
    })
    useEffect(() => {
        onValue(timeRef, (snapshot) => {
            const dbDatatemp = snapshot.val();
            const product = [];
            Object.entries(dbDatatemp).map(([key,val])=>{
                let newProduct = {
                    codigo:key,
                    operacoes:[],
                }
                Object.entries(val).map(([key,val])=>{
                    let operacao = {
                        operacao: key,
                        revisao:[],
                    }
                    Object.entries(val).map(([key])=>{
                        operacao.revisao.push(key)
                    })
                    newProduct.operacoes.push(operacao)
                })
                product.push(newProduct)
            })
            setProdutos(product)
        })
        console.log(produtos)
      },[time]);
    return(
        <div className="main">
            <h1 className="title">Estrutura</h1>
            {produtos.map((produto,index)=>
                <div className="card">
                    <li key={index}>{produto.codigo}</li>
                </div>                  
            )}
            <button className="submit-button small-btn" onClick={() => setTime(time + 5)}>+ Tempos</button>
        </div>
    )
}

export default Estrutura
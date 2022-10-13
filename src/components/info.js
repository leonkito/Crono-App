import database from './config';
import {React, useState} from "react";
import {ref,  onValue} from "firebase/database";
const GetInfo = () =>{
    const [data,setData] = useState('')

    const handleClick =() =>{
        const starCountRef = ref(database, 'tempos/30133/01 - Preparação de Máteria-Prima');
        onValue(starCountRef, (snapshot) => {
          console.log(snapshot.val());
        });
    }

    return(
        <div onClick={handleClick} style={{width: 'auto', margin: 'auto'}}>click here: </div>
        
    )
}

export default GetInfo

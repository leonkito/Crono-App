//Todo Get a picture of all the db and display all the codes registered in boxes 
//containing the op registered and the review numbers

import databaseConfig from '../Functional/databaseConfig';
import {React, useEffect} from "react";
import {ref,  onValue} from "firebase/database";

const ViewBoard = () =>{
    const timeRef = ref(databaseConfig, `tempos/`);
    useEffect(() => {
        onValue(timeRef, (snapshot) => {
            const dbData = snapshot.val();
            console.log(dbData)
        })
      },[]);

    return(
        <div className="main">
            <h1 className="title">Dashboard</h1>
        </div>
    )
}

export default ViewBoard
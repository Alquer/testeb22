import React from "react";
import funcionarios from "../data/funcionarios";


export default (porps)=>{
 

    const lista = funcionarios.map((funcionarios)=>{
        return(
            <li key={funcionarios.id}> 
                {funcionarios.id} {funcionarios.nome}
            </li>
        )
    })

    return(

        <div>
            <ul>
                {lista}
            </ul>
        </div>

    )
}
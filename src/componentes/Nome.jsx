import React from "react";
import {useState} from 'react'

export default function Nome(){

const [nome, setNome] = useState('B22')
   
function trocarnome(nome){
    //alert('Trocar')
    setNome('Pedro')
}
    return(
        <>
        
            <h2>Olá: {nome} </h2>
            <button onClick={trocarnome}>Trocar Nome</button>
        
        </>
        )
}

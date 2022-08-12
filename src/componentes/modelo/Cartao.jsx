import React from "react";
import './modelo.css'

export default props => //=>função anonima
{
    const estilo = {
        backgroundColor: props.color || 'blue',
        borderColor: props.color || 'blue'
    }

    return (

        <div className='card' style={estilo}>
        <div className='title'>{props.titulo}</div>
        <div className='conteudo'>{props.children}</div>

        </div>
    )
}
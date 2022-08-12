import React from "react";

export default (props) =>{
    const min = props.min
    const max = props.max
   
    const aleatorio = parseInt/*Pega só a parte inteira do número*/(Math.random()* (max-min))+min


    return(
        <div>
            <h2>Valor aleatório</h2>
            <p><strong>Valor Mínimo:</strong>{min}</p>
            <p><strong>Valor Máximo:</strong>{max}</p>
            <p><strong>Valor Sorteado:</strong>{aleatorio}</p>

                                          
        
    
        
        
        </div>
    )
}
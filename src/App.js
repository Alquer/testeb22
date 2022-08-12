import React from 'react'
import Primeiro from './componentes/Primeiro'
import Comparametro from './componentes/Comparametro'
import Fragmento from './componentes/Fragmento'
import Cartao from './componentes/modelo/Cartao'
import Numeros from './componentes/Numeros'
import './app.css'
import Foto from './componentes/Foto'
import Imagem from './imagem/lua.png'
import ListaFuncionarios from './componentes/ListaFuncionarios'
import Nome from './componentes/Nome'
import Formulario from './componentes/Formulario'
import Tarefas from './componentes/Tarefa'

export default function App() {
     return (
          <div className='App'>
               <h1>Fundamentos React</h1>
          <div className='Cards'>
                    
              <Cartao titulo='Lista de tarefas' color='violet'>
                    <Tarefas/>
              </Cartao>
              
              <Cartao titulo='Manipulando Formulário' color='pink'>
               <Formulario/>
              </Cartao>
              
              <Cartao titulo='Nome' color='azure'>
               <Nome/>
              </Cartao>
              
              <Cartao titulo='Lista' color='brown'>
               <ListaFuncionarios/>
              </Cartao>
              
              <Cartao titulo='Iamgem em React' color='cyan'>
                    <Foto img={Imagem}/>
              </Cartao>
              
               <Cartao titulo='Primeiro componente React' color='
               yellow'>
                    <Primeiro/>
               </Cartao>

               <Cartao titulo='Número aleatórios' color='orange'>
                    <Numeros min={10} max={100} /> 
               </Cartao>

               <Cartao titulo='teste' color='green'>
                    <Comparametro titulo='Teste' subtitulo='teste'/>
               </Cartao>

               <Cartao titulo='Primeiro componente com porps' color='blue'>
                    <Comparametro titulo='Hoje é quarta-feira' subtitulo='03/08/2022'/>
               </Cartao>

               <Cartao titulo='Primeiro componente com props' color='purple'>
                    <Comparametro titulo='Aula de React' subtitulo='Parametros' />
               </Cartao>

               <Cartao titulo='Primeiro componentes com props' color='bleu'>
                    <Comparametro titulo='titulo teste'/>
               </Cartao>

               <Cartao titulo='Utilizando React.Fragment' color='Red'>
                    <Fragmento/>
               </Cartao>
                    
               </div>
          </div>

     )
}



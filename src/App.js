import React from 'react';
import './App.css'
import Square from './components/Square'
import Circle from './components/Circle';
import CapsLock from './components/CapsLock';
import Rectangle from './components/Rectangle';
import Triangle from './components/Triangle';
import Figure from './components/Figure';

function App() 
{
  return(    
    <>            
      <Figure type="triangulo" titulo="Triangulo" bg="yellow"/>
      <Figure type="square" titulo="Quadrado" bg="red"/>
      <Figure type="circle" titulo="Circulo" bg="blue"/>
      <Figure type="rectangle" titulo="Retangulo" bg="green"/>
    </>
    )
}
//usa o export para ficar acessivel
export default App;

import React from 'react';
import './App.css'
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

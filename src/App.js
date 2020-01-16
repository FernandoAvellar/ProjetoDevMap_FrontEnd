import React, { useState } from 'react';
import Header from './Header';

//Componente --> Função que retorna algum conteúdo tipo: HTML, CSS ou JavaScript
//Propiedade --> Informações que o componente pai passa para um componente filho.
//Estado --> Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  const [counter, setCounter] = useState(0);

  function incrementaContador() {
    setCounter(counter+1);
  }
  return (
    <>
      < Header title='Fernando' />
      <h1>Contador: {counter}</h1>
      <button onClick={incrementaContador}>Incrementar</button>
    </>
  );
}

export default App;

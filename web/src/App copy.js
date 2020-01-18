import React, { useState } from "react";

//COMPONENTE: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
//PROPRIEDADE: Informações que um componente PAI passa para um comente filho.
//ESTADO: Informações mantidas pelo componemte (Lembrar: Imutabilidade).

function App() {
  const [counter, setCounter] = useState(0);
  function incrementCounter() {
    setCounter(counter + 1);
  }
  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;

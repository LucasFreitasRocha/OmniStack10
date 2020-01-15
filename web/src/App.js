import React, {useState} from 'react';

import Head from './Head'
function App() {
  const [counter,setCounter] = useState(0);
  function incrementCounter(){
    setCounter(counter +1);
  }
  return (
    <>
      <Head title="Hello world component!" />
      <h1>Contador: {counter} </h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;

import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import GrandParent from './GrandParent';
import UseEffectExamples from './UseEffectExamples';
import ValueContext from './ValueContext';

function App() {
  const [hide, setHide] = useState(false);
  return (
    <>
      <input type="checkbox" onChange={() => setHide(!hide)} /> Hide
      {hide ? null : <UseEffectExamples></UseEffectExamples>}
      <ValueContext.Provider value={hide}>

        <GrandParent></GrandParent>
      </ValueContext.Provider>
    </>
  );
}

export default App;

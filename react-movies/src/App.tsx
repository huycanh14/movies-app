import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import UseEffectExamples from './UseEffectExamples';

function App() {
  const [hide, setHide] = useState(false);
  return (
    <>
      <input type="checkbox" onChange={() => setHide(!hide)} /> Hide
      {hide ? null : <UseEffectExamples></UseEffectExamples>}
    </>
  );
}

export default App;

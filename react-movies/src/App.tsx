import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import DisplayGride from './DisplayGride';
import ErrorBoundary from './ErrorBoundary';
import GrandParent from './GrandParent';
import UseEffectExamples from './UseEffectExamples';
import ValueContext from './ValueContext';

function App() {
  const [hide, setHide] = useState(false);
  const grades = [75, 95, -5, 55];
  return (
    <>
      {/* <input type="checkbox" onChange={() => setHide(!hide)} /> Hide
      {hide ? null : <UseEffectExamples></UseEffectExamples>}
      <ValueContext.Provider value={hide}>

        <GrandParent></GrandParent>
      </ValueContext.Provider> */}

      {grades.map((grade, index) =>
        <ErrorBoundary key={index}  errorUI={<h3>There was an error displaying the grade</h3>}>
          <DisplayGride grade={grade}/>
        </ErrorBoundary>
      )}
    </>
  );
}

export default App;
